import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowDown, Box, Code2, Grid2X2, Sparkles } from "lucide-react";
import { useLang } from "../context/LangContext";
import type { ProjectCategory } from "./Works";
import "./CardIntro.css";

const cards = [
  { id: "all", name: "All", suit: "♠", icon: Grid2X2, color: "#244b43" },
  { id: "Develop", name: "Dev", suit: "♣", icon: Code2, color: "#365c7c" },
  { id: "Design", name: "Design", suit: "♦", icon: Box, color: "#a84b3e" },
  { id: "Solo", name: "Indie", suit: "♥", icon: Sparkles, color: "#87612e" },
] as const;

export default function CardIntro({ onChoose }: { onChoose: (category: ProjectCategory) => void }) {
  const { lang, t } = useLang();
  const [picked, setPicked] = useState<ProjectCategory | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const picking = useRef(false);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  const labels = { all: t.categoryAll, Develop: t.categoryDevelop, Design: t.categoryDesign, Solo: t.categorySolo };

  const choose = (category: ProjectCategory) => {
    if (picking.current) return;
    picking.current = true;
    setPicked(category);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timer.current = setTimeout(() => {
      onChoose(category);
    }, reduced ? 0 : 650);
  };

  return (
    <section id="hero" className={`card-intro ${picked ? "is-picking" : ""}`} aria-labelledby="card-intro-title">
      <div className="card-intro-grain" />
      <div className="card-intro-copy">
        <p className="card-intro-eyebrow">A PORTFOLIO, DEALT DIFFERENTLY</p>
        <h1 id="card-intro-title">Your turn.<br /><em>Pick a card.</em></h1>
        <p className="card-intro-description">{lang === "ko" ? "네 장의 카드, 네 가지 작업 이야기." : "Four cards. Four ways into my work."}<br />{lang === "ko" ? "마음에 드는 카드를 한 장 뽑아보세요." : "Take a seat and choose your first card."}</p>
        <span className="card-intro-player"><span />{lang === "ko" ? "PLAYER 02 — 당신의 차례" : "PLAYER 02 — YOUR MOVE"}</span>
      </div>

      <div className="card-stage">
        <span className="dealer-label">PLAYER 01 / THE MAKER</span>
        <svg className="card-dealer" viewBox="0 0 720 560" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="dealer-jacket" x1="180" y1="260" x2="550" y2="510" gradientUnits="userSpaceOnUse"><stop stopColor="#354940" /><stop offset="1" stopColor="#152b25" /></linearGradient>
            <linearGradient id="dealer-face" x1="300" y1="100" x2="410" y2="280" gradientUnits="userSpaceOnUse"><stop stopColor="#e3bd91" /><stop offset="1" stopColor="#b17c5b" /></linearGradient>
          </defs>
          <ellipse cx="360" cy="492" rx="267" ry="40" fill="#000" opacity=".25" />
          <path d="M148 483 170 338Q181 291 289 269L430 269Q532 284 550 341L574 483Z" fill="url(#dealer-jacket)" stroke="#71816b" strokeOpacity=".35" strokeWidth="2" />
          <path d="m309 254-12 39 64 99 64-99-17-39" fill="#c69a73" />
          <path d="m296 282 65 46 63-46-16 126h-98Z" fill="#e4dfc8" />
          <path d="m290 275-35 39 48 25-18 26 76 84-44-141M427 275l37 39-47 25 18 26-74 84 44-141" fill="#2e4238" stroke="#71816b" strokeOpacity=".5" />
          <ellipse cx="289" cy="198" rx="15" ry="24" fill="#bd8c65" /><ellipse cx="426" cy="198" rx="15" ry="24" fill="#bd8c65" />
          <path d="M288 148Q285 79 357 78q81 0 74 82l-8 61q-9 63-63 69-54-6-65-64Z" fill="url(#dealer-face)" />
          <path d="M286 180q-29-81 34-107 51-23 99 12 33 19 17 97l-19-45q-53 13-83-14-15 28-42 34Z" fill="#18231f" />
          <path d="m307 181 30-3m47 0 27 4" stroke="#453f31" strokeWidth="5" strokeLinecap="round" />
          <path d="M355 187l-6 30 13 2m-26 23q22 13 43-1" stroke="#8b5c42" strokeWidth="3" strokeLinecap="round" />
          <circle cx="324" cy="195" r="3" fill="#283b32" /><circle cx="397" cy="195" r="3" fill="#283b32" />
          <path d="M175 345 127 427q-17 43 46 63l116 13 13-55-100-24 39-60M545 345l47 82q17 43-46 63l-115 13-13-55 101-24-39-60" fill="url(#dealer-jacket)" stroke="#71816b" strokeOpacity=".35" strokeWidth="2" />
          <path d="m272 446 33-9 34 16 4 49-52 4Z M447 446l-33-9-34 16-4 49 52 4Z" fill="#e4dfc8" />
        </svg>
        <div className="card-table"><span>GOOD WORK IS ALWAYS IN THE CARDS.</span></div>
        <div className="card-hand" role="group" aria-label={lang === "ko" ? "프로젝트 카드 선택" : "Choose a project card"}>
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <button key={card.id} type="button" className={`portfolio-card ${picked === card.id ? "is-chosen" : ""}`} style={{ "--card-index": index, "--card-color": card.color } as CSSProperties} onClick={() => choose(card.id)} aria-label={`${card.name} — ${labels[card.id]}`} aria-disabled={picked !== null}>
                <span className="card-corner">{card.name}<small>{card.suit}</small></span>
                <span className="card-emblem"><Icon strokeWidth={1.25} /></span>
                <span className="card-name">{card.name}</span>
                <span className="card-category">{labels[card.id]}</span>
                <span className="card-bottom-suit">{card.suit}</span>
              </button>
            );
          })}
        </div>
        <svg className="dealer-fingers" viewBox="0 0 720 560" fill="none" aria-hidden="true">
          <path d="M289 484q-18-26 0-39l38-18q12-4 15 4t-8 15l-13 10 29-9q14-2 16 8t-12 15l-27 10 21-2q13 1 12 11t-15 12l-32 4q-15 0-24-21ZM431 484q18-26 0-39l-38-18q-12-4-15 4t8 15l13 10-29-9q-14-2-16 8t12 15l27 10-21-2q-13 1-12 11t15 12l32 4q15 0 24-21Z" fill="#c99d75" stroke="#976c4e" strokeWidth="2" />
        </svg>
        <p className="card-table-hint" aria-live="polite">{picked ? (lang === "ko" ? `${labels[picked]} 펼치는 중…` : `Opening ${labels[picked]}…`) : (lang === "ko" ? "카드를 선택해 프로젝트를 둘러보세요" : "Choose a card to explore the projects.")}</p>
      </div>
      <button className="card-intro-skip" onClick={() => choose("all")} aria-disabled={picked !== null}>{lang === "ko" ? "전체 작업 바로 보기" : "Explore all projects"}<ArrowDown size={14} /></button>
      <span className="card-intro-edition">ART · CODE · PLAY</span>
    </section>
  );
}
