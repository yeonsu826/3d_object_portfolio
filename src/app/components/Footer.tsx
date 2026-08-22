import { useLang } from "../context/LangContext";

export default function Footer() {
  const { t } = useLang();

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
