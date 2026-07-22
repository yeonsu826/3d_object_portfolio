// Resume/CoverLetter.tsx
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Resume.css";

const COVER_LETTER = [
  {
    label: "프로그래밍 전공 지식을 바탕으로 유니티 개발자 실무를 경험하며, 3D 창작을 위한 탄탄한 논리적 뼈대를 다짐",
    body: "컴퓨터 공학 전공 시절, 눈에 보이지 않는 소프트웨어 로직만으로는 제 안의 예술적 창작 욕구를 채우기엔 조금 아쉬웠습니다. 하지만 이 고민은 곧 '실시간 그래픽스와 공간 연출'이라는 진짜 적성을 발견하는 계기가 되었습니다. 전공에서 배운 알고리즘적 사고를 바탕으로 졸업 후 유니티 클라이언트 개발자로 합류했고, 약 1년 8개월간 실무를 경험하며 개발자로서의 단단한 뼈대가 3D 창작에 얼마나 든든한 무기가 되는지 확인할 수 있었습니다.",
  },
  {
    label: "Unity와 Vuforia를 활용한 AR 콘텐츠 개발 경험을 통해, 3D 공간 설계와 시각적 연출에 대한 깊은 감각과 실무적 이해도를 확보",
    body: "선임연구원으로 재직하며 저는 단순히 정형화된 데이터를 다루는 것을 넘어, 사용자가 완벽히 몰입할 수 있는 '시각적이고 인터랙티브한 3D 공간'을 창조하는 데 집중했습니다. 대표적으로 Unity와 Vuforia를 활용하여 오프라인 마커 인식을 기반으로 생동감 넘치는 해양 생물과 자연환경을 증강현실(AR)로 렌더링하는 실감형 공간 콘텐츠들을 개발했습니다. 이 과정에서 현실 공간의 물리적 레이아웃과 3D 엔진을 투영하여 체험할 수 있는, 입체적인 3D 공간 설계와 시각적 연출에 대한 깊은 감각을 다졌습니다. 나아가 사용자의 반응과 데이터를 실시간으로 투영하는 지능형 3D 미디어 생성 파이프라인을 구축하기도 했습니다. 다국어 더빙 및 번역 음성 API를 3D 엔진과 매끄럽게 연동하여 사용자의 맞춤형 영상 편지와 다큐멘터리 스토리를 시각화하는 시스템입니다. 이러한 경험을 통해 3D 에셋이 실시간 인터랙티브 환경에서 어떻게 구동되고 사용자에게 전달되는지, 가상 공간이 어떻게 사용자에게 다가갈 수 있는지 3D 배경 환경을 설계할 수 있는 밑거름이 되었습니다.",
  },
  {
    label: "유니티와 언리얼 엔진을 활용한 3D 에셋 제작 경험을 통해, 3D 기술 스택을 완성",
    body: "유니티 클라이언트 개발자로 실무를 경험하며 3D 공간의 논리적 구조를 체득했다면, 퇴사 후에는 'MBC 미디어 캠퍼스 버추얼 테크 전문가 과정'에 참여하여 시각적인 아트 구현 능력을 극한으로 끌어올렸습니다. 약 7개월간 블렌더(Blender)를 활용한 하드서페이스 프롭 모델링부터 캐릭터 리깅, 마블러스 디자이너 기반의 CFX(의상 시뮬레이션)까지 3D 에셋 제작의 전체 파이프라인을 집중적으로 훈련했습니다. 특히 제작한 에셋을 언리얼 엔진(Unreal Engine)에 임포트하여 모션 캡처 데이터와 AI 립싱크를 연동하는 프로젝트를 수행하며, Unity뿐만 아니라 Unreal 환경에서의 머티리얼 세팅과 물리 충돌 연산 최적화 노하우까지 섭렵할 수 있었습니다.",
  },
  {
    label: "개발자와 아티스트 간의 소통 수월, 예술적감각과 기술 둘다 놓치지 않음",
    body: "개발자의 논리로 엔진을 이해하고, 아티스트의 감각으로 툴을 다루는 훈련과정을 수료 했습니다. 앞으로의 단기적인 목표는 팀의 아트 스타일과 파이프라인에 빠르게 적응하여 퀄리티 기준을 충족하는 최적화된 3D 에셋을 안정적으로 생산하는 것입니다. 나아가 개발자와 아티스트 간의 소통 비용을 줄이고, 원활한 협업을 이끄는 브릿지 역할을 수행하고 싶습니다. 최종적으로는 미적 감각과 기술적 문제 해결 능력을 완벽하게 조화시켜, 어떠한 제약 환경에서도 퍼포먼스 저하 없이 최고의 시각적 몰입감을 선사하는 '대체 불가능한 3D 아티스트'로 성장하겠습니다.",
  },
];

function PersonalProfile() {
  const items = [
    { key: "성별", value: "여성", icon: "♀", accent: "var(--accent)" },
    { key: "생년월일", value: "1996년생 · 만 29세", icon: "◷", accent: "var(--accent2)" },
    { key: "종교", value: "기독교 · 매주 주일 교회에 갑니다", icon: "✦", accent: "var(--accent2)" },
    { key: "MBTI", value: "INTP · 몰입할 것이 있어야 인생이 살만합니다", icon: "◈", accent: "var(--accent)" },
    { key: "좋아하는 게임", value: "동물의 숲 · 젤다의 전설 · 테일즈 런너", icon: "▶", accent: "var(--accent2)" },
    { key: "사는 지역", value: "서울특별시 종로구 구기동", icon: "⌖", accent: "var(--accent2)" },
    { key: "취미", value: "기타치기 · 교회 밴드부 활동 중", icon: "♪", accent: "var(--accent)" },
    { key: "적성", value: "컴공에서 고통받다 발견한 나의 진짜 재능 — 3D 공간 구현 이제는 3D를 사랑합니다", icon: "⬡", accent: "var(--accent)", wide: true },
  ];

  return (
    <div className="rounded-sm overflow-hidden mb-2" style={{ border: "1px solid var(--border)" }}>
      <div className="px-5 py-3 flex items-center gap-2" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <span className="mono text-xs font-semibold tracking-widest" style={{ color: "var(--muted)" }}>PERSONAL PROFILE</span>
        <span className="mono text-xs" style={{ color: "var(--border)" }}>·</span>
        <span className="mono text-xs" style={{ color: "var(--muted)" }}>정연수에 대해</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0" style={{ background: "#0d0d14", borderColor: "var(--border)" }}>
        {items.filter((i) => !i.wide).map((item) => (
          <div key={item.key} className="flex items-start gap-3 px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
            <span className="mono text-sm mt-0.5 shrink-0" style={{ color: item.accent }}>{item.icon}</span>
            <div>
              <div className="mono text-xs mb-1" style={{ color: "var(--muted)", letterSpacing: "0.15em" }}>{item.key}</div>
              <div className="text-xs leading-5" style={{ color: "#94a3b8" }}>{item.value}</div>
            </div>
          </div>
        ))}
        {items.filter((i) => i.wide).map((item) => (
          <div key={item.key} className="flex items-start gap-3 px-5 py-4 sm:col-span-2" style={{ borderTop: "1px solid var(--border)" }}>
            <span className="mono text-sm mt-0.5 shrink-0" style={{ color: item.accent }}>{item.icon}</span>
            <div>
              <div className="mono text-xs mb-1" style={{ color: "var(--muted)", letterSpacing: "0.15em" }}>{item.key}</div>
              <div className="text-xs leading-5" style={{ color: "#94a3b8" }}>{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function GallerySection() {
  const [images, setImages] = useState<string[]>([]);
  // 스크롤 영역을 제어하기 위한 ref 추가
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Vite 빌드 시 파일 경로 문자열만 배열 형태로 가져옵니다.
    const modules = import.meta.glob('/public/coverletter/*.{jpg,jpeg,png,webp}');
    
    // 2. 배포(dist) 환경을 완벽하게 고려한 경로 정제 로직
    const imagePaths = Object.keys(modules).map(path => {
      const relativePath = path.replace('/public', '');
      const baseUrl = import.meta.env.BASE_URL || '/';
      return `${baseUrl}${relativePath.replace(/^\//, '')}`;
    });
    
    setImages(imagePaths);
  }, []);

  // 마우스 상하 휠을 가로 스크롤로 변환하는 로직
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // deltaY(상하 굴림) 값이 있을 때만 작동
      if (e.deltaY !== 0) {
        e.preventDefault(); // 페이지 전체가 상하로 스크롤되는 것을 방지
        el.scrollLeft += e.deltaY; // 굴린 만큼 가로로 이동
      }
    };

    // passive: false 옵션이 있어야 e.preventDefault()가 정상 작동합니다.
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [images]); // 이미지가 불러와진 후 실행되도록 의존성 배열에 images 추가

  if (images.length === 0) return null;

  return (
    <div className="mt-20 border-t border-[var(--border)] pt-12 w-full overflow-hidden">
      <h2 className="mono text-sm text-white mb-6 uppercase tracking-widest">GALLERY</h2>
      
      {/* ref={scrollRef} 추가 및 w-full 적용 */}
      <div 
        ref={scrollRef}
        className="flex w-full overflow-x-auto gap-4 md:gap-6 pb-6 
        [&::-webkit-scrollbar]:h-2 
        [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full
        transition-colors duration-300"
      >
        {images.map((src, i) => (
          <div 
            key={i} 
            className="relative w-[200px] md:w-[280px] aspect-[4/3] rounded-xl overflow-hidden group bg-[#0a0a10] border border-white/5 flex-shrink-0"
          >
            <img 
              src={src} 
              alt={`Gallery image ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CoverLetterPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }} className="scanline pb-20">
      <div className="max-w-[800px] mx-auto px-6 pt-24">
        
        {/* 뒤로 가기 버튼 */}
        <Link
          to="/"
          className="mono text-sm flex items-center gap-2 mb-10 transition-opacity hover:opacity-70"
          style={{ color: "var(--accent2)" }}
        >
          {"<- BACK TO PORTFOLIO"}
        </Link>

        {/* 프로필 섹션 */}
        <PersonalProfile />

        {/* 자기소개서 본문 섹션 */}
        <div className="mt-16 flex flex-col gap-6">
          {COVER_LETTER.map((sec, i) => (
            <div
              key={i}
              className="rounded-sm p-6"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderLeft: `2px solid ${i < 2 ? "var(--accent2)" : "var(--accent)"}`
              }}
            >
              <div
                className="mono text-xs font-semibold mb-4 flex items-start gap-2 leading-5"
                style={{ color: i < 2 ? "var(--accent2)" : "var(--accent)" }}
              >
                <span style={{ opacity: 0.5, flexShrink: 0 }}>
                  [ {String(i + 1).padStart(2, "0")} ]
                </span>
                {sec.label}
              </div>
              <p className="text-sm leading-7 whitespace-pre-wrap" style={{ color: "#94a3b8" }}>
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        {/* 갤러리 섹션 */}
        <GallerySection />
        
      </div>
    </div>
  );
}