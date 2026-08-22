import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "../context/LangContext";
import { HERO_BG_IMAGES, PORTFOLIO, renderImageCount } from "../data/portfolio";
import { VIMEO_VIDEOS } from "../data/videos";
import { scrollToSection } from "../utils/scrollToSection";

export default function Hero() {
  const [bgImages, setBgImages] = useState<string[]>([]);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const { t } = useLang();

  useEffect(() => {
    const shuffled = [...HERO_BG_IMAGES];
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

  const stats = [
    { value: String(PORTFOLIO.length), label: t.projects },
    { value: String(renderImageCount), label: t.renders },
    { value: String(VIMEO_VIDEOS.length), label: t.videos },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050508] flex flex-col justify-center items-center text-center"
    >
      <div className="absolute inset-0 bg-[#050508]">
        {bgImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
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

        <h1
          className="font-['Fraunces'] text-white tracking-wide mb-8 md:mb-16"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
        >
          {t.heroTitle1}
          <span className="font-['Fraunces'] text-white/70 text-xl md:text-2xl">
            &nbsp;&nbsp; {t.heroTitle2}
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#works"
            onClick={(e) => scrollToSection(e, "works")}
            className="group flex items-center gap-3 font-['Figtree'] text-sm font-medium bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            {t.viewWorks}{" "}
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="flex items-center gap-2 font-['Figtree'] text-sm font-medium bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full hover:bg-white/15 backdrop-blur-md transition-all duration-300"
          >
            {t.aboutMeBtn}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-20 mt-24 pt-10 border-t border-white/10 w-full max-w-4xl">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="font-['Fraunces'] font-semibold text-3xl text-white/90 drop-shadow-lg">
                {stat.value}
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] text-white/40 tracking-widest uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
