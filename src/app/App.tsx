import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, Menu, X, Box, ExternalLink, Instagram, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// 1. 파일 이름 리스트 관리
const GLB_FILES: Record<string, string> = {
  glasses_1: 'glasses_1.glb',
  glasses_2: 'glasses_2.glb',
  glasses_3: 'glasses_3.glb',
  coffeemachine: 'coffeemachine.glb',
  coffeegrinder: 'coffeegrinder.glb',
  coffeepot: 'coffeepot.glb',
  bag: 'bag.glb',
  kettle: 'kettle.glb',
  handdrip: 'handdrip.glb',
  disposablecup: 'disposablecup.glb',
  chair_table: 'chair_table.glb',
};

// 2. 실제 코드에서 사용할 경로 맵 자동 생성
export const STATIC_GLB_MAP = Object.fromEntries(
  Object.entries(GLB_FILES).map(([key, filename]) => [
    key, 
    `${import.meta.env.BASE_URL}glb_files/${filename}`
  ])
);
const STATIC_GLB_IDS = new Set(Object.keys(STATIC_GLB_MAP));

// ─── IndexedDB ────────────────────────────────────────────────────────────────

const DB_NAME = "portfolio_glb";
const STORE = "models";
const VIDEOS_STORE = "videos";

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
      if (!db.objectStoreNames.contains(VIDEOS_STORE)) db.createObjectStore(VIDEOS_STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function loadGlb(id: string): Promise<{ url: string; name: string } | null> {
  const db = await openDB();
  return new Promise((res) => {
    const req = db.transaction(STORE, "readonly").objectStore(STORE).get(id);
    req.onsuccess = () => {
      const v = req.result as { buf: ArrayBuffer; name: string } | undefined;
      if (!v) return res(null);
      res({ url: URL.createObjectURL(new Blob([v.buf], { type: "model/gltf-binary" })), name: v.name });
    };
    req.onerror = () => res(null);
  });
}

function getGlbUrl(id: string): { url: string; name?: string } | null {
  if (STATIC_GLB_IDS.has(id)) {
    return { url: STATIC_GLB_MAP[id], name: `${id}.glb` };
  }
  return null;
}

async function loadVideo(id: string): Promise<{ url: string; name: string } | null> {
  const db = await openDB();
  return new Promise((res) => {
    const req = db.transaction(VIDEOS_STORE, "readonly").objectStore(VIDEOS_STORE).get(id);
    req.onsuccess = () => {
      const v = req.result as { buf: ArrayBuffer; name: string } | undefined;
      if (!v) return res(null);
      res({ url: URL.createObjectURL(new Blob([v.buf], { type: "video/mp4" })), name: v.name });
    };
    req.onerror = () => res(null);
  });
}

type Meta = { tools?: string[]; longDesc?: string; productionTime?: string };
function loadMetadata(id: string): Meta {
  try {
    const s = localStorage.getItem(`meta_${id}`);
    if (!s) return {};
    return JSON.parse(s) as Meta;
  } catch (e) { return {}; }
}

async function listGlbIds(): Promise<string[]> {
  const db = await openDB();
  return new Promise((res) => {
    const req = db.transaction(STORE, "readonly").objectStore(STORE).getAllKeys();
    req.onsuccess = () => res(req.result as string[]);
    req.onerror = () => res([]);
  });
}

async function listVideoIds(): Promise<string[]> {
  const db = await openDB();
  return new Promise((res) => {
    const req = db.transaction(VIDEOS_STORE, "readonly").objectStore(VIDEOS_STORE).getAllKeys();
    req.onsuccess = () => res(req.result as string[]);
    req.onerror = () => res([]);
  });
}

// ─── Data ─────────────────────────────────────────────────────────────────────

interface PortfolioItem {
  id: string;        // unique key for IndexedDB / static media filename base
  title: string;
  desc: string;
  thumb: string;
  mediaType?: 'image' | 'model' | 'video' | 'gallery';
  mediaSrc?: string; // optional filename base for model/video sources
  galleryImages?: string[];
  videoSrc?: string;
  videoLinks?: string[];
  isProcess?: boolean; // process/link cards
  link?: string;
}
interface PortfolioGroup {
  groupName: string;
  emoji: string;
  items: PortfolioItem[];
}
const PORTFOLIO: PortfolioGroup[] = [
  {
    groupName: "안경 프로젝트",
    emoji: "👓",
    items: [
      { id: "glasses_result_gallery", title: "안경 결과 렌더링", desc: "안경 프로젝트 결과 이미지와 영상", thumb: `${import.meta.env.BASE_URL}images/glasses/1.png`, mediaType: "gallery", galleryImages: [
        `${import.meta.env.BASE_URL}images/glasses/1.png`,
        `${import.meta.env.BASE_URL}images/glasses/2.png`,
        `${import.meta.env.BASE_URL}images/glasses/4.png`,
        `${import.meta.env.BASE_URL}images/glasses/5.png`,
        `${import.meta.env.BASE_URL}images/glasses/6.png`,
        `${import.meta.env.BASE_URL}images/glasses/3.png`,
        `${import.meta.env.BASE_URL}images/glasses/7.png`,
        `${import.meta.env.BASE_URL}images/glasses/8.png`,
        `${import.meta.env.BASE_URL}images/glasses/9.png`,
        `${import.meta.env.BASE_URL}images/glasses/10.png`,
        `${import.meta.env.BASE_URL}images/glasses/11.png`,
        `${import.meta.env.BASE_URL}images/glasses/12.png`,
        `${import.meta.env.BASE_URL}images/glasses/13.png`,
        `${import.meta.env.BASE_URL}images/glasses/14.png`,
        `${import.meta.env.BASE_URL}images/glasses/15.png`,
        `${import.meta.env.BASE_URL}images/glasses/16.png`,
        `${import.meta.env.BASE_URL}images/glasses/17.png`,
        `${import.meta.env.BASE_URL}images/glasses/18.png`,
        `${import.meta.env.BASE_URL}images/glasses/19.png`,
        `${import.meta.env.BASE_URL}images/glasses/20.png`,
        `${import.meta.env.BASE_URL}images/glasses/21.png`,
        `${import.meta.env.BASE_URL}images/glasses/22.png`,
        `${import.meta.env.BASE_URL}images/glasses/23.png`,
        `${import.meta.env.BASE_URL}images/glasses/24.png`,
        `${import.meta.env.BASE_URL}images/glasses/25.png`,
        `${import.meta.env.BASE_URL}images/glasses/26.png`,
        `${import.meta.env.BASE_URL}images/glasses/27.png`,
        `${import.meta.env.BASE_URL}images/glasses/28.png`,
        `${import.meta.env.BASE_URL}images/glasses/29.png`,
      ], videoLinks: [
        "https://drive.google.com/file/d/1dTS_g03Vwdw9BfpnFqk0ZQC4ey5lu9zM/view?usp=drive_link",
        "https://drive.google.com/file/d/1XkE5SO1fS3AC-Kcrp3KGZinesodA1TJI/view?usp=drive_link",
      ] },
      { id: "glasses_1", title: "안경", desc: "기본 안경 모델링", thumb: `${import.meta.env.BASE_URL}images/glasses_1.png` },
      { id: "glasses_2", title: "K-style 안경", desc: "K-style 안경 모델", thumb: `${import.meta.env.BASE_URL}images/glasses_2.png` },
      { id: "glasses_3", title: "VR 안경", desc: "VR Glasses 모델링", thumb: `${import.meta.env.BASE_URL}images/glasses_3.png` },
      { id: "glass_project_process", title: "안경 제작 과정", desc: "제작 과정 설명 페이지", thumb: `${import.meta.env.BASE_URL}images/glass_project_process.png`, isProcess: true, link: `${import.meta.env.BASE_URL}glasses_project/index.html` },
    ],
  },
  {
    groupName: "카페 프로젝트",
    emoji: "☕",
    items: [
      { id: "cafe_result_gallery", title: "카페 결과 렌더링", desc: "카페 프로젝트 결과 이미지와 영상", thumb: `${import.meta.env.BASE_URL}images/cafe/0.jpeg`, mediaType: "gallery", galleryImages: [
        `${import.meta.env.BASE_URL}images/cafe/0.jpeg`,
        `${import.meta.env.BASE_URL}images/cafe/1.jpeg`,
        `${import.meta.env.BASE_URL}images/cafe/2.jpeg`,
        `${import.meta.env.BASE_URL}images/cafe/3.jpeg`,
        `${import.meta.env.BASE_URL}images/cafe/4.jpeg`,
        `${import.meta.env.BASE_URL}images/cafe/5.jpeg`,
        `${import.meta.env.BASE_URL}images/cafe/6.jpeg`,
      ], videoLinks: [
        "https://drive.google.com/file/d/1Gcl7gPJSkSSYWH6YBFoNTYB_78xN2WFp/view?usp=drive_link",
        "https://drive.google.com/file/d/1buT0a9OPEFYPeK3YSYEcteHSf8nRteZb/view?usp=sharing",
      ] },
      { id: "coffeemachine", title: "Coffee Machine", desc: "커피머신 모델링", thumb: `${import.meta.env.BASE_URL}images/coffeemachine.png` },
      { id: "coffeegrinder", title: "Coffee Grinder", desc: "스타일라이즈드 컨셉 커피 그라인더 모델링", thumb: `${import.meta.env.BASE_URL}images/coffeegrinder.png` },
      { id: "coffeepot", title: "Coffee Pot", desc: "스타일라이즈드 컨셉 커피 포트 모델링", thumb: `${import.meta.env.BASE_URL}images/coffeepot.png` },
      { id: "bag", title: "Coffee Bag", desc: "스타일라이즈드 컨셉 커피 백 모델링", thumb: `${import.meta.env.BASE_URL}images/bag.png` },
      { id: "kettle", title: "Kettle", desc: "스타일라이즈드 컨셉 주전자 모델링", thumb: `${import.meta.env.BASE_URL}images/kettle.png` },
      { id: "handdrip", title: "Handdrip Coffee", desc: "스타일라이즈드 컨셉 핸드드립 커피 모델링", thumb: `${import.meta.env.BASE_URL}images/handdrip.png` },
      { id: "disposablecup", title: "일회용 컵", desc: "스타일라이즈드 컨셉 일회용 컵 모델링", thumb: `${import.meta.env.BASE_URL}images/disposablecup.png` },
      { id: "chair_table", title: "의자 · 테이블", desc: "스타일라이즈드 컨셉 의자, 테이블 모델링", thumb: `${import.meta.env.BASE_URL}images/chair_table.png` },
      { id: "cafe_project_process", title: "카페 공간 제작 과정", desc: "스타일라이즈드 컨셉 공간 제작 설명 페이지", thumb: `${import.meta.env.BASE_URL}images/cafe_project_process.png`, isProcess: true, link: `${import.meta.env.BASE_URL}cafe_project/index.html` },
      
    ],
  },
  {
    groupName: "게이밍룸 프로젝트",
    emoji: "🎮",
    items: [
      { id: "gamingroom_result_gallery", title: "게이밍룸 결과 렌더링", desc: "게이밍룸 프로젝트 이미지 갤러리", thumb: `${import.meta.env.BASE_URL}images/gamingroom/1.jpeg`, mediaType: "gallery", galleryImages: [
        `${import.meta.env.BASE_URL}images/gamingroom/1.jpeg`,
        `${import.meta.env.BASE_URL}images/gamingroom/2.jpeg`,
        `${import.meta.env.BASE_URL}images/gamingroom/3.jpeg`,
        `${import.meta.env.BASE_URL}images/gamingroom/4.jpeg`,
        `${import.meta.env.BASE_URL}images/gamingroom/5.jpeg`,
        `${import.meta.env.BASE_URL}images/gamingroom/6.jpeg`,
        `${import.meta.env.BASE_URL}images/gamingroom/7.jpeg`,
        `${import.meta.env.BASE_URL}images/gamingroom/8.jpeg`,
        `${import.meta.env.BASE_URL}images/gamingroom/9.jpeg`,
        `${import.meta.env.BASE_URL}images/gamingroom/10.jpeg`,
        `${import.meta.env.BASE_URL}images/gamingroom/11.jpeg`,
        `${import.meta.env.BASE_URL}images/gamingroom/12.jpeg`,
      ] },
    ],
  },
  {
    groupName: "무대 디자인 프로젝트",
    emoji: "🎭",
    items: [
      { id: "stage_result_gallery", title: "무대 결과 렌더링", desc: "무대 디자인 프로젝트 이미지 갤러리", thumb: `${import.meta.env.BASE_URL}images/stage/1.jpeg`, mediaType: "gallery", galleryImages: [
        `${import.meta.env.BASE_URL}images/stage/1.jpeg`,
        `${import.meta.env.BASE_URL}images/stage/2.jpeg`,
        `${import.meta.env.BASE_URL}images/stage/B.jpeg`,
        `${import.meta.env.BASE_URL}images/stage/H.jpeg`,
        `${import.meta.env.BASE_URL}images/stage/J.jpeg`,
      ] },
    ],
  },
  {
    groupName: "개발 프로젝트 아카이브",
    emoji: "🗃️",
    items: [
      {
        id: "dev_archive",
        title: "개발 프로젝트 아카이브",
        desc: "진행 해왔던 유니티 개발 프로젝트들을 볼 수 있습니다. (외부 링크)",
        thumb: `${import.meta.env.BASE_URL}images/dev.jpg`,
        link: "https://kaput-muskox-1f4.notion.site/2a3a13adf6c48050b9b5cfe097165b8c",
      },
    ],
  },
];



const TOOLS = [
  { name: "Unity" },  
  { name: "Unreal" },
  { name: "Blender" },
  { name: "Substance Painter" },
  { name: "Three.js" },
];

function ThreeCanvas({ glbUrl, autoRotate }: { glbUrl: string; autoRotate: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;
    model: THREE.Object3D | null;
    animId: number;
  } | null>(null);
  const autoRotateRef = useRef(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => { autoRotateRef.current = autoRotate; }, [autoRotate]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 1000);
    camera.position.set(0, 1, 5);

    const controls = new OrbitControls(camera, canvas);
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 0.5;
    controls.maxDistance = 20;

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const key = new THREE.DirectionalLight(0xfff5e0, 2.5);
    key.position.set(5, 8, 5);
    scene.add(key);
    const fill = new THREE.PointLight(0xd4a853, 1.5, 30);
    fill.position.set(-5, 3, -5);
    scene.add(fill);
    const rim = new THREE.PointLight(0x6eb5c9, 0.8, 20);
    rim.position.set(5, -3, 5);
    scene.add(rim);

    const ro = new ResizeObserver(() => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(canvas);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    let animId = 0;
    const tick = () => {
      animId = requestAnimationFrame(tick);
      controls.update();
      if (autoRotateRef.current && ctxRef.current?.model)
        ctxRef.current.model.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    tick();

    ctxRef.current = { renderer, scene, camera, controls, model: null, animId };
    return () => { cancelAnimationFrame(animId); ro.disconnect(); renderer.dispose(); ctxRef.current = null; };
  }, []);

  useEffect(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    setLoadError(null);
    const normalizedUrl = typeof glbUrl === 'string'
      ? glbUrl.trim()
      : glbUrl != null
        ? String(glbUrl).trim()
        : '';
    if (!normalizedUrl) {
      setLoadError(`3D 모델 로드 URL이 유효하지 않습니다: ${String(glbUrl)}`);
      return;
    }
    if (ctx.model) { ctx.scene.remove(ctx.model); ctx.model = null; }

    new GLTFLoader().load(
      normalizedUrl,
      (gltf) => {
        const loaded = gltf.scene;
        const box = new THREE.Box3().setFromObject(loaded);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const scale = 2.5 / Math.max(size.x, size.y, size.z);
        loaded.scale.setScalar(scale);
        loaded.position.sub(center.multiplyScalar(scale));
        ctx.scene.add(loaded);
        ctx.model = loaded;
      },
      undefined,
      (error) => {
        console.error('GLTFLoader 상세 에러:', error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        setLoadError(`3D 모델 로드 실패: ${errorMessage}`);
      }
    );
  }, [glbUrl]);

  return (
    <div className="w-full h-full min-h-[320px] relative">
      <canvas ref={canvasRef} className="w-full h-full block" style={{ touchAction: "none", display: "block" }} />
      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/90 text-sm text-foreground p-4 text-center">
          {loadError}
        </div>
      )}
    </div>
  );
}

// ─── Work Modal ───────────────────────────────────────────────────────────────

function WorkModal({ item, glbData, videoData, meta, onClose }: {
  item: PortfolioItem;
  glbData: { url: string; name?: string } | null;
  videoData?: { url: string; name: string } | null;
  meta?: Meta;
  onClose: () => void;
}) {
  const [autoRotate, setAutoRotate] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [lightbox, setLightbox] = useState<{ type: 'image' | 'video'; src: string; index?: number } | null>(null);

  useEffect(() => { document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = ""; }; }, []);
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox) {
          setLightbox(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose, lightbox]);

  useEffect(() => {
    setGalleryIndex(0);
    setLightbox(null);
  }, [item.id]);

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-lg flex items-center justify-center p-4 md:p-8 transition-opacity"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      
      <div className="relative w-full max-w-5xl bg-[#0a0a10]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 shrink-0 bg-white/[0.02]">
          <div className="flex items-center gap-4">
            <h3 className="font-['Fraunces'] font-medium text-foreground text-2xl tracking-wide">{item.title}</h3>
            {glbData && (
              <span className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] text-white/80 tracking-widest uppercase bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <Box size={12} /> 3D
              </span>
            )}
            {!glbData && videoData && (
              <span className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] text-white/80 tracking-widest uppercase bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <ExternalLink size={12} /> VIDEO
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="p-2 text-muted-foreground hover:text-white hover:bg-white/10 rounded-full transition-all">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Viewer + Meta */}
        <div className="flex-1 overflow-auto p-6 scrollbar-hide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left: Media Area */}
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
              <div className="relative h-[320px] md:h-[450px] lg:h-[500px] bg-[#050508] border border-white/5 rounded-xl flex items-center justify-center overflow-hidden shadow-inner">
                {item.mediaType === "gallery" ? (
                  item.galleryImages && item.galleryImages.length > 0 ? (
                    <button type="button" onClick={() => {
                      const src = item.galleryImages?.[galleryIndex];
                      if (src) setLightbox({ type: 'image', src, index: galleryIndex });
                    }} className="w-full h-full group">
                      <img src={item.galleryImages?.[galleryIndex] ?? ''} alt={`${item.title} ${galleryIndex + 1}`} className="w-full h-full object-contain cursor-zoom-in transition-transform duration-500 group-hover:scale-[1.02]" />
                    </button>
                  ) : (
                    <div className="flex items-center justify-center text-muted-foreground/50 h-full font-light">이미지 갤러리가 없습니다</div>
                  )
                ) : glbData ? (
                  <ThreeCanvas glbUrl={glbData.url} autoRotate={autoRotate} />
                ) : videoData ? (
                  <video src={videoData.url} controls className="w-full h-full object-contain rounded-lg" />
                ) : (
                  <div className="flex items-center justify-center text-muted-foreground/50 h-full font-light">미디어가 없습니다</div>
                )}
              </div>

              {/* Gallery Thumbnails */}
              {item.mediaType === "gallery" && item.galleryImages && item.galleryImages.length > 1 && (
                <div className="grid grid-cols-5 md:grid-cols-8 gap-3 mt-2">
                  {item.galleryImages.map((src, index) => (
                    <button key={src} type="button" onClick={() => setGalleryIndex(index)}
                      className={`relative overflow-hidden rounded-lg aspect-square border-2 transition-all duration-200 ${index === galleryIndex ? 'border-primary opacity-100 scale-105 shadow-lg' : 'border-transparent opacity-40 hover:opacity-100 hover:scale-105 bg-black'}`}
                    >
                      <img src={src} alt={`${item.title} thumb ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info Area */}
            <div className="col-span-1 bg-[#0f0f14] border border-white/5 rounded-xl p-6 flex flex-col h-fit">
              <h3 className="font-['Fraunces'] text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="font-['Figtree'] text-sm text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
              
              <div className="flex flex-col gap-6">
                {meta?.tools && meta.tools.length > 0 && (
                  <div>
                    <div className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-2">Tools</div>
                    <div className="flex flex-wrap gap-2">
                      {meta.tools.map(tool => (
                        <span key={tool} className="bg-white/5 border border-white/10 rounded-md px-2.5 py-1 font-['JetBrains_Mono'] text-xs text-white/90">{tool}</span>
                      ))}
                    </div>
                  </div>
                )}
                {meta?.productionTime && (
                  <div>
                    <div className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-1.5">Production Time</div>
                    <div className="font-['JetBrains_Mono'] text-sm text-white/90">{meta.productionTime}</div>
                  </div>
                )}
                {meta?.longDesc && (
                  <div>
                    <div className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-2">Description</div>
                    <div className="font-['Figtree'] text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{meta.longDesc}</div>
                  </div>
                )}
                
                {item.mediaType === "gallery" && item.videoLinks && item.videoLinks.length > 0 && (
                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/5">
                    {item.videoLinks.map((link, index) => (
                      <a key={link} href={link} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-5 py-4 hover:bg-white/15 transition-all">
                        <span className="text-sm font-medium text-white/90 group-hover:text-white">프로젝트 영상 {index + 1} 보기</span>
                        <ExternalLink size={16} className="text-muted-foreground group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox 유지 */}
      {lightbox && (
        <div className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 transition-opacity" onClick={() => setLightbox(null)}>
          <div className="relative w-full max-w-[95vw] h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setLightbox(null)} className="absolute top-4 right-4 z-20 rounded-full bg-white/10 border border-white/20 p-3 text-white hover:bg-white/20 backdrop-blur-md transition-all">
              <X size={24} />
            </button>
            {lightbox.type === 'image' ? (
              <>
                <button type="button" disabled={lightbox.index === 0} onClick={() => {
                  if (lightbox.index != null && item.galleryImages) {
                    const prevIndex = Math.max(0, lightbox.index - 1);
                    setLightbox({ type: 'image', src: item.galleryImages[prevIndex], index: prevIndex });
                    setGalleryIndex(prevIndex);
                  }
                }} className="absolute left-4 md:left-8 z-20 rounded-full bg-black/50 border border-white/20 p-4 text-white hover:bg-black/80 backdrop-blur-md transition-all disabled:opacity-0 disabled:cursor-not-allowed">
                  <ChevronLeft size={32} />
                </button>
                <img src={lightbox.src} alt="Large view" className="max-w-full max-h-[90vh] object-contain drop-shadow-2xl" />
                <button type="button" disabled={lightbox.index == null || (item.galleryImages ? lightbox.index >= item.galleryImages.length - 1 : true)} onClick={() => {
                  if (lightbox.index != null && item.galleryImages) {
                    const nextIndex = Math.min(item.galleryImages.length - 1, lightbox.index + 1);
                    setLightbox({ type: 'image', src: item.galleryImages[nextIndex], index: nextIndex });
                    setGalleryIndex(nextIndex);
                  }
                }} className="absolute right-4 md:right-8 z-20 rounded-full bg-black/50 border border-white/20 p-4 text-white hover:bg-black/80 backdrop-blur-md transition-all disabled:opacity-0 disabled:cursor-not-allowed">
                   <ChevronRight size={32} />
                </button>
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""}`}>
      <nav className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
        <button className="font-['Fraunces'] text-xl font-light tracking-tight text-foreground select-none" style={{ background: "none", border: "none", cursor: "default" }}>
          JEONG YEON SU<span className="text-primary">.</span>
        </button>
        <ul className="hidden md:flex items-center gap-10">
          {["Works", "About"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="font-['Figtree'] text-sm text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase">{l}</a></li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </nav>
      {open && (
        <div className="md:hidden bg-card border-b border-border px-8 py-6">
          <ul className="flex flex-col gap-5">
            {["Works", "About"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="font-['Figtree'] text-base text-foreground tracking-widest uppercase">{l}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
// 1. '/public/...' 절대 경로를 사용하여 public 폴더 안의 파일들을 가져옵니다.
const imageModules = import.meta.glob('/public/images/*/*.{png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' });
const BACKGROUND_IMAGES = Object.values(imageModules) as string[];
// 2. 통계 개수를 세기 위한 glob 경로도 public으로 맞춰줍니다.
const glbCountStatic = Object.keys(import.meta.glob('/public/glb_files/*.{glb,gltf}', { eager: true })).length;
const renderImageCountStatic = Object.keys(import.meta.glob('/public/images/{cafe,glasses,gamingroom,stage}/*.{png,jpg,jpeg}', { eager: true })).length;
const videoCountStatic = 4;

function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    for (let i = BACKGROUND_IMAGES.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [BACKGROUND_IMAGES[i], BACKGROUND_IMAGES[j]] = [BACKGROUND_IMAGES[j], BACKGROUND_IMAGES[i]];
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#050508] flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0 bg-[#050508]">
        {BACKGROUND_IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Background ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === currentBgIndex ? "opacity-50" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 mt-20 flex flex-col items-center w-full">
         <span className="font-['JetBrains_Mono'] text-[10px] text-white/70 tracking-[0.3em] uppercase mb-5 border border-white/10 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md shadow-lg">
           3D Modeler, Developer, Artest
         </span> 
                    
        <h1 className="font-['Fraunces'] text-white tracking-wide mb-8 md:mb-16" style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}>
          Feel Spaces, 
          <span className="font-['Fraunces'] text-white/70 text-xl md:text-2xl">
          &nbsp;&nbsp; Through Technology.
          </span>
        </h1>
        
         <div className="flex flex-col sm:flex-row items-center gap-4">
           <a href="#works" className="group flex items-center gap-3 font-['Figtree'] text-sm font-medium bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
             작업물 보기 <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </a>
           <a href="#about" className="flex items-center gap-2 font-['Figtree'] text-sm font-medium bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full hover:bg-white/15 backdrop-blur-md transition-all duration-300">
             About Me
           </a>
         </div>

         <div className="flex flex-wrap justify-center gap-10 md:gap-20 mt-24 pt-10 border-t border-white/10 w-full max-w-4xl">
           {[
             { value: String(PORTFOLIO.length), label: "Projects" },
             { value: String(glbCountStatic), label: "3D Models" },
             { value: String(renderImageCountStatic), label: "Renders" },
             { value: String(videoCountStatic), label: "Videos" },
           ].map((s) => (
             <div key={s.label} className="flex flex-col gap-2">
               <span className="font-['Fraunces'] font-semibold text-3xl text-white/90 drop-shadow-lg">{s.value}</span>
               <span className="font-['JetBrains_Mono'] text-[10px] text-white/40 tracking-widest uppercase">{s.label}</span>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
}


// ─── Item Card ──────────────────────────────────────────

function ItemCard({ item, has3d, hasVideo, onClick }: {
  item: PortfolioItem;
  has3d: boolean;
  hasVideo: boolean;
  onClick: () => void;
}) {
  return (
    <div className="group relative flex flex-col gap-3 cursor-pointer" onClick={onClick}>
      {/* Thumbnail 이미지 영역 */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#0a0a10] border border-white/5 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
        <img src={item.thumb} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        
        {/* 상태 뱃지 (3D, VIDEO 등) */}
        <div className="absolute top-3 left-3 flex gap-2">
          {has3d && (
            <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] text-white tracking-widest uppercase">
              <Box size={10} /> 3D
            </span>
          )}
          {hasVideo && (
            <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] text-white tracking-widest uppercase">
              <ExternalLink size={10} /> VIDEO
            </span>
          )}
          {item.mediaType === "gallery" && (
             <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] text-white tracking-widest uppercase">
              GALLERY
            </span>
          )}
        </div>

        {/* 오버레이 텍스트: 외부링크 대응 */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white/90 text-black font-medium text-sm px-5 py-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
            {item.link ? "외부 링크로 이동" : (item.isProcess ? "보러가기" : "자세히 보기")}
          </span>
        </div>
      </div>

      {/* 텍스트 영역 */}
      <div>
        <h4 className="font-['Fraunces'] font-medium text-lg text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
        <p className="font-['Figtree'] text-sm text-muted-foreground mt-1 line-clamp-2">{item.desc}</p>
      </div>
    </div>
  );
}

// ─── Works ────────────────────────────────────────────────────────────────────

function Works() {
  const [dbGlbIds, setDbGlbIds] = useState<Set<string>>(new Set());
  const [videoIds, setVideoIds] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const [selectedGlb, setSelectedGlb] = useState<{ url: string; name?: string } | null>(null);
  const [modalExtra, setModalExtra] = useState<{ videoData: { url: string; name: string } | null; meta: Meta } | null>(null);
  const [activeGroup, setActiveGroup] = useState<string>("all");

  const refresh = useCallback(async () => {
    const [ids, vids] = await Promise.all([listGlbIds(), listVideoIds()]);
    setDbGlbIds(new Set(ids));
    setVideoIds(new Set(vids));
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const openItem = async (item: PortfolioItem) => {
    const fallbackMeta = loadMetadata(item.id);
    setSelected(item);
    setSelectedGlb(null);
    setModalExtra({ videoData: null, meta: fallbackMeta });

    try {
      const video = await loadVideo(item.id);
      let glb = null;
      if (item.mediaType !== "gallery") {
        const dbGlb = await loadGlb(item.id);
        glb = dbGlb ?? getGlbUrl(item.id);
      }
      setSelectedGlb(glb);
      setModalExtra({ videoData: video, meta: fallbackMeta });
    } catch (error) {
      console.error('포트폴리오 미디어 로드 실패', error);
      setSelectedGlb(item.mediaType !== "gallery" ? getGlbUrl(item.id) : null);
      setModalExtra({ videoData: null, meta: fallbackMeta });
    }
  };

  const groups = activeGroup === "all" ? PORTFOLIO : PORTFOLIO.filter(g => g.groupName === activeGroup);

  return (
    <section id="works" className="bg-background py-32">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-4">02 — Works</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-['Fraunces'] font-light text-foreground leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                Projects
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-2 md:gap-3">
              <button onClick={() => setActiveGroup("all")}
                className={`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${activeGroup === "all" ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105 font-semibold" : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/20 hover:text-white"}`}>
                All
              </button>
              {PORTFOLIO.map((g) => (
                <button key={g.groupName} onClick={() => setActiveGroup(g.groupName)}
                  className={`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 ${activeGroup === g.groupName ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105 font-semibold" : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/20 hover:text-white"}`}>
                  {g.emoji} {g.groupName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-20">
          {groups.map((group) => (
            <div key={group.groupName}>
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                <span className="text-2xl">{group.emoji}</span>
                <h3 className="font-['Fraunces'] font-medium text-foreground text-2xl">{group.groupName}</h3>
                <ChevronRight size={18} className="text-muted-foreground" />
                <span className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest">
                  {group.items.filter(i => !i.isProcess).length} PROJECTS
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {group.items.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    has3d={STATIC_GLB_IDS.has(item.id) || dbGlbIds.has(item.id)}
                    hasVideo={videoIds.has(item.id)}
                    onClick={() => {
                      if (item.link) {
                        window.open(item.link, "_blank", "noopener,noreferrer");
                      } else if (!item.isProcess) {
                        openItem(item);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <WorkModal
          item={selected}
          glbData={selectedGlb}
          videoData={modalExtra?.videoData || null}
          meta={modalExtra?.meta}
          onClose={() => { setSelected(null); setSelectedGlb(null); setModalExtra(null); }}
        />
      )}
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="bg-card py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="relative max-w-[420px] mx-auto lg:mx-0">
            <div className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-3xl shadow-xl">
              <img src="./images/3212_4282.jpg" alt="Portrait" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:pt-8">
            <div>
              <p className="font-['JetBrains_Mono'] text-xs text-primary tracking-widest uppercase mb-6">03 — About Me</p>
              <h2 className="font-['Fraunces'] font-light text-foreground leading-tight mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                I build spaces that <em className="italic text-primary">exist nowhere</em> but feel real.
              </h2>
              <div className="flex flex-col gap-4 font-['Figtree'] text-base text-muted-foreground leading-relaxed">
                <p>서울을 기반으로 활동하는 3D 디자이너입니다. 건축 시각화, 제품 렌더링, 스타일라이즈드 오브젝트 모델링을 주로 작업합니다.</p>
                <p>기술적 정밀함과 예술적 직관의 교차점에서 작업하며, 아무 곳에도 존재하지 않지만 현실처럼 느껴지는 공간과 오브젝트를 만들어냅니다.</p>
              </div>
            </div>
            <div className="border-t border-border pt-8">
              <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-6">Software & Tools</p>
              <div className="flex flex-wrap gap-3">
                {TOOLS.map((tool) => (
                  <span key={tool.name} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-border pt-8">
              <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase mb-6">Contact</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.instagram.com/yeon_ddooo/" target="_blank" rel="noopener noreferrer" className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                    <Instagram size={18} />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="https://www.linkedin.com/in/yeonsu0826/" target="_blank" rel="noopener noreferrer" className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                    <Linkedin size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-card border-t border-border px-8 py-8">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-['Fraunces'] text-lg font-light text-foreground">JEONG YEON SU<span className="text-primary">.</span></span>
        <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest">© 2025 — All rights reserved</p>
        <p className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase">Seoul, KR</p>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Nav />
      <Hero />
      <Works />
      <About />
      <Footer />
    </div>
  );
}