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
      jinu: "케데헌 진우 만들기 프로젝트",
      cafe: "카페 프로젝트",
      gamingroom: "게이밍룸 프로젝트",
      stage: "무대 디자인 프로젝트",
      devAIGameGroup: "AI 게임",
      devAIVideoletterGroup: "AI 비디오 레터",
      devARContentGroup: "AR 콘텐츠",
      devInteractiveRacingGroup: "인터랙티브 레이싱",
      devTaeanGroup: "태안 교육청",
      devGeumsanGroup: "금산 교육청",
      devWorkGroup: "작업 과정",
    },
    items: {
      glassesResult: "안경 결과 렌더링",
      glassesDesc: "안경 프로젝트 결과 이미지와 영상",
      jinuResult: "진우 결과 렌더링",
      jinuDesc: "케데헌 진우 만들기 프로젝트 이미지 갤러리",
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
      devAIGame: "AI Game 프로젝트",
      devAIGameDesc: "AI를 활용한 게임 프로그램 캡쳐 화면입니다.",
      devAIVideoletter: "AI Video Letter",
      devAIVideoletterDesc: "AI 비디오 레터 구현 화면입니다.",
      devARContent: "AR Content 프로젝트",
      devARContentDesc: "증강현실(AR) 콘텐츠 프로그램 구현 화면입니다.",
      devInteractiveRacing: "Interactive Racing",
      devInteractiveRacingDesc: "모션 인식 기반 인터랙티브 레이싱 게임 캡쳐 화면입니다.",
      devTaean: "태안 인공지능교육 체험센터",
      devTaeanDesc: "태안 교육청 오프라인 인터랙티브 공간 세팅 사진입니다.",
      devGeumsan: "금산 AI 교육 체험센터",
      devGeumsanDesc: "금산 교육청 지능형 미디어 파이프라인 세팅 사진입니다.",
      devWork: "작업 과정 (Work Process)",
      devWorkDesc: "전반적인 프로젝트 개발 및 오프라인 환경 세팅 작업 과정입니다.",
      
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
      jinu: "KDH Jinu Character Project",
      cafe: "Cafe Project",
      gamingroom: "Gaming Room Project",
      stage: "Stage Design Project",
      devAIGameGroup: "AI Game",
      devAIVideoletterGroup: "AI Video Letter",
      devARContentGroup: "AR Content",
      devInteractiveRacingGroup: "Interactive Racing",
      devTaeanGroup: "Taean Center",
      devGeumsanGroup: "Geumsan Center",
      devWorkGroup: "Work Process",
    },
    items: {
      glassesResult: "Glasses Renderings",
      glassesDesc: "Result images and videos of the glasses project",
      jinuResult: "Jinu Renderings",
      jinuDesc: "KPop Demon Hunters Jinu character project gallery",
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
      devAIGame: "AI Game Project",
      devAIGameDesc: "Screenshot of the AI-based game program.",
      devAIVideoletter: "AI Video Letter",
      devAIVideoletterDesc: "Implementation screen of the AI video letter program.",
      devARContent: "AR Content Project",
      devARContentDesc: "Implementation screen of the Augmented Reality (AR) content.",
      devInteractiveRacing: "Interactive Racing",
      devInteractiveRacingDesc: "Screenshot of the motion-recognition interactive racing game.",
      devTaean: "Taean AI Education Center",
      devTaeanDesc: "Setup photos of the offline interactive space at the Taean Education Office.",
      devGeumsan: "Geumsan AI Education Center",
      devGeumsanDesc: "Setup photos of the intelligent media pipeline at the Geumsan Education Office.",
      devWork: "Work Process",
      devWorkDesc: "Images showing the overall project development and offline environment setup process."
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

const TOOLS = [
  { name: "Develop" },
  { name: "Design" },
  { name: "Unity" },  
  { name: "Unreal" },
  { name: "Blender" },
  { name: "Substance Painter" },
];

const TOOL_LOGOS: Record<string, string> = {
  "Unity": `${import.meta.env.BASE_URL}images/icons/unity.svg`, // 환경 변수 경로 사용 시
  "Unreal Engine": `${import.meta.env.BASE_URL}images/icons/unreal.svg`, // 또는 절대 경로 사용
  "Blender": `${import.meta.env.BASE_URL}images/icons/blender.svg`,
  "Substance Painter": `${import.meta.env.BASE_URL}images/icons/substance.svg`,
};

const PORTFOLIO: PortfolioGroup[] = [
  {
    groupKey: "jinu",
    tools: ["Design", "Blender", "Substance Painter"],
    emoji: "🎸",
    items: [
      {
        id: "jinu_result_gallery",
        titleKey: "jinuResult",
        descKey: "jinuDesc",
        thumb: `${import.meta.env.BASE_URL}jinu/14.png`,
        mediaType: "gallery",
        galleryImages: [
          `${import.meta.env.BASE_URL}jinu/1.png`,
          `${import.meta.env.BASE_URL}jinu/2.png`,
          `${import.meta.env.BASE_URL}jinu/3.png`,
          `${import.meta.env.BASE_URL}jinu/4.png`,
          `${import.meta.env.BASE_URL}jinu/5.png`,
          `${import.meta.env.BASE_URL}jinu/6.png`,
          `${import.meta.env.BASE_URL}jinu/7.png`,
          `${import.meta.env.BASE_URL}jinu/8.png`,
          `${import.meta.env.BASE_URL}jinu/9.png`,
          `${import.meta.env.BASE_URL}jinu/10.png`,
          `${import.meta.env.BASE_URL}jinu/11.png`,
          `${import.meta.env.BASE_URL}jinu/12.png`,
          `${import.meta.env.BASE_URL}jinu/13.png`,
          `${import.meta.env.BASE_URL}jinu/14.png`,
          `${import.meta.env.BASE_URL}jinu/15.png`,
          `${import.meta.env.BASE_URL}jinu/16.png`,
          `${import.meta.env.BASE_URL}jinu/17.png`,
          `${import.meta.env.BASE_URL}jinu/18.png`,
          `${import.meta.env.BASE_URL}jinu/19.png`,
          `${import.meta.env.BASE_URL}jinu/20.png`,
          `${import.meta.env.BASE_URL}jinu/21.png`,
          `${import.meta.env.BASE_URL}jinu/22.png`,
          `${import.meta.env.BASE_URL}jinu/23.png`,
        ],
      },
    ],
  },
  {
    groupKey: "glasses",
    emoji: "👓",
    tools: ["Design", "Blender", "Unreal Engine"], 
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
    tools: ["Design", "Blender", "Unreal Engine", "Substance Painter"],
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
    tools: ["Design", "Blender", "Unreal Engine", "Substance Painter"], 
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
    tools: ["Design", "Blender", "Unreal Engine", "Substance Painter"], 
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
  },// 1. AIGame 프로젝트
  {
    groupKey: "devAIGameGroup",
    tools: ["Develop", "Unity", "C#"],
    emoji: "🎮",
    items: [
      {
        id: "dev_aigame",
        titleKey: "devAIGame",
        descKey: "devAIGameDesc",
        thumb: `${import.meta.env.BASE_URL}images/dev/AIGame/1.png`,
        mediaType: "gallery",
        galleryImages: [
          `${import.meta.env.BASE_URL}images/dev/AIGame/1.png`,
          `${import.meta.env.BASE_URL}images/dev/AIGame/2.png`,
          `${import.meta.env.BASE_URL}images/dev/AIGame/3.png`,
          `${import.meta.env.BASE_URL}images/dev/AIGame/4.png`,
          `${import.meta.env.BASE_URL}images/dev/AIGame/5.png`,
          `${import.meta.env.BASE_URL}images/dev/AIGame/6.png`,
          `${import.meta.env.BASE_URL}images/dev/AIGame/7.png`,
          `${import.meta.env.BASE_URL}images/dev/AIGame/8.png`,
          `${import.meta.env.BASE_URL}images/dev/AIGame/9.png`,
          `${import.meta.env.BASE_URL}images/dev/AIGame/10.png`,
          `${import.meta.env.BASE_URL}images/dev/AIGame/11.png`,
          `${import.meta.env.BASE_URL}images/dev/AIGame/12.png`,
        ],
      },
    ],
  },

  // 2. AIVideoletter 프로젝트
  {
    groupKey: "devAIVideoletterGroup",
    tools: ["Develop","Unity", "C#"],
    emoji: "💌",
    items: [
      {
        id: "dev_aivideoletter",
        titleKey: "devAIVideoletter",
        descKey: "devAIVideoletterDesc",
        thumb: `${import.meta.env.BASE_URL}images/dev/AIVideoletter/1.png`,
        mediaType: "gallery",
        galleryImages: [
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/1.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/2.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/3.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/4.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/5.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/6.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/7.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/8.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/9.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/10.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/11.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/12.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/13.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/14.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/15.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/16.png`,
          `${import.meta.env.BASE_URL}images/dev/AIVideoletter/17.png`,
        ],
      },
    ],
  },

  // 3. ARContent 프로젝트
  {
    groupKey: "devARContentGroup",
    tools: ["Develop", "Unity", "AR"],
    emoji: "📱",
    items: [
      {
        id: "dev_arcontent",
        titleKey: "devARContent",
        descKey: "devARContentDesc",
        thumb: `${import.meta.env.BASE_URL}images/dev/ARContent/3.png`,
        mediaType: "gallery",
        galleryImages: [
          `${import.meta.env.BASE_URL}images/dev/ARContent/1.jpg`,
          `${import.meta.env.BASE_URL}images/dev/ARContent/2.jpg`,
          `${import.meta.env.BASE_URL}images/dev/ARContent/3.png`,
          `${import.meta.env.BASE_URL}images/dev/ARContent/4.png`,
          `${import.meta.env.BASE_URL}images/dev/ARContent/5.png`,
          `${import.meta.env.BASE_URL}images/dev/ARContent/6.png`,
          `${import.meta.env.BASE_URL}images/dev/ARContent/7.png`,
          `${import.meta.env.BASE_URL}images/dev/ARContent/8.png`,
          `${import.meta.env.BASE_URL}images/dev/ARContent/9.png`,
        ],
      },
    ],
  },

  // 4. InteractiveRacing 프로젝트
  {
    groupKey: "devInteractiveRacingGroup",
    tools: ["Develop", "Unity", "C#"],
    emoji: "🏎️",
    items: [
      {
        id: "dev_interactiveracing",
        titleKey: "devInteractiveRacing",
        descKey: "devInteractiveRacingDesc",
        thumb: `${import.meta.env.BASE_URL}images/dev/InteractiveRacing/1.png`,
        mediaType: "gallery",
        galleryImages: [
          `${import.meta.env.BASE_URL}images/dev/InteractiveRacing/1.png`,
          `${import.meta.env.BASE_URL}images/dev/InteractiveRacing/2.png`,
          `${import.meta.env.BASE_URL}images/dev/InteractiveRacing/3.png`,
          `${import.meta.env.BASE_URL}images/dev/InteractiveRacing/4.png`,
          `${import.meta.env.BASE_URL}images/dev/InteractiveRacing/5.png`,
          `${import.meta.env.BASE_URL}images/dev/InteractiveRacing/6.png`,
          `${import.meta.env.BASE_URL}images/dev/InteractiveRacing/7.png`,
          `${import.meta.env.BASE_URL}images/dev/InteractiveRacing/8.png`,
        ],
      },
    ],
  },

  // 5. Taean 프로젝트
  {
    groupKey: "devTaeanGroup",
    tools: ["Develop", "Hardware"],
    emoji: "🏫",
    items: [
      {
        id: "dev_taean",
        titleKey: "devTaean",
        descKey: "devTaeanDesc",
        thumb: `${import.meta.env.BASE_URL}images/dev/Taean/1.jpg`,
        mediaType: "gallery",
        galleryImages: [
          `${import.meta.env.BASE_URL}images/dev/Taean/1.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Taean/2.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Taean/3.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Taean/4.png`,
          `${import.meta.env.BASE_URL}images/dev/Taean/5.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Taean/6.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Taean/7.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Taean/8.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Taean/9.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Taean/10.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Taean/11.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Taean/12.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Taean/13.jpg`,
        ],
      },
    ],
  },

  // 6. Geumsan 프로젝트
  {
    groupKey: "devGeumsanGroup",
    tools: ["Develop", "Hardware"],
    emoji: "🏢",
    items: [
      {
        id: "dev_geumsan",
        titleKey: "devGeumsan",
        descKey: "devGeumsanDesc",
        thumb: `${import.meta.env.BASE_URL}images/dev/Geumsan/1.jpg`,
        mediaType: "gallery",
        galleryImages: [
          `${import.meta.env.BASE_URL}images/dev/Geumsan/1.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Geumsan/2.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Geumsan/3.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Geumsan/4.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Geumsan/5.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Geumsan/6.png`,
          `${import.meta.env.BASE_URL}images/dev/Geumsan/7.jpg`,
        ],
      },
    ],
  },

  // 7. Work Process 프로젝트
  {
    groupKey: "devWorkGroup",
    tools: ["Develop", "Process"],
    emoji: "🛠️",
    items: [
      {
        id: "dev_work",
        titleKey: "devWork",
        descKey: "devWorkDesc",
        thumb: `${import.meta.env.BASE_URL}images/dev/Work/12.jpg`,
        mediaType: "gallery",
        galleryImages: [
          `${import.meta.env.BASE_URL}images/dev/Work/1.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/2.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/3.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/4.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/5.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/6.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/7.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/8.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/9.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/10.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/11.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/12.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/13.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/14.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/15.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/16.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/17.png`,
          `${import.meta.env.BASE_URL}images/dev/Work/18.png`,
          `${import.meta.env.BASE_URL}images/dev/Work/19.png`,
          `${import.meta.env.BASE_URL}images/dev/Work/20.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/21.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/22.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/23.jpg`,
          `${import.meta.env.BASE_URL}images/dev/Work/24.jpg`,
        ],
      },
    ],
  },
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
    const fn = (e) => {
      // 이벤트 타겟이 window이거나 DOM 요소일 경우를 모두 처리
      const scrollTop = e.target.scrollTop || window.scrollY || document.documentElement.scrollTop || 0;
      setScrolled(scrollTop > 40);
    };
    
    // 이벤트 리스너 맨 뒤에 'true'를 넣어서 스크롤 이벤트를 강제로 가로챔
    window.addEventListener("scroll", fn, true);
    return () => window.removeEventListener("scroll", fn, true);
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
    <header 
      // 2. bg-background/90 대신 bg-black/90으로 확실한 색상 지정
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-white/10" 
          : "bg-transparent border-b border-transparent" 
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-['Fraunces'] text-xl font-light tracking-tight text-white select-none cursor-pointer transition-opacity hover:opacity-70" 
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
  const [mainTab, setMainTab] = useState<'all' | 'Design' | 'Develop'>('all');
  const [activeGroup, setActiveGroup] = useState<string>("all");
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const { t } = useContext(LangContext);

  // 1. 메인 탭 필터링
  const filteredByMainTab = PORTFOLIO.filter((g) => {
    if (mainTab === 'all') return true;
    return g.tools?.includes(mainTab);
  });

  // 2. 하위 카테고리 필터링
  const displayGroups = activeGroup === "all" 
    ? filteredByMainTab 
    : filteredByMainTab.filter(g => t.groups[g.groupKey] === activeGroup);

  useEffect(() => {
    setActiveGroup('all');
  }, [mainTab]);

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
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        
        {/* 상단 탭 영역 */}
        <div className="mb-12 relative">
          <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-4">02 — Works</p>
          
          <h2 className="font-['Fraunces'] font-light text-foreground leading-tight mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            {t.projects}
          </h2>

          {/* 💡 매우 슬림해진 크롬 탭 래퍼 */}
          <div className="relative flex items-end w-full border-b border-white/10 mt-8">
            <div className="flex gap-1 md:gap-2 px-3 relative z-10">
              {(['all', 'Design', 'Develop'] as const).map((tab) => {
                const isActive = mainTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setMainTab(tab)}
                    className={`
                      relative px-5 py-1.5 md:px-7 md:py-2 font-['JetBrains_Mono'] text-xs tracking-widest uppercase transition-all duration-300
                      rounded-t-[10px] 
                      flex items-center justify-center
                      ${isActive 
                        ? "bg-[#141419] text-primary font-bold shadow-[0_-5px_15px_-3px_rgba(0,0,0,0.4)]" 
                        : "bg-transparent text-white/40 hover:text-white hover:bg-white/5" 
                      }
                    `}
                    // 💡 탭 자체를 아래로 1px 내려서 밑줄과 맞닿게 함
                    //style={{ marginBottom: '0px' }} 
                  >
                    <span className="relative z-20">{tab === 'all' ? t.all : tab}</span>
                    
                    {/* 활성화된 탭의 양옆 곡선 마감 */}
                    {isActive && (
                      <>
                        <div className="absolute -left-[8px] bottom-0 w-[8px] h-[8px] pointer-events-none">
                           <svg viewBox="0 0 8 8" className="w-full h-full fill-[#141419]">
                             <path d="M 0 8 A 8 8 0 0 0 8 0 L 8 8 Z" />
                           </svg>
                        </div>
                        <div className="absolute -right-[8px] bottom-0 w-[8px] h-[8px] pointer-events-none">
                           <svg viewBox="0 0 8 8" className="w-full h-full fill-[#141419]">
                             <path d="M 8 8 A 8 8 0 0 1 0 0 L 0 8 Z" />
                           </svg>
                        </div>
                        {/* 💡 핵심 수정: 가림막을 극도로 얇게(2px) 줄이고, 위치를 바닥 선에 정확히 밀착 */}
                        <div className="absolute -bottom-[1px] left-0 w-full h-[0.1px] bg-[#050508] z-20"></div>
                      </>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
          
          {/* 하위 알약 필터 버튼들 */}
          <div className="flex flex-wrap gap-2 md:gap-3 pt-5 px-3">
            <button onClick={() => setActiveGroup("all")}
              className={`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${activeGroup === "all" ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105 font-semibold" : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/20 hover:text-white"}`}>
              {t.all}
            </button>
            {filteredByMainTab.map((g) => {
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

        {/* 카드형 인덱스(Grid) 레이아웃 */}
        {displayGroups.length === 0 ? (
          <div className="text-white/40 font-['JetBrains_Mono'] py-20 text-center">해당하는 카테고리의 프로젝트가 없습니다.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 px-3">
            {displayGroups.map((group) => {
              const groupName = t.groups[group.groupKey];
              const mainGalleryItem = group.items.find(i => i.mediaType === "gallery");
              const processItem = group.items.find(i => i.isProcess);
              const allImages = mainGalleryItem?.galleryImages || [];
              const coverImage = mainGalleryItem?.thumb || processItem?.thumb || "";

              return (
                <div key={group.groupKey} className="group flex flex-col gap-4">
                  <div 
                    onClick={() => allImages.length > 0 && setLightbox({ images: allImages, index: 0 })}
                    className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0a10] border border-white/10 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] ${allImages.length > 0 ? "cursor-pointer" : ""}`}
                  >
                    {coverImage && (
                      <LoadingImage 
                        src={coverImage} 
                        alt={groupName} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                      />
                    )}
                    
                    {allImages.length > 0 && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          {t.viewLarge} <span className="font-normal opacity-50">({allImages.length})</span>
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 px-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-['Fraunces'] font-medium text-foreground text-xl md:text-2xl flex items-center gap-2">
                        {group.emoji} {groupName}
                      </h3>
                      {processItem && (
                        <a 
                          href={processItem.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-['JetBrains_Mono'] text-primary hover:text-white transition-colors bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20"
                        >
                          {t.viewProcess} <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-1">
                      {group.concept && (
                        <span className="text-[10px] sm:text-xs font-['JetBrains_Mono'] tracking-widest text-white/50 bg-white/5 px-2 py-1 rounded-md border border-white/10">
                          {group.concept}
                        </span>
                      )}
                      {group.tools && group.tools.length > 0 && (
                        <div className="flex flex-wrap gap-2 px-1">
                          {group.tools.map((tool, i) => (
                            <span 
                              key={i} 
                              // 👇 flex와 items-center를 주어 아이콘과 텍스트의 높이를 맞춥니다.
                              className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] tracking-wider text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md cursor-default hover:text-white/90 hover:bg-white/10 transition-colors"
                            >
                              {/* TOOL_LOGOS 객체에 등록된 툴이라면 SVG 이미지를 보여줍니다 */}
                              {TOOL_LOGOS[tool] && (
                                <img 
                                  src={TOOL_LOGOS[tool]} 
                                  alt={tool} 
                                  className="w-3.5 h-3.5 object-contain" 
                                  // SVG가 어두워서 안 보이면 아래 주석을 풀어 색상을 반전시킵니다.
                                  // style={{ filter: "invert(1) brightness(0.8)" }}
                                />
                              )}
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      
      {/* 라이트박스 모달 */}
      {lightbox && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 transition-opacity" 
          style={{ zIndex: 99999 }}
          onClick={() => setLightbox(null)}
        >
          <div className="relative w-full max-w-[95vw] h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setLightbox(null)} className="absolute top-4 right-4 z-50 rounded-full bg-white/10 border border-white/20 p-3 text-white hover:bg-white/20 backdrop-blur-md transition-all cursor-pointer">
              <X size={24} />
            </button>
            <button type="button" disabled={lightbox.index === 0} 
                    onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: lightbox.index - 1 }); }} 
                    className="absolute left-4 md:left-8 z-50 rounded-full bg-black/50 border border-white/20 p-4 text-white hover:bg-black/80 backdrop-blur-md transition-all disabled:opacity-0 disabled:cursor-not-allowed cursor-pointer">
              <ChevronLeft size={32} />
            </button>
            <img 
              src={lightbox.images[lightbox.index]} 
              alt="Enlarged view" 
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="max-w-full max-h-[90vh] object-contain drop-shadow-2xl select-none cursor-zoom-out relative z-40" 
            />
            <button type="button" disabled={lightbox.index >= lightbox.images.length - 1} 
                    onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: lightbox.index + 1 }); }} 
                    className="absolute right-4 md:right-8 z-50 rounded-full bg-black/50 border border-white/20 p-4 text-white hover:bg-black/80 backdrop-blur-md transition-all disabled:opacity-0 disabled:cursor-not-allowed cursor-pointer">
              <ChevronRight size={32} />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full font-['JetBrains_Mono'] text-white/80 text-sm pointer-events-none">
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
    { id: "1220354350", type: "portrait", tools: ["Blender", "Unreal Engine", "Substance Painter"] },
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
            <span 
              key={i} 
              // flex와 items-center를 추가해 로고와 텍스트의 수직 중앙을 맞춥니다.
              className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] tracking-wider text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md cursor-default hover:text-white/90 hover:bg-white/10 transition-colors"
            >
              {/* TOOL_LOGOS에 이 툴의 이름이 등록되어 있다면 이미지를 띄웁니다 */}
              {TOOL_LOGOS[tool] && (
                <img 
                  src={TOOL_LOGOS[tool]} 
                  alt={tool} 
                  className="w-3.5 h-3.5 object-contain" 
                  // 로고 색상이 너무 어두워서 안 보이면 아래 주석을 풀어 색상을 반전시키세요.
                  // style={{ filter: "invert(1) brightness(0.8)" }}
                />
              )}
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