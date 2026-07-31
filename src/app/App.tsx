import { useState, useEffect, useRef, createContext, useContext } from "react";
import { ArrowUpRight, Menu, X, ExternalLink, Instagram, Linkedin, ChevronLeft, ChevronRight, Play, Globe } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/index.css";

import SplashScreen from "./components/SplashScreen";
import LoadingImage from "./components/LoadingImage";

// ─── Translations ─────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  ko: {
    navWorks: "Works",
    navAbout: "About",
    heroTag: "3D Modeler, Developer, Artist",
    heroTitle1: "Feel Spaces, ",
    heroTitle2: "Through Technology.",
    viewWorks: "작업물 보기",
    aboutMeBtn: "About Me",
    projects: "Projects",
    renders: "Renders",
    videos: "Videos",
    all: "All",
    viewLarge: "크게 보기",
    viewProcess: "제작 과정 보기",
    videoLog: "Video Log",
    videoLogSub: "— Cinematic & Videos",
    playVideo: "Play Video",
    aboutTitle: "Pick me Up",
    aboutDesc1: "3D 좋아합니다!",
    aboutDesc2: "엔진 잘 다룹니다!",
    aboutDesc3: "모델링 잘합니다!",
    aboutDesc4: "열심히 하겠습니다!",
    contact: "Contact",
    toolsTitle: "Software & Tools",
    resumeBtn: "이력서 보기",
    location: "Seoul, KR",
    groups: {
      glasses: "안경 프로젝트",
      cafe: "카페 프로젝트",
      gamingroom: "게이밍룸 프로젝트",
      stage: "무대 디자인 프로젝트",
      dev: "개발 프로젝트 아카이브",
    },
    items: {
      glassesResult: "안경 결과 렌더링",
      glassesDesc: "안경 프로젝트 결과 이미지와 영상",
      glassesProcess: "안경 제작 과정",
      glassesProcessDesc: "제작 과정 설명 페이지",
      cafeResult: "카페 결과 렌더링",
      cafeDesc: "카페 프로젝트 결과 이미지와 영상",
      cafeProcess: "카페 공간 제작 과정",
      cafeProcessDesc: "스타일라이즈드 컨셉 공간 제작 설명 페이지",
      gamingResult: "게이밍룸 결과 렌더링",
      gamingDesc: "게이밍룸 프로젝트 이미지 갤러리",
      stageResult: "무대 결과 렌더링",
      stageDesc: "무대 디자인 프로젝트 이미지 갤러리",
      devArchive: "개발 프로젝트 아카이브",
      devArchiveDesc: "진행 해왔던 유니티 개발 프로젝트들을 볼 수 있습니다. (외부 링크)",
    }
  },
  en: {
    navWorks: "Works",
    navAbout: "About",
    heroTag: "3D Modeler, Developer, Artist",
    heroTitle1: "Feel Spaces, ",
    heroTitle2: "Through Technology.",
    viewWorks: "View Works",
    aboutMeBtn: "About Me",
    projects: "Projects",
    renders: "Renders",
    videos: "Videos",
    all: "All",
    viewLarge: "View Large",
    viewProcess: "View Process",
    videoLog: "Video Log",
    videoLogSub: "— Cinematic & Videos",
    playVideo: "Play Video",
    aboutTitle: "Pick me Up",
    aboutDesc1: "Passionate about 3D!",
    aboutDesc2: "Proficient with game engines!",
    aboutDesc3: "Skilled in 3D modeling!",
    aboutDesc4: "Always eager to build!",
    contact: "Contact",
    toolsTitle: "Software & Tools",
    resumeBtn: "View Resume",
    location: "Seoul, KR",
    groups: {
      glasses: "Glasses Project",
      cafe: "Cafe Project",
      gamingroom: "Gaming Room Project",
      stage: "Stage Design Project",
      dev: "Dev Project Archive",
    },
    items: {
      glassesResult: "Glasses Renderings",
      glassesDesc: "Result images and videos of the glasses project",
      glassesProcess: "Glasses Process",
      glassesProcessDesc: "Process explanation page",
      cafeResult: "Cafe Renderings",
      cafeDesc: "Result images and videos of the cafe project",
      cafeProcess: "Cafe Space Process",
      cafeProcessDesc: "Stylized concept space creation guide",
      gamingResult: "Gaming Room Renderings",
      gamingDesc: "Gaming room project image gallery",
      stageResult: "Stage Renderings",
      stageDesc: "Stage design project image gallery",
      devArchive: "Dev Project Archive",
      devArchiveDesc: "Explore past Unity development projects. (External Link)",
    }
  }
};

const LangContext = createContext<{ lang: 'ko' | 'en'; setLang: (l: 'ko' | 'en') => void; t: typeof TRANSLATIONS.ko }>({
  lang: 'ko',
  setLang: () => {},
  t: TRANSLATIONS.ko,
});

// ─── 공통 스크롤 함수 ─────────────────────────────────────────────────────
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// ─── Data ─────────────────────────────────────────────────────────────────────

interface PortfolioItem {
  id: string;
  titleKey: keyof typeof TRANSLATIONS.ko.items;
  descKey: keyof typeof TRANSLATIONS.ko.items;
  thumb: string;
  mediaType?: 'gallery';
  galleryImages?: string[];
  videoLinks?: string[];
  isProcess?: boolean;
  link?: string;
}

interface PortfolioGroup {
  groupKey: keyof typeof TRANSLATIONS.ko.groups;
  concept?: string;
  tools?: string[];
  emoji: string;
  items: PortfolioItem[];
}

const PORTFOLIO: PortfolioGroup[] = [
  {
    groupKey: "glasses",
    emoji: "👓",
    tools: ["Blender", "Unreal Engine"], 
    items: [
      { 
        id: "glasses_result_gallery", 
        titleKey: "glassesResult", 
        descKey: "glassesDesc", 
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
      },
      { 
        id: "glass_project_process", 
        titleKey: "glassesProcess", 
        descKey: "glassesProcessDesc", 
        thumb: `${import.meta.env.BASE_URL}images/glass_project_process.png`, 
        isProcess: true, 
        link: `${import.meta.env.BASE_URL}glasses_project/index.html` 
      },
    ],
  },
  {
    groupKey: "cafe",
    concept: "Stylized",
    tools: ["Blender", "Unreal Engine", "Substance Painter"],
    emoji: "☕",
    items: [
      { 
        id: "cafe_result_gallery", 
        titleKey: "cafeResult", 
        descKey: "cafeDesc", 
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
        ]
      },
      { 
        id: "cafe_project_process", 
        titleKey: "cafeProcess", 
        descKey: "cafeProcessDesc", 
        thumb: `${import.meta.env.BASE_URL}images/cafe_project_process.png`, 
        isProcess: true, 
        link: `${import.meta.env.BASE_URL}cafe_project/index.html` 
      },
    ],
  },
  {
    groupKey: "gamingroom",
    concept: "Stylized",
    tools: ["Blender", "Unreal Engine", "Substance Painter"], 
    emoji: "🎮",
    items: [
      { 
        id: "gamingroom_result_gallery", 
        titleKey: "gamingResult", 
        descKey: "gamingDesc", 
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
        ] 
      },
    ],
  },
  {
    groupKey: "stage",
    tools: ["Blender", "Unreal Engine", "Substance Painter"], 
    emoji: "🎭",
    items: [
      { 
        id: "stage_result_gallery", 
        titleKey: "stageResult", 
        descKey: "stageDesc", 
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
    groupKey: "dev",
    tools: ["Unity", "C#"],
    emoji: "🗃️",
    items: [
      {
        id: "dev_archive",
        titleKey: "devArchive",
        descKey: "devArchiveDesc",
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
];

const imageModules = import.meta.glob('/public/images/*/*.{png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' });
const INITIAL_IMAGES = Object.values(imageModules) as string[];

const renderImageCountStatic = Object.keys(import.meta.glob('/public/images/{cafe,glasses,gamingroom,stage}/*.{png,jpg,jpeg}', { eager: true })).length;
const videoCountStatic = 9;
// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useContext(LangContext);
  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
// 언어 변경 토글 UI (여백 및 대칭 정밀 조정)
  const LanguageToggle = () => (
    <div 
      className="flex items-center bg-white/5 border border-white/10 rounded-full py-1 pl-4 pr-1.5 cursor-pointer hover:bg-white/10 transition-colors shadow-sm"
      onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
      title="Change Language"
    >
      <Globe size={15} className="text-white/70" />
      <div className="flex items-center ml-3 font-['JetBrains_Mono'] text-[10px] sm:text-xs tracking-widest gap-0.5">
        <span className={`w-11 text-center py-1.5 rounded-full transition-all duration-300 ${lang === 'ko' ? 'bg-white text-black font-bold shadow-md' : 'text-white/40 hover:text-white/70'}`}>
          KO
        </span>
        <span className={`w-11 text-center py-1.5 rounded-full transition-all duration-300 ${lang === 'en' ? 'bg-white text-black font-bold shadow-md' : 'text-white/40 hover:text-white/70'}`}>
          EN
        </span>
      </div>
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""}`}>
      <nav className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-['Fraunces'] text-xl font-light tracking-tight text-foreground select-none cursor-pointer transition-opacity hover:opacity-70" 
          style={{ background: "none", border: "none" }}
        >
          JEONG YEON SU<span className="text-primary">.</span>
        </Link>
        
        {/* 데스크탑 네비게이션 */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {["works", "about"].map((l) => (
              <li key={l}>
                <a 
                  href={`#${l}`} 
                  onClick={(e) => scrollToSection(e, l)}
                  className="font-['Figtree'] text-sm text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
                >
                  {l === "works" ? t.navWorks : t.navAbout}
                </a>
              </li>
            ))}
          </ul>
          
          {/* 눈에 띄는 스위치형 토글 */}
          <LanguageToggle />
        </div>

        {/* 모바일 네비게이션 */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageToggle />
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      
      {open && (
        <div className="md:hidden bg-card border-b border-border px-8 py-6">
          <ul className="flex flex-col gap-5">
            {["works", "about"].map((l) => (
              <li key={l}>
                <a 
                  href={`#${l}`} 
                  onClick={(e) => {
                    scrollToSection(e, l);
                    setOpen(false);
                  }} 
                  className="font-['Figtree'] text-base text-foreground tracking-widest uppercase"
                >
                  {l === "works" ? t.navWorks : t.navAbout}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const [bgImages, setBgImages] = useState<string[]>([]);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const { t } = useContext(LangContext);

  useEffect(() => {
    const shuffled = [...INITIAL_IMAGES];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setBgImages(shuffled);
  }, []);

  useEffect(() => {
    if (bgImages.length === 0) return;
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bgImages]);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#050508] flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0 bg-[#050508]">
        {bgImages.map((src, index) => (
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
           {t.heroTag}
         </span>            
        
        <h1 className="font-['Fraunces'] text-white tracking-wide mb-8 md:mb-16" style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}>
          {t.heroTitle1}
          <span className="font-['Fraunces'] text-white/70 text-xl md:text-2xl">
          &nbsp;&nbsp; {t.heroTitle2}
          </span>
        </h1>
        
         <div className="flex flex-col sm:flex-row items-center gap-4">
           <a 
             href="#works" 
             onClick={(e) => scrollToSection(e, 'works')}
             className="group flex items-center gap-3 font-['Figtree'] text-sm font-medium bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
           >
             {t.viewWorks} <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </a>
           <a 
             href="#about" 
             onClick={(e) => scrollToSection(e, 'about')}
             className="flex items-center gap-2 font-['Figtree'] text-sm font-medium bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full hover:bg-white/15 backdrop-blur-md transition-all duration-300"
           >
             {t.aboutMeBtn}
           </a>
         </div>

         <div className="flex flex-wrap justify-center gap-10 md:gap-20 mt-24 pt-10 border-t border-white/10 w-full max-w-4xl">
           {[
             { value: String(PORTFOLIO.length), label: t.projects },
             { value: String(renderImageCountStatic), label: t.renders },
             { value: String(videoCountStatic), label: t.videos },
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

function HorizontalScrollContainer({ children, className }: { children: React.ReactNode, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
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
  const { t } = useContext(LangContext);

  const groups = activeGroup === "all" ? PORTFOLIO : PORTFOLIO.filter(g => t.groups[g.groupKey] === activeGroup);

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
    <section id="works" className="scroll-mt-20 bg-background py-32">
        <div className="max-w-[1400px] mx-auto pl-8 md:pl-16">
          <div className="mb-12 pr-8 md:pr-16">
            <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-4">02 — Works</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="font-['Fraunces'] font-light text-foreground leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                  {t.projects}
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                <button onClick={() => setActiveGroup("all")}
                  className={`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${activeGroup === "all" ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105 font-semibold" : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/20 hover:text-white"}`}>
                  {t.all}
                </button>
                {PORTFOLIO.map((g) => {
                  const groupName = t.groups[g.groupKey];
                  return (
                    <button key={g.groupKey} onClick={() => setActiveGroup(groupName)}
                      className={`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${activeGroup === groupName ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105 font-semibold" : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/20 hover:text-white"}`}>
                      {g.emoji} {groupName} {g.concept ? `(${g.concept})` : ""}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        <div className="flex flex-col gap-24">
          {groups.map((group) => {
            const groupName = t.groups[group.groupKey];
            const galleryItem = group.items.find(i => i.mediaType === "gallery");
            const processItem = group.items.find(i => i.isProcess);
            const standaloneLinkItem = group.items.find(i => i.link && !i.isProcess);
            
            const images = galleryItem?.galleryImages || [];

            return (
              <div key={group.groupKey} className="w-full">
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-8 pb-4 border-b border-white/10 pr-8 md:pr-16">
                  <span className="text-3xl">{group.emoji}</span>
                  <h3 className="font-['Fraunces'] font-medium text-foreground text-2xl md:text-3xl mr-2">{groupName}</h3>
                  
                  {group.concept && (
                    <span className="px-3 py-1 text-[10px] sm:text-xs font-['JetBrains_Mono'] tracking-widest text-primary border border-primary/50 bg-primary/10 rounded-full shadow-[0_0_8px_rgba(var(--primary-rgb),0.3)]">
                        {group.concept}
                    </span>
                  )}

                  {group.tools && group.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 text-[10px] sm:text-xs font-['JetBrains_Mono'] tracking-widest text-white/70 border border-white/20 bg-white/5 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>

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
                      <LoadingImage src={img} alt={`${groupName} ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium transition-opacity shadow-lg">{t.viewLarge}</span>
                      </div>
                    </div>
                  ))}

                  {galleryItem?.videoLinks?.map((link, idx) => (
                    <a key={idx} href={link} target="_blank" rel="noopener noreferrer" 
                       className="relative w-[200px] md:w-[280px] aspect-[4/3] rounded-xl overflow-hidden group bg-[#0a0a10] border border-white/10 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors flex-shrink-0">
                      <div className="p-4 bg-white/10 rounded-full group-hover:scale-110 transition-transform">
                        <ExternalLink size={24} className="text-white" />
                      </div>
                      <span className="font-medium text-white/90 text-sm md:text-base">Video {idx + 1}</span>
                    </a>
                  ))}

                  {processItem && (
                    <a href={processItem.link} target="_blank" rel="noopener noreferrer"
                       className="relative w-[200px] md:w-[280px] aspect-[4/3] rounded-xl overflow-hidden group border border-primary/30 bg-primary/5 flex flex-col items-center justify-center gap-4 hover:border-primary hover:bg-primary/10 transition-all flex-shrink-0">
                      <div className="p-4 bg-primary/20 rounded-full group-hover:scale-110 transition-transform">
                        <ArrowUpRight size={24} className="text-primary" />
                      </div>
                      <span className="font-medium text-primary text-sm md:text-base">{t.viewProcess}</span>
                    </a>
                  )}

                  {standaloneLinkItem && !galleryItem && (
                    <a href={standaloneLinkItem.link} target="_blank" rel="noopener noreferrer"
                      className="relative w-[200px] md:w-[280px] aspect-[4/3] rounded-xl overflow-hidden group bg-[#0a0a10] border border-white/10 flex flex-col items-center justify-center hover:border-primary/50 transition-colors flex-shrink-0">
                      
                      <div className="absolute inset-0 z-0">
                        <LoadingImage src={standaloneLinkItem.thumb} alt={t.items[standaloneLinkItem.titleKey]} className="w-full h-full opacity-40 group-hover:opacity-20 transition-opacity" />
                      </div>
                      
                      <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="p-4 bg-white/10 rounded-full group-hover:scale-110 transition-transform backdrop-blur-md">
                          <ExternalLink size={24} className="text-white" />
                        </div>
                        <span className="font-medium text-white/90 text-sm md:text-base">{t.items[standaloneLinkItem.titleKey]}</span>
                      </div>
                    </a>
                  )}
                </HorizontalScrollContainer>
              </div>
            );
          })}
        </div>
      </div>
      
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 transition-opacity" onClick={() => setLightbox(null)}>
          <div className="relative w-full max-w-[95vw] h-full flex items-center justify-center">
            
            <button type="button" onClick={() => setLightbox(null)} className="absolute top-4 right-4 z-20 rounded-full bg-white/10 border border-white/20 p-3 text-white hover:bg-white/20 backdrop-blur-md transition-all">
              <X size={24} />
            </button>
            
            <button type="button" disabled={lightbox.index === 0} 
                    onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: lightbox.index - 1 }); }} 
                    className="absolute left-4 md:left-8 z-20 rounded-full bg-black/50 border border-white/20 p-4 text-white hover:bg-black/80 backdrop-blur-md transition-all disabled:opacity-0 disabled:cursor-not-allowed">
              <ChevronLeft size={32} />
            </button>
            
            <LoadingImage 
              src={lightbox.images[lightbox.index]} 
              alt="Enlarged view" 
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="max-w-full max-h-[90vh] object-contain drop-shadow-2xl select-none cursor-zoom-out" 
            />
            
            <button type="button" disabled={lightbox.index >= lightbox.images.length - 1} 
                    onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: lightbox.index + 1 }); }} 
                    className="absolute right-4 md:right-8 z-20 rounded-full bg-black/50 border border-white/20 p-4 text-white hover:bg-black/80 backdrop-blur-md transition-all disabled:opacity-0 disabled:cursor-not-allowed">
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full font-['JetBrains_Mono'] text-white/80 text-sm pointer-events-none">
              {lightbox.index + 1} / {lightbox.images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ─── Video Gallery ─────────────────────────────────────────────────────────────

function VideoGallery() {
  const vimeoVideos: { id: string; type: string; tools?: string[] }[] = [
    { id: "1211900105", type: "portrait", tools: ["Blender", "Unreal Engine", "Substance Painter"] },
    { id: "1211900103", type: "portrait", tools: ["Blender", "Unreal Engine", "Substance Painter"] }, 
    { id: "1211900047", type: "portrait", tools: ["Blender", "Unreal Engine", "Substance Painter"] }, 
    { id: "1211900004", type: "portrait", tools: ["Blender", "Unreal Engine", "Substance Painter"] }, 
    { id: "1211913186", type: "portrait", tools: ["Blender", "Unreal Engine", "Substance Painter"] }, 

    { id: "1211907156", type: "landscape", tools: ["Unity", "C#", "Particle System"] },
    { id: "1211907154", type: "landscape", tools: ["Unity", "C#", "Shader"] },
    { id: "1211907153", type: "landscape", tools: ["Unity", "C#", "Particle Effect"] },
    { id: "1211907155", type: "landscape", tools: ["Unity", "C#", "Particle Effect"] },
  ];

  const { t } = useContext(LangContext);
  if (vimeoVideos.length === 0) return null;

  const portraitVideos = vimeoVideos.filter(video => video.type === "portrait");
  const landscapeVideos = vimeoVideos.filter(video => video.type === "landscape");

  const renderVideoCard = (video: { id: string; type: string; tools?: string[] }, index: number) => (
    <div 
      key={video.id + index} 
      className={`flex-shrink-0 flex flex-col gap-3 
        ${video.type === "landscape" ? "w-[400px] md:w-[480px]" : "w-[240px] md:w-[260px]"}`
      }
    >
      <a 
        href={`https://vimeo.com/${video.id}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0a] group relative cursor-pointer block w-full
          ${video.type === "landscape" ? "aspect-video" : "aspect-[9/16]"}
        `}
      >
        <iframe 
          src={`https://player.vimeo.com/video/${video.id}?background=1&autoplay=1&loop=1&muted=1&dnt=1`}
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowFullScreen
          title={`Vimeo Video ${video.id}`}
          className="absolute top-0 left-0 w-full h-full object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-700 pointer-events-none"
        ></iframe>
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 bg-white text-black px-5 py-2.5 rounded-full font-['Figtree'] text-xs font-bold transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2 shadow-xl">
            {t.playVideo} <Play size={14} className="fill-black" />
          </span>
        </div>
      </a>

      {video.tools && video.tools.length > 0 && (
        <div className="flex flex-wrap gap-2 px-1">
          {video.tools.map((tool, i) => (
            <span key={i} className="font-['JetBrains_Mono'] text-[10px] tracking-wider text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md cursor-default hover:text-white/90 hover:bg-white/10 transition-colors">
              {tool}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section id="shorts" className="scroll-mt-20 bg-[#050505] pt-10 pb-32">
      <div className="max-w-[1400px] mx-auto pl-8 md:pl-16">
        <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-white/10 pr-8 md:pr-16">
          <h3 className="font-['Fraunces'] font-normal text-white text-2xl md:text-3xl">{t.videoLog}</h3>
          <span className="font-['Figtree'] text-xs tracking-widest uppercase text-white/40">
            {t.videoLogSub}
          </span>
        </div>
        
        {portraitVideos.length > 0 && (
          <div className="mb-12">
            <HorizontalScrollContainer 
              className="flex overflow-x-auto gap-6 pb-8 pr-8 md:pr-16 items-start
              [&::-webkit-scrollbar]:h-1 
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/40
              transition-colors w-full"
            >
              {portraitVideos.map((video, index) => renderVideoCard(video, index))}
            </HorizontalScrollContainer>
          </div>
        )}

        {landscapeVideos.length > 0 && (
          <div>
            <HorizontalScrollContainer 
              className="flex overflow-x-auto gap-6 pb-8 pr-8 md:pr-16 items-start
              [&::-webkit-scrollbar]:h-1 
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/40
              transition-colors w-full"
            >
              {landscapeVideos.map((video, index) => renderVideoCard(video, index))}
            </HorizontalScrollContainer>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  const { t } = useContext(LangContext);

  return (
    <section id="about" className="scroll-mt-20 bg-card py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div className="relative max-w-[420px] w-full mx-auto flex flex-col gap-8">
            <div className="relative aspect-[4/4] overflow-hidden bg-secondary rounded-3xl shadow-xl">
              <LoadingImage src={`${import.meta.env.BASE_URL}images/working.png`} alt="Portrait" className="w-full h-full object-cover" />     
            </div>

            <div className="flex flex-col items-center pt-2">
              <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-4">{t.contact}</p>
              <div className="flex gap-5">
                <a 
                  href="https://www.instagram.com/yeon_ddooo/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary shadow-sm"
                >
                  <Instagram size={28} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/yeonsu0826/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary shadow-sm"
                >
                  <Linkedin size={28} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-['JetBrains_Mono'] text-xs text-primary tracking-widest uppercase mb-6">03 — About Me</p>
              <h3 className="font-['Fraunces'] font-light text-foreground leading-tight mb-8" style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}>
                <em className="italic text-primary">Pick me</em> Up
              </h3>
              <div className="flex flex-col gap-4 font-['Figtree'] text-base text-muted-foreground leading-relaxed">
                <p>{t.aboutDesc1}</p>
                <p>{t.aboutDesc2}</p>
                <p>{t.aboutDesc3}</p>
                <p>{t.aboutDesc4}</p>
              </div>
            </div>
            
            <div className="border-t border-border pt-8">
              <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-6">{t.toolsTitle}</p>
              <div className="flex flex-wrap gap-3">
                {TOOLS.map((tool) => (
                  <span key={tool.name} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <Link 
                to="/resume" 
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-foreground text-background py-4 px-6 font-medium transition-all hover:bg-foreground/90 hover:scale-[1.01] active:scale-[0.99]"
              >
                {t.resumeBtn}
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
  const { t } = useContext(LangContext);

  return (
    <footer className="bg-card border-t border-border px-8 py-8">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-['Fraunces'] text-lg font-light text-foreground">
          JEONG YEON SU<span className="text-primary">.</span>
        </span>

        <div className="flex items-center gap-8 sm:gap-12">
          <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase">
            {t.location}
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
  // 컴포넌트가 마운트될 때 localStorage에서 저장된 언어를 불러옴
  const [lang, setLangState] = useState<'ko' | 'en'>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved === 'en' || saved === 'ko') ? saved : 'ko';
  });

  // 언어를 변경할 때 localStorage에도 같이 저장해줌
  const setLang = (newLang: 'ko' | 'en') => {
    setLangState(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  const t = TRANSLATIONS[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div 
        className="min-h-screen w-full bg-background" 
        style={{ fontFamily: "'Figtree', sans-serif" }}
        >
        <SplashScreen />
        <Nav />
        <Hero />
        <Works />
        <VideoGallery />
        <About />
        <Footer />
      </div>
    </LangContext.Provider>
  );
}