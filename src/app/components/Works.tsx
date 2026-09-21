import { useEffect, useState } from "react";
import { ArrowUpRight, Box, Code2, Grid2X2, Images } from "lucide-react";
import { useLang } from "../context/LangContext";
import { PORTFOLIO } from "../data/portfolio";
import Lightbox from "./Lightbox";
import LoadingImage from "./LoadingImage";
import ToolTags from "./ToolTags";

export default function Works() {
  const [mainTab, setMainTab] = useState<"all" | "Design" | "Develop">("Develop");
  const [activeGroup, setActiveGroup] = useState<"all" | (typeof PORTFOLIO)[number]["groupKey"]>("all");
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const { t } = useLang();

  const filteredByMainTab = PORTFOLIO.filter((group) => {
    if (mainTab === "all") return true;
    return group.tools?.includes(mainTab);
  });

  const displayGroups =
    activeGroup === "all"
      ? filteredByMainTab
      : filteredByMainTab.filter((group) => group.groupKey === activeGroup);

  const mainTabs = [
    { id: "all" as const, label: t.categoryAll, icon: Grid2X2, count: PORTFOLIO.length },
    {
      id: "Develop" as const,
      label: t.categoryDevelop,
      icon: Code2,
      count: PORTFOLIO.filter((group) => group.tools?.includes("Develop")).length,
    },
    {
      id: "Design" as const,
      label: t.categoryDesign,
      icon: Box,
      count: PORTFOLIO.filter((group) => group.tools?.includes("Design")).length,
    },
  ];

  useEffect(() => {
    setActiveGroup("all");
  }, [mainTab]);

  return (
    <section id="works" className="scroll-mt-20 bg-background pt-16 pb-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16">
        <div className="mb-12 relative">
          <span className="font-['JetBrains_Mono'] text-[10px] md:text-xs tracking-[0.28em] text-primary uppercase">
            {t.projectsEyebrow}
          </span>
          <h2
            className="font-['Fraunces'] font-light text-foreground leading-tight mt-3 mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            {t.projects}
          </h2>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-white/60">{t.projectsIntro}</p>
            <span className="font-['JetBrains_Mono'] text-xs tracking-wider text-white/40 whitespace-nowrap">
              {filteredByMainTab.length} {t.projectCount}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-2 rounded-2xl bg-white/[0.04] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              {mainTabs.map((tab) => {
                const isActive = mainTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setMainTab(tab.id)}
                    aria-pressed={isActive}
                    className={`relative min-h-16 px-4 py-3 rounded-xl flex items-center gap-3 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-black shadow-[0_10px_30px_rgba(212,168,83,0.22)]"
                        : "bg-[#111117] text-white/60 border border-white/[0.06] hover:text-white hover:bg-white/10 hover:border-white/15"
                    }`}
                  >
                    <span className={`grid place-items-center w-9 h-9 rounded-lg ${isActive ? "bg-black/10" : "bg-white/5"}`}>
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm sm:text-[15px] font-semibold">{tab.label}</span>
                      <span className={`block mt-0.5 font-['JetBrains_Mono'] text-[10px] tracking-wider ${isActive ? "text-black/60" : "text-white/35"}`}>
                        {tab.count} {t.projectCount}
                      </span>
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isActive ? "bg-black" : "bg-white/15"}`} />
                  </button>
                );
              })}
          </div>

          <div className="pt-7">
            <p className="mb-3 font-['JetBrains_Mono'] text-[10px] tracking-[0.2em] uppercase text-white/40">{t.projectFilter}</p>
            <div className="flex flex-wrap gap-2 pb-3">
            <button
              type="button"
              onClick={() => setActiveGroup("all")}
              className={`font-['JetBrains_Mono'] text-xs tracking-wider px-5 py-3 rounded-xl transition-all duration-300 ${
                activeGroup === "all"
                  ? "bg-white text-black shadow-lg font-semibold"
                  : "bg-white/[0.04] text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
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
                  onClick={() => setActiveGroup(group.groupKey)}
                  className={`font-['JetBrains_Mono'] text-xs tracking-wide px-5 py-3 rounded-xl transition-all duration-300 ${
                    activeGroup === group.groupKey
                      ? "bg-white text-black shadow-lg font-semibold"
                      : "bg-white/[0.04] text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {group.emoji} {groupName} {group.concept ? `(${group.concept})` : ""}
                </button>
              );
            })}
            </div>
          </div>
        </div>

        {displayGroups.length === 0 ? (
          <div className="text-white/40 font-['JetBrains_Mono'] py-20 text-center">{t.emptyProjects}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4">
            {displayGroups.map((group) => {
              const groupName = t.groups[group.groupKey];
              const mainGalleryItem = group.items.find((item) => item.galleryImages?.length);
              const linkItem = group.items.find((item) => item.link);
              const allImages = mainGalleryItem?.galleryImages ?? [];
              const coverImage = mainGalleryItem?.thumb || linkItem?.thumb || "";
              const coverFit = (mainGalleryItem || linkItem)?.thumbFit ?? "cover";

              return (
                <article key={group.groupKey} className="group overflow-hidden rounded-[1.5rem] bg-[#0d0d13] border border-white/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                  <div
                    onClick={() => allImages.length > 0 && setLightbox({ images: allImages, index: 0 })}
                    className={`relative w-full aspect-[16/10] overflow-hidden bg-[#0a0a10] ${
                      allImages.length > 0 || linkItem ? "cursor-pointer" : ""
                    }`}
                  >
                    {linkItem && allImages.length === 0 && (
                      <a
                        href={linkItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${groupName} ${
                          linkItem.linkLabel === "github"
                            ? t.viewGithub
                            : linkItem.linkLabel === "site"
                              ? t.viewSite
                              : linkItem.linkLabel === "play"
                                ? t.playGame
                                : t.viewProcess
                        }`}
                        className="absolute inset-0 z-10"
                      />
                    )}
                    {coverImage && (
                      <LoadingImage
                        src={coverImage}
                        alt={groupName}
                        className="w-full h-full transition-transform duration-700 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                        imageClassName={coverFit === "contain" ? "object-contain" : "object-cover"}
                      />
                    )}
                    {allImages.length > 0 && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          {t.viewLarge} <span className="font-normal opacity-50">({allImages.length})</span>
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0d0d13] to-transparent pointer-events-none" />
                    <span className="absolute left-5 top-5 z-20 font-['JetBrains_Mono'] text-[10px] tracking-[0.18em] uppercase text-white/80 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full">
                      {group.tools?.includes("Develop") ? "Development" : "3D Art"}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 px-5 pb-6 sm:px-7 sm:pb-7 -mt-3 relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-['Fraunces'] font-medium text-foreground text-2xl md:text-[1.75rem] leading-tight flex items-center gap-2">
                        {group.emoji} {groupName}
                      </h3>
                      {linkItem && (
                        <a
                          href={linkItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 flex items-center gap-1 text-[10px] sm:text-xs font-['JetBrains_Mono'] text-primary hover:text-black hover:bg-primary transition-colors bg-primary/10 px-3 py-2 rounded-full border border-primary/20"
                        >
                          {linkItem.linkLabel === "github"
                            ? t.viewGithub
                            : linkItem.linkLabel === "site"
                              ? t.viewSite
                              : linkItem.linkLabel === "play"
                                ? t.playGame
                              : t.viewProcess}{" "}
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                    <p className="text-sm sm:text-[15px] leading-6 text-white/58 min-h-12">
                      {t.groupDescriptions[group.groupKey]}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {group.concept && (
                        <span className="text-[10px] sm:text-xs font-['JetBrains_Mono'] tracking-widest text-white/50 bg-white/5 px-2 py-1 rounded-md border border-white/10">
                          {group.concept}
                        </span>
                      )}
                      <ToolTags tools={group.tools} />
                    </div>
                    {allImages.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setLightbox({ images: allImages, index: 0 })}
                        className="mt-1 flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-['JetBrains_Mono'] tracking-wider text-white/50 hover:text-primary transition-colors"
                      >
                        <span className="flex items-center gap-2"><Images size={15} /> {allImages.length} {t.imageCount}</span>
                        <span className="flex items-center gap-1">{t.viewLarge} <ArrowUpRight size={14} /></span>
                      </button>
                    )}
                  </div>
                </article>
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
