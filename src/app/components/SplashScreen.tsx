import { useState, useEffect, useRef, useCallback } from "react";

// --- 타입 정의 ---
interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
  maxLife: number;
}

interface Target {
  id: number;
  x: number;
  y: number;
  size: number;
  life: number;
}

export default function SplashScreen() {
  // 🌟 핵심 추가 1: 브라우저 세션에 '이미 봤음' 기록이 있는지 확인해서 초기 상태 결정
  const [isMounted, setIsMounted] = useState(() => {
    return sessionStorage.getItem("hasSeenSplash") !== "true";
  });

  // 🌟 핵심 추가 2: 로딩창이 처음 뜨면 브라우저에 '봤음' 도장 찍기
  useEffect(() => {
    if (isMounted) {
      sessionStorage.setItem("hasSeenSplash", "true");
    }
  }, [isMounted]);

  const [progress, setProgress] = useState(0);
  const [isHiding, setIsHiding] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  
  const [bootText, setBootText] = useState("SYSTEM READY");
  const [particles, setParticles] = useState<Particle[]>([]);
  const [targets, setTargets] = useState<Target[]>([]);
  
  const isReadyRef = useRef(false);
  const requestRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [difficulty, setDifficulty] = useState({ autoAdd: 0.1, boost: 6, interval: 20 });
  const [netStatus, setNetStatus] = useState("CHECKING CONNECTION...");

  // 네트워크 속도 체크
  useEffect(() => {
    // 이미 로딩창을 본 상태면 네트워크 체크도 생략 (최적화)
    if (!isMounted) return;

    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (connection) {
      const mbps = connection.downlink;
      if (mbps >= 10) {
        setDifficulty({ autoAdd: 0.15, boost: 7.5, interval: 20 }); 
        setNetStatus(`UPLINK: ${mbps}Mbps (FAST)`);
      } else if (mbps >= 2) {
        setDifficulty({ autoAdd: 0.1, boost: 5, interval: 20 });  
        setNetStatus(`UPLINK: ${mbps}Mbps (NORMAL)`);
      } else {
        setDifficulty({ autoAdd: 0.05, boost: 4, interval: 20 });  
        setNetStatus(`UPLINK: ${mbps}Mbps (SLOW)`);
      }
    } else {
      setDifficulty({ autoAdd: 0.1, boost: 5, interval: 20 });
      setNetStatus("UPLINK: UNKNOWN (STANDARD)");
    }
  }, [isMounted]);

  // 자동 로딩 로직
  useEffect(() => {
    if (!isMounted) return;
    const autoProgress = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + difficulty.autoAdd; 
      });
    }, difficulty.interval); 
    return () => clearInterval(autoProgress);
  }, [difficulty, isMounted]);

  // 100% 도달 시 시퀀스 처리
  useEffect(() => {
    if (progress >= 100 && !isReadyRef.current) {
      isReadyRef.current = true;
      setTargets([]); 

      setTimeout(() => setBootText("MOUNTING 3D ENGINE..."), 600);
      setTimeout(() => setBootText("FETCHING ASSETS..."), 1400);
      setTimeout(() => setBootText("COMPILING SHADERS..."), 2200);
      setTimeout(() => setBootText("WELCOME TO MY SPACE."), 3000);

      setTimeout(() => setIsHiding(true), 3800);
      setTimeout(() => setIsMounted(false), 5000);
    }
  }, [progress]);

  // 타겟 생성 로직
  useEffect(() => {
    if (!isMounted) return;
    const targetInterval = setInterval(() => {
      if (isReadyRef.current || !containerRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      const newTarget: Target = {
        id: Date.now() + Math.random(),
        x: Math.random() * (width - 150) + 75,
        y: Math.random() * (height - 250) + 125,
        size: 40 + Math.random() * 40,
        life: 100, 
      };
      setTargets(prev => [...prev, newTarget]);
    }, 800); 

    const lifeInterval = setInterval(() => {
      if (isReadyRef.current) return;
      setTargets(prev => 
        prev.map(t => ({ ...t, life: t.life - 1.5 })) 
            .filter(t => t.life > 0)
      );
    }, 30);

    return () => {
      clearInterval(targetInterval);
      clearInterval(lifeInterval);
    };
  }, [isMounted]);

  // 파티클 물리 업데이트 로직
  const updateParticles = useCallback(() => {
    setParticles((prevParticles) => {
      const activeParticles = prevParticles.filter(p => p.life > 0);
      return activeParticles.map(p => {
        let newVx = p.vx * 0.92;
        let newVy = p.vy * 0.92;
        newVy += 0.2; 
        return { ...p, x: p.x + newVx, y: p.y + newVy, vx: newVx, vy: newVy, life: p.life - 1 };
      });
    });
    requestRef.current = requestAnimationFrame(updateParticles);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    requestRef.current = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [updateParticles, isMounted]);

  // 타겟 클릭 핸들러
  const handleTargetClick = (e: React.MouseEvent | React.TouchEvent, targetId: number) => {
    if (progress >= 100) return;
    e.stopPropagation(); 

    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    setTargets(prev => prev.filter(t => t.id !== targetId));

    const newParticles: Particle[] = Array.from({ length: 35 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 5; 
      const colors = ['#86efac', '#34d399', '#99f6e4', '#ffffff'];
      const maxLife = Math.random() * 30 + 40; 
      return {
        id: Math.random(), x: clientX, y: clientY,
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 4 + 2, life: maxLife, maxLife: maxLife,
      };
    });

    setParticles(prev => [...prev, ...newParticles]);
    
    setProgress((prev) => Math.min(prev + difficulty.boost, 100));
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 50);
  };

  // 🌟 핵심 추가 3: 이미 봤다면 화면 전체를 아예 렌더링하지 않음!
  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] text-white transition-all duration-1000 select-none touch-none overflow-hidden ${
        isHiding ? "opacity-0 pointer-events-none blur-sm" : "opacity-100 blur-0"
      } ${isShaking ? "translate-x-[4px] translate-y-[-2px] bg-[#121212]" : ""}`}
    >
      
      {/* 타겟 렌더링 */}
      {progress < 100 && targets.map(target => (
        <div
          key={target.id}
          onMouseDown={(e) => handleTargetClick(e, target.id)}
          onTouchStart={(e) => handleTargetClick(e, target.id)}
          className="absolute rounded-full border border-green-400 bg-green-500/10 cursor-crosshair flex items-center justify-center hover:bg-green-400/30 transition-colors"
          style={{
            left: target.x - target.size / 2,
            top: target.y - target.size / 2,
            width: target.size,
            height: target.size,
            opacity: target.life / 100,
            transform: `scale(${target.life / 100})`,
          }}
        >
           <div className="w-1.5 h-1.5 bg-green-200 rounded-full shadow-[0_0_10px_white]" />
        </div>
      ))}

      {/* 폭죽 파티클 */}
      <div className="absolute inset-0 pointer-events-none z-[10000] overflow-hidden">
        {particles.map(p => {
          const ratio = p.life / p.maxLife;
          return (
            <div key={p.id} className="absolute rounded-full"
              style={{
                left: p.x, top: p.y,
                width: `${p.size * ratio}px`, height: `${p.size * ratio}px`,
                backgroundColor: p.color, opacity: ratio,
                boxShadow: `0 0 ${p.size * 2}px ${p.size}px ${p.color}80`,
              }}
            />
          );
        })}
      </div>

      {/* UI 텍스트 */}
      <div className="flex flex-col items-center w-full max-w-md px-8 relative z-10 pointer-events-none">
        <h1 className={`font-['Fraunces'] text-2xl md:text-3xl font-light tracking-widest mb-2 transition-all duration-300 ${
          progress >= 100 ? "text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.8)] scale-105" : ""
        }`}>
          {progress >= 100 ? bootText : "BOOTING ENGINE"}
        </h1>
        
        <div className="text-center mb-8 h-8 flex flex-col justify-start">
          <p className={`text-xs transition-colors mb-1 ${
            progress > 0 && progress < 100 ? "text-green-400/80" : "text-white/50"
          }`}>
            {progress >= 100 
              ? ">>> ALL SYSTEMS GO <<<" 
              : "가만히 있어도 로딩되지만, 코어를 파괴하면 가속됩니다!"} 
          </p>
          {progress < 100 && (
            <p className="text-[10px] text-blue-400/70 font-mono tracking-widest animate-pulse mt-1">
              {netStatus}
            </p>
          )}
        </div>

        <div className="w-full h-[2px] bg-white/10 mb-4 overflow-hidden relative">
          <div 
            className={`h-full transition-all ease-linear ${progress >= 100 ? 'bg-green-400 box-shadow-[0_0_10px_green]' : 'bg-white/80'}`}
            style={{ width: `${progress}%`, transitionDuration: '20ms' }}
          />
        </div>

        <div className="w-full flex justify-between font-mono text-sm tracking-widest text-white/60">
          <span>{progress >= 100 ? "BOOST COMPLETE" : "LOADING..."}</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </div>
  );
}