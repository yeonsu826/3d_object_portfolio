import { useState } from "react";
import { useLang } from "../context/LangContext";
import { CREDENTIALS } from "../data/credentials";
import Lightbox from "./Lightbox";

export default function Credentials() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="credentials" className="scroll-mt-20 bg-[#050505] pt-10 pb-32">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-white/10">
          <h2
            className="font-['Fraunces'] font-light text-white leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            {t.credentials}
          </h2>
          <span className="font-['Figtree'] text-xs tracking-widest uppercase text-white/40">
            {t.credentialsSub}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CREDENTIALS.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="relative flex items-center gap-4 w-full p-3.5 rounded-2xl border border-white/10 bg-white/[0.03] text-left cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/20"
            >
              <div className="w-[62px] h-[62px] shrink-0 rounded-xl overflow-hidden border border-white/10 bg-[#111]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0 pr-6">
                <h3 className="font-['Figtree'] text-[0.98rem] text-white mb-0.5 truncate">{item.title}</h3>
                <p className="font-['Figtree'] text-[0.82rem] text-white/40 truncate">{item.issuer}</p>
              </div>
              <span className="absolute top-3 right-3.5 text-xs text-white/30" aria-hidden="true">
                ⤢
              </span>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={CREDENTIALS.map((item) => item.image)}
          index={openIndex}
          caption={CREDENTIALS[openIndex].title}
          loop
          onClose={() => setOpenIndex(null)}
          onChange={setOpenIndex}
        />
      )}
    </section>
  );
}
