// src/components/HonorModal.tsx
"use client";

import {motion} from "framer-motion";
import {X, Layers, Hash, Calendar, Globe, Bookmark} from "lucide-react";
import {Honor, categoryThemes} from "../data/honors";

interface HonorModalProps {
    honor: Honor;
    onClose: () => void;
    isDark: boolean;
}

export default function HonorModal({honor, onClose, isDark}: HonorModalProps) {
    // Extraemos el tema correcto (light o dark) según el estado actual
    const themeCategory = categoryThemes[honor.category] || categoryThemes["Estudio de la Naturaleza"];
    const theme = isDark ? themeCategory.dark : themeCategory.light;

    const dynamicStyles = {
        "--theme-base": theme.base,
        "--theme-surface": theme.surface,
        "--theme-text": theme.text,
        "--theme-backdrop": theme.backdrop,
    } as React.CSSProperties;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={dynamicStyles}>

            {/* Backdrop con Blur y Color Tintado dinámico */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                onClick={onClose}
                className="absolute inset-0 backdrop-blur-md cursor-pointer"
                style={{
                    backgroundColor: isDark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)",
                    backgroundImage: `linear-gradient(to bottom right, var(--theme-backdrop), transparent)`
                }}
            />

            {/* Modal */}
            <motion.div
                initial={{opacity: 0, scale: 0.95, y: 10}}
                animate={{opacity: 1, scale: 1, y: 0}}
                exit={{opacity: 0, scale: 0.95, y: 10}}
                transition={{duration: 0.2, ease: "easeOut"}}
                className={`relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-xl shadow-2xl flex flex-col border bg-[var(--theme-surface)] ${
                    isDark ? "border-neutral-800" : "border-neutral-200"
                }`}
            >
                <div className="w-full h-2 bg-[var(--theme-base)]"/>

                <div className={`p-6 pb-4 border-b ${isDark ? "border-neutral-800/30" : "border-neutral-200/50"}`}>
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                            <Bookmark className="w-5 h-5 text-[var(--theme-base)]"/>
                            <span className="text-xs font-semibold tracking-wide uppercase text-[var(--theme-text)]">
                 {honor.category}
               </span>
                        </div>
                        <button
                            onClick={onClose}
                            className={`p-1.5 rounded-md transition-colors text-[var(--theme-text)] hover:bg-black/5 dark:hover:bg-white/10`}
                        >
                            <X className="w-5 h-5"/>
                        </button>
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6 mt-2">
                        <div className="relative w-12 h-11 flex-shrink-0 rounded-full overflow-hidden shadow-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                            <img
                                src={honor.imageUrl}
                                alt={`Parche de ${honor.name}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--theme-text)]">
                            {honor.name}
                        </h2>
                    </div>
                </div>

                <div className="p-6 overflow-y-auto">
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 text-sm text-[var(--theme-text)] opacity-90">
                        <div className="flex items-center justify-between sm:justify-start sm:gap-8">
                            <div className="flex items-center gap-2 w-32 opacity-70"><Hash className="w-4 h-4"/> ID /
                                Código
                            </div>
                            <div
                                className="font-semibold">{honor.categoryCode}-{String(honor.honorId).padStart(3, '0')}</div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-start sm:gap-8">
                            <div className="flex items-center gap-2 w-32 opacity-70"><Layers className="w-4 h-4"/> Nivel
                            </div>
                            <div className="font-semibold">Nivel {honor.level}</div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-start sm:gap-8">
                            <div className="flex items-center gap-2 w-32 opacity-70"><Calendar
                                className="w-4 h-4"/> Creación
                            </div>
                            <div className="font-semibold">{honor.year}</div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-start sm:gap-8">
                            <div className="flex items-center gap-2 w-32 opacity-70"><Globe className="w-4 h-4"/> Origen
                            </div>
                            <div className="font-semibold">{honor.origin}</div>
                        </div>
                    </div>

                    <hr className={`my-6 ${isDark ? "border-neutral-800/30" : "border-neutral-200/50"}`}/>

                    <h3 className="text-xs font-bold mb-5 uppercase tracking-widest text-[var(--theme-base)]">
                        Requisitos Oficiales
                    </h3>
                    <ul className="space-y-4">
                        {honor.requirements.map((req) => (
                            <li key={req.id} className="flex gap-4">
            <span
                className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold mt-0.5 border bg-[var(--theme-base)] text-white border-[var(--theme-base)]">
              {req.id}
            </span>
                                <div className="flex-1">
                                    <p className="text-sm md:text-base leading-relaxed text-[var(--theme-text)]">
                                        {req.description}
                                    </p>
                                    {req.sub && req.sub.length > 0 && (
                                        <ul className="mt-2 space-y-1.5 pl-5 list-[lower-alpha] text-sm md:text-base text-[var(--theme-text)] opacity-90">
                                            {req.sub.map((subItem, idx) => (
                                                <li key={idx} className="leading-relaxed pl-1">
                                                    {subItem}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}