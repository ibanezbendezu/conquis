// src/components/HonorModal.tsx
"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Honor, categoryColors } from "../data/honors";

interface HonorModalProps {
    honor: Honor;
    onClose: () => void;
    isDark: boolean;
}

export default function HonorModal({ honor, onClose, isDark }: HonorModalProps) {
    const hexColor = categoryColors[honor.category] || "#94a3b8";
    const isWhite = hexColor === "#FFFFFF";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-xl shadow-2xl flex flex-col ${
                    isDark ? "bg-neutral-900 border border-neutral-800" : "bg-white border border-neutral-200"
                }`}
            >
                {/* Barra de color superior */}
                <div
                    className={`w-full h-3 ${isWhite && !isDark ? "border-b border-neutral-200" : ""}`}
                    style={{ backgroundColor: hexColor }}
                />

                <div className={`flex items-center justify-between p-5 sm:p-6 border-b ${isDark ? "border-neutral-800" : "border-neutral-100"}`}>
                    <div>
            <span className={`text-[11px] font-semibold tracking-wide uppercase mb-1 block ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
              {honor.category}
            </span>
                        <h2 className={`text-xl md:text-2xl font-bold tracking-tight ${isDark ? "text-neutral-100" : "text-neutral-900"}`}>
                            {honor.name}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className={`p-2 rounded-md transition-colors self-start ${
                            isDark ? "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100" : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
                        }`}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-5 sm:p-6 overflow-y-auto">
                    <h3 className={`text-xs font-semibold mb-5 uppercase tracking-widest ${isDark ? "text-neutral-500" : "text-neutral-400"}`}>
                        Requisitos Oficiales
                    </h3>
                    <ul className="space-y-4">
                        {honor.requirements.map((req) => (
                            <li key={req.id} className="flex gap-4">
                <span className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold mt-0.5 ${
                    isDark ? "bg-teal-900/30 text-teal-400" : "bg-teal-50 text-teal-700"
                }`}>
                  {req.id}
                </span>
                                <p className={`text-sm md:text-base leading-relaxed ${isDark ? "text-neutral-300" : "text-neutral-700"}`}>
                                    {req.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}