export type CatalogItem = {
  id: string;
  slug: string;
  name: string;
  type: "service" | "product";
  category: "Consultas" | "Tratamientos" | "Amuletos";
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

const treatmentActions = [
  "Limpieza energética profunda",
  "Desbloqueo sentimental",
  "Escudo de protección",
  "Armonización de espacios",
  "Sanación familiar",
  "Arreglar y quitar enfermedades desconocidas",
];

const treatmentProcess =
  "Samanda trabaja con limpieza energética profunda, desbloqueo sentimental, escudo de protección, armonización de espacios, sanación familiar y apoyo para arreglar y quitar enfermedades desconocidas.";

export const catalog: CatalogItem[] = [
  {
    id: "svc-001",
    slug: "consulta-tarot-cera-velas",
    name: "Consulta de tarot medieval y lectura de cera",
    type: "service",
    category: "Consultas",
    price: 60,
    currency: "EUR",
    shortDesc: "Cartas medievales y lectura de cera de velas para claridad inmediata.",
    longDesc:
      "Consulta de tarot (cartas medievales) y lectura de la cera de las velas para comprender tu presente y recibir guía precisa.",
    benefits: [
      "Cartas medievales con guía clara",
      "Lectura de cera de velas",
      "Orientación para amor, trabajo y camino personal",
    ],
    images: ["/images/servicios/samanda-lectura-02.jpg"],
    tags: ["tarot", "cartas medievales", "cera", "velas", "consulta"],
    modality: "Presencial y videollamada",
    faq: [
      {
        q: "¿Cuánto dura la consulta?",
        a: "Entre 50 y 70 minutos, según la profundidad del tema.",
      },
    ],
  },
  {
    id: "svc-002",
    slug: "interpretacion-de-suenos",
    name: "Interpretación de sueños",
    type: "service",
    category: "Consultas",
    price: 45,
    currency: "EUR",
    shortDesc: "Lectura simbólica para entender mensajes y emociones del sueño.",
    longDesc:
      "Interpretación de sueños para identificar símbolos, emociones y caminos que tu subconsciente está mostrando.",
    benefits: [
      "Claridad emocional",
      "Comprensión de símbolos",
      "Guía práctica para tomar decisiones",
    ],
    images: ["/images/servicios/samanda-lectura-01.jpg"],
    tags: ["sueños", "interpretacion", "guia"],
    modality: "Presencial y videollamada",
  },
  {
    id: "svc-003",
    slug: "tratamiento-atraer-amor",
    name: "Tratamiento para atraer el amor",
    type: "service",
    category: "Tratamientos",
    price: 80,
    currency: "EUR",
    shortDesc: "Trabajo energético para abrir el camino sentimental.",
    longDesc: `Tratamiento enfocado en atraer el amor y fortalecer tu energía afectiva. ${treatmentProcess}`,
    benefits: treatmentActions,
    images: ["/images/servicios/samanda-ritual-01.jpg"],
    tags: ["amor", "tratamiento", "energia"],
    modality: "Presencial y videollamada",
  },
  {
    id: "svc-004",
    slug: "tratamiento-mala-suerte",
    name: "Tratamiento para arreglar la mala suerte",
    type: "service",
    category: "Tratamientos",
    price: 80,
    currency: "EUR",
    shortDesc: "Limpieza y protección para cortar rachas negativas.",
    longDesc: `Tratamiento enfocado en arreglar la mala suerte y recuperar tu equilibrio energético. ${treatmentProcess}`,
    benefits: treatmentActions,
    images: ["/images/servicios/samanda-ritual-02.jpg"],
    tags: ["mala suerte", "proteccion", "energia"],
    modality: "Presencial y videollamada",
  },
  {
    id: "svc-005",
    slug: "tratamiento-negocio-trabajo",
    name: "Tratamiento para arreglar el negocio o trabajo",
    type: "service",
    category: "Tratamientos",
    price: 85,
    currency: "EUR",
    shortDesc: "Impulso energético para destrabar lo laboral y económico.",
    longDesc: `Tratamiento para arreglar el negocio o el trabajo, abrir caminos y estabilizar la economía. ${treatmentProcess}`,
    benefits: treatmentActions,
    images: ["/images/servicios/samanda-ritual-03.jpg"],
    tags: ["negocio", "trabajo", "economia"],
    modality: "Presencial y videollamada",
  },
  {
    id: "svc-006",
    slug: "tratamiento-arreglar-hogares",
    name: "Tratamiento para arreglar hogares",
    type: "service",
    category: "Tratamientos",
    price: 85,
    currency: "EUR",
    shortDesc: "Armonización del hogar y limpieza energética profunda.",
    longDesc: `Tratamiento para arreglar hogares y sostener un ambiente en calma. ${treatmentProcess}`,
    benefits: treatmentActions,
    images: ["/images/servicios/samanda-espacio-01.jpg"],
    tags: ["hogar", "armonizacion", "limpieza"],
    modality: "Presencial",
  },
  {
    id: "svc-007",
    slug: "tratamiento-quitar-mala-energia",
    name: "Tratamiento para quitar la mala energía",
    type: "service",
    category: "Tratamientos",
    price: 85,
    currency: "EUR",
    shortDesc: "Arreglar y atraer tu energía positiva.",
    longDesc: `Tratamiento para quitar la mala energía, arreglar y atraer tu energía positiva. ${treatmentProcess}`,
    benefits: treatmentActions,
    images: ["/images/servicios/samanda-espacio-02.jpg"],
    tags: ["mala energia", "limpieza", "proteccion"],
    modality: "Presencial y videollamada",
  },
  {
    id: "svc-008",
    slug: "tratamiento-mal-de-ojo",
    name: "Tratamiento para quitar mal de ojo",
    type: "service",
    category: "Tratamientos",
    price: 80,
    currency: "EUR",
    shortDesc: "Protección para cortar influencias negativas.",
    longDesc: `Tratamiento para quitar mal de ojo y proteger tu energía. ${treatmentProcess}`,
    benefits: treatmentActions,
    images: ["/images/servicios/samanda-ritual-04.jpg"],
    tags: ["mal de ojo", "proteccion", "energia"],
    modality: "Presencial y videollamada",
  },
  {
    id: "svc-009",
    slug: "tratamiento-quitar-hechizos",
    name: "Tratamiento para quitar hechizos",
    type: "service",
    category: "Tratamientos",
    price: 90,
    currency: "EUR",
    shortDesc: "Corte de trabajos negativos y restablecimiento energético.",
    longDesc: `Tratamiento para quitar hechizos y restaurar tu bienestar espiritual. ${treatmentProcess}`,
    benefits: treatmentActions,
    images: ["/images/servicios/samanda-ritual-02.jpg"],
    tags: ["hechizos", "proteccion", "limpieza"],
    modality: "Presencial y videollamada",
  },
  {
    id: "svc-010",
    slug: "tratamiento-quitar-maleficios",
    name: "Tratamiento para quitar maleficios",
    type: "service",
    category: "Tratamientos",
    price: 90,
    currency: "EUR",
    shortDesc: "Limpieza profunda para cortar cargas fuertes.",
    longDesc: `Tratamiento para quitar maleficios y recuperar tu equilibrio. ${treatmentProcess}`,
    benefits: treatmentActions,
    images: ["/images/servicios/samanda-ritual-03.jpg"],
    tags: ["maleficios", "proteccion", "energia"],
    modality: "Presencial y videollamada",
  },
  {
    id: "prd-001",
    slug: "sabila-aloe-vera",
    name: "Sábila o aloe vera",
    type: "product",
    category: "Amuletos",
    price: 15,
    currency: "EUR",
    shortDesc: "Purifica el hogar o negocio y ayuda a sacar malas energías.",
    longDesc:
      "Sábila o aloe vera para purificar el hogar o el negocio, sacar malas energías y malas influencias.",
    benefits: ["Purificación", "Protección del espacio", "Limpieza energética"],
    images: ["/images/product-placeholder.svg"],
    tags: ["sabila", "aloe vera", "hogar", "negocio"],
  },
  {
    id: "prd-002",
    slug: "bambu-prosperidad",
    name: "Bambú de prosperidad",
    type: "product",
    category: "Amuletos",
    price: 18,
    currency: "EUR",
    shortDesc: "Atraer dinero y asegurar estabilidad emocional, amor y economía.",
    longDesc:
      "Bambú para atraer el dinero y asegurar la estabilidad emocional, el amor y la economía.",
    benefits: ["Atracción de dinero", "Estabilidad emocional", "Equilibrio económico"],
    images: ["/images/product-placeholder.svg"],
    tags: ["bambu", "dinero", "estabilidad"],
  },
  {
    id: "prd-003",
    slug: "perfumes-abre-caminos",
    name: "Perfumes abre caminos",
    type: "product",
    category: "Amuletos",
    price: 22,
    currency: "EUR",
    shortDesc: "Para el amor, desbloquear y abrir caminos en lo sentimental y económico.",
    longDesc:
      "Perfumes para el amor, desbloquear y abrir caminos para el futuro en lo sentimental y en lo económico.",
    benefits: ["Apertura de caminos", "Impulso afectivo", "Proyección económica"],
    images: ["/images/product-placeholder.svg"],
    tags: ["perfumes", "amor", "caminos"],
  },
  {
    id: "prd-004",
    slug: "yemaya-diosa-mar-amor",
    name: "Yemayá, diosa del mar y del amor",
    type: "product",
    category: "Amuletos",
    price: 35,
    currency: "EUR",
    shortDesc: "Para fidelidad y constancia en tu pareja.",
    longDesc:
      "Yemayá, la diosa del mar y del amor, para que tu pareja siempre te sea fiel y constante.",
    benefits: ["Fidelidad", "Constancia en pareja", "Protección espiritual"],
    images: ["/images/product-placeholder.svg"],
    tags: ["yemaya", "pareja", "amor"],
  },
  {
    id: "prd-005",
    slug: "jabones-azul-limpiezas",
    name: "Jabones rituales (especialmente el azul)",
    type: "product",
    category: "Amuletos",
    price: 16,
    currency: "EUR",
    shortDesc: "Limpiezas esotéricas y astrológicas para atraer lo positivo.",
    longDesc:
      "Jabones, especialmente el azul, para limpiezas esotéricas y astrológicas, y atraer todo lo positivo.",
    benefits: ["Limpieza esotérica", "Armonía", "Atracción de lo positivo"],
    images: ["/images/product-placeholder.svg"],
    tags: ["jabones", "limpieza", "astrologica"],
  },
  {
    id: "prd-006",
    slug: "pulsera-7-nudos",
    name: "Pulsera de los 7 nudos (hecha a mano)",
    type: "product",
    category: "Amuletos",
    price: 24,
    currency: "EUR",
    shortDesc: "Te protege de las malas energías y del mal de ojo.",
    longDesc:
      "Pulsera de los 7 nudos hecha a mano, te protege de las malas energías y del mal de ojo.",
    benefits: ["Protección diaria", "Bloqueo de mal de ojo", "Hecha a mano"],
    images: ["/images/product-placeholder.svg"],
    tags: ["pulsera", "7 nudos", "proteccion"],
  },
  {
    id: "prd-007",
    slug: "bolsa-7-granos",
    name: "Bolsa de los 7 granos",
    type: "product",
    category: "Amuletos",
    price: 20,
    currency: "EUR",
    shortDesc: "Protección general para que no falten alimentos, salud y amor.",
    longDesc:
      "Bolsa de los 7 granos para que nunca falten alimentos, salud y amor en tu casa. Protección general.",
    benefits: ["Protección del hogar", "Abundancia", "Bienestar familiar"],
    images: ["/images/product-placeholder.svg"],
    tags: ["bolsa", "granos", "proteccion"],
  },
  {
    id: "prd-008",
    slug: "aceite-romero",
    name: "Aceite de romero",
    type: "product",
    category: "Amuletos",
    price: 14,
    currency: "EUR",
    shortDesc: "Protección para evitar malas influencias y energías en el cuerpo.",
    longDesc:
      "Aceite de romero: untarlo en la planta de los pies en la noche al acostarse y colocarse unos calcetines blancos para evitar que entren malas influencias y malas energías al cuerpo.",
    benefits: ["Protección nocturna", "Bloqueo de influencias", "Ritual sencillo"],
    images: ["/images/product-placeholder.svg"],
    tags: ["romero", "aceite", "proteccion"],
  },
  {
    id: "prd-009",
    slug: "cuarzos-para-dinero",
    name: "Cuarzos para el dinero",
    type: "product",
    category: "Amuletos",
    price: 19,
    currency: "EUR",
    shortDesc: "Llevar en la cartera para atraer dinero.",
    longDesc:
      "Los cuarzos se deben llevar dentro de la cartera para que siempre tengas dinero.",
    benefits: ["Atracción de dinero", "Protección económica", "Fácil de llevar"],
    images: ["/images/product-placeholder.svg"],
    tags: ["cuarzos", "dinero", "cartera"],
  },
  {
    id: "prd-010",
    slug: "rosarios-bautizados",
    name: "Rosarios bautizados y magnetizados",
    type: "product",
    category: "Amuletos",
    price: 28,
    currency: "EUR",
    shortDesc: "Talismán personal consagrado con tu nombre.",
    longDesc:
      "Rosarios: el mejor talismán del mundo, bautizados y magnetizados con tu nombre.",
    benefits: ["Protección espiritual", "Consagración personal", "Talismán diario"],
    images: ["/images/product-placeholder.svg"],
    tags: ["rosarios", "taliman", "proteccion"],
  },
  {
    id: "prd-011",
    slug: "pack-velones",
    name: "Pack de velones",
    type: "product",
    category: "Amuletos",
    price: 32,
    currency: "EUR",
    shortDesc: "Elementos esenciales para una vida próspera y feliz.",
    longDesc:
      "Pack de velones para que en tu hogar nunca falte lo necesario para una vida próspera y feliz.",
    benefits: ["Prosperidad en el hogar", "Ritual completo", "Bienestar familiar"],
    images: ["/images/product-placeholder.svg"],
    tags: ["velones", "prosperidad", "hogar"],
  },
];

export const featuredAmulets = catalog.filter(
  (item) =>
    item.type === "product" &&
    ["sabila-aloe-vera", "bambu-prosperidad", "yemaya-diosa-mar-amor", "pulsera-7-nudos"].includes(
      item.slug
    )
);

export const primaryServices = catalog.filter(
  (item) =>
    item.type === "service" &&
    [
      "consulta-tarot-cera-velas",
      "interpretacion-de-suenos",
      "tratamiento-atraer-amor",
      "tratamiento-mala-suerte",
      "tratamiento-negocio-trabajo",
      "tratamiento-quitar-mala-energia",
    ].includes(item.slug)
);
