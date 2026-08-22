import { TOOL_LOGOS } from "../data/portfolio";

export default function ToolTags({ tools }: { tools?: string[] }) {
  if (!tools?.length) return null;

  return (
    <div className="flex flex-wrap gap-2 px-1">
      {tools.map((tool) => (
        <span
          key={tool}
          className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] tracking-wider text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md cursor-default hover:text-white/90 hover:bg-white/10 transition-colors"
        >
          {TOOL_LOGOS[tool] && (
            <img src={TOOL_LOGOS[tool]} alt="" className="w-3.5 h-3.5 object-contain" />
          )}
          {tool}
        </span>
      ))}
    </div>
  );
}
