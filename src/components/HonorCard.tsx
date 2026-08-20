// src/components/HonorCard.tsx
import { Honor, categoryThemes } from "../data/honors";
import { Layers } from "lucide-react";

interface HonorCardProps {
    honor: Honor;
    onClick: (honor: Honor) => void;
    isDark: boolean;
    viewMode: "grid" | "list";
}

export default function HonorCard({ honor, onClick, isDark, viewMode }: HonorCardProps) {
    const themeCategory = categoryThemes[honor.category] || categoryThemes["Estudio de la Naturaleza"];
    const theme = isDark ? themeCategory.dark : themeCategory.light;

    const dynamicStyles = {
        "--theme-base": theme.base,
        "--theme-surface": theme.surface,
        "--theme-text": theme.text,
    } as React.CSSProperties;
    if (viewMode === "list") {
        return (
            <button
                onClick={() => onClick(honor)}
                style={{ ...dynamicStyles, borderLeftColor: theme.base, borderLeftWidth: '4px' }}
                className={`group w-full text-left p-4 rounded-lg border-y border-r transition-all duration-300 flex items-center justify-between cursor-pointer hover:bg-[var(--theme-bg)] hover:border-r-[var(--theme-base)] hover:border-y-[var(--theme-base)] ${
                    isDark ? "bg-neutral-900 border-neutral-800 text-neutral-100" : "bg-white border-neutral-200 text-neutral-900 shadow-sm"
                }`}
            >
                <div className="flex items-center gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
               <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-sm ${isDark ? "bg-neutral-800 text-neutral-400" : "bg-neutral-100 text-neutral-500"}`}>
                 {honor.categoryCode}-{String(honor.honorId).padStart(3, '0')}
               </span>
                            <span className={`text-[11px] ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
                 {honor.category}
               </span>
                        </div>
                        <h3 className="text-base font-semibold tracking-tight text-[var(--theme-text)] transition-colors">
                            {honor.name}
                        </h3>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className={`hidden sm:flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md ${isDark ? "bg-neutral-800 text-neutral-400" : "bg-neutral-100 text-neutral-500"}`}>
                        <Layers className="w-3 h-3" /> Lvl {honor.level}
                    </div>
                </div>
            </button>
        );
    }

    // Grid Mode
    return (
        <button
            onClick={() => onClick(honor)}
            style={{ ...dynamicStyles, borderTopColor: theme.base, borderTopWidth: '4px' }}
            className={`group text-left p-5 rounded-lg border-x border-b transition-all duration-300 flex flex-col justify-between h-44 cursor-pointer overflow-hidden hover:bg-[var(--theme-bg)] hover:border-x-[var(--theme-base)] hover:border-b-[var(--theme-base)] ${
                isDark ? "bg-neutral-900 border-neutral-800 text-neutral-100" : "bg-white border-neutral-200 text-neutral-900 shadow-sm"
            }`}
        >
            <div className="flex justify-between items-start w-full gap-2">
        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-sm ${isDark ? "bg-neutral-800 text-neutral-400" : "bg-neutral-100 text-neutral-500"}`}>
          {honor.categoryCode}-{String(honor.honorId).padStart(3, '0')}
        </span>
                <div className={`flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-md ${isDark ? "bg-neutral-800 text-neutral-400" : "bg-neutral-100 text-neutral-500"}`}>
                    <Layers className="w-3 h-3" /> Lvl {honor.level}
                </div>
            </div>
            <div>
                <h3 className="text-base font-semibold tracking-tight mb-1 text-[var(--theme-text)] transition-colors line-clamp-2">
                    {honor.name}
                </h3>
                <p className={`text-[11px] truncate ${isDark ? "text-neutral-500" : "text-neutral-400"}`}>
                    {honor.category}
                </p>
            </div>
        </button>
    );
}