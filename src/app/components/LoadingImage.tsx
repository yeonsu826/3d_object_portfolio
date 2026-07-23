import { useState, useEffect, useRef } from "react";

// 1. Props 인터페이스에 onClick 속성을 추가함
interface LoadingImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void; 
}

// 2. 컴포넌트 매개변수에서 onClick을 받아옴
export default function LoadingImage({ src, alt, className = "", onClick }: LoadingImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative flex items-center justify-center bg-[#111] overflow-hidden ${className}`}>
      
      {!isLoaded && (
        <span className="absolute text-[10px] sm:text-xs text-green-400/60 font-mono tracking-widest animate-pulse z-0">
          LOADING...
        </span>
      )}

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onClick={onClick} // 3. 실제 img 태그에 onClick 이벤트를 연결함
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out z-10 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}