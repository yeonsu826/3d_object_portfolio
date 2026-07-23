import { useState, useEffect, useRef, useCallback } from "react";

// 물리 연산에 필요한 데이터 확장
interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number; // X축 속도 (Velocity X)
  vy: number; // Y축 속도 (Velocity Y)
  color: string;
  size: number;
  life: number;     // 현재 수명
  maxLife: number;  // 최대 수명
}

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [isHiding, setIsHiding] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const [isShaking, setIsShaking] = useState(false);
  
  // 파티클들을 담을 상태
  const [particles, setParticles] = useState<Particle[]>([]);
  // requestAnimationFrame을 관리할 참조
  const requestRef = useRef<number>();

  const [difficulty, setDifficulty] = useState({ drop: 0.5, boost: 10, dropSpeed: 50 });
  const [netStatus, setNetStatus] = useState("CHECKING CONNECTION...");

  useEffect(() => {
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (connection) {
      const mbps = connection.downlink;
      if (mbps >= 10) {
        setDifficulty({ drop: 0.2, boost: 15, dropSpeed: 50 });
        setNetStatus(`UPLINK: ${mbps}Mbps (EASY MODE)`);
      } else if (mbps >= 2) {
        setDifficulty({ drop: 0.5, boost: 10, dropSpeed: 50 });
        setNetStatus(`UPLINK: ${mbps}Mbps (NORMAL MODE)`);
      } else {
        setDifficulty({ drop: 1, boost: 8, dropSpeed: 50 });
        setNetStatus(`UPLINK: ${mbps}Mbps (SURVIVAL MODE)`);
      }
    } else {
      setDifficulty({ drop: 0.5, boost: 10, dropSpeed: 50 });
      setNetStatus("UPLINK: UNKNOWN (STANDARD MODE)");
    }
  }, []);

  useEffect(() => {
    const decayInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        if (prev > 0) return Math.max(prev - difficulty.drop, 0); 
        return 0;
      });
    }, difficulty.dropSpeed); 
    return () => clearInterval(decayInterval);
  }, [difficulty]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setIsHiding(true), 500);
      setTimeout(() => setIsMounted(false), 1500);
    }
  }, [progress]);

  // 🌟 핵심: 물리 기반 파티클 업데이트 루프
  const updateParticles = useCallback(() => {
    setParticles((prevParticles) => {
      const activeParticles = prevParticles.filter(p => p.life > 0);
      
      return activeParticles.map(p => {
        // 공기 저항 (마찰력): 매 프레임 속도가 92%로 줄어듦 (숫자가 작을수록 뻑뻑함)
        let newVx = p.vx * 0.92;
        let newVy = p.vy * 0.92;
        
        // 중력: 아래쪽(Y축 +방향)으로 0.2씩 꾸준히 가속 (폭발 후 서서히 떨어짐)
        newVy += 0.2;

        return {
          ...p,
          x: p.x + newVx,
          y: p.y + newVy,
          vx: newVx,
          vy: newVy,
          life: p.life - 1, // 수명 감소
        };
      });
    });

    requestRef.current = requestAnimationFrame(updateParticles);
  }, []);

  // 컴포넌트 마운트 시 루프 시작
  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [updateParticles]);

  const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
    if (progress >= 100) return;

    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    // 🌟 터치 지점에서 폭죽 생성 (초기 폭발력만 설정해 줌)
    const newParticles: Particle[] = Array.from({ length: 30 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      // 초기 폭발 속도 (거리가 아님)
      const speed = Math.random() * 10 + 5; 
      const colors = ['#86efac', '#34d399', '#99f6e4', '#ffffff', '#22c55e'];
      const maxLife = Math.random() * 20 + 40; // 40~60 프레임 동안 생존

      return {
        id: Math.random(),
        x: clientX,
        y: clientY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 3 + 1.5, // 1.5 ~ 4.5px
        life: maxLife,
        maxLife: maxLife,
      };
    });

    setParticles(prev => [...prev, ...newParticles]);

    setProgress((prev) => Math.min(prev + difficulty.boost, 100));
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 50);
  };

  if (!isMounted) return null;

  return (
    <div
      onMouseDown={handleTap}
      onTouchStart={handleTap}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] text-white transition-all duration-700 select-none cursor-pointer touch-none overflow-hidden ${
        isHiding ? "opacity-0 pointer-events-none" : "opacity-100"
      } ${isShaking ? "translate-x-[4px] translate-y-[-2px] bg-[#121212]" : ""}`}
    >
      {/* 🌟 렌더링된 파티클 (자바스크립트가 직접 위치 조작) */}
      <div className="absolute inset-0 pointer-events-none z-[10000] overflow-hidden">
        {particles.map(p => {
          // 수명이 다해갈수록 서서히 투명해지고 작아짐
          const progress = p.life / p.maxLife;
          return (
            <div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: p.x,
                top: p.y,
                width: `${p.size * progress}px`,
                height: `${p.size * progress}px`,
                backgroundColor: p.color,
                opacity: progress,
                boxShadow: `0 0 ${p.size * 2}px ${p.size}px ${p.color}80`, // 은은한 글로우
                // transform 대신 직접 위치를 바꿔주므로 animation 불필요
              }}
            />
          );
        })}
      </div>

      {/* 텍스트 UI 영역 */}
      <div className="flex flex-col items-center w-full max-w-md px-8 relative z-10 pointer-events-none">
        <h1 className={`font-['Fraunces'] text-2xl md:text-4xl font-light tracking-widest mb-2 transition-all ${
          progress >= 100 ? "text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]" : ""
        }`}>
          {progress >= 100 ? "SYSTEM READY" : "TAP TO WAKE UP"}
        </h1>
        
        <div className="text-center mb-8">
          <p className={`text-xs transition-colors mb-1 ${
            progress > 0 && progress < 100 ? "text-green-400 font-bold" : "text-white/50"
          }`}>
            {progress >= 100 
              ? ">>> ENGINE ONLINE <<<" 
              : "화면을 연타해서 엔진을 깨워주세요!"}
          </p>
          <p className="text-[10px] text-blue-400/70 font-mono tracking-widest animate-pulse">
            {netStatus}
          </p>
        </div>

        <div className="w-full h-[2px] bg-white/20 mb-4 overflow-hidden relative">
          <div 
            className={`h-full transition-all ease-out ${progress > 80 ? 'bg-red-500 box-shadow-[0_0_10px_red]' : progress > 40 ? 'bg-orange-400' : 'bg-white'}`}
            style={{ width: `${progress}%`, transitionDuration: '75ms' }}
          />
        </div>

        <div className="w-full flex justify-between font-mono text-sm tracking-widest text-white/60">
          <span>{progress >= 100 ? "BOOST COMPLETE" : "MASH BUTTON!"}</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </div>
  );
}