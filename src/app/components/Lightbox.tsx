import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type LightboxProps = {
  images: string[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
  caption?: string;
  loop?: boolean;
};

export default function Lightbox({
  images,
  index,
  onClose,
  onChange,
  caption,
  loop = false,
}: LightboxProps) {
  const last = images.length - 1;
  const canPrev = loop || index > 0;
  const canNext = loop || index < last;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && canPrev) {
        onChange(loop ? (index - 1 + images.length) % images.length : index - 1);
      }
      if (e.key === "ArrowRight" && canNext) {
        onChange(loop ? (index + 1) % images.length : index + 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [canNext, canPrev, images.length, index, loop, onChange, onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
      style={{ zIndex: 99999 }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[95vw] h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-50 rounded-full bg-white/10 border border-white/20 p-3 text-white hover:bg-white/20 backdrop-blur-md transition-all cursor-pointer"
        >
          <X size={24} />
        </button>
        <button
          type="button"
          disabled={!canPrev}
          onClick={(e) => {
            e.stopPropagation();
            onChange(loop ? (index - 1 + images.length) % images.length : index - 1);
          }}
          className="absolute left-4 md:left-8 z-50 rounded-full bg-black/50 border border-white/20 p-4 text-white hover:bg-black/80 backdrop-blur-md transition-all disabled:opacity-0 disabled:cursor-not-allowed cursor-pointer"
        >
          <ChevronLeft size={32} />
        </button>
        <img
          src={images[index]}
          alt={caption ?? "Enlarged view"}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="max-w-full max-h-[90vh] object-contain drop-shadow-2xl select-none cursor-zoom-out relative z-40"
        />
        <button
          type="button"
          disabled={!canNext}
          onClick={(e) => {
            e.stopPropagation();
            onChange(loop ? (index + 1) % images.length : index + 1);
          }}
          className="absolute right-4 md:right-8 z-50 rounded-full bg-black/50 border border-white/20 p-4 text-white hover:bg-black/80 backdrop-blur-md transition-all disabled:opacity-0 disabled:cursor-not-allowed cursor-pointer"
        >
          <ChevronRight size={32} />
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full font-['JetBrains_Mono'] text-white/80 text-sm pointer-events-none">
          {caption ? `${caption} · ` : ""}
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
