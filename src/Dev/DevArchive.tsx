import { useState, useEffect } from "react";
import { ArrowLeft, Cpu, X, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";

// 💡 1. 각 프로젝트 데이터에 대표 'thumb' (썸네일) 경로를 명시해 줍니다.
const DEV_PROJECTS = [
  {
    title: "AR Walk 해양 생물 체험 앱",
    period: "2024.04 - 2024.08",
    role: "Unity 클라이언트 개발 (기여도 100%)",
    desc: "벽면에 부착된 마커를 태블릿 카메라로 인식하면 다양한 해양 생물이 증강현실(AR)로 나타나 유저와 상호작용하는 실감형 오프라인 체험 콘텐츠입니다.",
    tech: ["Unity", "AR Foundation", "C#", "Vuforia"],
    thumb: `${import.meta.env.BASE_URL}images/dev/ARWalk/1.webp`, // 👈 대표 썸네일 이미지 추가
    images: [
      `${import.meta.env.BASE_URL}images/dev/ARWalk/1.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/2.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/3.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/4.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/5.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/6.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/7.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/8.webp`
    ]
  },
  {
    title: "AR 느티나무숲 & AI 다큐멘터리 자동 생성 시스템",
    period: "2024.09 - 2025.02",
    role: "클라이언트 및 AI 파이프라인 연동 (기여도 50%)",
    desc: "마커 인식 기반의 AR 도슨트 콘텐츠를 제공하고, 유저의 체험 영상을 기반으로 42개국 번역 및 더빙이 완료된 다큐멘터리 영상을 생성하는 자동화 시스템을 구축했습니다.",
    tech: ["Unity", "Python", "Google STT", "ElevenLabs API"],
    thumb: `${import.meta.env.BASE_URL}images/dev/ARWalk/1.webp`, // 👈 대표 썸네일 이미지 추가
    images: [
      
      `${import.meta.env.BASE_URL}images/dev/ARWalk/1.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/2.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/3.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/4.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/5.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/6.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/7.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/8.webp`
    ]
  },
  {
    title: "AI 기반 다국어 영상 편지 시스템",
    period: "2025.03 - 2025.11",
    role: "AI 클라이언트 파이프라인 단독 개발 (기여도 100%)",
    desc: "사용자가 한국어로 녹음한 오디오/영상을 바탕으로, 본인의 고유한 목소리 톤을 유지한 채 선택한 국가의 언어로 자연스럽게 변환·출력해주는 실시간 AI 번역 시스템입니다.",
    tech: ["Unity", "Python", "Stable Diffusion", "Voice Cloning Tech"],
    thumb: `${import.meta.env.BASE_URL}images/dev/ARWalk/1.webp`, // 👈 대표 썸네일 이미지 추가
    images: [
      
      `${import.meta.env.BASE_URL}images/dev/ARWalk/1.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/2.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/3.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/4.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/5.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/6.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/7.webp`,
      `${import.meta.env.BASE_URL}images/dev/ARWalk/8.webp`
    ]
  }
];

// 📦 팝업창 (테트리스 Masonry 모달) - 이전과 동일
function ContentGallery({ images, isOpen, onClose, projectTitle }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[150] bg-background/98 backdrop-blur-md overflow-y-auto animate-in fade-in zoom-in-95 duration-200 py-16 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between border-b border-border pb-6 mb-10">
          <div>
            <span className="font-['JetBrains_Mono'] text-xs text-primary tracking-widest uppercase block mb-1">Project Media</span>
            <h2 className="text-xl sm:text-2xl font-medium text-foreground">{projectTitle}</h2>
          </div>
          <button onClick={onClose} className="p-3 rounded-full bg-secondary/50 text-foreground hover:bg-secondary transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 mx-auto">
          {images.map((src, idx) => (
            <div key={idx} onClick={() => setSelectedImage(src)} className="group/pic relative rounded-xl overflow-hidden cursor-pointer border border-border/50 bg-secondary break-inside-avoid mb-4 inline-block w-full">
              <img src={src} alt={`갤러리 이미지 ${idx + 1}`} className="w-full h-auto object-cover transition-transform duration-500 group-hover/pic:scale-103" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/pic:opacity-100">
                <ZoomIn className="text-white drop-shadow-lg" size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center bg-black/95 p-4 sm:p-12" onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 p-3 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors">
            <X size={24} />
          </button>
          <img src={selectedImage} alt="확대" className="max-w-full max-h-full rounded-lg shadow-2xl object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

// ─── 메인 아카이브 페이지 컴포넌트 ───
export default function DevArchive() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-['Figtree'] py-20 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* 뒤로가기 링크 */}
        <Link to="/" className="font-['JetBrains_Mono'] text-xs text-muted-foreground hover:text-primary flex items-center gap-2 mb-12 uppercase tracking-wider transition-colors w-fit">
          <ArrowLeft size={14} /> Back to main
        </Link>

        {/* 타이틀 헤더 */}
        <div className="border-b border-border pb-8 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="text-primary" size={24} />
            <p className="font-['JetBrains_Mono'] text-xs text-primary tracking-widest uppercase">04 — Development Archive</p>
          </div>
          <h1 className="font-['Fraunces'] font-light text-4xl sm:text-5xl tracking-tight mb-4">
            Engineering & <em className="italic text-primary">Interactive Spaces</em>
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
            Unity 엔진과 실감형 기술(AR), 생성형 AI 파이프라인을 결합하여 가상과 현실을 잇는 인터랙티브 콘텐츠를 빌드합니다.
          </p>
        </div>

        {/* 💡 프로젝트 카드 리스트 (가로 분할 레이아웃으로 변경) */}
        <div className="flex flex-col gap-8">
          {DEV_PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveProject(project)} 
              // 👇 고유 호버(group/card), 전체 커서 스타일, 부드러운 스케일 모션 추가
              className="group/card relative border border-border bg-card/40 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row gap-6 items-center md:items-start cursor-pointer transition-all hover:border-primary/30 hover:bg-card/80 hover:scale-[1.005] active:scale-[0.995]"
            >
              
              {/* 🖼️ 왼쪽: 썸네일 영역 */}
              <div className="relative w-full md:w-[220px] shrink-0 aspect-[16/10] rounded-xl overflow-hidden bg-secondary border border-border/50 shadow-sm">
                <img 
                  src={project.thumb} 
                  alt={`${project.title} 썸네일`}
                  // 카드가 호버(group-hover/card)되면 썸네일 이미지만 단독 확대 효과
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                {/* 호버 시 돋보기 필터 레이어 */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-background/80 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-full border border-border shadow-sm text-foreground scale-90 group-hover/card:scale-100 transition-transform duration-300">
                     결과 보기
                  </span>
                </div>
              </div>

              {/* 📝 오른쪽: 텍스트 정보 영역 */}
              <div className="flex-1 flex flex-col justify-between h-full w-full">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-['JetBrains_Mono'] text-xs text-muted-foreground">{project.period}</span>
                  </div>
                  {/* 카드 호버 시 타이틀 색상 변환 */}
                  <h3 className="text-lg sm:text-xl font-medium mt-1 text-foreground group-hover/card:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-primary font-medium mt-0.5 mb-3">{project.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* 하단 기술 스택 뱃지 */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.tech.map((techItem, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="font-['JetBrains_Mono'] rounded-md bg-secondary/80 px-2.5 py-0.5 text-xs text-foreground border border-border/30"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* 팝업창 모달 레이어 */}
      {activeProject && (
        <ContentGallery
          isOpen={activeProject !== null}
          onClose={() => setActiveProject(null)}
          images={activeProject.images}
          projectTitle={activeProject.title}
        />
      )}
    </div>
  );
}