import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, Menu, X, Upload, RotateCcw, Pencil, Check, Trash2, Box, ExternalLink, Instagram, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// 1. 파일 이름 리스트 관리 (여기를 수정하면 됩니다)
const GLB_FILES: Record<string, string> = {
  glasses_1: 'glasses_1.glb',
  glasses_2: 'glasses_2.glb',
  glasses_3: 'glasses_3.glb',
  cafe: 'cafe.glb',
  coffeemachine: 'coffeemachine.glb',
  coffeegrinder: 'coffeegrinder.glb',
  coffeepot: 'coffeepot.glb',
  bag: 'bag.glb',
  kettle: 'kettle.glb',
  handdrip: 'handdrip.glb',
  disposablecup: 'disposablecup.glb',
  chair_table: 'chair_table.glb',
  // gaming_room: 'glasses_1.glb',      // TODO: 실제 파일명으로 수정 필요
  // gaming_setup: 'glasses_1.glb',     // TODO: 실제 파일명으로 수정 필요
  // gaming_chair: 'glasses_1.glb',     // TODO: 실제 파일명으로 수정 필요
  // stage_set: 'glasses_1.glb',        // TODO: 실제 파일명으로 수정 필요
  // stage_lighting: 'glasses_1.glb',   // TODO: 실제 파일명으로 수정 필요
  // stage_props: 'glasses_1.glb',      // TODO: 실제 파일명으로 수정 필요
  // video_edit: 'glasses_1.glb',       // TODO: 실제 파일명으로 수정 필요
  // motion_graphics: 'glasses_1.glb',  // TODO: 실제 파일명으로 수정 필요
  // video_story: 'glasses_1.glb',      // TODO: 실제 파일명으로 수정 필요
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
      { id: "cafe", title: "카페 공간", desc: "카페 전체 공간 모델링", thumb: `${import.meta.env.BASE_URL}images/cafe.jpeg` },
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
        desc: "About Me에서 이동한 개발 프로젝트 아카이브 링크입니다.",
        thumb: `${import.meta.env.BASE_URL}images/dev.jpg`,
        link: "https://kaput-muskox-1f4.notion.site/2a3a13adf6c48050b9b5cfe097165b8c",
      },
    ],
  },
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
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-lg flex items-center justify-center p-4 md:p-8 transition-opacity"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      
      {/* 둥근 모서리와 은은한 테두리로 프리미엄 느낌 강조 */}
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
            {/* 호버 시 부드러운 배경이 깔리는 닫기 버튼 */}
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

            {/* Right: Info / Edit Area */}
            <div className="col-span-1 bg-[#0f0f14] border border-white/5 rounded-xl p-6 flex flex-col h-fit">
              <h3 className="font-['Fraunces'] text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="font-['Figtree'] text-sm text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
              
              {editMode ? (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wider">Tools (쉼표 구분)</label>
                    <input value={(editingMeta.tools || []).join(', ')} onChange={(e) => setEditingMeta({ ...editingMeta, tools: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} className="bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wider">제작 기간</label>
                    <input value={editingMeta.productionTime || ''} onChange={(e) => setEditingMeta({ ...editingMeta, productionTime: e.target.value })} className="bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wider">상세 설명</label>
                    <textarea rows={6} value={editingMeta.longDesc || ''} onChange={(e) => setEditingMeta({ ...editingMeta, longDesc: e.target.value })} className="bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                  </div>
                  <div className="flex gap-3 mt-2">
                    <button onClick={() => { /* save 로직 */ onSaveMeta(editingMeta); }} className="flex-1 bg-white text-black font-semibold rounded-lg px-4 py-3 hover:bg-gray-200 transition-colors shadow-md">저장하기</button>
                    <button onClick={() => setEditingMeta(meta || {})} className="flex-1 bg-transparent border border-white/20 text-white font-medium rounded-lg px-4 py-3 hover:bg-white/5 transition-colors">취소</button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {editingMeta.tools && editingMeta.tools.length > 0 && (
                    <div>
                      <div className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-2">Tools</div>
                      <div className="flex flex-wrap gap-2">
                        {editingMeta.tools.map(tool => (
                          <span key={tool} className="bg-white/5 border border-white/10 rounded-md px-2.5 py-1 font-['JetBrains_Mono'] text-xs text-white/90">{tool}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {editingMeta.productionTime && (
                    <div>
                      <div className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-1.5">Production Time</div>
                      <div className="font-['JetBrains_Mono'] text-sm text-white/90">{editingMeta.productionTime}</div>
                    </div>
                  )}
                  {editingMeta.longDesc && (
                    <div>
                      <div className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-2">Description</div>
                      <div className="font-['Figtree'] text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{editingMeta.longDesc}</div>
                    </div>
                  )}
                  
                  {/* 영상 버튼들을 좀 더 고급스럽게 */}
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
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox - 투명도와 블러를 활용한 뷰어 */}
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

// // ─── 1. Hero ─────────────────────────────────────────────────────────────────────

// const glbCountStatic = Object.keys(import.meta.glob('../../glb_files/*.{glb,gltf}', { eager: true, as: 'url' })).length;
// const renderImageCountStatic = Object.keys(import.meta.glob('../../images/{cafe,glasses,gamingroom,stage}/*.{png,jpg,jpeg}', { eager: true, as: 'url' })).length;
// const videoCountStatic = 4;

// // 상단 롤링할 배경 이미지 주소
// const BACKGROUND_IMAGES = [
//   `${import.meta.env.BASE_URL}images/gamingroom/1.jpeg`,
//   `${import.meta.env.BASE_URL}images/cafe/0.jpeg`,
//   `${import.meta.env.BASE_URL}images/stage/1.jpeg`,
// ];

// function Hero() {
//   const totalItems = PORTFOLIO.reduce((acc, g) => acc + g.items.filter(i => !i.isProcess).length, 0);
  
//   //  현재 보여줄 이미지의 인덱스를 관리하는 State
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);

//   // 5초(5000ms)마다 배경 이미지를 다음으로 넘기는 로직
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentBgIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
//     }, 5000); // 5000 = 5초. 원하는 시간으로 조절 가능합니다!

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section id="hero" className="relative min-h-screen overflow-hidden bg-[#050508] flex flex-col justify-center items-center text-center">
      
//       {/* 배경 이미지 렌더링 영역 (크로스페이드 효과 적용) */}
//       <div className="absolute inset-0 bg-[#050508]">
//         {BACKGROUND_IMAGES.map((src, index) => (
//           <img
//             key={src}
//             src={src}
//             alt={`Background ${index}`}
//             // opacity-0에서 opacity-50으로 서서히(duration-[2000ms]) 바뀌면서 부드럽게 전환됩니다.
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
//               index === currentBgIndex ? "opacity-50" : "opacity-0"
//             }`}
//           />
//         ))}
//         {/* 이미지 위에 깔리는 어두운 그라데이션 필터 */}
//         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
//       </div>
      
//       <div className="relative z-10 max-w-[1400px] mx-auto px-8 mt-20 flex flex-col items-center w-full">
//         {/* 미니멀한 뱃지 */}
//         <span className="font-['JetBrains_Mono'] text-[10px] text-white/70 tracking-[0.3em] uppercase mb-5 border border-white/10 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md shadow-lg">
//           3D Environment Modeler
//         </span>
        
//         {/* 메인 타이틀 */}
//         <h1 className="font-['Fraunces'] font-light text-white mb-10 tracking-wide drop-shadow-2xl" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
//           Virtual Spaces, <em className="italic text-white/60">Real Emotions.</em>
//         </h1>
        
//         {/* 네비게이션 버튼들 */}
//         <div className="flex flex-col sm:flex-row items-center gap-4">
//           <a href="#works" className="group flex items-center gap-3 font-['Figtree'] text-sm font-medium bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
//             작업물 보기 <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//           </a>
//           <a href="#about" className="flex items-center gap-2 font-['Figtree'] text-sm font-medium bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full hover:bg-white/15 backdrop-blur-md transition-all duration-300">
//             About Me
//           </a>
//         </div>

//         {/* 통계 지표 */}
//         <div className="flex flex-wrap justify-center gap-10 md:gap-20 mt-24 pt-10 border-t border-white/10 w-full max-w-4xl">
//           {[
//             { value: String(PORTFOLIO.length), label: "Projects" },
//             { value: String(glbCountStatic), label: "3D Models" },
//             { value: String(renderImageCountStatic), label: "Renders" },
//             { value: String(videoCountStatic), label: "Videos" },
//           ].map((s) => (
//             <div key={s.label} className="flex flex-col gap-2">
//               <span className="font-['Fraunces'] font-semibold text-3xl text-white/90 drop-shadow-lg">{s.value}</span>
//               <span className="font-['JetBrains_Mono'] text-[10px] text-white/40 tracking-widest uppercase">{s.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// ─── Hero ─────────────────────────────────────────────────────────────────────

// 1. images 폴더 내의 모든 png, jpg, jpeg 파일을 자동으로 가져옵니다.
// Vite의 import.meta.glob을 사용하여 폴더 내 파일을 배열로 변환합니다.


// 배경 이미지를 위한 변수
const imageModules = import.meta.glob('../../images/*/*.{png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' });
const BACKGROUND_IMAGES = Object.values(imageModules) as string[];
// 통계를 위한 변수
const glbCountStatic = Object.keys(import.meta.glob('../../glb_files/*.{glb,gltf}', { eager: true, query: '?url', import: 'default' })).length;
const renderImageCountStatic = Object.keys(import.meta.glob('../../images/{cafe,glasses,gamingroom,stage}/*.{png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' })).length;
const videoCountStatic = 4;


function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // 2. 컴포넌트가 처음 렌더링될 때 배경 이미지 순서를 랜덤하게 섞습니다.
  useEffect(() => {
    // 섞는 로직 (Fisher-Yates shuffle)
    for (let i = BACKGROUND_IMAGES.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [BACKGROUND_IMAGES[i], BACKGROUND_IMAGES[j]] = [BACKGROUND_IMAGES[j], BACKGROUND_IMAGES[i]];
    }
  }, []);

  // 3. 5초마다 인덱스를 증가시켜 다음 이미지로 전환
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
         {/* 미니멀한 뱃지 */}
         <span className="font-['JetBrains_Mono'] text-[10px] text-white/70 tracking-[0.3em] uppercase mb-5 border border-white/10 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md shadow-lg">
           3D Modeler, Developer, Artest
         </span> 
                    
         {/* 메인 타이틀 */}
        <h1 className="font-['Fraunces'] text-white tracking-wide mb-8 md:mb-16" style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}>
          Feel Spaces, 
          <span className="font-['Fraunces'] text-white/70 text-xl md:text-2xl">
          &nbsp;&nbsp; Through Technology.
          </span>
        </h1>
        
         {/* 네비게이션 버튼들 */}
         <div className="flex flex-col sm:flex-row items-center gap-4">
           <a href="#works" className="group flex items-center gap-3 font-['Figtree'] text-sm font-medium bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
             작업물 보기 <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </a>
           <a href="#about" className="flex items-center gap-2 font-['Figtree'] text-sm font-medium bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full hover:bg-white/15 backdrop-blur-md transition-all duration-300">
             About Me
           </a>
         </div>

         {/* 통계 지표 */}
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


// ─── Item Card (누락되었던 컴포넌트 추가) ──────────────────────────────────────────

function ItemCard({
  item,
  has3d,
  hasDbGlb,
  hasVideo,
  editMode,
  onRefresh,
  onClick
}: {
  item: PortfolioItem;
  has3d: boolean;
  hasDbGlb: boolean;
  hasVideo: boolean;
  editMode: boolean;
  onRefresh: () => void;
  onClick: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'glb' | 'video') => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (type === 'glb') {
      await saveGlb(item.id, file);
    } else {
      await saveVideo(item.id, file);
    }
    onRefresh();
  };

  const handleDeleteGlb = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await deleteGlb(item.id);
    onRefresh();
  };

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

        {/* 일반 모드일 때 마우스 올리면 나오는 오버레이 */}
        {!editMode && (
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="bg-white/90 text-black font-medium text-sm px-5 py-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
              {item.link || item.isProcess ? "보러가기" : "자세히 보기"}
            </span>
          </div>
        )}
      </div>

      {/* 텍스트 영역 */}
      <div>
        <h4 className="font-['Fraunces'] font-medium text-lg text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
        <p className="font-['Figtree'] text-sm text-muted-foreground mt-1 line-clamp-2">{item.desc}</p>
      </div>

      {/* 편집 모드 (에디터 전용 컨트롤) */}
      {editMode && (
        <div className="mt-2 flex flex-col gap-2 p-3 bg-white/5 border border-white/10 rounded-lg" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-white/60 uppercase tracking-widest">3D (.glb)</span>
            {hasDbGlb ? (
              <button onClick={handleDeleteGlb} className="text-red-400 hover:text-red-300 p-1"><Trash2 size={14} /></button>
            ) : (
              <button onClick={() => fileInputRef.current?.click()} className="text-white hover:text-gray-300 p-1"><Upload size={14} /></button>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-white/60 uppercase tracking-widest">Video (.mp4)</span>
            <button onClick={() => videoInputRef.current?.click()} className="text-white hover:text-gray-300 p-1"><Upload size={14} /></button>
          </div>
          <input type="file" accept=".glb" className="hidden" ref={fileInputRef} onChange={(e) => handleUpload(e, 'glb')} />
          <input type="file" accept="video/mp4" className="hidden" ref={videoInputRef} onChange={(e) => handleUpload(e, 'video')} />
        </div>
      )}
    </div>
  );
}// ─── Works ────────────────────────────────────────────────────────────────────

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

        {editMode && (
          <div className="mb-8 px-4 py-3 border border-primary/30 bg-primary/5 rounded-lg flex items-center gap-3">
            <Pencil size={13} className="text-primary shrink-0" />
            <p className="font-['JetBrains_Mono'] text-xs text-primary tracking-wide">
              편집 모드 활성화 — 각 카드 하단의 "업로드" 버튼으로 미디어를 등록하세요.
            </p>
          </div>
        )}

        {/* Groups */}
        <div className="flex flex-col gap-20">
          {groups.map((group) => (
            <div key={group.groupName}>
              {/* Group header */}
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                <span className="text-2xl">{group.emoji}</span>
                <h3 className="font-['Fraunces'] font-medium text-foreground text-2xl">{group.groupName}</h3>
                <ChevronRight size={18} className="text-muted-foreground" />
                <span className="font-['JetBrains_Mono'] text-xs text-muted-foreground tracking-widest">
                  {group.items.filter(i => !i.isProcess).length} PROJECTS
                </span>
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
