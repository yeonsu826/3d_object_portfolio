// Resume/CoverLetter.tsx
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, createContext, useContext } from "react";
import { Globe, User, Calendar, BookOpen, Brain, Gamepad2, MapPin, Music, Sparkles } from "lucide-react";
import "./Resume.css";

// ─── Translations ─────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  ko: {
    backToPort: "BACK TO PORTFOLIO",
    profileTitle: "PERSONAL PROFILE",
    profileSub: "정연수에 대해",
    galleryTitle: "GALLERY",
    profileData: [
      { key: "성별", value: "여성", accent: "var(--accent)" },
      { key: "생년월일", value: "1996년생 · 만 29세", accent: "var(--accent2)" },
      { key: "종교", value: "기독교 · 매주 주일 교회에 갑니다", accent: "var(--accent2)" },
      { key: "MBTI", value: "INTP · 몰입할 것이 있어야 인생이 살만합니다", accent: "var(--accent)" },
      { key: "좋아하는 게임", value: "동물의 숲 · 젤다의 전설 · 테일즈 런너", accent: "var(--accent2)" },
      { key: "사는 지역", value: "서울특별시 종로구 구기동", accent: "var(--accent2)" },
      { key: "취미", value: "기타치기 · 교회 밴드부 활동 중", accent: "var(--accent)" },
      { key: "적성", value: "컴공에서 고통받다 발견한 나의 진짜 재능 — 3D 공간 구현 이제는 3D를 사랑합니다", accent: "var(--accent)", wide: true },
    ],
    coverLetter: [
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
        body: "유니티 클라이언트 개발자로 실무를 경험하며 3D 공간의 논리적 구조를 체득했다면, 퇴사 후에는 'MBC 미디어 캠퍼스 버추얼 테크 전문가 과정'에 참여하여 시각적인 아트 구현 능력을 극한으로 끌어올렸습니다. 약 7개월간 블렌더(Blender)를 활용한 하드서페이스 프롭 모델링부터 캐릭터 리깅, 마블러스 디자이너 기반의 CFX(의상 시뮬레이션)까지 3D 에셋 제작의 전체 파이프라인을 집중적으로 훈련했습니다. 특히 제작한 에셋을 언리얼 엔진(Unreal Engine)에 임포트하여 모션 캡처 데이터와 AI 립싱크 연동하는 프로젝트를 수행하며, Unity뿐만 아니라 Unreal 환경에서의 머티리얼 세팅과 물리 충돌 연산 최적화 노하우까지 섭렵할 수 있었습니다.",
      },
      {
        label: "개발자와 아티스트 간의 소통 수월, 예술적 감각과 기술 둘 다 놓치지 않음",
        body: "개발자의 논리로 엔진을 이해하고, 아티스트의 감각으로 툴을 다루는 훈련과정을 수료 했습니다. 앞으로의 단기적인 목표는 팀의 아트 스타일과 파이프라인에 빠르게 적응하여 퀄리티 기준을 충족하는 최적화된 3D 에셋을 안정적으로 생산하는 것입니다. 나아가 개발자와 아티스트 간의 소통 비용을 줄이고, 원활한 협업을 이끄는 브릿지 역할을 수행하고 싶습니다. 최종적으로는 미적 감각과 기술적 문제 해결 능력을 완벽하게 조화시켜, 어떠한 제약 환경에서도 퍼포먼스 저하 없이 최고의 시각적 몰입감을 선사하는 '대체 불가능한 3D 아티스트'로 성장하겠습니다.",
      },
    ]
  },
  en: {
    backToPort: "BACK TO PORTFOLIO",
    profileTitle: "PERSONAL PROFILE",
    profileSub: "About Jeong Yeon Su",
    galleryTitle: "GALLERY",
    profileData: [
      { key: "Gender", value: "Female", accent: "var(--accent)" },
      { key: "Birth", value: "Born in 1996 · 29 years old", accent: "var(--accent2)" },
      { key: "Religion", value: "Christian · Attend church every Sunday", accent: "var(--accent2)" },
      { key: "MBTI", value: "INTP · Life is exciting when there's something to dive deep into", accent: "var(--accent)" },
      { key: "Fav Games", value: "Animal Crossing · The Legend of Zelda · Tales Runner", accent: "var(--accent2)" },
      { key: "Location", value: "Gugi-dong, Jongno-gu, Seoul", accent: "var(--accent2)" },
      { key: "Hobbies", value: "Playing guitar · Active in the church band", accent: "var(--accent)" },
      { key: "Aptitude", value: "My true talent discovered while struggling in CS — 3D Spatial Creation. I absolutely love 3D now.", accent: "var(--accent)", wide: true },
    ],
    coverLetter: [
      {
        label: "Built a solid logical foundation for 3D creation by applying computer science knowledge to practical Unity development experience",
        body: "During my computer science studies, relying solely on invisible software logic left my artistic creativity somewhat unfulfilled. However, this concern soon became an opportunity to discover my true aptitude for 'real-time graphics and spatial directing.' Based on the algorithmic thinking I learned in my major, I joined as a Unity client developer after graduation. Through about 1 year and 8 months of practical experience, I realized how a developer's solid logical foundation becomes a powerful weapon in 3D creation.",
      },
      {
        label: "Secured deep aesthetic sense and practical understanding of 3D spatial design through AR content development using Unity and Vuforia",
        body: "Working as a senior researcher, I went beyond simply handling standardized data and focused on creating 'visual and interactive 3D spaces' where users can fully immerse themselves. Notably, I developed immersive AR content using Unity and Vuforia, rendering vivid marine life and natural environments based on offline marker recognition. This process solidified my sense of multi-dimensional 3D spatial design, bridging physical layouts with 3D engines. Furthermore, I built an intelligent 3D media generation pipeline that integrates multilingual dubbing and voice APIs with the engine to dynamically visualize customized video letters and documentary stories. These experiences served as a cornerstone for designing 3D environments and understanding how assets interact in real-time.",
      },
      {
        label: "Completed my 3D tech stack by mastering asset creation pipelines in both Unity and Unreal Engine",
        body: "While my Unity development experience helped me internalize the logical structure of 3D spaces, I subsequently joined the 'MBC Media Campus Virtual Tech Expert Course' to push my visual art implementation skills to the limit. For 7 months, I intensively trained in the entire 3D asset creation pipeline, from hard surface prop modeling in Blender to character rigging and CFX (cloth simulation) via Marvelous Designer. In particular, by importing my assets into Unreal Engine and linking motion capture data with AI lip-sync, I mastered material settings and physics optimization know-how in both Unity and Unreal environments.",
      },
      {
        label: "Bridging the gap between developers and artists, capturing both artistic sensibility and technical excellence",
        body: "I have trained to understand engines with a developer's logic and handle tools with an artist's sensibility. My short-term goal is to quickly adapt to the team's art style and pipeline, stably producing optimized 3D assets that meet top quality standards. Furthermore, I aim to act as a bridge that reduces communication costs between developers and artists, fostering smooth collaboration. Ultimately, by perfectly harmonizing aesthetic sense with technical problem-solving, I will grow into an 'irreplaceable 3D artist' who delivers the best visual immersion without performance degradation in any constrained environment.",
      },
    ]
  }
};

const CoverLetterLangContext = createContext<{ lang: 'ko' | 'en'; setLang: (l: 'ko' | 'en') => void; t: typeof TRANSLATIONS.ko }>({
  lang: 'ko',
  setLang: () => {},
  t: TRANSLATIONS.ko,
});

// 아이콘 매핑 배열 (이모티콘 대신 사용)
const PROFILE_ICONS = [User, Calendar, BookOpen, Brain, Gamepad2, MapPin, Music, Sparkles];

function PersonalProfile() {
  const { t } = useContext(CoverLetterLangContext);
  
  // 번역 데이터와 아이콘 컴포넌트를 결합
  const items = t.profileData.map((data, index) => ({
    ...data,
    IconComponent: PROFILE_ICONS[index % PROFILE_ICONS.length]
  }));

  return (
    <div className="rounded-sm overflow-hidden mb-2" style={{ border: "1px solid var(--border)" }}>
      <div className="px-5 py-3 flex items-center gap-2" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <span className="mono text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--muted)" }}>{t.profileTitle}</span>
        <span className="mono text-xs" style={{ color: "var(--border)" }}>·</span>
        <span className="mono text-xs" style={{ color: "var(--muted)" }}>{t.profileSub}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0" style={{ background: "#0d0d14", borderColor: "var(--border)" }}>
        {items.filter((i) => !i.wide).map((item) => (
          <div key={item.key} className="flex items-start gap-3 px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
            <span className="mono text-sm mt-0.5 shrink-0 flex items-center" style={{ color: item.accent }}>
              <item.IconComponent size={14} />
            </span>
            <div>
              <div className="mono text-xs mb-1 uppercase" style={{ color: "var(--muted)", letterSpacing: "0.15em" }}>{item.key}</div>
              <div className="text-xs leading-5" style={{ color: "#94a3b8" }}>{item.value}</div>
            </div>
          </div>
        ))}
        {items.filter((i) => i.wide).map((item) => (
          <div key={item.key} className="flex items-start gap-3 px-5 py-4 sm:col-span-2" style={{ borderTop: "1px solid var(--border)" }}>
            <span className="mono text-sm mt-0.5 shrink-0 flex items-center" style={{ color: item.accent }}>
              <item.IconComponent size={14} />
            </span>
            <div>
              <div className="mono text-xs mb-1 uppercase" style={{ color: "var(--muted)", letterSpacing: "0.15em" }}>{item.key}</div>
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useContext(CoverLetterLangContext);

  useEffect(() => {
    const modules = import.meta.glob('/public/coverletter/*.{jpg,jpeg,png,webp}');
    const imagePaths = Object.keys(modules).map(path => {
      const relativePath = path.replace('/public', '');
      const baseUrl = import.meta.env.BASE_URL || '/';
      return `${baseUrl}${relativePath.replace(/^\//, '')}`;
    });
    setImages(imagePaths);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div className="mt-20 border-t border-[var(--border)] pt-12 w-full overflow-hidden">
      <h2 className="mono text-sm text-white mb-6 uppercase tracking-widest">{t.galleryTitle}</h2>
      
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
  const [lang, setLangState] = useState<'ko' | 'en'>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved === 'en' || saved === 'ko') ? saved : 'ko';
  });

  const setLang = (newLang: 'ko' | 'en') => {
    setLangState(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  const t = TRANSLATIONS[lang];

  return (
    <CoverLetterLangContext.Provider value={{ lang, setLang, t }}>
      <div style={{ background: "var(--bg)", minHeight: "100vh" }} className="scanline pb-20">
        <div className="max-w-[800px] mx-auto px-6 pt-24">
          
          {/* 상단 네비게이션 & 언어 토글 */}
          <div className="flex items-center justify-between mb-10">
            <Link
              to="/"
              className="mono text-sm flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ color: "var(--accent2)" }}
            >
              {"<- "}{t.backToPort}
            </Link>
            
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
          </div>

          <PersonalProfile />

          <div className="mt-16 flex flex-col gap-6">
            {t.coverLetter.map((sec, i) => (
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

          <GallerySection />
          
        </div>
      </div>
    </CoverLetterLangContext.Provider>
  );
}