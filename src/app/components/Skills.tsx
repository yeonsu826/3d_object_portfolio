import { useLang } from "../context/LangContext";
import { SKILL_TOOL_LOGOS } from "../data/skills";

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="scroll-mt-20 bg-background pt-32 pb-8">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <h2
          className="font-['Fraunces'] font-light text-foreground leading-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          {t.skillsTitle}
        </h2>
        <p className="font-['Figtree'] text-white/50 max-w-2xl mb-8 leading-relaxed">
          {t.skillsDesc}
        </p>

        <ul className="list-none m-0 p-0 flex flex-wrap gap-3" aria-label={t.skillsTitle}>
          {SKILL_TOOL_LOGOS.map((tool) => (
            <li
              key={tool.name}
              className="flex items-center gap-2.5 px-3.5 py-2.5 border border-white/10 rounded-xl bg-white/[0.03]"
            >
              <img src={tool.src} alt="" className="w-7 h-7 object-contain" />
              <span className="font-['Figtree'] text-[0.82rem] text-white/60 whitespace-nowrap">
                {tool.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
