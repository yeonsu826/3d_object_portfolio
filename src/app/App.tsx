import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X, ExternalLink, Instagram, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Link } from "react-router-dom";
import { InstagramEmbed } from 'react-social-media-embed';


import "../styles/fonts.css";
import "../styles/index.css";
import "../styles/tailwind.css";
import '../styles/theme.css';

// ─── Data ─────────────────────────────────────────────────────────────────────

interface PortfolioItem {
  id: string;
  title: string;
  desc: string;
  thumb: string;
  mediaType?: 'gallery';
  galleryImages?: string[];
  videoLinks?: string[];
  isProcess?: boolean;
  link?: string;
}

interface PortfolioGroup {
  groupName: string;
  concept?:string;
  emoji: string;
  items: PortfolioItem[];
}

const PORTFOLIO: PortfolioGroup[] = [
  {
    groupName: "안경 프로젝트",
    emoji: "👓",
    items: [
      { 
        id: "glasses_result_gallery", 
        title: "안경 결과 렌더링", 
        desc: "안경 프로젝트 결과 이미지와 영상", 
        thumb: `${import.meta.env.BASE_URL}images/glasses/1.png`, 
        mediaType: "gallery", 
        galleryImages: [
          `${import.meta.env.BASE_URL}images/glasses/1.png`,
          `${import.meta.env.BASE_URL}images/glasses/2.png`,
          `${import.meta.env.BASE_URL}images/glasses/4.png`,
          `${import.meta.env.BASE_URL}images/glasses/5.png`,
          `${import.meta.env.BASE_URL}images/glasses/6.png`,
          `${import.meta.env.BASE_URL}images/glasses/3.png`,
          `${import.meta.env.BASE_URL}images/glasses/7.png`,
          `${import.meta.env.BASE_URL}images/glasses/8.png`,
          `${import.meta.env.BASE_URL}images/glasses/9.png`,
          `${import.meta.env.BASE_URL}images/glasses/10.png`,
          `${import.meta.env.BASE_URL}images/glasses/11.png`,
          `${import.meta.env.BASE_URL}images/glasses/12.png`,
          `${import.meta.env.BASE_URL}images/glasses/13.png`,
          `${import.meta.env.BASE_URL}images/glasses/14.png`,
          `${import.meta.env.BASE_URL}images/glasses/15.png`,
          `${import.meta.env.BASE_URL}images/glasses/16.png`,
          `${import.meta.env.BASE_URL}images/glasses/17.png`,
          `${import.meta.env.BASE_URL}images/glasses/18.png`,
          `${import.meta.env.BASE_URL}images/glasses/19.png`,
          `${import.meta.env.BASE_URL}images/glasses/20.png`,
          `${import.meta.env.BASE_URL}images/glasses/21.png`,
          `${import.meta.env.BASE_URL}images/glasses/22.png`,
          `${import.meta.env.BASE_URL}images/glasses/23.png`,
          `${import.meta.env.BASE_URL}images/glasses/24.png`,
          `${import.meta.env.BASE_URL}images/glasses/25.png`,
          `${import.meta.env.BASE_URL}images/glasses/26.png`,
          `${import.meta.env.BASE_URL}images/glasses/27.png`,
          `${import.meta.env.BASE_URL}images/glasses/28.png`,
          `${import.meta.env.BASE_URL}images/glasses/29.png`,
        ], 
        videoLinks: [
          "https://drive.google.com/file/d/1dTS_g03Vwdw9BfpnFqk0ZQC4ey5lu9zM/view?usp=drive_link",
          "https://drive.google.com/file/d/1XkE5SO1fS3AC-Kcrp3KGZinesodA1TJI/view?usp=drive_link",
        ] 
      },
      { 
        id: "glass_project_process", 
        title: "안경 제작 과정", 
        desc: "제작 과정 설명 페이지", 
        thumb: `${import.meta.env.BASE_URL}images/glass_project_process.png`, 
        isProcess: true, 
        link: `${import.meta.env.BASE_URL}glasses_project/index.html` 
      },
    ],
  },
  {
    groupName: "카페 프로젝트",
    concept: "Stylized",
    emoji: "☕",
    items: [
      { 
        id: "cafe_result_gallery", 
        title: "카페 결과 렌더링", 
        desc: "카페 프로젝트 결과 이미지와 영상", 
        thumb: `${import.meta.env.BASE_URL}images/cafe/0.jpeg`, 
        mediaType: "gallery", 
        galleryImages: [
          `${import.meta.env.BASE_URL}images/cafe/0.jpeg`,
          `${import.meta.env.BASE_URL}images/cafe/1.jpeg`,
          `${import.meta.env.BASE_URL}images/cafe/2.jpeg`,
          `${import.meta.env.BASE_URL}images/cafe/3.jpeg`,
          `${import.meta.env.BASE_URL}images/cafe/4.jpeg`,
          `${import.meta.env.BASE_URL}images/cafe/5.jpeg`,
          `${import.meta.env.BASE_URL}images/cafe/6.jpeg`,
          `${import.meta.env.BASE_URL}images/cafe/7.jpeg`,
          `${import.meta.env.BASE_URL}images/cafe/8.jpeg`,
          `${import.meta.env.BASE_URL}images/cafe/9.jpeg`,
          `${import.meta.env.BASE_URL}images/cafe/10.jpeg`,
        ], 
        videoLinks: [
          "https://drive.google.com/file/d/1Gcl7gPJSkSSYWH6YBFoNTYB_78xN2WFp/view?usp=drive_link",
          "https://drive.google.com/file/d/1buT0a9OPEFYPeK3YSYEcteHSf8nRteZb/view?usp=sharing",
        ] 
      },
      { 
        id: "cafe_project_process", 
        title: "카페 공간 제작 과정", 
        desc: "스타일라이즈드 컨셉 공간 제작 설명 페이지", 
        thumb: `${import.meta.env.BASE_URL}images/cafe_project_process.png`, 
        isProcess: true, 
        link: `${import.meta.env.BASE_URL}cafe_project/index.html` 
      },
    ],
  },
  {
    groupName: "게이밍룸 프로젝트",
    concept: "Stylized",
    emoji: "🎮",
    items: [
      { 
        id: "gamingroom_result_gallery", 
        title: "게이밍룸 결과 렌더링", 
        desc: "게이밍룸 프로젝트 이미지 갤러리", 
        thumb: `${import.meta.env.BASE_URL}images/gamingroom/1.jpeg`, 
        mediaType: "gallery", 
        galleryImages: [
          `${import.meta.env.BASE_URL}images/gamingroom/1.jpeg`,
          `${import.meta.env.BASE_URL}images/gamingroom/2.jpeg`,
          `${import.meta.env.BASE_URL}images/gamingroom/3.jpeg`,
          `${import.meta.env.BASE_URL}images/gamingroom/4.jpeg`,
          `${import.meta.env.BASE_URL}images/gamingroom/5.jpeg`,
          `${import.meta.env.BASE_URL}images/gamingroom/6.jpeg`,
          `${import.meta.env.BASE_URL}images/gamingroom/7.jpeg`,
          `${import.meta.env.BASE_URL}images/gamingroom/8.jpeg`,
          `${import.meta.env.BASE_URL}images/gamingroom/9.jpeg`,
          `${import.meta.env.BASE_URL}images/gamingroom/10.jpeg`,
          `${import.meta.env.BASE_URL}images/gamingroom/11.jpeg`,
          `${import.meta.env.BASE_URL}images/gamingroom/12.jpeg`,
        ] ,
        videoLinks: [
          "https://drive.google.com/file/d/1dV6JbgzoUdk7BgpNnIVEKubDOGhD8k8t/view?usp=drive_link"
          
        ] 
      },
      
    ],
  },
  {
    groupName: "무대 디자인 프로젝트",
    emoji: "🎭",
    items: [
      { 
        id: "stage_result_gallery", 
        title: "무대 결과 렌더링", 
        desc: "무대 디자인 프로젝트 이미지 갤러리", 
        thumb: `${import.meta.env.BASE_URL}images/stage/1.jpeg`, 
        mediaType: "gallery", 
        galleryImages: [
          `${import.meta.env.BASE_URL}images/stage/1.jpeg`,
          `${import.meta.env.BASE_URL}images/stage/2.jpeg`,
          `${import.meta.env.BASE_URL}images/stage/3.jpeg`,
          `${import.meta.env.BASE_URL}images/stage/4.jpeg`,
          `${import.meta.env.BASE_URL}images/stage/5.jpeg`,
          `${import.meta.env.BASE_URL}images/stage/6.jpeg`,
          `${import.meta.env.BASE_URL}images/stage/7.jpeg`,
          `${import.meta.env.BASE_URL}images/stage/8.jpeg`,
          `${import.meta.env.BASE_URL}images/stage/9.jpeg`,
          `${import.meta.env.BASE_URL}images/stage/10.jpeg`,
        ] 
      },
    ],
  },
  {
    groupName: "개발 프로젝트 아카이브",
    emoji: "🗃️",
    items: [
      {
        id: "dev_archive",
        title: "개발 프로젝트 아카이브",
        desc: "진행 해왔던 유니티 개발 프로젝트들을 볼 수 있습니다. (외부 링크)",
        thumb: `${import.meta.env.BASE_URL}images/dev.jpg`,
        link: "https://kaput-muskox-1f4.notion.site/2a3a13adf6c48050b9b5cfe097165b8c",
      },
    ],
  },
];

const TOOLS = [
  { name: "Unity" },  
  { name: "Unreal" },
  { name: "Blender" },
  { name: "Substance Painter" },
  { name: "Three.js" },
];

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""}`}>
      <nav className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
        <button className="font-['Fraunces'] text-xl font-light tracking-tight text-foreground select-none" style={{ background: "none", border: "none", cursor: "default" }}>
          JEONG YEON SU<span className="text-primary">.</span>
        </button>
        <ul className="hidden md:flex items-center gap-10">
          {["Works", "About"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="font-['Figtree'] text-sm text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase">{l}</a></li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </nav>
      {open && (
        <div className="md:hidden bg-card border-b border-border px-8 py-6">
          <ul className="flex flex-col gap-5">
            {["Works", "About"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="font-['Figtree'] text-base text-foreground tracking-widest uppercase">{l}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const imageModules = import.meta.glob('/dist/images/*/*.{png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' });
const BACKGROUND_IMAGES = Object.values(imageModules) as string[];
const renderImageCountStatic = Object.keys(import.meta.glob('/dist/images/{cafe,glasses,gamingroom,stage}/*.{png,jpg,jpeg}', { eager: true })).length;
const videoCountStatic = 4;

function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    for (let i = BACKGROUND_IMAGES.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [BACKGROUND_IMAGES[i], BACKGROUND_IMAGES[j]] = [BACKGROUND_IMAGES[j], BACKGROUND_IMAGES[i]];
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#050508] flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0 bg-[#050508]">
        {BACKGROUND_IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Background ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === currentBgIndex ? "opacity-50" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 mt-20 flex flex-col items-center w-full">
         <span className="font-['JetBrains_Mono'] text-[10px] text-white/70 tracking-[0.3em] uppercase mb-5 border border-white/10 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md shadow-lg">
           3D Modeler, Developer, Artist
         </span> 
                    
        <h1 className="font-['Fraunces'] text-white tracking-wide mb-8 md:mb-16" style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}>
          Feel Spaces, 
          <span className="font-['Fraunces'] text-white/70 text-xl md:text-2xl">
          &nbsp;&nbsp; Through Technology.
          </span>
        </h1>
        
         <div className="flex flex-col sm:flex-row items-center gap-4">
           <a href="#works" className="group flex items-center gap-3 font-['Figtree'] text-sm font-medium bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
             작업물 보기 <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </a>
           <a href="#about" className="flex items-center gap-2 font-['Figtree'] text-sm font-medium bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full hover:bg-white/15 backdrop-blur-md transition-all duration-300">
             About Me
           </a>
         </div>

         <div className="flex flex-wrap justify-center gap-10 md:gap-20 mt-24 pt-10 border-t border-white/10 w-full max-w-4xl">
           {[
             { value: String(PORTFOLIO.length), label: "Projects" },
             { value: String(renderImageCountStatic), label: "Renders" },
             { value: String(videoCountStatic), label: "Videos" },
           ].map((s) => (
             <div key={s.label} className="flex flex-col gap-2">
               <span className="font-['Fraunces'] font-semibold text-3xl text-white/90 drop-shadow-lg">{s.value}</span>
               <span className="font-['JetBrains_Mono'] text-[10px] text-white/40 tracking-widest uppercase">{s.label}</span>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
}

// ─── 수직 스크롤을 가로 스크롤로 바꿔주는 래퍼 컴포넌트 ──────────────────────────────────
function HorizontalScrollContainer({ children, className }: { children: React.ReactNode, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // e.deltaY 값이 있으면 세로 스크롤 휠을 굴린 것
      if (e.deltaY !== 0) {
        e.preventDefault(); // 기본 수직 스크롤 방지
        container.scrollLeft += e.deltaY; // 좌우 스크롤로 변환
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

// ─── Works ────────────────────────────────────────────────────────────────────

function Works() {
  const [activeGroup, setActiveGroup] = useState<string>("all");
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const groups = activeGroup === "all" ? PORTFOLIO : PORTFOLIO.filter(g => g.groupName === activeGroup);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft" && lightbox.index > 0) {
        setLightbox({ ...lightbox, index: lightbox.index - 1 });
      }
      if (e.key === "ArrowRight" && lightbox.index < lightbox.images.length - 1) {
        setLightbox({ ...lightbox, index: lightbox.index + 1 });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section id="works" className="bg-background py-32">
      <div className="max-w-[1400px] mx-auto pl-8 md:pl-16">
        <div className="mb-12 pr-8 md:pr-16">
          <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-4">02 — Works</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-['Fraunces'] font-light text-foreground leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                Projects
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-2 md:gap-3">
              <button onClick={() => setActiveGroup("all")}
                className={`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${activeGroup === "all" ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105 font-semibold" : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/20 hover:text-white"}`}>
                All
              </button>
              {PORTFOLIO.map((g) => (
                <button key={g.groupName} onClick={() => setActiveGroup(g.groupName)}
                  className={`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${activeGroup === g.groupName ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105 font-semibold" : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/20 hover:text-white"}`}>
                  {g.emoji} {g.groupName} {g.concept ? `(${g.concept})` : ""}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-24">
          {groups.map((group) => {
            const galleryItem = group.items.find(i => i.mediaType === "gallery");
            const processItem = group.items.find(i => i.isProcess);
            const standaloneLinkItem = group.items.find(i => i.link && !i.isProcess);
            
            const images = galleryItem?.galleryImages || [];

            return (
              <div key={group.groupName} className="w-full">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10 pr-8 md:pr-16">
                  <span className="text-3xl">{group.emoji}</span>
                  <h3 className="font-['Fraunces'] font-medium text-foreground text-2xl md:text-3xl">{group.groupName}</h3>
                  {group.concept && (
                  <span className="px-3 py-1 mt-1 text-[10px] sm:text-xs font-['JetBrains_Mono'] tracking-widest text-primary border border-primary/50 bg-primary/10 rounded-full shadow-[0_0_8px_rgba(var(--primary-rgb),0.3)]">
                      {group.concept}
                  </span>
                )}
                </div>

                {/* 커스텀 스크롤바 디자인이 추가된 부분입니다 */}
                <HorizontalScrollContainer 
                  className="flex overflow-x-auto gap-4 md:gap-6 pb-6 pr-8 md:pr-16 
                  [&::-webkit-scrollbar]:h-2 
                  [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/40
                  transition-colors"
                >
                  
                  {images.map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setLightbox({ images, index: idx })}
                      className="relative w-[200px] md:w-[280px] aspect-[4/3] rounded-xl overflow-hidden cursor-zoom-in group bg-[#0a0a10] border border-white/5 flex-shrink-0"
                    >
                      <img src={img} alt={`${group.groupName} ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium transition-opacity shadow-lg">크게 보기</span>
                      </div>
                    </div>
                  ))}

                  {galleryItem?.videoLinks?.map((link, idx) => (
                    <a key={idx} href={link} target="_blank" rel="noopener noreferrer" 
                       className="relative w-[200px] md:w-[280px] aspect-[4/3] rounded-xl overflow-hidden group bg-[#0a0a10] border border-white/10 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors flex-shrink-0">
                      <div className="p-4 bg-white/10 rounded-full group-hover:scale-110 transition-transform">
                        <ExternalLink size={24} className="text-white" />
                      </div>
                      <span className="font-medium text-white/90 text-sm md:text-base">영상 {idx + 1} 보기</span>
                    </a>
                  ))}

                  {processItem && (
                    <a href={processItem.link} target="_blank" rel="noopener noreferrer"
                       className="relative w-[200px] md:w-[280px] aspect-[4/3] rounded-xl overflow-hidden group border border-primary/30 bg-primary/5 flex flex-col items-center justify-center gap-4 hover:border-primary hover:bg-primary/10 transition-all flex-shrink-0">
                      <div className="p-4 bg-primary/20 rounded-full group-hover:scale-110 transition-transform">
                        <ArrowUpRight size={24} className="text-primary" />
                      </div>
                      <span className="font-medium text-primary text-sm md:text-base">제작 과정 보기</span>
                    </a>
                  )}

                  {standaloneLinkItem && !galleryItem && (
                    <a href={standaloneLinkItem.link} target="_blank" rel="noopener noreferrer"
                       className="relative w-[200px] md:w-[280px] aspect-[4/3] rounded-xl overflow-hidden group bg-[#0a0a10] border border-white/10 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors flex-shrink-0">
                      <img src={standaloneLinkItem.thumb} alt={standaloneLinkItem.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity" />
                      <div className="relative z-10 p-4 bg-white/10 rounded-full group-hover:scale-110 transition-transform backdrop-blur-md">
                        <ExternalLink size={24} className="text-white" />
                      </div>
                      <span className="relative z-10 font-medium text-white/90 text-sm md:text-base">{standaloneLinkItem.title}</span>
                    </a>
                  )}
                </HorizontalScrollContainer>
              </div>
            );
          })}
        </div>
      </div>
{/* Lightbox 모달 */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 transition-opacity" onClick={() => setLightbox(null)}>
          {/* 빈 공간을 눌러도 꺼지도록 기존의 e.stopPropagation()을 제거했습니다 */}
          <div className="relative w-full max-w-[95vw] h-full flex items-center justify-center">
            
            <button type="button" onClick={() => setLightbox(null)} className="absolute top-4 right-4 z-20 rounded-full bg-white/10 border border-white/20 p-3 text-white hover:bg-white/20 backdrop-blur-md transition-all">
              <X size={24} />
            </button>
            
            <button type="button" disabled={lightbox.index === 0} 
                    // 좌우 버튼을 눌렀을 때는 창이 꺼지지 않도록 방지
                    onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: lightbox.index - 1 }); }} 
                    className="absolute left-4 md:left-8 z-20 rounded-full bg-black/50 border border-white/20 p-4 text-white hover:bg-black/80 backdrop-blur-md transition-all disabled:opacity-0 disabled:cursor-not-allowed">
              <ChevronLeft size={32} />
            </button>
            
            {/* 이미지 클릭 시 꺼지도록 onClick 추가 및 커서(cursor-zoom-out) 변경 */}
            <img 
              src={lightbox.images[lightbox.index]} 
              alt="Enlarged view" 
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="max-w-full max-h-[90vh] object-contain drop-shadow-2xl select-none cursor-zoom-out" 
            />
            
            <button type="button" disabled={lightbox.index >= lightbox.images.length - 1} 
                    // 좌우 버튼을 눌렀을 때는 창이 꺼지지 않도록 방지
                    onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: lightbox.index + 1 }); }} 
                    className="absolute right-4 md:right-8 z-20 rounded-full bg-black/50 border border-white/20 p-4 text-white hover:bg-black/80 backdrop-blur-md transition-all disabled:opacity-0 disabled:cursor-not-allowed">
              <ChevronRight size={32} />
            </button>

            {/* 클릭을 방해하지 않도록 pointer-events-none 추가 */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full font-['JetBrains_Mono'] text-white/80 text-sm pointer-events-none">
              {lightbox.index + 1} / {lightbox.images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
function MyPortfolio() {
  // 1. 띄우고 싶은 인스타 영상 주소들을 쉼표(,)로 구분해서 넣으세요.
  const instagramUrls = [
    "https://www.instagram.com/reel/DaaF1gPhC5X/",
    "https://www.instagram.com/reel/DX0-xahAll4/",
    "https://www.instagram.com/reel/DZHSKgSPtdv/",
    "https://www.instagram.com/reel/DV0-jS0k0JN/",
  ];

  return (
    <div className="flex flex-col my-10 max-w-[1400px] mx-auto px-8 w-full">
      {/* 1. 전체 위아래 여백 줄이기: my-20 -> my-10 으로 변경 */}
      
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10"> 
        {/* mb-8 -> mb-6 */}
        <span className="text-3xl">📱</span>
        <h3 className="font-['Fraunces'] font-medium text-foreground text-2xl md:text-3xl">
          Instagram Works
        </h3>
      </div>
      
      <HorizontalScrollContainer 
        // 2. 영상 사이의 기본 갭 줄이기: gap-6 -> gap-3 으로 변경
        className="flex overflow-x-auto gap-3 pb-2
        [&::-webkit-scrollbar]:h-2 
        [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/40
        transition-colors w-full"
      >
        {instagramUrls.map((url, index) => (
          <div 
            key={index} 
            // 3. ✨가장 중요✨: scale-90으로 인해 생긴 오른쪽(-mr-8)과 아래쪽(-mb-12)의 '유령 여백'을 마이너스 마진으로 당겨서 없애줍니다.
            className="flex-shrink-0 origin-top-left scale-90 -mr-8 -mb-12 rounded-xl overflow-hidden shadow-2xl border border-white/10 hover:border-primary/50 transition-colors duration-300 bg-[#0a0a10]"
          >
            <InstagramEmbed 
              url={url} 
              width={328} 
            />
          </div>
        ))}
      </HorizontalScrollContainer>
    </div>
  );
}


// ─── About ────────────────────────────────────────────────────────────────────


function About() {
  return (
    <section id="about" className="bg-card py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* 왼쪽: 사진 영역 */}
          <div className="relative max-w-[420px] mx-auto lg:mx-0">
            <div className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-3xl shadow-xl">
              <img src={`${import.meta.env.BASE_URL}images/3212_4282.jpg`} alt="Portrait" className="w-full h-full object-cover" />     
            </div>
          </div>
          
          {/* 오른쪽: 텍스트 및 정보 영역 */}
          <div className="flex flex-col gap-10 lg:pt-8">
            
            {/* 1. 소개 텍스트 */}
            <div>
              <p className="font-['JetBrains_Mono'] text-xs text-primary tracking-widest uppercase mb-6">03 — About Me</p>
              <h2 className="font-['Fraunces'] font-light text-foreground leading-tight mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                I build spaces that <em className="italic text-primary">exist nowhere</em> but feel real.
              </h2>
              <div className="flex flex-col gap-4 font-['Figtree'] text-base text-muted-foreground leading-relaxed">
                <p>기술적 정밀함과 예술적 직관의 교차점에서 작업하며, 아무 곳에도 존재하지 않지만 현실처럼 느껴지는 공간과 오브젝트를 만들어냅니다.</p>
              </div>
            </div>
            
            {/* 2. 사용 툴 */}
            <div className="border-t border-border pt-8">
              <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-6">Software & Tools</p>
              <div className="flex flex-wrap gap-3">
                {TOOLS.map((tool) => (
                  <span key={tool.name} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
            
            {/* 3. 연락처 및 SNS */}
            <div className="border-t border-border pt-8">
              <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-6">Contact</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.instagram.com/yeon_ddooo/" target="_blank" rel="noopener noreferrer" className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  <Instagram size={18} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/yeonsu0826/" target="_blank" rel="noopener noreferrer" className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            {/* 4. 이력서 보기 버튼 */}
            <div className="pt-4">
              <Link 
                to="/resume" 
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-foreground text-background py-4 px-6 font-medium transition-all hover:bg-foreground/90 hover:scale-[1.01] active:scale-[0.99]"
              >
                이력서 보기
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}



// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-card border-t border-border px-8 py-8">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <span className="font-['Fraunces'] text-lg font-light text-foreground">
          JEONG YEON SU<span className="text-primary">.</span>
        </span>

        <div className="flex items-center gap-8 sm:gap-12">
          <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase">
            Seoul, KR
          </p>
          
          <span 
            className="font-['JetBrains_Mono'] text-[10px] text-muted-foreground/20 hover:text-muted-foreground/60 transition-colors cursor-default"
            title="Jesu Juva"
          >
            J.J
          </span>
        </div>

      </div>
    </footer>
  );
}



// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Nav />
      <Hero />
      <Works />
      <MyPortfolio />
      <About />
      <Footer />
    </div>
  );
}