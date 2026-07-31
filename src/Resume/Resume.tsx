import { useState, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { Globe, Mail, Github, MapPin, Zap, Link2, Target, Layout } from "lucide-react";
import "./Resume.css";

// ─── Translations ─────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  ko: {
    resumeTitle: "이력서 · 2026",
    name: "정연수",
    location: "서울, 대한민국",
    dualityDev: [
      "Unity · C# 실무 2년+",
      "렌더링 파이프라인 이해",
      "폴리곤 / 드로우콜 최적화",
      "AR Foundation · Vuforia",
      "AI 연동 인터랙티브 콘텐츠",
    ],
    dualityArt: [
      "Blender 3D 모델링",
      "환경 씬 & 공간 구성",
      "PBR 텍스처링",
      "실감형 콘텐츠 제작",
      "Unreal Engine 5",
    ],
    secExp: "EXPERIENCE",
    secEdu: "EDUCATION",
    secTools: "TOOLS",
    secCerts: "CERTIFICATIONS",
    secStrengths: "KEY STRENGTHS",
    expData: [
      {
        company: "(주)이앤오즈",
        dept: "개발팀 선임연구원",
        period: "2024. 04 — 2025. 11",
        duration: "1년 8개월",
        type: "실감형 콘텐츠 제작",
        items: [
          {
            title: "AR Walk 해양 생물 체험 앱 개발",
            tags: ["Unity", "AR", "Vuforia"],
            desc: "벽면에 부착된 마커를 태블릿 카메라로 인식하면 다양한 해양 생물이 증강현실(AR)로 나타나는 실감형 오프라인 체험 콘텐츠 개발.",
          },
          {
            title: "AR 느티나무숲 및 AI 다큐멘터리 생성 시스템",
            tags: ["Unity", "AR", "AI 음성 변환", "AI API 연동"],
            desc: "마커 인식 기반의 AR 느티나무 설명 콘텐츠. AR 체험을 촬영한 영상을 기반으로, 사용자가 42개국 언어 중 하나를 선택하면 해당 언어로 번역 및 더빙된 다큐멘터리 영상을 자동 생성하는 시스템 구축.",
          },
          {
            title: "AI 기반 다국어 영상 편지 시스템",
            tags: ["Unity", "AI 음성 변환", "AI API 연동"],
            desc: "사용자가 한국어로 녹음한 영상을 바탕으로, 본인의 목소리 톤을 유지한 채 42개국 중 선택한 국가의 언어로 변환된 다국어 영상 편지를 생성하는 AI 파이프라인 개발.",
          },
        ]
      },
      {
        company: "(사)한국산업기술보호협회",
        dept: "방산팀 인턴",
        period: "2022. 09 — 2022. 12",
        duration: "4개월",
        type: "방산 행정",
        items: [
          {
            title: "방산 데이터 정리 및 보고서 작성",
            tags: ["문서작성", "문서관리", "전산입력"],
            desc: "방산 관련 데이터 분류 및 정리, 공식 보고서 작성 및 전산 입력 업무 수행.",
          },
        ]
      }
    ],
    eduData: [
      {
        school: "명지대학교 (자연)",
        major: "컴퓨터공학과 (편입)",
        status: "졸업",
        period: "2021. 03 — 2023. 02",
      }
    ],
    certData: [
      { date: "2019. 09", name: "네트워크관리사 2급", issuer: "한국정보통신자격협회" },
      { date: "2019. 04", name: "정보처리산업기사", issuer: "한국산업인력공단" },
    ],
    strengthsData: [
      { icon: Zap, text: "엔진 파이프라인 기반 최적화 에셋 제작" },
      { icon: Link2, text: "개발자 ↔ 아티스트 소통 가교 역할" },
      { icon: Target, text: "AR / 실감형 콘텐츠 구현 경험" },
      { icon: Layout, text: "AI 기술 연동 인터랙티브 시스템" },
    ],
    btnCoverLetter: "자기소개서 보러가기 ➔",
    footerLeft: ">_ 정연수 · 이력서 · 2026",
    footerRight: "= TA (Technical Artist) or 3D Artist"
  },
  en: {
    resumeTitle: "Resume · 2026",
    name: "JEONG YEON SU",
    location: "Seoul, South Korea",
    dualityDev: [
      "2+ Years Unity & C# Experience",
      "Understanding of Rendering Pipeline",
      "Polygon & Draw Call Optimization",
      "AR Foundation & Vuforia",
      "AI-Integrated Interactive Content",
    ],
    dualityArt: [
      "Blender 3D Modeling",
      "Environment & Space Composition",
      "PBR Texturing",
      "Immersive Content Creation",
      "Unreal Engine 5",
    ],
    secExp: "EXPERIENCE",
    secEdu: "EDUCATION",
    secTools: "TOOLS",
    secCerts: "CERTIFICATIONS",
    secStrengths: "KEY STRENGTHS",
    expData: [
      {
        company: "ENOZ's Co., Ltd.",
        dept: "Senior Researcher, Dev Team",
        period: "2024. 04 — 2025. 11",
        duration: "1 Yr 8 Mos",
        type: "Immersive Content Dev",
        items: [
          {
            title: "AR Walk Marine Life Experience App",
            tags: ["Unity", "AR", "Vuforia"],
            desc: "Developed an immersive offline AR application where marine life appears in augmented reality when a tablet camera recognizes wall-mounted markers.",
          },
          {
            title: "AR Zelkova Forest & AI Documentary System",
            tags: ["Unity", "AR", "AI Voice", "AI API"],
            desc: "Built a marker-based AR explanation content. Developed a system that automatically generates translated and dubbed documentary videos in 42 languages based on recorded AR experiences.",
          },
          {
            title: "AI-based Multilingual Video Letter System",
            tags: ["Unity", "AI Voice", "AI API"],
            desc: "Developed an AI pipeline that generates a multilingual video letter in a chosen language among 42 countries, maintaining the user's original voice tone from a Korean-recorded video.",
          },
        ]
      },
      {
        company: "KAITS",
        dept: "Intern, Defense Industry Team",
        period: "2022. 09 — 2022. 12",
        duration: "4 Mos",
        type: "Defense Administration",
        items: [
          {
            title: "Defense Data Organization & Reporting",
            tags: ["Documentation", "Data Entry"],
            desc: "Classified and organized defense-related data, wrote official reports, and managed database entry tasks.",
          },
        ]
      }
    ],
    eduData: [
      {
        school: "Myongji University (Natural Sci)",
        major: "Computer Science (Transfer)",
        status: "Graduated",
        period: "2021. 03 — 2023. 02",
      }
    ],
    certData: [
      { date: "2019. 09", name: "Network Administrator Level 2", issuer: "ICQA" },
      { date: "2019. 04", name: "Industrial Engineer Information Processing", issuer: "HRDK" },
    ],
    strengthsData: [
      { icon: Zap, text: "Creation of Optimized Assets Based on Engine Pipelines" },
      { icon: Link2, text: "Bridge for Communication Between Developers & Artists" },
      { icon: Target, text: "Experience in Implementing AR & Immersive Content" },
      { icon: Layout, text: "Interactive Systems Integrated with AI Technology" },
    ],
    btnCoverLetter: "View Cover Letter ➔",
    footerLeft: ">_ JEONG YEON SU · Resume · 2026",
    footerRight: "= TA (Technical Artist) or 3D Artist"
  }
};

const ResumeLangContext = createContext<{ lang: 'ko' | 'en'; setLang: (l: 'ko' | 'en') => void; t: typeof TRANSLATIONS.ko }>({
  lang: 'ko',
  setLang: () => {},
  t: TRANSLATIONS.ko,
});
export default function CoverLetter() {
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
    <ResumeLangContext.Provider value={{ lang, setLang, t }}>
      <div
        style={{ background: "var(--bg)", minHeight: "100vh" }}
        className="scanline"
      >
        {/* 내부 코드 동일 */}
        <div className="max-w-5xl mx-auto px-6 py-12">
          <Header />
          <Duality />
          <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-[1fr_290px]">
            <main className="flex flex-col gap-10">
              <Experience />
              <Education />
            </main>
            <aside className="flex flex-col gap-8">
              <Tools />
              <Certifications />
              <Strengths />
            </aside>
          </div>
          <div className="mt-16 text-center" style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem" }}>
            <Link 
              to="/coverletter" 
              className="inline-block px-8 py-3 mono text-xs tracking-widest font-semibold rounded-sm transition-opacity hover:opacity-80"
              style={{ 
                background: "var(--accent)", 
                color: "#fff",
                boxShadow: "0 4px 14px 0 rgba(6, 182, 212, 0.39)"
              }}
            >
              {t.btnCoverLetter}
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    </ResumeLangContext.Provider>
  );
}

function Header() {
  const { lang, setLang, t } = useContext(ResumeLangContext);

  return (
    <div
      style={{ borderBottom: "1px solid var(--border)" }}
      className="pb-8"
    >
      <div className="flex items-start justify-between flex-wrap gap-6">
        <div>
          <div
            className="mono text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent2)" }}
          >
            &gt;_ {t.resumeTitle}
          </div>
          <h1
            className="mono text-5xl font-bold mb-3"
            style={{
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >
            {t.name}
          </h1>
          <div className="flex items-center gap-3 mt-3 flex-wrap">
            <span
              className="mono text-xs px-3 py-1.5 rounded-sm font-semibold"
              style={{
                background: "var(--accent)",
                color: "#fff",
                letterSpacing: "0.12em",
              }}
            >
              3D DESIGNER
            </span>
            <span
              className="mono text-xs px-3 py-1.5 rounded-sm"
              style={{
                background: "rgba(6,182,212,0.12)",
                color: "var(--accent2)",
                border: "1px solid rgba(6,182,212,0.3)",
                letterSpacing: "0.08em",
              }}
            >
              UNITY DEVELOPER
            </span>
          </div>
        </div>
        
        {/* 오른쪽 컨택트 & 언어 토글 영역 */}
        <div className="flex flex-col items-end gap-5">
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

          <div
            className="mono text-xs flex flex-col gap-2.5"
            style={{ color: "var(--muted)" }}
          >
            <ContactRow icon={<Mail size={14}/>} value="yeonsu826@email.com" />
            <ContactRow icon={<Github size={14}/>} value="github.com/yeonsu826" />
            <ContactRow icon={<MapPin size={14}/>} value={t.location} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 justify-end">
      <span style={{ color: "var(--accent2)", display: "flex", alignItems: "center" }}>{icon}</span>
      <span>{value}</span>
    </div>
  );
}

function Duality() {
  const { t } = useContext(ResumeLangContext);
  
  return (
    <div
      className="grid grid-cols-2 gap-px mt-8 rounded-sm overflow-hidden"
      style={{ border: "1px solid var(--border)" }}
    >
      <DualityCard
        side="DEV"
        accent="var(--accent2)"
        items={t.dualityDev}
      />
      <DualityCard
        side="ART"
        accent="var(--accent)"
        items={t.dualityArt}
      />
    </div>
  );
}

function DualityCard({
  side,
  accent,
  items,
}: {
  side: string;
  accent: string;
  items: string[];
}) {
  return (
    <div
      className="p-6"
      style={{ background: "var(--surface)" }}
    >
      <div
        className="mono text-xs tracking-[0.25em] mb-4 font-semibold"
        style={{ color: accent }}
      >
        [ {side} ]
      </div>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="mono text-xs flex gap-2"
            style={{ color: "#94a3b8" }}
          >
            <span style={{ color: accent }}>▸</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  const { t } = useContext(ResumeLangContext);
  return (
    <Section label={t.secExp} index="02">
      <div className="flex flex-col gap-6">
        {t.expData.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>
    </Section>
  );
}

function ExperienceItem({
  company,
  dept,
  period,
  duration,
  type,
  items,
}: {
  company: string;
  dept: string;
  period: string;
  duration: string;
  type: string;
  items: { title: string; tags: string[]; desc: string }[];
}) {
  return (
    <div
      className="rounded-sm overflow-hidden"
      style={{ border: "1px solid var(--border)" }}
    >
      <div
        className="flex items-center justify-between flex-wrap gap-3 px-5 py-4"
        style={{
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div>
          <div
            className="font-semibold text-sm"
            style={{ color: "var(--text)" }}
          >
            {company}
          </div>
          <div
            className="mono text-xs mt-0.5 flex gap-2"
            style={{ color: "var(--muted)" }}
          >
            <span>{dept}</span>
            <span style={{ color: "var(--border)" }}>|</span>
            <span style={{ color: "var(--accent2)" }}>
              {type}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div
            className="mono text-xs"
            style={{ color: "var(--muted)" }}
          >
            {period}
          </div>
          <div
            className="mono text-xs mt-0.5"
            style={{ color: "var(--accent)" }}
          >
            {duration}
          </div>
        </div>
      </div>
      <div
        className="flex flex-col divide-y"
        style={{
          background: "#0d0d14",
          borderColor: "var(--border)",
        }}
      >
        {items.map((item, i) => (
          <div key={i} className="px-5 py-4">
            <div className="flex items-start gap-3 mb-2">
              <span
                className="mono text-xs mt-0.5"
                style={{ color: "var(--accent)" }}
              >
                ▸
              </span>
              <div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "var(--text)" }}
                >
                  {item.title}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2 mb-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono text-xs px-2 py-0.5 rounded-sm"
                      style={{
                        background: "var(--tag-bg)",
                        color: "var(--accent2)",
                        border: "1px solid #1e3a4a",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p
                  className="text-xs leading-5"
                  style={{ color: "#64748b" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Education() {
  const { t } = useContext(ResumeLangContext);
  return (
    <Section label={t.secEdu} index="03">
      <div className="flex flex-col gap-6">
        {t.eduData.map((edu, idx) => (
          <div
            key={idx}
            className="rounded-sm overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            <div
              className="flex items-center justify-between flex-wrap gap-3 px-5 py-4"
              style={{ background: "var(--surface)" }}
            >
              <div>
                <div
                  className="font-semibold text-sm"
                  style={{ color: "var(--text)" }}
                >
                  {edu.school}
                </div>
                <div
                  className="mono text-xs mt-0.5 flex gap-2"
                  style={{ color: "var(--muted)" }}
                >
                  <span>{edu.major}</span>
                  <span style={{ color: "var(--border)" }}>|</span>
                  <span style={{ color: "var(--accent2)" }}>{edu.status}</span>
                </div>
              </div>
              <div className="text-right">
                <div
                  className="mono text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  {edu.period}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Tools() {
  const { t } = useContext(ResumeLangContext);
  const tools = [
    { name: "Unity", accent: "dev" },
    { name: "Blender", accent: "art" },
    { name: "Unreal Engine", accent: "art" },
    { name: "Vuforia", accent: "dev" },
    { name: "AR Foundation", accent: "dev" },
    { name: "Stable Diffusion", accent: "dev" },
    { name: "Python", accent: "dev" },
    { name: "Git / GitHub", accent: "dev" },
  ];

  return (
    <Section label={t.secTools} index="—">
      <div className="grid grid-cols-2 gap-1.5">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center gap-2 px-3 py-2 rounded-sm"
            style={{
              background: "var(--tag-bg)",
              border: "1px solid var(--border)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{
                background:
                  tool.accent === "dev"
                    ? "var(--accent2)"
                    : "var(--accent)",
              }}
            />
            <span
              className="mono text-xs"
              style={{ color: "#94a3b8" }}
            >
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  const { t } = useContext(ResumeLangContext);
  return (
    <Section label={t.secCerts} index="—">
      <div className="flex flex-col gap-2">
        {t.certData.map((c) => (
          <div
            key={c.name}
            className="px-4 py-3 rounded-sm"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="mono text-xs mb-1"
              style={{ color: "var(--accent2)" }}
            >
              {c.date}
            </div>
            <div
              className="text-xs font-medium"
              style={{ color: "var(--text)" }}
            >
              {c.name}
            </div>
            <div
              className="mono text-xs mt-0.5"
              style={{ color: "var(--muted)" }}
            >
              {c.issuer}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Strengths() {
  const { t } = useContext(ResumeLangContext);
  return (
    <Section label={t.secStrengths} index="—">
      <div className="flex flex-col gap-2">
        {t.strengthsData.map((s, idx) => {
          const IconComponent = s.icon;
          return (
            <div
              key={idx}
              className="flex gap-3 items-start px-3 py-3 rounded-sm"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <span className="shrink-0 flex items-center pt-[1px]" style={{ color: "var(--accent2)" }}>
                <IconComponent size={14} />
              </span>
              <span
                className="text-xs leading-5"
                style={{ color: "#94a3b8" }}
              >
                {s.text}
              </span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Section({
  label,
  index,
  children,
}: {
  label: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span
          className="mono text-xs"
          style={{ color: "var(--accent)" }}
        >
          {index}
        </span>
        <span
          className="mono text-xs tracking-[0.25em] uppercase font-semibold"
          style={{ color: "var(--muted)" }}
        >
          {label}
        </span>
        <div
          className="flex-1 h-px"
          style={{ background: "var(--border)" }}
        />
      </div>
      {children}
    </div>
  );
}

function Footer() {
  const { t } = useContext(ResumeLangContext);
  return (
    <div
      className="mt-16 pt-6 flex items-center justify-between"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <span
        className="mono text-xs"
        style={{ color: "var(--muted)" }}
      >
        {t.footerLeft}
      </span>
      <div className="flex items-center gap-2 flex-wrap justify-end">
        <span
          className="mono text-xs"
          style={{ color: "var(--accent2)" }}
        >
          DEV
        </span>
        <span
          className="mono text-xs"
          style={{ color: "var(--muted)" }}
        >
          +
        </span>
        <span
          className="mono text-xs"
          style={{ color: "var(--accent)" }}
        >
          ART
        </span>
        <span
          className="mono text-xs"
          style={{ color: "var(--muted)" }}
        >
          {t.footerRight}
        </span>
      </div>
    </div>
  );
}