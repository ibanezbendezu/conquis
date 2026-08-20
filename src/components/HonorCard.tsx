// src/components/HonorCard.tsx
import { Honor, categoryColors } from "../data/honors";

interface HonorCardProps {
    honor: Honor;
    onClick: (honor: Honor) => void;
    isDark: boolean;
    viewMode: "grid" | "list";
}

export default function HonorCard({ honor, onClick, isDark, viewMode }: HonorCardProps) {
    const hexColor = categoryColors[honor.category] || "#94a3b8";
    const isWhite = hexColor === "#FFFFFF";

    if (viewMode === "list") {
        return (
            <button
                onClick={() => onClick(honor)}
                style={{ borderLeftColor: hexColor, borderLeftWidth: '6px' }}
                className={`group w-full text-left p-4 rounded-lg border-y border-r transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isDark
                        ? "bg-neutral-900 border-neutral-800 hover:border-r-teal-500 hover:border-y-teal-500 text-neutral-100"
                        : "bg-white border-neutral-200 hover:border-r-teal-700 hover:border-y-teal-700 text-neutral-900 shadow-sm"
                } ${isWhite && !isDark ? "border-l-neutral-300" : ""}`}
            >
                <div className="flex items-center gap-4">
                    <div>
                        <h3 className="text-base font-semibold tracking-tight group-hover:text-teal-600 transition-colors">
                            {honor.name}
                        </h3>
                        <span className={`text-xs ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
              {honor.category}
            </span>
                    </div>
                </div>
                <p className={`text-xs font-medium hidden sm:block ${isDark ? "text-neutral-500" : "text-neutral-400"}`}>
                    Ver requisitos &rarr;
                </p>
            </button>
        );
    }

    // Grid Mode
    return (
        <button
            onClick={() => onClick(honor)}
            style={{ borderTopColor: hexColor, borderTopWidth: '5px' }}
            className={`group text-left p-5 rounded-lg border-x border-b transition-all duration-200 flex flex-col justify-between h-40 cursor-pointer overflow-hidden ${
                isDark
                    ? "bg-neutral-900 border-neutral-800 hover:border-x-teal-500 hover:border-b-teal-500 text-neutral-100"
                    : "bg-white border-neutral-200 hover:border-x-teal-700 hover:border-b-teal-700 text-neutral-900 shadow-sm"
            } ${isWhite && !isDark ? "border-t-neutral-300" : ""}`}
        >
            <div className="flex justify-between items-start w-full gap-2">
        <span className={`text-[11px] font-medium truncate ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
          {honor.category}
        </span>
            </div>
            <div>
                <h3 className="text-base font-semibold tracking-tight mb-1 group-hover:text-teal-600 transition-colors line-clamp-2">
                    {honor.name}
                </h3>
                <p className={`text-xs font-medium ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
                    Ver requisitos &rarr;
                </p>
            </div>
        </button>
    );
}