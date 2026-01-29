export type CatalogItem = {
  id: string;
  slug: string;
  name: string;
  type: "service" | "product";
  category: "Servicios" | "Amuletos" | "Velas" | "Rituales";
  price: number;
  currency: "EUR";
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  images: string[];
  tags: string[];
  modality?: "Presencial" | "Videollamada" | "Presencial y videollamada";
  faq?: { q: string; a: string }[];
};

export const catalog: CatalogItem[] = [
  {
    id: "svc-001",
    slug: "lectura-tarot-presencial-madrid",
    name: "Lectura de Tarot presencial en Madrid",
    type: "service",
    category: "Servicios",
    price: 60,
    currency: "EUR",
    shortDesc: "Lectura personalizada con enfoque medieval y guía espiritual.",
    longDesc:
      "Sesión privada en Madrid para explorar amor, trabajo y camino vital. Interpretación clara, sin juicios, con recomendaciones accionables.",
    benefits: [
      "Claridad inmediata sobre decisiones",
      "Orientación espiritual consciente",
      "Recomendaciones para tu próximo paso",
    ],
    images: ["/images/service-placeholder.svg"],
    tags: ["tarot", "presencial", "madrid"],
    modality: "Presencial",
    faq: [
      {
        q: "¿Cuánto dura la sesión?",
        a: "Entre 50 y 70 minutos, según la consulta.",
      },
    ],
  },
  {
    id: "svc-002",
    slug: "lectura-tarot-videollamada",
    name: "Lectura de Tarot por videollamada",
    type: "service",
    category: "Servicios",
    price: 45,
    currency: "EUR",
    shortDesc: "La misma profundidad espiritual desde cualquier lugar.",
    longDesc:
      "Sesión online con ritual de apertura y lectura enfocada. Ideal si estás fuera de Madrid o buscas flexibilidad.",
    benefits: [
      "Acceso inmediato desde cualquier país",
      "Interpretación detallada",
      "Guía para amor, trabajo y propósito",
    ],
    images: ["/images/service-placeholder.svg"],
    tags: ["tarot", "online", "videollamada"],
    modality: "Videollamada",
    faq: [
      {
        q: "¿Qué necesito preparar?",
        a: "Un espacio tranquilo, buena conexión y una intención clara.",
      },
    ],
  },
  {
    id: "svc-003",
    slug: "lectura-de-velas",
    name: "Lectura de velas",
    type: "service",
    category: "Servicios",
    price: 50,
    currency: "EUR",
    shortDesc: "Lectura energética a través del fuego para desbloqueos.",
    longDesc:
      "Ritual de velas con interpretación simbólica. Útil para entender bloqueos y movimientos energéticos actuales.",
    benefits: [
      "Detecta bloqueos energéticos",
      "Señales claras sobre el proceso",
      "Orientación para próximos pasos",
    ],
    images: ["/images/service-placeholder.svg"],
    tags: ["velas", "ritual", "energia"],
    modality: "Presencial y videollamada",
  },
  {
    id: "svc-004",
    slug: "endulzamiento",
    name: "Endulzamiento",
    type: "service",
    category: "Rituales",
    price: 80,
    currency: "EUR",
    shortDesc: "Ritual suave para armonizar vínculos y comunicación.",
    longDesc:
      "Trabajo energético enfocado en suavizar tensiones, abrir el diálogo y recuperar la ternura en relaciones afectivas.",
    benefits: [
      "Armoniza la comunicación",
      "Mejora la disposición emocional",
      "Refuerza la conexión afectiva",
    ],
    images: ["/images/service-placeholder.svg"],
    tags: ["amor", "ritual", "armonizacion"],
    modality: "Presencial y videollamada",
  },
  {
    id: "svc-005",
    slug: "banos-de-purificacion",
    name: "Baños de purificación",
    type: "service",
    category: "Rituales",
    price: 70,
    currency: "EUR",
    shortDesc: "Limpieza profunda para renovar tu energía.",
    longDesc:
      "Baños ritualizados con hierbas y esencia espiritual para descargar pesadez, fatiga y energías densas.",
    benefits: [
      "Renueva tu campo energético",
      "Sensación de ligereza",
      "Preparación para nuevos ciclos",
    ],
    images: ["/images/service-placeholder.svg"],
    tags: ["purificacion", "limpieza", "bienestar"],
    modality: "Presencial",
  },
  {
    id: "svc-006",
    slug: "limpieza-espiritual",
    name: "Limpieza espiritual",
    type: "service",
    category: "Rituales",
    price: 90,
    currency: "EUR",
    shortDesc: "Trabajo completo de limpieza, protección y enfoque.",
    longDesc:
      "Ritual profundo para cortar cargas, elevar vibración y cerrar ciclos. Incluye guía posterior para sostener resultados.",
    benefits: [
      "Corte de cargas energéticas",
      "Protección y claridad",
      "Reinicio emocional y espiritual",
    ],
    images: ["/images/service-placeholder.svg"],
    tags: ["limpieza", "proteccion", "energia"],
    modality: "Presencial y videollamada",
  },
  {
    id: "prd-001",
    slug: "amuleto-de-yemaya",
    name: "Amuleto de Yemayá",
    type: "product",
    category: "Amuletos",
    price: 35,
    currency: "EUR",
    shortDesc: "Protección y serenidad con energía marina consagrada.",
    longDesc:
      "Amuleto trabajado artesanalmente para fortalecer la calma y la intuición. Ideal para etapas de cambios profundos.",
    benefits: ["Protección diaria", "Armonía emocional", "Fortalece la intuición"],
    images: ["/images/product-placeholder.svg"],
    tags: ["amuleto", "yemaya", "proteccion"],
  },
  {
    id: "prd-002",
    slug: "rosarios-consagrados",
    name: "Rosarios consagrados",
    type: "product",
    category: "Amuletos",
    price: 28,
    currency: "EUR",
    shortDesc: "Piezas consagradas para oración y protección.",
    longDesc:
      "Rosarios energizados para acompañar rituales de calma, agradecimiento y protección espiritual.",
    benefits: ["Protección espiritual", "Acompañamiento diario", "Energía consagrada"],
    images: ["/images/product-placeholder.svg"],
    tags: ["rosario", "proteccion", "ritual"],
  },
  {
    id: "prd-003",
    slug: "velas-ritualizadas",
    name: "Velas ritualizadas",
    type: "product",
    category: "Velas",
    price: 18,
    currency: "EUR",
    shortDesc: "Velas preparadas para intención específica.",
    longDesc:
      "Velas ritualizadas para amor, prosperidad o limpieza. Incluyen instrucciones de uso seguro.",
    benefits: ["Enfoque de intención", "Energía ritual", "Uso sencillo"],
    images: ["/images/product-placeholder.svg"],
    tags: ["velas", "ritual", "intencion"],
  },
  {
    id: "prd-004",
    slug: "perfume-energetico",
    name: "Perfume energético",
    type: "product",
    category: "Rituales",
    price: 22,
    currency: "EUR",
    shortDesc: "Aroma ritual para elevar tu vibración.",
    longDesc:
      "Mezcla aromática con esencia espiritual para limpiar tu campo antes de reuniones o momentos importantes.",
    benefits: ["Eleva la vibración", "Aromas suaves", "Ideal para ritual diario"],
    images: ["/images/product-placeholder.svg"],
    tags: ["perfume", "energia", "ritual"],
  },
  {
    id: "prd-005",
    slug: "sabila-protectora",
    name: "Sábila protectora",
    type: "product",
    category: "Amuletos",
    price: 15,
    currency: "EUR",
    shortDesc: "Sábila consagrada para protección del hogar.",
    longDesc:
      "Elemento tradicional de protección y limpieza energética. Ideal para entradas y espacios de trabajo.",
    benefits: ["Protección del hogar", "Purificación", "Elemento tradicional"],
    images: ["/images/product-placeholder.svg"],
    tags: ["sabila", "hogar", "proteccion"],
  },
  {
    id: "prd-006",
    slug: "kit-prosperidad",
    name: "Kit de prosperidad",
    type: "product",
    category: "Rituales",
    price: 48,
    currency: "EUR",
    shortDesc: "Herramientas rituales para abrir caminos.",
    longDesc:
      "Kit con elementos esenciales para atraer abundancia y enfocarte en nuevas oportunidades.",
    benefits: ["Apertura de caminos", "Ritual completo", "Ideal para inicios"],
    images: ["/images/product-placeholder.svg"],
    tags: ["prosperidad", "ritual", "abundancia"],
  },
  {
    id: "prd-007",
    slug: "sal-de-limpieza",
    name: "Sal de limpieza",
    type: "product",
    category: "Rituales",
    price: 14,
    currency: "EUR",
    shortDesc: "Mezcla de sales para descargar energía densa.",
    longDesc:
      "Sal preparada con hierbas para baños o limpiezas de espacio. Uso semanal recomendado.",
    benefits: ["Descarga energética", "Uso versátil", "Fácil aplicación"],
    images: ["/images/product-placeholder.svg"],
    tags: ["sal", "limpieza", "energia"],
  },
];

export const featuredAmulets = catalog.filter(
  (item) =>
    item.type === "product" &&
    ["amuleto-de-yemaya", "rosarios-consagrados", "velas-ritualizadas", "perfume-energetico"].includes(
      item.slug
    )
);

export const primaryServices = catalog.filter(
  (item) =>
    item.type === "service" &&
    [
      "lectura-tarot-presencial-madrid",
      "lectura-de-velas",
      "endulzamiento",
      "banos-de-purificacion",
      "limpieza-espiritual",
    ].includes(item.slug)
);
