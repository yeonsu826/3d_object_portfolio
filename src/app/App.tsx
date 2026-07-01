import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, Menu, X, Upload, RotateCcw, Pencil, Check, Trash2, Box, ChevronRight, ExternalLink, Instagram, Linkedin } from "lucide-react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const STATIC_GLB_MAP: Record<string, string> = {
  glasses_1: new URL('../../glb_files/glasses_1.glb', import.meta.url).href,
  glasses_2: new URL('../../glb_files/glasses_2.glb', import.meta.url).href,
  glasses_3: new URL('../../glb_files/glasses_3.glb', import.meta.url).href,
  cafe: new URL('../../glb_files/cafe.glb', import.meta.url).href,
  coffeemachine: new URL('../../glb_files/coffeemachine.glb', import.meta.url).href,
  coffeegrinder: new URL('../../glb_files/coffeegrinder.glb', import.meta.url).href,
  coffeepot: new URL('../../glb_files/coffeepot.glb', import.meta.url).href,
  bag: new URL('../../glb_files/bag.glb', import.meta.url).href,
  kettle: new URL('../../glb_files/kettle.glb', import.meta.url).href,
  handdrip: new URL('../../glb_files/handdrip.glb', import.meta.url).href,
  disposablecup: new URL('../../glb_files/disposablecup.glb', import.meta.url).href,
  chair_table: new URL('../../glb_files/chair_table.glb', import.meta.url).href,
  gaming_room: new URL('../../glb_files/glasses_1.glb', import.meta.url).href,
  gaming_setup: new URL('../../glb_files/glasses_1.glb', import.meta.url).href,
  gaming_chair: new URL('../../glb_files/glasses_1.glb', import.meta.url).href,
  stage_set: new URL('../../glb_files/glasses_1.glb', import.meta.url).href,
  stage_lighting: new URL('../../glb_files/glasses_1.glb', import.meta.url).href,
  stage_props: new URL('../../glb_files/glasses_1.glb', import.meta.url).href,
  video_edit: new URL('../../glb_files/glasses_1.glb', import.meta.url).href,
  motion_graphics: new URL('../../glb_files/glasses_1.glb', import.meta.url).href,
  video_story: new URL('../../glb_files/glasses_1.glb', import.meta.url).href,
};
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
async function saveGlb(id: string, file: File) {
  const db = await openDB();
  const buf = await file.arrayBuffer();
  return new Promise<void>((res, rej) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put({ buf, name: file.name }, id);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
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
function saveMetadata(id: string, meta: Meta) {
  localStorage.setItem(`meta_${id}`, JSON.stringify(meta));
}
async function deleteGlb(id: string) {
  const db = await openDB();
  return new Promise<void>((res) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(id);
    tx.oncomplete = () => res();
  });
}
async function listGlbIds(): Promise<string[]> {
  const db = await openDB();
  return new Promise((res) => {
    const req = db.transaction(STORE, "readonly").objectStore(STORE).getAllKeys();
    req.onsuccess = () => res(req.result as string[]);
    req.onerror = () => res([]);
  });
}

async function saveVideo(id: string, file: File) {
  const db = await openDB();
  const buf = await file.arrayBuffer();
  return new Promise<void>((res, rej) => {
    const tx = db.transaction(VIDEOS_STORE, "readwrite");
    tx.objectStore(VIDEOS_STORE).put({ buf, name: file.name }, id);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
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
      { id: "glasses_1", title: "안경", desc: "기본 안경 모델링", thumb: "./images/glasses_1.png" },
      { id: "glasses_2", title: "K-style 안경", desc: "K-style 안경 모델", thumb: "./images/glasses_2.png" },
      { id: "glasses_3", title: "VR 안경", desc: "VR Glasses 모델링", thumb: "./images/glasses_3.png" },
      { id: "glass_project_process", title: "안경 제작 과정", desc: "제작 과정 설명 페이지", thumb: "./images/glass_project_process.png", isProcess: true, link: "./work_process/glasses_project/glasses_project.html" },
      { id: "glasses_result_gallery", title: "안경 결과 렌더링", desc: "안경 프로젝트 결과 이미지와 영상", thumb: "./images/glasses/1.png", mediaType: "gallery", galleryImages: [
        "./images/glasses/1.png",
        "./images/glasses/2.png",
        "./images/glasses/3.png",
        "./images/glasses/4.png",
        "./images/glasses/5.png",
        "./images/glasses/6.png",
        "./images/glasses/7.png",
        "./images/glasses/8.png",
        "./images/glasses/9.png",
        "./images/glasses/10.png",
        "./images/glasses/11.png",
        "./images/glasses/12.png",
        "./images/glasses/13.png",
        "./images/glasses/14.png",
        "./images/glasses/15.png",
        "./images/glasses/16.png",
        "./images/glasses/17.png",
        "./images/glasses/18.png",
        "./images/glasses/19.png",
        "./images/glasses/20.png",
        "./images/glasses/21.png",
        "./images/glasses/22.png",
        "./images/glasses/23.png",
        "./images/glasses/24.png",
        "./images/glasses/25.png",
        "./images/glasses/26.png",
        "./images/glasses/27.png",
        "./images/glasses/28.png",
        "./images/glasses/29.png",
      ], videoLinks: [
        "https://drive.google.com/file/d/1dTS_g03Vwdw9BfpnFqk0ZQC4ey5lu9zM/view?usp=drive_link",
        "https://drive.google.com/file/d/1XkE5SO1fS3AC-Kcrp3KGZinesodA1TJI/view?usp=drive_link",
      ] },
    ],
  },
  {
    groupName: "카페 프로젝트",
    emoji: "☕",
    items: [
      { id: "cafe", title: "카페 공간", desc: "카페 전체 공간 모델링", thumb: "./images/cafe.jpeg" },
      { id: "coffeemachine", title: "Coffee Machine", desc: "커피머신 모델링", thumb: "./images/coffeemachine.png" },
      { id: "coffeegrinder", title: "Coffee Grinder", desc: "스타일라이즈드 컨셉 커피 그라인더 모델링", thumb: "./images/coffeegrinder.png" },
      { id: "coffeepot", title: "Coffee Pot", desc: "스타일라이즈드 컨셉 커피 포트 모델링", thumb: "./images/coffeepot.png" },
      { id: "bag", title: "Coffee Bag", desc: "스타일라이즈드 컨셉 커피 백 모델링", thumb: "./images/bag.png" },
      { id: "kettle", title: "Kettle", desc: "스타일라이즈드 컨셉 주전자 모델링", thumb: "./images/kettle.png" },
      { id: "handdrip", title: "Handdrip Coffee", desc: "스타일라이즈드 컨셉 핸드드립 커피 모델링", thumb: "./images/handdrip.png" },
      { id: "disposablecup", title: "일회용 컵", desc: "스타일라이즈드 컨셉 일회용 컵 모델링", thumb: "./images/disposablecup.png" },
      { id: "chair_table", title: "의자 · 테이블", desc: "스타일라이즈드 컨셉 의자, 테이블 모델링", thumb: "./images/chair_table.png" },
      { id: "cafe_project_process", title: "카페 공간 제작 과정", desc: "스타일라이즈드 컨셉 공간 제작 설명 페이지", thumb: "./images/cafe_project_process.png", isProcess: true, link: "./work_process/cafe_project/cafe_project.html" },
      { id: "cafe_result_gallery", title: "카페 결과 렌더링", desc: "카페 프로젝트 결과 이미지와 영상", thumb: "./images/cafe/0.jpeg", mediaType: "gallery", galleryImages: [
        "./images/cafe/0.jpeg",
        "./images/cafe/1.jpeg",
        "./images/cafe/2.jpeg",
        "./images/cafe/3.jpeg",
        "./images/cafe/4.jpeg",
        "./images/cafe/5.jpeg",
        "./images/cafe/6.jpeg",
      ], videoLinks: [
        "https://drive.google.com/file/d/1Gcl7gPJSkSSYWH6YBFoNTYB_78xN2WFp/view?usp=drive_link",
        "https://drive.google.com/file/d/1buT0a9OPEFYPeK3YSYEcteHSf8nRteZb/view?usp=sharing",
      ] },
    ],
  },
  {
    groupName: "게이밍룸 프로젝트",
    emoji: "🎮",
    items: [
      { id: "gamingroom_result_gallery", title: "게이밍룸 결과 렌더링", desc: "게이밍룸 프로젝트 이미지 갤러리", thumb: "./images/gamingroom/1.jpeg", mediaType: "gallery", galleryImages: [
        "./images/gamingroom/1.jpeg",
        "./images/gamingroom/2.jpeg",
        "./images/gamingroom/3.jpeg",
        "./images/gamingroom/4.jpeg",
        "./images/gamingroom/5.jpeg",
        "./images/gamingroom/6.jpeg",
        "./images/gamingroom/7.jpeg",
        "./images/gamingroom/8.jpeg",
        "./images/gamingroom/9.jpeg",
        "./images/gamingroom/10.jpeg",
        "./images/gamingroom/11.jpeg",
        "./images/gamingroom/12.jpeg",
      ] },
    ],
  },
  {
    groupName: "무대 디자인 프로젝트",
    emoji: "🎭",
    items: [
      { id: "stage_result_gallery", title: "무대 결과 렌더링", desc: "무대 디자인 프로젝트 이미지 갤러리", thumb: "./images/stage/1.jpeg", mediaType: "gallery", galleryImages: [
        "./images/stage/1.jpeg",
        "./images/stage/2.jpeg",
        "./images/stage/B.jpeg",
        "./images/stage/H.jpeg",
        "./images/stage/J.jpeg",
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
        desc: "About Me에서 이동한 개발 프로젝트 아카이브 링크입니다.",
        thumb: "./images/dev.jpg",
        link: "https://kaput-muskox-1f4.notion.site/2a3a13adf6c48050b9b5cfe097165b8c",
      },
    ],
  },
  // 숨김 처리: 영상 프로젝트 (나중에 사용 예정)
  // {
  //   groupName: "영상",
  //   emoji: "🎬",
  //   items: [
  //     { id: "video_edit", title: "영상 편집", desc: "시네마틱 영상 편집 콘셉트", thumb: "./images/glasses_1.png" },
  //     { id: "motion_graphics", title: "모션 그래픽", desc: "브랜딩 모션 그래픽 디자인", thumb: "./images/glasses_2.png" },
  //     { id: "video_story", title: "비디오 스토리텔링", desc: "스토리 기반 영상 연출", thumb: "./images/glasses_3.png" },
  //   ],
  // },
];

const TOOLS = [
  { name: "Blender" },
  { name: "Three.js" },
  { name: "Figma" },
  { name: "Photoshop" },
  { name: "After Effects" },
  { name: "Premiere Pro" },
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
        console.error('GLTFLoader 에러', error);
        setLoadError('3D 모델을 불러오지 못했습니다.');
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

function WorkModal({ item, glbData, videoData, meta, editMode, onClose, onSaveMeta }: {
  item: PortfolioItem;
  glbData: { url: string; name?: string } | null;
  videoData?: { url: string; name: string } | null;
  meta?: Meta;
  editMode: boolean;
  onClose: () => void;
  onSaveMeta: (m: Meta) => void;
}) {
  const [autoRotate, setAutoRotate] = useState(false);
  const [editingMeta, setEditingMeta] = useState<Meta>(meta || {});
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
    setEditingMeta(meta || {});
    setGalleryIndex(0);
    setLightbox(null);
  }, [meta, item.id]);

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="relative w-full max-w-4xl bg-card border border-border flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <div className="flex items-center gap-4">
            <h3 className="font-['Fraunces'] font-medium text-foreground text-xl">{item.title}</h3>
            {glbData && (
              <span className="flex items-center gap-1 font-['JetBrains_Mono'] text-xs text-primary tracking-widest uppercase border border-primary/40 px-2 py-0.5">
                <Box size={10} /> 3D
              </span>
            )}
            {!glbData && videoData && (
              <span className="flex items-center gap-1 font-['JetBrains_Mono'] text-xs text-secondary tracking-widest uppercase border border-secondary/40 px-2 py-0.5">
                <ExternalLink size={10} /> VIDEO
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors"><X size={18} /></button>
          </div>
        </div>

        {/* Viewer + Meta */}
        <div className="flex-1 overflow-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-1 bg-[#0a0a10] flex flex-col gap-3 p-4">
              <div className="h-[320px] md:h-[380px] lg:h-[420px] bg-[#0a0a10] flex items-center justify-center overflow-hidden">
                {item.mediaType === "gallery" ? (
                  item.galleryImages && item.galleryImages.length > 0 ? (
                    <button type="button" onClick={() => {
                      const src = item.galleryImages?.[galleryIndex];
                      if (src) setLightbox({ type: 'image', src, index: galleryIndex });
                    }} className="w-full h-full">
                      <img src={item.galleryImages?.[galleryIndex] ?? ''} alt={`${item.title} ${galleryIndex + 1}`} className="w-full h-full object-contain cursor-zoom-in" />
                    </button>
                  ) : (
                    <div className="flex items-center justify-center text-muted-foreground h-full">이미지 갤러리가 없습니다</div>
                  )
                ) : glbData ? (
                  <ThreeCanvas glbUrl={glbData.url} autoRotate={autoRotate} />
                ) : videoData ? (
                  <video src={videoData.url} controls className="w-full h-full object-contain" />
                ) : (
                  <div className="flex items-center justify-center text-muted-foreground h-full">3D 모델 없음</div>
                )}
              </div>
              {item.mediaType === "gallery" && item.galleryImages && item.galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {item.galleryImages.map((src, index) => (
                    <button key={src} type="button" onClick={() => setGalleryIndex(index)}
                      className={`overflow-hidden rounded border ${index === galleryIndex ? 'border-primary' : 'border-border'} bg-[#09090f]`}
                    >
                      <img src={src} alt={`${item.title} thumb ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="col-span-1 bg-[#0a0a10] relative h-[320px] md:h-[380px] lg:h-[420px] p-4">
              {item.mediaType === "gallery" ? (
                item.videoLinks && item.videoLinks.length > 0 ? (
                  <div className="h-full w-full rounded-md border border-border bg-black/70 p-4 flex flex-col gap-3">
                    {item.videoLinks.map((link, index) => (
                      <a key={link} href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/95 text-sm font-medium text-black px-4 py-3 hover:bg-white transition-colors">
                        영상 {index + 1} 열기
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center h-full gap-3 p-4 text-muted-foreground">
                    <p className="font-['Fraunces'] text-base">영상 링크가 없습니다.</p>
                    <p className="text-xs">Google Drive 링크를 item.videoLinks에 설정해주세요.</p>
                  </div>
                )
              ) : glbData ? (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">3D 모델을 회전시키려면 왼쪽을 확인하세요.</div>
              ) : videoData ? (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">비디오가 이미 왼쪽에 표시됩니다.</div>
              ) : (
                <div className="flex items-center justify-center text-muted-foreground h-full">미디어가 없습니다</div>
              )}
            </div>
            <div className="col-span-1 bg-card p-4">
              <h3 className="font-['Fraunces'] text-lg font-medium mb-2">{item.title}</h3>
              <p className="font-['Figtree'] text-sm text-muted-foreground mb-3">{item.desc}</p>
              {editMode ? (
                <div className="flex flex-col gap-3">
                  <label className="text-xs text-muted-foreground">Tools (쉼표로 구분)</label>
                  <input value={(editingMeta.tools || []).join(', ')} onChange={(e) => setEditingMeta({ ...editingMeta, tools: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} className="bg-background border border-border px-3 py-2" />
                  <label className="text-xs text-muted-foreground">제작 기간</label>
                  <input value={editingMeta.productionTime || ''} onChange={(e) => setEditingMeta({ ...editingMeta, productionTime: e.target.value })} className="bg-background border border-border px-3 py-2" />
                  <label className="text-xs text-muted-foreground">상세 설명</label>
                  <textarea rows={6} value={editingMeta.longDesc || ''} onChange={(e) => setEditingMeta({ ...editingMeta, longDesc: e.target.value })} className="bg-background border border-border px-3 py-2" />
                  <div className="flex gap-2">
                    <button onClick={() => { saveMetadata(item.id, editingMeta); onSaveMeta(editingMeta); window.dispatchEvent(new Event('db-changed')); }} className="bg-primary text-primary-foreground px-4 py-2">저장</button>
                    <button onClick={() => setEditingMeta(meta || {})} className="px-4 py-2 border">취소</button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {editingMeta.tools && editingMeta.tools.length > 0 && (
                    <div>
                      <div className="text-xs text-muted-foreground">Tools</div>
                      <div className="font-['JetBrains_Mono'] text-sm">{editingMeta.tools.join(', ')}</div>
                    </div>
                  )}
                  {editingMeta.productionTime && (
                    <div>
                      <div className="text-xs text-muted-foreground">제작 기간</div>
                      <div className="font-['JetBrains_Mono'] text-sm">{editingMeta.productionTime}</div>
                    </div>
                  )}
                  {editingMeta.longDesc && (
                    <div>
                      <div className="text-xs text-muted-foreground">상세 설명</div>
                      <div className="font-['Figtree'] text-sm text-muted-foreground">{editingMeta.longDesc}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {lightbox && (
        <div className="fixed inset-0 z-[110] bg-black/90 flex items-center justify-center p-8" onClick={() => setLightbox(null)}>
          <div className="relative w-full max-w-[90vw] max-h-[90vh] flex items-center justify-center p-8" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setLightbox(null)} className="absolute top-4 right-4 z-20 rounded-full bg-white/90 p-2 text-black">
              <X size={18} />
            </button>
            {lightbox.type === 'image' ? (
              <>
                <button type="button" disabled={lightbox.index === 0} onClick={() => {
                  if (lightbox.index != null && item.galleryImages) {
                    const prevIndex = Math.max(0, lightbox.index - 1);
                    setLightbox({ type: 'image', src: item.galleryImages[prevIndex], index: prevIndex });
                    setGalleryIndex(prevIndex);
                  }
                }} className="absolute left-4 z-20 rounded-full bg-white/90 p-2 text-black disabled:opacity-40 disabled:cursor-not-allowed">
                  ◀
                </button>
                <img src={lightbox.src} alt="Large view" className="max-w-full max-h-full object-contain" />
                <button type="button" disabled={lightbox.index == null || (item.galleryImages ? lightbox.index >= item.galleryImages.length - 1 : true)} onClick={() => {
                  if (lightbox.index != null && item.galleryImages) {
                    const nextIndex = Math.min(item.galleryImages.length - 1, lightbox.index + 1);
                    setLightbox({ type: 'image', src: item.galleryImages[nextIndex], index: nextIndex });
                    setGalleryIndex(nextIndex);
                  }
                }} className="absolute right-4 z-20 rounded-full bg-white/90 p-2 text-black disabled:opacity-40 disabled:cursor-not-allowed">
                  ▶
                </button>
              </>
            ) : (
              <a href={lightbox.src} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <div className="flex h-full w-full items-center justify-center rounded-md border border-white/20 bg-black/80 p-8 text-center text-sm text-white">
                  Google Drive에서 영상 보기
                </div>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── GLB Upload Button ────────────────────────────────────────────────────────

function GlbUploadBtn({ itemId, hasDbGlb, onUploaded, onDeleted }: {
  itemId: string; hasDbGlb: boolean; onUploaded: () => void; onDeleted: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
      {hasDbGlb ? (
        <>
          <span className="font-['JetBrains_Mono'] text-xs text-primary flex items-center gap-1"><Check size={10} /> 업로드 GLB 있음</span>
          <button onClick={async (e) => { e.stopPropagation(); await deleteGlb(itemId); onDeleted(); window.dispatchEvent(new Event('db-changed')); }}
            className="text-muted-foreground hover:text-destructive transition-colors" title="삭제">
            <Trash2 size={11} />
          </button>
        </>
      ) : (
        <button onClick={() => inputRef.current?.click()}
          className="flex items-center gap-1 font-['JetBrains_Mono'] text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase">
          <Upload size={11} /> GLB 업로드
        </button>
      )}
      <input ref={inputRef} type="file" accept=".glb,.gltf" className="hidden"
        onChange={async (e) => { const f = e.target.files?.[0]; if (f && /\.(glb|gltf)$/i.test(f.name)) { await saveGlb(itemId, f); onUploaded(); window.dispatchEvent(new Event('db-changed')); } e.target.value = ""; }} />
    </div>
  );
}

function VideoUploadBtn({ itemId, hasVideo, onUploaded, onDeleted }: {
  itemId: string; hasVideo: boolean; onUploaded: () => void; onDeleted: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
      {hasVideo ? (
        <>
          <span className="font-['JetBrains_Mono'] text-xs text-primary flex items-center gap-1"><Check size={10} /> VIDEO 등록됨</span>
          <button onClick={async (e) => { e.stopPropagation(); const db = await openDB(); const tx = db.transaction(VIDEOS_STORE, 'readwrite'); tx.objectStore(VIDEOS_STORE).delete(itemId); tx.oncomplete = () => { onDeleted(); window.dispatchEvent(new Event('db-changed')); }; }}
            className="text-muted-foreground hover:text-destructive transition-colors" title="삭제">
            <Trash2 size={11} />
          </button>
        </>
      ) : (
        <button onClick={() => inputRef.current?.click()}
          className="flex items-center gap-1 font-['JetBrains_Mono'] text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase">
          <Upload size={11} /> VIDEO 업로드
        </button>
      )}
      <input ref={inputRef} type="file" accept="video/*" className="hidden"
        onChange={async (e) => { const f = e.target.files?.[0]; if (f) { await saveVideo(itemId, f); onUploaded(); window.dispatchEvent(new Event('db-changed')); } e.target.value = ""; }} />
    </div>
  );
}

// ─── Portfolio Item Card ──────────────────────────────────────────────────────

function ItemCard({ item, has3d, hasDbGlb, hasVideo, editMode, onRefresh, onClick }: {
  item: PortfolioItem;
  has3d: boolean;
  hasDbGlb: boolean;
  hasVideo: boolean;
  editMode: boolean;
  onRefresh: () => void;
  onClick: () => void;
}) {
  if (item.isProcess) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer"
        className="group flex flex-col overflow-hidden border border-dashed border-border hover:border-primary/50 transition-all duration-300 bg-card cursor-pointer">
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <img src={item.thumb} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs tracking-widest uppercase text-foreground border border-foreground/30 px-3 py-2 bg-background/60 backdrop-blur">
              <ExternalLink size={11} /> 제작 과정 보기
            </span>
          </div>
        </div>
        <div className="px-4 py-3 border-t border-dashed border-border">
          <p className="font-['Fraunces'] text-base font-medium text-foreground">{item.title}</p>
          <p className="font-['Figtree'] text-xs text-muted-foreground mt-0.5">{item.desc}</p>
        </div>
      </a>
    );
  }

  const cardContent = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a10]">
        <img src={item.thumb} alt={item.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
        {/* 3D / Gallery badge */}
        {item.mediaType === "gallery" ? (
          <div className="absolute top-2 left-2">
            <span className="flex items-center gap-1 font-['JetBrains_Mono'] text-xs tracking-widest uppercase bg-secondary text-foreground px-2 py-0.5">
              GALLERY
            </span>
          </div>
        ) : has3d ? (
          <div className="absolute top-2 left-2">
            <span className="flex items-center gap-1 font-['JetBrains_Mono'] text-xs tracking-widest uppercase bg-primary text-primary-foreground px-2 py-0.5">
              <Box size={9} /> 3D
            </span>
          </div>
        ) : null}
        {hasVideo && (
          <div className="absolute top-2 right-2">
            <span className="font-['JetBrains_Mono'] text-[9px] tracking-widest uppercase bg-secondary/90 text-foreground px-2 py-0.5">
              VIDEO
            </span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="font-['Figtree'] text-sm text-foreground border border-foreground/30 px-4 py-2">
            {item.mediaType === "gallery" ? "갤러리 보기" : has3d ? "3D 모델 보기" : "자세히 보기"}
          </span>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-border flex items-end justify-between gap-2">
        <div className="min-w-0">
          <p className="font-['Fraunces'] text-base font-medium text-foreground truncate">{item.title}</p>
          <p className="font-['Figtree'] text-xs text-muted-foreground mt-0.5 line-clamp-1">{item.desc}</p>
        </div>
        {editMode && (
          <div className="flex items-center gap-2">
            <GlbUploadBtn itemId={item.id} hasDbGlb={hasDbGlb} onUploaded={onRefresh} onDeleted={onRefresh} />
            <VideoUploadBtn itemId={item.id} hasVideo={hasVideo} onUploaded={onRefresh} onDeleted={onRefresh} />
          </div>
        )}
      </div>
    </>
  );

  if (item.link && !item.isProcess) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer"
        className="group flex flex-col overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 bg-card cursor-pointer">
        {cardContent}
      </a>
    );
  }

  return (
    <div onClick={onClick}
      className="group flex flex-col overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 bg-card cursor-pointer">
      {cardContent}
    </div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav({ editMode, onLogoClick }: { editMode: boolean; onLogoClick: () => void }) {
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
        <button onClick={onLogoClick} className="font-['Fraunces'] text-xl font-light tracking-tight text-foreground select-none" style={{ background: "none", border: "none", cursor: "default" }}>
          JEONG YEON SU<span className="text-primary">.</span>
        </button>
        {editMode && (
          <span className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-primary tracking-widest uppercase border border-primary/50 px-3 py-1 animate-pulse">
            <Pencil size={10} /> Edit Mode
          </span>
        )}
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

const glbCountStatic = Object.keys(import.meta.glob('../../glb_files/*.{glb,gltf}', { eager: true, as: 'url' })).length;
const renderImageCountStatic = Object.keys(import.meta.glob('../../images/{cafe,glasses,gamingroom,stage}/*.{png,jpg,jpeg}', { eager: true, as: 'url' })).length;
const videoCountStatic = 4;

function Hero() {
  const totalItems = PORTFOLIO.reduce((acc, g) => acc + g.items.filter(i => !i.isProcess).length, 0);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-background flex flex-col justify-end">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&h=1080&fit=crop&auto=format" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/20" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 pb-20 w-full">
        <p className="font-['JetBrains_Mono'] text-xs text-primary tracking-widest uppercase mb-6">3D Designer & Visual Artist</p>
        <h1 className="font-['Fraunces'] font-light text-foreground leading-none tracking-tight" style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}>
          Crafting worlds<br /><em className="italic text-primary">in three</em><br />dimensions.
        </h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-8">
          <a href="#works" className="flex items-center gap-2 font-['Figtree'] text-sm font-medium bg-primary text-primary-foreground px-7 py-3.5 hover:bg-primary/85 transition-colors">
            작업물 보기 <ArrowUpRight size={16} />
          </a>
          <a href="#about" className="font-['Figtree'] text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">About Me</a>
        </div>
        <div className="flex flex-wrap gap-10 mt-14 pt-8 border-t border-border">
          {[
            { value: String(PORTFOLIO.length), label: "프로젝트 그룹" },
            { value: String(glbCountStatic), label: "업로드된 3D 모델" },
            { value: String(renderImageCountStatic), label: "업로드된 렌더링 이미지" },
            { value: String(videoCountStatic), label: "업로드된 영상" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-['Fraunces'] font-semibold text-3xl text-primary">{s.value}</span>
              <span className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Works ────────────────────────────────────────────────────────────────────

function Works({ editMode }: { editMode: boolean }) {
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
          <p className="font-['JetBrains_Mono'] text-xs text-primary tracking-widest uppercase mb-4">02 — Works</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-['Fraunces'] font-light text-foreground leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                작업물
              </h2>
            </div>
            {/* Group filter */}
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setActiveGroup("all")}
                className={`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-4 py-2 border transition-all ${activeGroup === "all" ? "bg-primary text-primary-foreground border-primary" : "text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"}`}>
                전체
              </button>
              {PORTFOLIO.map((g) => (
                <button key={g.groupName} onClick={() => setActiveGroup(g.groupName)}
                  className={`font-['JetBrains_Mono'] text-xs tracking-widest uppercase px-4 py-2 border transition-all ${activeGroup === g.groupName ? "bg-primary text-primary-foreground border-primary" : "text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"}`}>
                  {g.emoji} {g.groupName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {editMode && (
          <div className="mb-8 px-4 py-3 border border-primary/30 bg-primary/5 flex items-center gap-3">
            <Pencil size={13} className="text-primary shrink-0" />
            <p className="font-['JetBrains_Mono'] text-xs text-primary tracking-wide">
              편집 모드 활성화 — 각 카드 하단의 "GLB 업로드" 버튼으로 3D 모델을 등록하세요. 브라우저에 영구 저장됩니다.
            </p>
          </div>
        )}

        {/* Groups */}
        <div className="flex flex-col gap-20">
          {groups.map((group) => (
            <div key={group.groupName}>
              {/* Group header */}
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
                <span className="text-2xl">{group.emoji}</span>
                <h3 className="font-['Fraunces'] font-medium text-foreground text-2xl">{group.groupName}</h3>
                <ChevronRight size={18} className="text-muted-foreground" />
                <span className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest">
                  {group.items.filter(i => !i.isProcess).length}개 모델
                </span>
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.items.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    has3d={STATIC_GLB_IDS.has(item.id) || dbGlbIds.has(item.id)}
                    hasDbGlb={dbGlbIds.has(item.id)}
                    hasVideo={videoIds.has(item.id)}
                    editMode={editMode && !item.isProcess}
                    onRefresh={refresh}
                    onClick={() => !item.isProcess && openItem(item)}
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
          editMode={editMode}
          onSaveMeta={(m) => { if (modalExtra) setModalExtra({ ...modalExtra, meta: m }); }}
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
  const [editMode, setEditMode] = useState(false);
  const [clicks, setClicks] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoClick = () => {
    const n = clicks + 1;
    setClicks(n);
    if (timer.current) clearTimeout(timer.current);
    if (n >= 5) { setEditMode((m) => !m); setClicks(0); }
    else { timer.current = setTimeout(() => setClicks(0), 1500); }
  };

  return (
    <div className="bg-background min-h-screen overflow-x-hidden" style={{ fontFamily: "'Figtree', sans-serif" }}>
      <Nav editMode={editMode} onLogoClick={handleLogoClick} />
      <Hero />
      <Works editMode={editMode} />
      <About />
      <Footer />
    </div>
  );
}
