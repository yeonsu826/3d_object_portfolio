import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import { X } from "lucide-react";
import { useLang } from "../context/LangContext";

// Render the formatting used by the supplied README as escaped React content.
function InlineText({ text }: { text: string }) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\(https?:\/\/[^)]+\))/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={index} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
    if (part.startsWith("`") && part.endsWith("`")) return <code key={index} className="rounded bg-white/10 px-1.5 py-0.5 text-primary">{part.slice(1, -1)}</code>;
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (link) return <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">{link[1]}</a>;
    return part;
  });
}

function Readme({ text, images }: { text: string; images: string[] }) {
  // Normalize the README's image/caption wrappers without rendering raw HTML.
  const normalized = text
    .replace(/<p\s+align="center">\s*<img\s+src="([^"]+)"\s+width="100%"\s+alt="([^"]*)"\s*\/>\s*<\/p>/g, "![$2]($1)\n\n")
    .replace(/<p\s+align="center">\s*<sub>([^<]*)<\/sub>\s*<\/p>/g, "$1\n\n");
  return normalized.trim().split(/\r?\n\s*\r?\n/).map((block, index) => {
    const image = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (image) {
      const filename = image[2].split("/").pop();
      const src = images.find(path => path.split("/").pop() === filename);
      return src ? <img key={index} src={src} alt={image[1]} loading="lazy" className="h-auto w-full rounded-lg" /> : <p key={index}>{image[1]}</p>;
    }
    if (block.startsWith("# ")) return <h3 key={index} className="text-3xl font-semibold text-white">{block.slice(2)}</h3>;
    if (block.startsWith("## ")) return <h4 key={index} className="pt-4 text-xl font-medium text-primary">{block.slice(3)}</h4>;
    if (block.startsWith("### ")) return <h5 key={index} className="pt-2 text-base font-semibold text-white">{block.slice(4)}</h5>;
    if (block.startsWith("#### ")) return <h6 key={index} className="pt-2 text-sm font-semibold text-white">{block.slice(5)}</h6>;
    if (block.startsWith("|")) {
      const rows = block.split(/\r?\n/).map(line => line.trim().replace(/^\||\|$/g, "").split("|").map(cell => cell.trim()));
      if (rows.length > 1 && rows[1].every(cell => /^:?-+:?$/.test(cell))) {
        return <div key={index} className="overflow-x-auto rounded-lg border border-white/15"><table className="w-full min-w-[400px] text-left text-sm"><thead className="bg-white/5"><tr>{rows[0].map((cell, i) => <th key={i} scope="col" className="px-4 py-3 font-semibold text-white"><InlineText text={cell} /></th>)}</tr></thead><tbody>{rows.slice(2).map((row, i) => <tr key={i} className="border-t border-white/10">{row.map((cell, j) => <td key={j} className="px-4 py-3"><InlineText text={cell} /></td>)}</tr>)}</tbody></table></div>;
      }
    }
    if (block.startsWith("```")) return <pre key={index} className="overflow-x-auto rounded-lg bg-black/40 p-4"><code>{block.replace(/^```[^\n]*\r?\n/, "").replace(/\r?\n```$/, "")}</code></pre>;
    if (block.startsWith("> ")) return <blockquote key={index} className="border-l-2 border-primary pl-4 italic"><InlineText text={block.replace(/^> /gm, "")} /></blockquote>;
    if (/^\d+\. /.test(block)) return <ol key={index} className="list-decimal space-y-3 pl-5">{block.split(/\r?\n/).map((line, i) => <li key={i}><InlineText text={line.replace(/^\d+\. /, "")} /></li>)}</ol>;
    if (block.startsWith("- ")) return <ul key={index} className="list-disc space-y-3 pl-5">{block.split(/\r?\n/).map((line, i) => <li key={i}><InlineText text={line.slice(2)} /></li>)}</ul>;
    return <p key={index}><InlineText text={block} /></p>;
  });
}

export default function ProjectDetails({ title, readme, images, videos }: {
  title: string;
  readme: string;
  images: string[];
  videos: { src: string; label: string }[];
}) {
  const { lang } = useLang();
  const labels = lang === "ko"
    ? { open: "설명 보기", description: "설명", images: "이미지", videos: "영상", close: "닫기", tabs: "프로젝트 상세" }
    : { open: "View details", description: "README (Korean)", images: "Images", videos: "Videos", close: "Close", tabs: "Project details" };
  const tabClass = "rounded-lg px-4 py-2 text-sm text-white/60 data-[state=active]:bg-primary data-[state=active]:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary";
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary hover:bg-primary/20">{labels.open}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100000] bg-black/80 backdrop-blur-sm" />
        <Dialog.Content aria-describedby={undefined} className="fixed left-1/2 top-1/2 z-[100001] flex max-h-[90dvh] w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0d0d13] text-white shadow-2xl">
          <header className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-8">
            <Dialog.Title className="text-xl font-semibold">{title}</Dialog.Title>
            <Dialog.Close aria-label={labels.close} className="rounded-full p-2 hover:bg-white/10"><X size={22} /></Dialog.Close>
          </header>
          <Tabs.Root defaultValue="description" className="flex min-h-0 flex-col">
            <Tabs.List aria-label={labels.tabs} className="flex flex-wrap gap-2 border-b border-white/10 px-5 py-3 sm:px-8">
              <Tabs.Trigger value="description" className={tabClass}>{labels.description}</Tabs.Trigger>
              <Tabs.Trigger value="images" className={tabClass}>{labels.images} ({images.length})</Tabs.Trigger>
              {videos.length > 0 && <Tabs.Trigger value="videos" className={tabClass}>{labels.videos} ({videos.length})</Tabs.Trigger>}
            </Tabs.List>
            <div className="overflow-y-auto overscroll-contain p-5 sm:p-8">
              <Tabs.Content value="description" className="space-y-5 text-sm leading-7 text-white/75"><Readme text={readme} images={images} /></Tabs.Content>
              <Tabs.Content value="images" className="space-y-6">{images.map((src, index) => <img key={src} src={src} alt={`${title} ${labels.images} ${index + 1}`} className="h-auto w-full rounded-lg" />)}</Tabs.Content>
              <Tabs.Content value="videos" className="space-y-6">{videos.map(video => <figure key={video.src}><figcaption className="mb-3 text-sm text-white/70">{video.label}</figcaption><video controls playsInline preload="metadata" aria-label={`${title} ${video.label}`} className="max-h-[60vh] w-full rounded-lg bg-black"><source src={video.src} type="video/mp4" /></video></figure>)}</Tabs.Content>
            </div>
          </Tabs.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
