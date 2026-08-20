// src/data/honors.ts

export interface Requirement {
    id: number;
    description: string;
    sub?: string[]; // <-- Nuevo campo para subpuntos
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
        light: {base: "#00A3E0", surface: "#F0F9FF", text: "#0369A1", backdrop: "rgba(0, 163, 224, 0.15)"},
        dark: {base: "#0284C7", surface: "#082F49", text: "#7DD3FC", backdrop: "rgba(2, 132, 199, 0.15)"}
    },
    "Actividades Misioneras": {
        light: {base: "#002060", surface: "#F1F5F9", text: "#0F172A", backdrop: "rgba(0, 32, 96, 0.15)"},
        dark: {base: "#083777", surface: "#131b3a", text: "#94A3B8", backdrop: "rgba(30, 41, 59, 0.3)"}
    },
    "Estudio de la Naturaleza": {
        light: {base: "#7e848c", surface: "#F8FAFC", text: "#515861", backdrop: "rgba(100, 116, 139, 0.15)"},
        dark: {base: "#b1b6bd", surface: "#272c35", text: "#aeb3ba", backdrop: "rgba(148, 163, 184, 0.15)"}
    },
    "Actividades Recreativas": {
        light: {base: "#009A44", surface: "#F0FDF4", text: "#15803D", backdrop: "rgba(0, 154, 68, 0.15)"},
        dark: {base: "#16A34A", surface: "#052E16", text: "#86EFAC", backdrop: "rgba(22, 163, 74, 0.15)"}
    },
    "Salud y Ciencia": {
        light: {base: "#e32cff", surface: "#fbe8fe", text: "#8007a1", backdrop: "rgba(227, 44, 255, 0.15)"},
        dark: {base: "#cc08ea", surface: "#3c0642", text: "#e98afe", backdrop: "rgba(204, 8, 234, 0.15)"}
    },
    "Habilidades Domésticas": {
        light: {base: "#FFC72C", surface: "#FEFCE8", text: "#A16207", backdrop: "rgba(255, 199, 44, 0.15)"},
        dark: {base: "#EAB308", surface: "#422006", text: "#FEF08A", backdrop: "rgba(234, 179, 8, 0.15)"}
    },
    "Artes Vocacionales": {
        light: {base: "#E4002B", surface: "#FFF1F2", text: "#BE123C", backdrop: "rgba(228, 0, 43, 0.15)"},
        dark: {base: "#E11D48", surface: "#4C0519", text: "#FDA4AF", backdrop: "rgba(225, 29, 72, 0.15)"}
    },
    "Doctrinal": {
        light: {base: "#5CE0E2", surface: "#F0FDFA", text: "#0F766E", backdrop: "rgba(92, 224, 226, 0.15)"},
        dark: {base: "#22D3EE", surface: "#064E3B", text: "#67E8F9", backdrop: "rgba(34, 211, 238, 0.15)"}
    },
};

export const categories: string[] = ["Todas", ...Object.keys(categoryThemes)];

// Datos de prueba con los nuevos atributos
export const honorData: Honor[] = [
    {
        id: "MIS-016",
        categoryCode: "MIS",
        honorId: 16,
        level: 2,
        year: 2024,
        origin: "GC",
        name: "Inteligencia Emocional",
        category: "Actividades Misioneras",
        imageUrl: "/placeholders/inteligencia-emocional.png",
        requirements: [
            {id: 1, description: "Definir inteligencia emocional."},
            {
                id: 2,
                description: "Hacer una lista de los distintos tipos de sentimientos y emociones humanas. Hacer una lista y escribir un ejemplo de cuándo los ha experimentado en su vida."
            },
            {
                id: 3,
                description: "Buscar ejemplos de personas en la Biblia que sintieron:",
                sub: [
                    "Ira",
                    "Tristeza",
                    "Alegría",
                    "Decepción",
                    "Arrepentimiento",
                    "Gratitud",
                    "Empatía"
                ]
            },
            {
                id: 4,
                description: "Leer Gálatas 5:22-23 y escribir una lista de los atributos del Fruto del Espíritu. Explicar con sus propias palabras por qué es importante cultivar el Fruto del Espíritu en nuestras vidas."
            },
            {id: 5, description: "Participar en una discusión grupal sobre la autoestima."},
            {
                id: 6,
                description: "Leer Isaías 43:1-5 y responder:",
                sub: [
                    "¿A quién pertenecemos?",
                    "¿Qué promesas nos da Jesús en estos versículos?"
                ]
            },
            {
                id: 7,
                description: "¿Qué debemos hacer cuando experimentamos sentimientos como:",
                sub: [
                    "Ira: Leer Proverbios 15:1, Santiago 1:19-20, Efesios 4:26",
                    "Miedo: Salmo 34:17-18",
                    "Ansiedad: 1 Pedro 5:7, Filipenses 4:6-8"
                ]
            },
            {
                id: 8,
                description: "Leer Romanos 12:15 y explicar con sus propias palabras:",
                sub: [
                    "¿Cómo se aplica este versículo a la «regla de oro»?",
                    "¿Por qué se relaciona con la empatía?"
                ]
            },
            {
                id: 9,
                description: "Leer Mateo 22:36-40 y hablar con su instructor o consejero sobre la importancia del amor propio para que más tarde pueda amar a otros."
            },
            {
                id: 10,
                description: "Hacer una lista de los desafíos en los que debe trabajar para gestionar mejor sus emociones."
            },
            {
                id: 11,
                description: "Grabar un video y compartirlo en sus redes sociales hablando sobre cómo manejar las emociones, basándose en el capítulo 84 del libro «Mente, carácter y personalidad (Vol. 2)»."
            }
        ]
    },
    // Copia estos objetos y agrégalos a tu array honorData:

    {
        id: "MIS-003",
        categoryCode: "MIS",
        honorId: 3,
        level: 2,
        year: 2024,
        origin: "GC",
        name: "Relaciones Saludables",
        category: "Actividades Misioneras",
        imageUrl: "/placeholders/relaciones-saludables.png",
        requirements: [
            {id: 1, description: "Describir la importancia de las relaciones para los seres humanos."},
            {id: 2, description: "Comprender la definición de una relación tóxica y una relación sana."},
            {
                id: 3,
                description: "Comprender el significado de la frase: «Dime con quién andas y te diré quién eres» y relacionarla con el texto de 1 Corintios 15:33."
            },
            {id: 4, description: "Identificar cómo una amistad puede ser abusiva."},
            {id: 5, description: "Hacer una lista de al menos cinco referencias bíblicas que hablen de amistades."},
            {id: 6, description: "Describir los niveles de las relaciones."},
            {
                id: 7,
                description: "Conocer las características de una relación abusiva en sus diferentes manifestaciones:",
                sub: ["Física", "Financiera", "Moral", "Psicológica", "Sexual", "Social"]
            },
            {id: 8, description: "Saber qué se puede hacer ante una situación de abuso como testigo o víctima."},
            {
                id: 9,
                description: "Conocer los mecanismos legales disponibles en su país, estado o municipio para la protección y ayuda de las víctimas de relaciones abusivas y las sanciones correspondientes."
            },
            {
                id: 10,
                description: "Comprender el plan de Dios para las relaciones en sus diferentes niveles, según:",
                sub: ["Efesios 5:22-23", "Efesios 6:1-4"]
            },
            {
                id: 11,
                description: "Compartir las principales lecciones aprendidas en esta especialidad con cinco familiares y amigos."
            },
            {id: 12, description: "Comprender la relación entre la baja autoestima y las relaciones abusivas."},
            {
                id: 13,
                description: "Saber cuál es el momento adecuado para iniciar una relación sentimental y cómo la edad puede influir en ese momento."
            },
            {
                id: 14,
                description: "Desarrollar una lista de criterios, límites y condiciones para una relación sentimental personal."
            },
            {
                id: 15,
                description: "Conocer la importancia de ambos padres en una relación sentimental entre sus hijos."
            },
            {
                id: 16,
                description: "Comprender el plan de Dios para la sexualidad y hacer un voto personal de honrar ese plan."
            }
        ]
    },
    {
        id: "MIS-004",
        categoryCode: "MIS",
        honorId: 4,
        level: 2,
        year: 2024,
        origin: "GC",
        name: "Estudio de Lenguas",
        category: "Actividades Misioneras",
        imageUrl: "/placeholders/lenguas.png",
        requirements: [
            {
                id: 1,
                description: "Ser capaz de presentarse, mencionando nombre, edad y donde vive en una lengua no nativa."
            },
            {
                id: 2,
                description: "Saber, en el idioma escogido, lo siguiente:",
                sub: ["Días de la semana", "Meses del año", "Estaciones del año", "Números del 1 al 20"]
            },
            {
                id: 3,
                description: "Oír parte de un discurso, sermón o declaración de dos minutos, cuya lengua materna sea la lengua extranjera que usted escogió y explicar en sus palabras lo que entendió."
            },
            {
                id: 4,
                description: "Ser capaz de preguntar y comprender las instrucciones de como se llega a algún lugar en el idioma escogido."
            },
            {
                id: 5,
                description: "Dramatizar una de las siguientes situaciones, dialogando en la lengua escogida:",
                sub: ["Comprando ropa", "Comiendo en un restaurante", "Preguntando horario de funcionamiento de una tienda"]
            },
            {id: 6, description: "Cantar el himno de los Conquistadores en la lengua escogida."}
        ]
    },
    {
        id: "NAT-002",
        categoryCode: "NAT",
        honorId: 2,
        level: 2,
        year: 2024,
        origin: "GC",
        name: "Primates",
        category: "Estudio de la Naturaleza",
        imageUrl: "/placeholders/primates.png",
        requirements: [
            {id: 1, description: "¿Cuáles son las principales características de los primates?"},
            {
                id: 2,
                description: "Responder las siguientes preguntas:",
                sub: [
                    "¿Cuál es la especie de primate más grande del mundo? ¿Cuál es la más grande en su país? (Mostrar fotos)",
                    "¿Cuántas especies de monos hay en su país?",
                    "¿Cuáles son las especies de lémures más pequeñas del mundo? (Mostrar fotos)"
                ]
            },
            {id: 3, description: "¿Cuáles son los nombres comunes del mono Brachyteles arachnoides?"},
            {id: 4, description: "¿Cuáles son los tres tipos de monos araña?"},
            {
                id: 5,
                description: "¿Qué especie de mono brasileño estuvo a punto de extinguirse porque se los mataba por su cola para fabricar plumeros que se exportaban a Europa?"
            },
            {
                id: 6,
                description: "¿Cuál es el único primate en América capaz de usar objetos como herramientas para obtener alimento?"
            },
            {
                id: 7,
                description: "¿Qué porcentaje de primates hay en la Amazonía en comparación con el resto del mundo?"
            },
            {id: 8, description: "Explicar la etimología de la palabra «mono»."},
            {id: 9, description: "Nombrar las especies de monos típicas de su país."},
            {id: 10, description: "¿Cuál es la principal diferencia entre monos y simios?"},
            {id: 11, description: "¿Cuáles son los beneficios y los daños de los monos para los humanos?"},
            {id: 12, description: "¿Cómo se llama la ciencia que estudia a los primates?"}
        ]
    },
    {
        id: "ART-001",
        categoryCode: "ART",
        honorId: 1,
        level: 2,
        year: 2024,
        origin: "GC",
        name: "Seguridad en Redes Sociales",
        category: "Artes Vocacionales",
        imageUrl: "/placeholders/seguridad-redes.png",
        requirements: [
            {id: 1, description: "¿Qué son las redes sociales?"},
            {id: 2, description: "¿Qué es la interactividad digital?"},
            {id: 3, description: "¿Cuáles son las principales características de las redes sociales?"},
            {id: 4, description: "¿Cómo las redes sociales han cambiado el comportamiento de las personas?"},
            {id: 5, description: "Explicar qué significa tener buenas relaciones en las redes sociales."},
            {
                id: 6,
                description: "¿Qué es oversharing (compartir demasiado)? ¿Por qué es importante evitar compartir información excesiva sobre nuestra vida personal en las redes sociales?"
            },
            {
                id: 7,
                description: "Hacer una lista de cinco datos personales que no se deben compartir públicamente en las redes sociales."
            },
            {id: 8, description: "Decir tres maneras de proteger su privacidad en línea."},
            {
                id: 9,
                description: "¿Cuáles son las consecuencias de publicar fotos o información vergonzosa sobre otras personas en las redes sociales?"
            },
            {
                id: 10,
                description: "¿Por qué un perfil falso en una red social puede ser un riesgo para las personas, especialmente para niños y adolescentes?"
            },
            {
                id: 11,
                description: "Desarrollar un conjunto de pautas para abordar mensajes de odio o comentarios irrespetuosos en las redes sociales. Incluir estrategias para bloquear, denunciar y mantener la calma en estas situaciones."
            },
            {
                id: 12,
                description: "¿Por qué es importante que los padres estén al tanto de las actividades de sus hijos en las redes sociales? Dar tres razones."
            },
            {id: 13, description: "¿Cómo han ayudado las redes sociales a difundir el evangelio de Cristo?"},
            {
                id: 14,
                description: "Según las enseñanzas de Jesús, ¿cómo podemos demostrar amor y bondad en las interacciones en línea? Dar ejemplos de actitudes que reflejen el amor de Jesús al interactuar con otras personas en las redes sociales."
            }
        ]
    },
    {
        id: "DOC-002",
        categoryCode: "DOC",
        honorId: 2,
        level: 2,
        year: 2026,
        origin: "GC",
        name: "Dios Hijo",
        category: "Doctrinal",
        imageUrl: "/placeholders/dios-hijo.png",
        requirements: [
            {id: 1, description: "Saber por qué Dios Hijo recibe el nombre de Jesús (Mateo 1:21)."},
            {
                id: 2,
                description: "Entender cuál fue la participación de Jesús en la creación del mundo, cuando fue identificado por Juan como el «Verbo» o «Palabra» de Dios (Juan 1:2-3; Colosenses 1:16-17)."
            },
            {
                id: 3,
                description: "Explicar cuál fue la participación de Jesús, en el plan de Dios, para salvar al ser humano de la muerte (Lucas 19:10)."
            },
            {
                id: 4,
                description: "Conocer lo que la Biblia dice de la naturaleza divina de Jesús (Juan 10:30; Hebreos 1:3; Juan 1:1; Colosenses 2:9)."
            },
            {
                id: 5,
                description: "Estudiar lo que la Biblia enseña sobre la naturaleza humana de Jesús (Juan 1:14; Hebreos 4:15; 1 Juan 4:2; Filipenses 2:6-8)."
            },
            {
                id: 6,
                description: "Memorizar y recitar algunos nombres o títulos que el profeta Isaías usa para Jesús (Isaías 9:6; 7:14)."
            },
            {
                id: 7,
                description: "Compartir con un amigo cuáles son las promesas que Jesús hace a los que creen en Él (Juan 11:25-26; 14:1-3)."
            }
        ]
    },
];