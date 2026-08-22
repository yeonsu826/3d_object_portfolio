import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "../context/LangContext";
import { PORTFOLIO } from "../data/portfolio";
import Lightbox from "./Lightbox";
import LoadingImage from "./LoadingImage";
import ToolTags from "./ToolTags";

export default function Works() {
  const [mainTab, setMainTab] = useState<"all" | "Design" | "Develop">("all");
  const [activeGroup, setActiveGroup] = useState("all");
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const { t } = useLang();

  const filteredByMainTab = PORTFOLIO.filter((group) => {
    if (mainTab === "all") return true;
    return group.tools?.includes(mainTab);
  });

  const displayGroups =
    activeGroup === "all"
      ? filteredByMainTab
      : filteredByMainTab.filter((group) => t.groups[group.groupKey] === activeGroup);

  useEffect(() => {
    setActiveGroup("all");
  }, [mainTab]);

  return (
    <section id="works" className="scroll-mt-20 bg-background pt-16 pb-32">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="mb-12 relative">
          <h2
            className="font-['Fraunces'] font-light text-foreground leading-tight mb-8"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            {t.projects}
          </h2>

          <div className="relative flex items-end w-full border-b border-white/10 mt-8">
            <div className="flex gap-1 md:gap-2 px-3 relative z-10">
              {(["all", "Design", "Develop"] as const).map((tab) => {
                const isActive = mainTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setMainTab(tab)}
                    className={`relative px-5 py-1.5 md:px-7 md:py-2 font-['JetBrains_Mono'] text-xs tracking-widest uppercase transition-all duration-300 rounded-t-[10px] flex items-center justify-center ${
                      isActive
                        ? "bg-[#141419] text-primary font-bold shadow-[0_-5px_15px_-3px_rgba(0,0,0,0.4)]"
                        : "bg-transparent text-white/40 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="relative z-20">{tab === "all" ? t.all : tab}</span>
                    {isActive && (
                      <>
                        <div className="absolute -left-[8px] bottom-0 w-[8px] h-[8px] pointer-events-none">
                          <svg viewBox="0 0 8 8" className="w-full h-full fill-[#141419]">
                            <path d="M 0 8 A 8 8 0 0 0 8 0 L 8 8 Z" />
                          </svg>
                        </div>
                        <div className="absolute -right-[8px] bottom-0 w-[8px] h-[8px] pointer-events-none">
                          <svg viewBox="0 0 8 8" className="w-full h-full fill-[#141419]">
                            <path d="M 8 8 A 8 8 0 0 1 0 0 L 0 8 Z" />
                          </svg>
                        </div>
                        <div className="absolute -bottom-[1px] left-0 w-full h-[0.1px] bg-[#050508] z-20" />
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 pt-5 px-3">
            <button
              type="button"
              onClick={() => setActiveGroup("all")}
              className={`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${
                activeGroup === "all"
                  ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105 font-semibold"
                  : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/20 hover:text-white"
              }`}
            >
              {t.all}
            </button>
            {filteredByMainTab.map((group) => {
              const groupName = t.groups[group.groupKey];
              return (
                <button
                  key={group.groupKey}
                  type="button"
                  onClick={() => setActiveGroup(groupName)}
                  className={`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${
                    activeGroup === groupName
                      ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105 font-semibold"
                      : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {group.emoji} {groupName} {group.concept ? `(${group.concept})` : ""}
                </button>
              );
            })}
          </div>
        </div>

        {displayGroups.length === 0 ? (
          <div className="text-white/40 font-['JetBrains_Mono'] py-20 text-center">{t.emptyProjects}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 px-3">
            {displayGroups.map((group) => {
              const groupName = t.groups[group.groupKey];
              const mainGalleryItem = group.items.find((item) => item.galleryImages?.length);
              const processItem = group.items.find((item) => item.isProcess);
              const allImages = mainGalleryItem?.galleryImages ?? [];
              const coverImage = mainGalleryItem?.thumb || processItem?.thumb || "";

              return (
                <div key={group.groupKey} className="group flex flex-col gap-4">
                  <div
                    onClick={() => allImages.length > 0 && setLightbox({ images: allImages, index: 0 })}
                    className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0a10] border border-white/10 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] ${
                      allImages.length > 0 ? "cursor-pointer" : ""
                    }`}
                  >
                    {coverImage && (
                      <LoadingImage
                        src={coverImage}
                        alt={groupName}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                    )}
                    {allImages.length > 0 && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          {t.viewLarge} <span className="font-normal opacity-50">({allImages.length})</span>
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 px-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-['Fraunces'] font-medium text-foreground text-xl md:text-2xl flex items-center gap-2">
                        {group.emoji} {groupName}
                      </h3>
                      {processItem && (
                        <a
                          href={processItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-['JetBrains_Mono'] text-primary hover:text-white transition-colors bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20"
                        >
                          {t.viewProcess} <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {group.concept && (
                        <span className="text-[10px] sm:text-xs font-['JetBrains_Mono'] tracking-widest text-white/50 bg-white/5 px-2 py-1 rounded-md border border-white/10">
                          {group.concept}
                        </span>
                      )}
                      <ToolTags tools={group.tools} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onChange={(index) => setLightbox({ ...lightbox, index })}
        />
      )}
    </section>
  );
}
