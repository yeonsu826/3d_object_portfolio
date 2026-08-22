export type VideoItem = {
  id: string;
  type: "portrait" | "landscape";
  tools?: string[];
};

export const VIMEO_VIDEOS: VideoItem[] = [
  { id: "1220354350", type: "portrait", tools: ["Blender", "Unreal Engine", "Substance Painter"] },
  { id: "1211900105", type: "portrait", tools: ["Blender", "Unreal Engine", "Substance Painter"] },
  { id: "1211900103", type: "portrait", tools: ["Blender", "Unreal Engine", "Substance Painter"] },
  { id: "1211900047", type: "portrait", tools: ["Blender", "Unreal Engine", "Substance Painter"] },
  { id: "1211900004", type: "portrait", tools: ["Blender", "Unreal Engine", "Substance Painter"] },
  { id: "1211913186", type: "portrait", tools: ["Blender", "Unreal Engine", "Substance Painter"] },
  { id: "1211907156", type: "landscape", tools: ["Unity", "C#", "Particle System"] },
  { id: "1211907154", type: "landscape", tools: ["Unity", "C#", "Shader"] },
  { id: "1211907153", type: "landscape", tools: ["Unity", "C#", "Particle Effect"] },
  { id: "1211907155", type: "landscape", tools: ["Unity", "C#", "Particle Effect"] },
];
