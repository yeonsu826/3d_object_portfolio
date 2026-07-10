import { useState } from "react";
import "./index.css";

export default function Resume() {
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
            <About />
            <Experience />
            <Activities />
          </main>
          <aside className="flex flex-col gap-8">
            <Skills />
            <Tools />
            <Certifications />
            <Strengths />
          </aside>
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
            &gt;_ 이력서 · 2025
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
          <ContactRow icon="⌖" value="서울, 대한민국" />
          <ContactRow icon="◈" value="github.com/yeonsu826" />
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

const ABOUT_SECTIONS = [
  {
    label:
      "약점을 강점으로 뒤바꾼 몰입, 코드 너머의 공간을 창조하다",
    body: "대학 시절, 컴퓨터 공학의 순수 소프트웨어 로직 중심 커리큘럼은 제 시각적인 창작 욕구를 온전히 채워주지 못해 학업 성적 면에서 아쉬운 결과를 얻기도 했습니다. 하지만 전공에 대한 치열한 고민은 제 진짜 적성인 '실시간 그래픽스와 공간 연출'을 발견하는 전환점이 되었습니다. 대학에서 체득한 알고리즘적 사고와 데이터 흐름에 대한 이해를 바탕으로, 졸업 후 (주)이앤오즈의 유니티 클라이언트 개발자로 합류하여 1년 8개월간 실무를 성공적으로 수행하며 제 공학적 뼈대가 틀리지 않았음을 증명했습니다.",
  },
  {
    label: "실무로 증명한 기술적 이해도: 공간을 렌더링하다",
    body: "선임연구원으로 재직하며 저는 단순한 로직 구현을 넘어, 사용자와 맞닿는 '시각적이고 인터랙티브한 공간'을 구축하는 데 집중했습니다. Stable Diffusion API와 유니티를 연동한 실시간 포토 키오스크를 개발하며 최신 아트 파이프라인을 구축했고, 대화면 다중 터치스크린 게임을 개발하며 다수의 입력 처리와 렌더링 퍼포먼스를 최적화하는 경험을 쌓았습니다. 특히, 실제 벽면에 게임 화면을 투영하는 '프로젝션 매핑 기반 실감형 클라이밍 콘텐츠'를 개발할 때는 현실 공간의 물리적 제약과 3D 엔진 내의 좌표 및 충돌(Collider)을 완벽하게 동기화하며 공간 융합에 대한 깊은 이해도를 갖추게 되었습니다.",
  },
  {
    label: "실무와 교육을 넘나들며 완성한 3D 기술 스택",
    body: "유니티 클라이언트 개발자로 실무를 경험하며 3D 공간의 논리적 구조를 체득했다면, 퇴사 후에는 'MBC 미디어 캠퍼스 버추얼 테크 전문가 과정'에 참여하여 시각적인 아트 구현 능력을 훈련했습니다. 약 7개월간 블렌더(Blender)를 활용한 하드서페이스 프롭 모델링부터 캐릭터 리깅, 마블러스 디자이너 기반의 CFX(의상 시뮬레이션)까지 3D 에셋 제작의 전체 파이프라인을 집중적으로 훈련했습니다. 특히 제작한 에셋을 언리얼 엔진(Unreal Engine)에 임포트하여 모션 캡처 데이터와 AI 립싱크를 연동하는 프로젝트를 수행하며, Unity뿐만 아니라 Unreal 환경에서의 머티리얼 세팅과 물리 충돌 연산 최적화 노하우까지 섭렵할 수 있었습니다.",
  },
  {
    label: "한계를 넘는 창작, 소통을 이끄는 아티스트",
    body: "개발자의 논리로 엔진을 이해하고, 아티스트의 감각으로 툴을 다루며 어떠한 엔진 환경에서도 즉시 투입 가능한 실무형 3D 인재가 되고싶습니다. 입사 후 단기적인 목표는 팀의 아트 스타일과 파이프라인에 빠르게 적응하여 퀄리티 기준을 충족하는 최적화된 3D 에셋을 안정적으로 생산하는 것입니다. 나아가 개발자와 아티스트 간의 소통 비용을 줄이고, 원활한 협업을 이끌어내는 브릿지 역할을 수행하고 싶습니다. 최종적으로는 미적 감각과 기술적 문제 해결 능력을 완벽하게 조화시켜, 어떠한 제약 환경에서도 퍼포먼스 저하 없이 최고의 시각적 몰입감을 선사하는 '대체 불가능한 3D 아티스트'로 성장하겠습니다.",
  },
];

function About() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded
    ? ABOUT_SECTIONS
    : ABOUT_SECTIONS.slice(0, 2);

  return (
    <Section label="ABOUT" index="01">
      <div
        className="rounded-sm overflow-hidden"
        style={{ border: "1px solid var(--border)" }}
      >
        {visible.map((sec, i) => (
          <div
            key={i}
            className="px-6 py-5"
            style={{
              background:
                i % 2 === 0 ? "var(--surface)" : "#0d0d14",
              borderBottom:
                i < visible.length - 1
                  ? "1px solid var(--border)"
                  : "none",
            }}
          >
            <div
              className="mono text-xs font-semibold mb-3 flex items-center gap-2"
              style={{
                color:
                  i < 2 ? "var(--accent2)" : "var(--accent)",
              }}
            >
              <span style={{ opacity: 0.5 }}>
                [{String(i + 1).padStart(2, "0")}]
              </span>
              {sec.label}
            </div>
            <p
              className="text-sm leading-7"
              style={{ color: "#94a3b8" }}
            >
              {sec.body}
            </p>
          </div>
        ))}
        <div
          className="px-6 py-3"
          style={{
            background: "var(--surface)",
            borderTop: expanded
              ? "1px solid var(--border)"
              : "none",
          }}
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="mono text-xs flex items-center gap-2 transition-colors hover:opacity-80"
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
            {expanded
              ? "접기"
              : `나머지 ${ABOUT_SECTIONS.length - 2}개 섹션 더 보기`}
          </button>
        </div>
      </div>
    </Section>
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
              title: "AI 포토 키오스크 콘텐츠 개발",
              tags: ["Unity", "Python", "Stable Diffusion"],
              desc: "사용자의 사진을 실시간으로 촬영하고 Stable Diffusion으로 변환하여 프린트하는 포토 키오스크 시스템 개발. 다양한 이미지 변환 옵션과 사용자 경험 최적화.",
            },
            {
              title: "다인용 터치스크린 게임 개발",
              tags: ["Unity", "멀티터치", "UI/UX"],
              desc: "여러 사용자가 동시에 플레이 가능한 터치스크린 게임 개발. 안정성 확보 및 다수 사용자 동시 입력 처리 시스템 구현.",
            },
            {
              title: "클라이밍 실감형 콘텐츠 개발",
              tags: ["Unity", "프로젝션", "AR"],
              desc: "벽면에 게임 화면을 투영하여 사용자가 직접 올라가 장애물을 터치하는 실감형 클라이밍 콘텐츠. 교육·레크리에이션 목적의 체험형 시스템.",
            },
          ]}
        />

        <ExperienceItem
          company="(사)한국산업기술보호협회"
          dept="방산팀 사원"
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

function Skills() {
  const skills = [
    { name: "Unity / C#", level: 88, side: "dev" },
    { name: "Blender", level: 75, side: "art" },
    { name: "Unreal Engine 5", level: 60, side: "art" },
    { name: "AR Foundation", level: 80, side: "dev" },
    { name: "3D 환경 구성", level: 78, side: "art" },
    { name: "Python / AI 연동", level: 65, side: "dev" },
  ];

  return (
    <Section label="SKILLS" index="—">
      <div className="flex flex-col gap-3.5">
        <div className="flex gap-3 mb-1">
          <span
            className="mono text-xs flex items-center gap-1.5"
            style={{ color: "var(--accent2)" }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: "var(--accent2)" }}
            />{" "}
            DEV
          </span>
          <span
            className="mono text-xs flex items-center gap-1.5"
            style={{ color: "var(--accent)" }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: "var(--accent)" }}
            />{" "}
            ART
          </span>
        </div>
        {skills.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between mb-1">
              <span
                className="mono text-xs"
                style={{ color: "var(--text)" }}
              >
                {s.name}
              </span>
              <span
                className="mono text-xs"
                style={{ color: "var(--muted)" }}
              >
                {s.level}%
              </span>
            </div>
            <div
              className="h-1 rounded-full"
              style={{ background: "var(--border)" }}
            >
              <div
                className="h-1 rounded-full transition-all"
                style={{
                  width: `${s.level}%`,
                  background:
                    s.side === "dev"
                      ? "linear-gradient(to right, #0891b2, var(--accent2))"
                      : "linear-gradient(to right, var(--accent), #a78bfa)",
                }}
              />
            </div>
          </div>
        ))}
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

function Activities() {
  return (
    <Section label="ACTIVITIES" index="03">
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
              Microsoft
            </div>
            <div
              className="mono text-xs mt-0.5"
              style={{ color: "var(--accent2)" }}
            >
              AI Challenge for Biodiversity
            </div>
          </div>
          <div className="text-right">
            <div
              className="mono text-xs"
              style={{ color: "var(--muted)" }}
            >
              2023. 12 — 2024. 01
            </div>
            <div
              className="mono text-xs mt-0.5"
              style={{ color: "var(--accent)" }}
            >
              2개월
            </div>
          </div>
        </div>

        <div
          className="px-5 py-4"
          style={{ background: "#0d0d14" }}
        >
          <p
            className="text-xs leading-6 mb-5"
            style={{ color: "#94a3b8" }}
          >
            AI, Big Data, 환경 및 생물 다양성에 관심 있는
            대학생·직장인이 모여 기후변화 대응과 생물 다양성
            보전 아이디어를 탐구하는 Microsoft 주관 프로그램.{" "}
            <strong style={{ color: "var(--text)" }}>
              해안가 쓰레기 문제 해결
            </strong>
            을 주제로 AR 기반 인터랙티브 시스템을
            기획·연구하였습니다.
          </p>

          <div className="flex flex-col gap-3">
            {[
              {
                step: "01",
                title: "딥러닝 이미지 분류",
                desc: "쓰레기 종류를 실시간으로 분류하는 딥러닝 모델 학습 및 적용",
                tag: "AI / Deep Learning",
                accent: "var(--accent2)",
              },
              {
                step: "02",
                title: "AR 쓰레기통 위치 안내",
                desc: "AR 기술을 활용하여 사용자에게 근처 쓰레기통 위치를 시각적으로 안내하고 보상 시스템으로 행동 유도",
                tag: "AR",
                accent: "var(--accent2)",
              },
              {
                step: "03",
                title: "위치 데이터 분석 & 히트맵 시각화",
                desc: "수집된 투기 위치 데이터를 Big Data 분석하여 히트맵으로 시각화, 문제 지점 파악 및 정책 제안",
                tag: "Big Data / 시각화",
                accent: "var(--accent)",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 px-4 py-3 rounded-sm"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="mono text-xs shrink-0 mt-0.5"
                  style={{ color: item.accent, opacity: 0.6 }}
                >
                  [{item.step}]
                </span>
                <div>
                  <div
                    className="text-xs font-medium mb-1"
                    style={{ color: "var(--text)" }}
                  >
                    {item.title}
                  </div>
                  <p
                    className="text-xs leading-5"
                    style={{ color: "#64748b" }}
                  >
                    {item.desc}
                  </p>
                  <span
                    className="mono text-xs px-2 py-0.5 rounded-sm inline-block mt-2"
                    style={{
                      background: "var(--tag-bg)",
                      color: item.accent,
                      border: `1px solid ${item.accent === "var(--accent2)" ? "#1e3a4a" : "rgba(124,58,237,0.3)"}`,
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
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