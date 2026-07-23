import { useState } from "react";

interface LoadingImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LoadingImage({ src, alt, className = "" }: LoadingImageProps) {
  // 이미지가 완전히 다운로드 되었는지 추적하는 상태
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative flex items-center justify-center bg-[#111] overflow-hidden ${className}`}>
      
      {/*  1. 이미지가 로딩 중일 때 보여줄 텍스트 (깜빡거림) */}
      {!isLoaded && (
        <span className="absolute text-[10px] sm:text-xs text-green-400/60 font-mono tracking-widest animate-pulse z-0">
          LOADING IMAGE...
        </span>
      )}

      {/*  2. 실제 이미지 */}
      <img
        src={src}
        alt={alt}
        // 다운로드가 완료되면 isLoaded를 true로 바꿈
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out z-10 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}