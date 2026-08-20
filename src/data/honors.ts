export interface Requirement {
    id: number;
    description: string;
}

export interface Honor {
    id: string;
    name: string;
    category: string;
    imageUrl: string;
    requirements: Requirement[];
}

// Mapa exacto de colores oficiales
export const categoryColors: Record<string, string> = {
    "Artes y Habilidades Manuales": "#00A3E0",
    "Actividades Misioneras": "#002060",
    "Estudio de la Naturaleza": "#FFFFFF",
    "Actividades Recreativas": "#009A44",
    "Salud y Ciencia": "#ae2cff",
    "Habilidades Domésticas": "#f4b02c",
    "Artes Vocacionales": "#E4002B",
    "ADRA / Desarrollo Comunitario": "#6C3212",
    "Estudio de la Biblia": "#80C8AC"
};

// Generamos las categorías dinámicamente a partir del mapa
export const categories: string[] = ["Todas", ...Object.keys(categoryColors)];

export const honorData: Honor[] = [
    {
        id: "nat-gatos",
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
        id: "sal-primeros-auxilios",
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