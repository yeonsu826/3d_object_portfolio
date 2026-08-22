import { useEffect, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { scrollToSection } from "../utils/scrollToSection";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLang();
  const navItems = [
    { id: "works", label: t.navWorks },
    { id: "videolog", label: t.navVideo },
    { id: "credentials", label: t.navCredentials },
    { id: "about", label: t.navAbout },
    { id: "contact", label: t.contact },
  ];

  useEffect(() => {
    const onScroll = (e: Event) => {
      const target = e.target as HTMLElement | Document | null;
      const scrollTop =
        (target && "scrollTop" in target ? Number(target.scrollTop) : 0) ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        0;
      setScrolled(scrollTop > 40);
    };

    window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll, true);
  }, []);

  const LanguageToggle = () => (
    <div
      className="flex items-center bg-white/5 border border-white/10 rounded-full py-1 pl-4 pr-1.5 cursor-pointer hover:bg-white/10 transition-colors shadow-sm"
      onClick={() => setLang(lang === "ko" ? "en" : "ko")}
      title="Change Language"
    >
      <Globe size={15} className="text-white/70" />
      <div className="flex items-center ml-3 font-['JetBrains_Mono'] text-[10px] sm:text-xs tracking-widest gap-0.5">
        <span
          className={`w-11 text-center py-1.5 rounded-full transition-all duration-300 ${
            lang === "ko" ? "bg-white text-black font-bold shadow-md" : "text-white/40 hover:text-white/70"
          }`}
        >
          KO
        </span>
        <span
          className={`w-11 text-center py-1.5 rounded-full transition-all duration-300 ${
            lang === "en" ? "bg-white text-black font-bold shadow-md" : "text-white/40 hover:text-white/70"
          }`}
        >
          EN
        </span>
      </div>
    </div>
  );

  return (
    <header
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

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-6 lg:gap-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="font-['Figtree'] text-sm text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageToggle />
          <button type="button" onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-8 py-6">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    scrollToSection(e, item.id);
                    setOpen(false);
                  }}
                  className="font-['Figtree'] text-base text-foreground tracking-widest uppercase"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
