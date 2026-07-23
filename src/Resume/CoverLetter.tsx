// Resume/CoverLetter.tsx
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Resume.css";

const COVER_LETTER = [
  {
    label: "프로그래밍 전공 지식을 바탕으로 유니티 개발자 실무를 경험하며, 3D 창작을 위한 탄탄한 논리적 뼈대를 다짐",
    body: "인터랙티브 콘텐츠 개발 분야에서 2년간의 실무 경험을 바탕으로 Unity와 Unreal Engine을 활용한 다양한 프로젝트를 성공적으로 수행한 경력이 있습니다. 실제 개발 과정에서 엔진의 로직과 데이터 흐름을 직관적으로 파악하며, 효율적인 문제 해결 능력을 갖추고 있습니다. Unity를 통한 빠른 프로토타이핑과 시스템 구현 해왔고, 퇴사 이후에는 Unreal Engine과 blender, substance painter 기능을 배웠습니다. Blender와 Adobe Substance Painter를 이용한 3D 모델링 및 텍스처링 작업을 한 결과를 포트폴리오에서 볼 수 있습니다. 시각적 효과에도 관심이 많아서 미디어 아트의 비주얼 퀄리티 향상에 기여할 수 있습니다. Unity 개발자로 업무를 수행 했을 때에도 아트와 프로그래밍을 유기적으로 연결하는 역량을 통해 팀 내 다양한 역할과 협업에 적극적으로 참여해왔습니다. 실무에서 쌓은 경험을 바탕과 이후에 진행한 3D 디자인 프로젝트를 통해서 회사에서 진행하는 프로젝트에 도움이 될 수 있습니다. 평소 오프라인 공간을 연출하는 장면들의 작업물에 관심이 많아 Coloso에 개설된 '장면들'의 실무 강의를 직접 수강하기도 했습니다. 특히 3D 오브젝트가 파티클 이펙트로 분해되어 사라지는 VFX 연출 기법과 이를 실제 환경에 적용하는 과정이 매우 인상 깊었습니다. 이러한 시각적 연출에 대한 관심과 학습 경험을 바탕으로, 장면들의 미디어 월 및 전시 콘텐츠 제작 과정에 빠르게 적응하고 기여할 수 있습니다. 엔진과 아트 툴에 대한 폭넓은 이해를 바탕으로, 창의적이고 효율적인 인터랙티브 콘텐츠 개발을 추구합니다. 빠르게 변화하는 트렌드와 기술에 적응하며, 새로운 도전을 두려워하지 않는 자세로 미디어 아트 산업의 발전에 기여할 준비가 되어 있습니다.",
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