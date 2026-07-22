import { useState } from "react";
import { Link } from "react-router-dom";
import "./Resume.css";

export default function CoverLetter() {
  return (
    <div
      style={{ background: "var(--bg)", minHeight: "100vh" }}
      className="scanline"
    >
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Header />
        <Duality />
        <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-[1fr_290px]">
          <main className="flex flex-col gap-10">
            {/* <About /> */}
            <Experience />
            {/* 💡 Education(학력) 컴포넌트 추가 */}
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
            자기소개서 보러가기 ➔
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function Header() {
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
            &gt;_ 이력서 · 2026
          </div>
          <h1
            className="mono text-5xl font-bold mb-3"
            style={{
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >
            정연수
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
        <div
          className="mono text-xs flex flex-col gap-2.5"
          style={{ color: "var(--muted)" }}
        >
          <ContactRow icon="✉" value="yeonsu826@email.com" />
          <ContactRow icon="◈" value="github.com/yeonsu826" />
          <ContactRow icon="⌖" value="서울, 대한민국" />

        </div>
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  value,
}: {
  icon: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 justify-end">
      <span style={{ color: "var(--accent2)" }}>{icon}</span>
      <span>{value}</span>
    </div>
  );
}

// (기존 Duality, DualityCard 컴포넌트는 동일하게 유지)
function Duality() {
  return (
    <div
      className="grid grid-cols-2 gap-px mt-8 rounded-sm overflow-hidden"
      style={{ border: "1px solid var(--border)" }}
    >
      <DualityCard
        side="DEV"
        accent="var(--accent2)"
        items={[
          "Unity · C# 실무 2년+",
          "렌더링 파이프라인 이해",
          "폴리곤 / 드로우콜 최적화",
          "AR Foundation · Vuforia",
          "AI 연동 인터랙티브 콘텐츠",
        ]}
      />
      <DualityCard
        side="ART"
        accent="var(--accent)"
        items={[
          "Blender 3D 모델링",
          "환경 씬 & 공간 구성",
          "PBR 텍스처링",
          "실감형 콘텐츠 제작",
          "Unreal Engine 5",
        ]}
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

// ─── 새롭게 추가된 개별 섹션 컴포넌트 ──────────────────────────────
function AboutSectionItem({ sec, index, isLast }: { sec: any, index: number, isLast: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="px-6 py-5"
      style={{
        background: index % 2 === 0 ? "var(--surface)" : "#0d0d14",
        borderBottom: !isLast ? "1px solid var(--border)" : "none",
      }}
    >
      {/* Label (항상 보임) */}
      <div
        className="mono text-xs font-semibold mb-3 flex items-center gap-2"
        style={{ color: index < 2 ? "var(--accent2)" : "var(--accent)" }}
      >
        <span style={{ opacity: 0.5 }}>
          [{String(index + 1).padStart(2, "0")}]
        </span>
        {sec.label}
      </div>

      {/* Summary 한 줄 요약 (항상 보임, 약간 밝은 텍스트로 강조) */}
      <p 
        className="text-sm leading-7 font-medium" 
        style={{ color: "var(--foreground)" }}
      >
        {sec.summary}
      </p>

      {/* Body 세부 내용 (더보기 상태일 때만 보임) */}
      {expanded && (
        <p
          className="text-sm leading-7 mt-3 transition-opacity"
          style={{ color: "#94a3b8" }}
        >
          {sec.body}
        </p>
      )}

      {/* 개별 더보기 / 접기 버튼 */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mono text-xs flex items-center gap-2 transition-colors hover:opacity-80 mt-4"
        style={{
          color: "var(--muted)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <span style={{ color: "var(--accent)" }}>
          {expanded ? "▴" : "▾"}
        </span>
        {expanded ? "접기" : "더보기"}
      </button>
    </div>
  );
}


function Experience() {
  return (
    <Section label="EXPERIENCE" index="02">
      <div className="flex flex-col gap-6">
        <ExperienceItem
          company="(주)이앤오즈"
          dept="개발팀 선임연구원"
          period="2024. 04 — 2025. 11"
          duration="1년 8개월"
          type="실감형 콘텐츠 제작"
          items={[
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
              tags: ["Unity", "AI 음성 변환" , "AI API 연동"],
              desc: "사용자가 한국어로 녹음한 영상을 바탕으로, 본인의 목소리 톤을 유지한 채 42개국 중 선택한 국가의 언어로 변환된 다국어 영상 편지를 생성하는 AI 파이프라인 개발.",
            },
          ]}
        />

        <ExperienceItem
          company="(사)한국산업기술보호협회"
          dept="방산팀 인턴"
          period="2022. 09 — 2022. 12"
          duration="4개월"
          type="방산 행정"
          items={[
            {
              title: "방산 데이터 정리 및 보고서 작성",
              tags: ["문서작성", "문서관리", "전산입력"],
              desc: "방산 관련 데이터 분류 및 정리, 공식 보고서 작성 및 전산 입력 업무 수행.",
            },
          ]}
        />
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
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="mono text-xs px-2 py-0.5 rounded-sm"
                      style={{
                        background: "var(--tag-bg)",
                        color: "var(--accent2)",
                        border: "1px solid #1e3a4a",
                      }}
                    >
                      {t}
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

// 💡 새롭게 추가된 학력(Education) 컴포넌트 
function Education() {
  return (
    <Section label="EDUCATION" index="03">
      <div className="flex flex-col gap-6">
        <div
          className="rounded-sm overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <div
            className="flex items-center justify-between flex-wrap gap-3 px-5 py-4"
            style={{
              background: "var(--surface)",
            }}
          >
            <div>
              <div
                className="font-semibold text-sm"
                style={{ color: "var(--text)" }}
              >
                명지대학교 (자연)
              </div>
              <div
                className="mono text-xs mt-0.5 flex gap-2"
                style={{ color: "var(--muted)" }}
              >
                <span>컴퓨터공학과 (편입)</span>
                <span style={{ color: "var(--border)" }}>|</span>
                <span style={{ color: "var(--accent2)" }}>졸업</span>
              </div>
            </div>
            <div className="text-right">
              <div
                className="mono text-xs"
                style={{ color: "var(--muted)" }}
              >
                2021. 03 — 2023. 02
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Tools() {
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
    <Section label="TOOLS" index="—">
      <div className="grid grid-cols-2 gap-1.5">
        {tools.map((t) => (
          <div
            key={t.name}
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
                  t.accent === "dev"
                    ? "var(--accent2)"
                    : "var(--accent)",
              }}
            />
            <span
              className="mono text-xs"
              style={{ color: "#94a3b8" }}
            >
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  const certs = [
    {
      date: "2019. 09",
      name: "네트워크관리사 2급",
      issuer: "한국정보통신자격협회",
    },
    {
      date: "2019. 04",
      name: "정보처리산업기사",
      issuer: "한국산업인력공단",
    },
  ];
  return (
    <Section label="CERTIFICATIONS" index="—">
      <div className="flex flex-col gap-2">
        {certs.map((c) => (
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
  return (
    <Section label="KEY STRENGTHS" index="—">
      <div className="flex flex-col gap-2">
        {[
          {
            icon: "⚡",
            text: "엔진 파이프라인 기반 최적화 에셋 제작",
          },
          {
            icon: "🔗",
            text: "개발자 ↔ 아티스트 소통 가교 역할",
          },
          { icon: "◉", text: "AR / 실감형 콘텐츠 구현 경험" },
          { icon: "▣", text: "AI 기술 연동 인터랙티브 시스템" },
        ].map((s) => (
          <div
            key={s.text}
            className="flex gap-3 items-start px-3 py-3 rounded-sm"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <span className="text-sm shrink-0">{s.icon}</span>
            <span
              className="text-xs leading-5"
              style={{ color: "#94a3b8" }}
            >
              {s.text}
            </span>
          </div>
        ))}
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
  return (
    <div
      className="mt-16 pt-6 flex items-center justify-between"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <span
        className="mono text-xs"
        style={{ color: "var(--muted)" }}
      >
        &gt;_ 정연수 · 이력서 · 2025
      </span>
      <div className="flex items-center gap-2">
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
          = TA (Technical Artist) or 3D Artist
        </span>
      </div>
    </div>
  );
}