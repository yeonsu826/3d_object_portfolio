import { useLang } from "../context/LangContext";
import LoadingImage from "./LoadingImage";
import Contact from "./Contact";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="scroll-mt-20 bg-card py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <h2
          className="font-['Fraunces'] font-light text-foreground leading-tight mb-12"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          {t.aboutTitle}
        </h2>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 lg:items-stretch">
          <div className="relative w-full max-w-[420px] mx-auto lg:mx-0 shrink-0">
            <div className="relative aspect-square overflow-hidden bg-secondary rounded-3xl shadow-xl">
              <LoadingImage
                src={`${import.meta.env.BASE_URL}images/working.png`}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <Contact />
        </div>
      </div>
    </section>
  );
}
