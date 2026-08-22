import { Play } from "lucide-react";
import { useLang } from "../context/LangContext";
import { VIMEO_VIDEOS, type VideoItem } from "../data/videos";
import HorizontalScroll from "./HorizontalScroll";
import ToolTags from "./ToolTags";

const scrollClassName = `flex overflow-x-auto gap-6 pb-8 pr-8 md:pr-16 items-start
  [&::-webkit-scrollbar]:h-1
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/40
  transition-colors w-full`;

function VideoCard({ video }: { video: VideoItem }) {
  const { t } = useLang();
  const isLandscape = video.type === "landscape";

  return (
    <div
      className={`flex-shrink-0 flex flex-col gap-3 ${
        isLandscape ? "w-[400px] md:w-[480px]" : "w-[240px] md:w-[260px]"
      }`}
    >
      <a
        href={`https://vimeo.com/${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0a] group relative cursor-pointer block w-full ${
          isLandscape ? "aspect-video" : "aspect-[9/16]"
        }`}
      >
        <iframe
          src={`https://player.vimeo.com/video/${video.id}?background=1&autoplay=1&loop=1&muted=1&dnt=1`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={`Vimeo Video ${video.id}`}
          className="absolute top-0 left-0 w-full h-full object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-700 pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 bg-white text-black px-5 py-2.5 rounded-full font-['Figtree'] text-xs font-bold transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2 shadow-xl">
            {t.playVideo} <Play size={14} className="fill-black" />
          </span>
        </div>
      </a>
      <ToolTags tools={video.tools} />
    </div>
  );
}

export default function VideoGallery() {
  const { t } = useLang();
  const portraitVideos = VIMEO_VIDEOS.filter((video) => video.type === "portrait");
  const landscapeVideos = VIMEO_VIDEOS.filter((video) => video.type === "landscape");

  return (
    <section id="videolog" className="scroll-mt-20 bg-[#050505] pt-10 pb-32">
      <div className="max-w-[1400px] mx-auto pl-8 md:pl-16">
        <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-white/10 pr-8 md:pr-16">
          <h2
            className="font-['Fraunces'] font-light text-white leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            {t.videoLog}
          </h2>
          <span className="font-['Figtree'] text-xs tracking-widest uppercase text-white/40">
            {t.videoLogSub}
          </span>
        </div>

        {portraitVideos.length > 0 && (
          <div className="mb-12">
            <HorizontalScroll className={scrollClassName}>
              {portraitVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </HorizontalScroll>
          </div>
        )}

        {landscapeVideos.length > 0 && (
          <HorizontalScroll className={scrollClassName}>
            {landscapeVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </HorizontalScroll>
        )}
      </div>
    </section>
  );
}
