// src/data/honors.ts

export interface Requirement {
    id: number;
    description: string;
}

export interface Honor {
    id: string;
    categoryCode: string;
    honorId: number;
    level: 1 | 2 | 3;
    year: number;
    origin: string;
    name: string;
    category: string;
    imageUrl: string;
    requirements: Requirement[];
}

// Estructura inspirada en el archivo de colores para soportar light/dark mode
export interface ThemeTokens {
    base: string;       // Borde principal
    surface: string;    // Fondo de la tarjeta/modal
    text: string;       // Color del texto/iconos
    backdrop: string;   // Color del fondo blur
}

export interface CategoryTheme {
    light: ThemeTokens;
    dark: ThemeTokens;
}

export const categoryThemes: Record<string, CategoryTheme> = {
    "Artes y Habilidades Manuales": {
        light: { base: "#00A3E0", surface: "#F0F9FF", text: "#0369A1", backdrop: "rgba(0, 163, 224, 0.15)" },
        dark:  { base: "#0284C7", surface: "#082F49", text: "#7DD3FC", backdrop: "rgba(2, 132, 199, 0.15)" }
    },
    "Actividades Misioneras": {
        light: { base: "#002060", surface: "#F1F5F9", text: "#0F172A", backdrop: "rgba(0, 32, 96, 0.15)" },
        dark:  { base: "#1E293B", surface: "#020617", text: "#94A3B8", backdrop: "rgba(30, 41, 59, 0.3)" }
    },
    "Estudio de la Naturaleza": {
        light: { base: "#64748B", surface: "#F8FAFC", text: "#334155", backdrop: "rgba(100, 116, 139, 0.15)" },
        dark:  { base: "#94A3B8", surface: "#0F172A", text: "#CBD5E1", backdrop: "rgba(148, 163, 184, 0.15)" }
    },
    "Actividades Recreativas": {
        light: { base: "#009A44", surface: "#F0FDF4", text: "#15803D", backdrop: "rgba(0, 154, 68, 0.15)" },
        dark:  { base: "#16A34A", surface: "#052E16", text: "#86EFAC", backdrop: "rgba(22, 163, 74, 0.15)" }
    },
    "Salud y Ciencia": {
        light: { base: "#FFC72C", surface: "#FEFCE8", text: "#A16207", backdrop: "rgba(255, 199, 44, 0.15)" },
        dark:  { base: "#EAB308", surface: "#422006", text: "#FEF08A", backdrop: "rgba(234, 179, 8, 0.15)" }
    },
    "Habilidades Domésticas": {
        light: { base: "#E6C687", surface: "#FFFAF0", text: "#9A7A3A", backdrop: "rgba(230, 198, 135, 0.2)" },
        dark:  { base: "#D4B475", surface: "#382910", text: "#FCE8B9", backdrop: "rgba(212, 180, 117, 0.15)" }
    },
    "Artes Vocacionales": {
        light: { base: "#E4002B", surface: "#FFF1F2", text: "#BE123C", backdrop: "rgba(228, 0, 43, 0.15)" },
        dark:  { base: "#E11D48", surface: "#4C0519", text: "#FDA4AF", backdrop: "rgba(225, 29, 72, 0.15)" }
    },
    "ADRA / Desarrollo Comunitario": {
        light: { base: "#6C3212", surface: "#FFF7ED", text: "#9A3412", backdrop: "rgba(108, 50, 18, 0.15)" },
        dark:  { base: "#D97706", surface: "#431407", text: "#FDBA74", backdrop: "rgba(217, 119, 6, 0.15)" }
    }
};

export const categories: string[] = ["Todas", ...Object.keys(categoryThemes)];

// Datos de prueba con los nuevos atributos
export const honorData: Honor[] = [
    {
        id: "NAT-001",
        categoryCode: "NAT",
        honorId: 1,
        level: 1,
        year: 1928,
        origin: "GC",
        name: "Gatos",
        category: "Estudio de la Naturaleza",
        imageUrl: "/placeholders/gatos.png",
        requirements: [
            { id: 1, description: "Conocer la historia de los gatos domésticos." },
            { id: 2, description: "Identificar a partir de fotografías o en vivo, siete razas de gatos." },
            { id: 3, description: "Mencionar los beneficios que los gatos aportan al ser humano." }
        ]
    },
    {
        id: "SAL-015",
        categoryCode: "SAL",
        honorId: 15,
        level: 2,
        year: 1951,
        origin: "GC",
        name: "Primeros Auxilios I",
        category: "Salud y Ciencia",
        imageUrl: "/placeholders/primeros-auxilios.png",
        requirements: [
            { id: 1, description: "Conocer los principios básicos de la respiración boca a boca." },
            { id: 2, description: "Saber cómo tratar a una persona en estado de shock." },
            { id: 3, description: "Conocer el procedimiento adecuado para tratar hemorragias." }
        ]
    }
];