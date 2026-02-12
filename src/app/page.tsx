import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { TarotWidget } from "@/components/TarotWidget";
import { ServiceCard } from "@/components/ServiceCard";
import { ProductCard } from "@/components/ProductCard";
import { CandleCarousel } from "@/components/CandleCarousel";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/format";
import { catalog, featuredAmulets, primaryServices } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Tarot en Madrid y videollamada",
  description:
    "Consultas de tarot (cartas medievales), lectura de cera de velas, interpretación de sueños, tratamientos energéticos y amuletos ritualizados.",
  openGraph: {
    title: "Samanda Tarot",
    description:
      "Consultas de tarot (cartas medievales), lectura de cera de velas, interpretación de sueños, tratamientos energéticos y amuletos ritualizados.",
    url: "https://samandatarot.com",
  },
};

const intentions = [
  {
    title: "Amor",
    description:
      "Estás cansado(a) de los mismos patrones repetitivos y buscas entender la raíz de tus vínculos o atraer una conexión que resuene con tu alma.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M12 21s-7-4.4-9.2-8.3C1.1 9.4 2.6 6.5 5.6 6.1c1.9-.2 3.5.8 4.4 2.1.9-1.3 2.5-2.3 4.4-2.1 3 .4 4.5 3.3 2.8 6.6C19 16.6 12 21 12 21z" />
      </svg>
    ),
  },
  {
    title: "Trabajo",
    description:
      "Te encuentras en una encrucijada profesional y necesitas claridad para dar ese salto cuántico o manifestar la abundancia que tu esfuerzo merece.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M10 3h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v3H2V9a2 2 0 0 1 2-2h4V5a2 2 0 0 1 2-2zm0 4h4V5h-4v2zm12 7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5h8v2h4v-2h8z" />
      </svg>
    ),
  },
  {
    title: "Astrología",
    description:
      "No solo buscas predicciones, sino una hoja de ruta. Quieres entender cómo el movimiento de los astros influye en tu energía vital y cómo usarlo a tu favor.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-7.1 17.1A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-5.7-2.4A8 8 0 1 1 12 20zm0-13a5 5 0 0 0-4.1 7.8l-1.3 3.7 3.7-1.3A5 5 0 1 0 12 7zm0 2a3 3 0 0 1 1.9 5.3l-.3.2-1.6.6.6-1.6-.2-.3A3 3 0 0 1 12 9z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Mariana G.",
    text: "La lectura fue clara y respetuosa. Me ayudó a tomar una decisión que tenía pendiente desde hace meses.",
  },
  {
    name: "Javier P.",
    text: "Samanda transmite calma y confianza. Sentí que la sesión estaba bien enfocada en lo que necesitaba.",
  },
  {
    name: "Lucía R.",
    text: "Me gustó el enfoque espiritual sin exageraciones. Salí con un plan concreto.",
  },
  {
    name: "Isabel M.",
    text: "El ritual de limpieza fue suave pero efectivo. Volví a sentirme en paz.",
  },
  {
    name: "Daniela V.",
    text: "La videollamada fue muy profesional. Siento que la guía fue directa y precisa.",
  },
  {
    name: "Carlos T.",
    text: "Recibí recomendaciones prácticas y un trato cercano. Repetiré sin duda.",
  },
];

const blogPosts = [
  {
    title: "Compatibilidad del zodiaco",
    description: "Una guía breve para entender afinidades y desafíos emocionales.",
    href: "/blog/compatibilidad-del-zodiaco",
  },
  {
    title: "Consejos de pareja",
    description: "Claves espirituales para fortalecer la comunicación afectiva.",
    href: "/blog/consejos-de-pareja",
  },
  {
    title: "Limpieza energética esencial",
    description: "Pasos básicos para mantener tu energía en equilibrio.",
    href: "/blog/limpieza-energetica-esencial",
  },
];

const candleGuideImage = "/images/velas/Pergamino - Samanda Tarot - A4 Cara  A.png";
const candleBoxImage = "/images/velas/Etiqueta de la caja - Samanda Tarot.png";

const candleDayLabels = [
  {
    day: "Lunes",
    intention: "Calma",
    image: "/images/velas/Etiquetas de las velas - Samanda Tarot_Lunes - calma.png",
  },
  {
    day: "Martes",
    intention: "Vitalidad",
    image: "/images/velas/Etiquetas de las velas - Samanda Tarot_Martes - vitalidad.png",
  },
  {
    day: "Miércoles",
    intention: "Verdad",
    image: "/images/velas/Etiquetas de las velas - Samanda Tarot_Miercoles - verdad.png",
  },
  {
    day: "Jueves",
    intention: "Fortuna",
    image: "/images/velas/Etiquetas de las velas - Samanda Tarot_Jueves - fortuna.png",
  },
  {
    day: "Viernes",
    intention: "Pasión",
    image: "/images/velas/Etiquetas de las velas - Samanda Tarot_Viernes - pasion.png",
  },
  {
    day: "Sábado",
    intention: "Amor",
    image: "/images/velas/Etiquetas de las velas - Samanda Tarot_Sabado - amor.png",
  },
];

const candleCarouselSlides = [
  {
    src: "/images/velas/Etiquetas velas mockup.png",
    alt: "Mockup del set de velas ritualizadas",
  },
  {
    src: "/images/velas/pergamino.png",
    alt: "Pergamino resumen del set de velas",
  },
  {
    src: "/images/velas/samanda-velas-01.jpg",
    alt: "Set de velas Samanda Tarot vista 1",
  },
  {
    src: "/images/velas/samanda-velas-03.jpg",
    alt: "Set de velas Samanda Tarot vista 2",
  },
];

export default function HomePage() {
  const whatsappGeneral = buildWhatsAppUrl(
    "Hola Samanda, quiero información sobre una consulta."
  );
  const whatsappPresencial = buildWhatsAppUrl(
    "Hola Samanda, quiero reservar mi sesión presencial de tarot en Madrid."
  );
  const candlePack = catalog.find((item) => item.slug === "pack-velones");
  const candlePackName = candlePack?.name ?? "Pack de velones";
  const candlePackPrice = candlePack
    ? formatPrice(candlePack.price, candlePack.currency)
    : "Consultar precio";
  const candlePackLink = candlePack ? `/tienda/${candlePack.slug}` : "/tienda";
  const candlePackWhatsapp = buildWhatsAppUrl(
    `Hola Samanda, quiero comprar ${candlePackName}.`
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Samanda Tarot",
    address: {
      "@type": "PostalAddress",
      streetAddress: "P.º de Sta. María de la Cabeza, 4, 28045 Madrid (bajo izquierda)",
      addressLocality: "Madrid",
      addressCountry: "ES",
    },
    telephone: "+34 91 539 58 50",
    url: "https://samandatarot.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section
        id="hero"
        className="relative overflow-hidden text-ivory"
        ariaLabel="Hero Samanda Tarot"
      >
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-placeholder.svg"
          >
            <source src="/videos/videotarot.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,16,31,0.64)_0%,rgba(26,16,31,0.72)_100%)]"
            aria-hidden="true"
          />
        </div>

        <div className="relative overflow-hidden rounded-[40px] bg-[linear-gradient(120deg,rgba(43,28,47,0.24)_0%,rgba(43,28,47,0.08)_52%,rgba(43,28,47,0.02)_100%)] px-8 py-12 sm:px-10 lg:px-14">

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div
              className="space-y-6 rounded-3xl bg-transparent p-6 backdrop-blur-[2px] sm:p-7"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, rgba(14,9,18,0.34) 0%, rgba(14,9,18,0.14) 55%, rgba(14,9,18,0.02) 100%), radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
                backgroundSize: "auto, 4px 4px",
              }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-gold">
                Samanda Tarot en Madrid
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Tu destino no está escrito en piedra, está escrito en tu energía
              </h1>
              <p className="max-w-xl text-base text-ivory/80">
                Consultas de tarot (cartas medievales), lectura de cera de velas e interpretación de sueños. Tratamientos
                energéticos y amuletos ritualizados para amor, trabajo y camino personal.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTAButton href={whatsappGeneral} size="lg">
                  Reserva tu consulta
                </CTAButton>
                <CTAButton href="#servicios" variant="secondary" size="lg">
                  Ver la lista
                </CTAButton>
              </div>
            </div>
            <div className="relative aspect-square w-full max-w-[220px] justify-self-center overflow-hidden sm:max-w-[270px] lg:max-w-[320px]">
              <Image
                src="/images/logo/Samanda Tarot - Logo Principal.png"
                alt="Consulta de tarot"
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 270px, 220px"
                className="hero-image-pulse object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      <Section ariaLabel="Samanda Tarot y Guía espiritual">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] ">
          <div className="space-y-4 ">
            <p className="text-xs uppercase tracking-[0.4em] text-yellow-700">
              Samanda Tarot | Guía espiritual
            </p>
            <h2 className="text-3xl font-semibold text-plum">
              Transformemos juntos la incertidumbre en paz
            </h2>
            <p className="text-sm text-olive/80">
              Soy Samanda, guía espiritual dedicada a iluminar tu camino. Ya sea en consulta presencial en Madrid o
              mediante videollamada, trabajaremos para despejar tus dudas y encontrar respuestas claras.
            </p>
          </div>
          <div className="rounded-3xl border border-gold/70 bg-ivory px-6 py-6 text-sm text-olive/80">
            <p className="text-s uppercase tracking-[0.3em] text-yellow-700">
              Encuentra respuestas honestas para tu vida
            </p>
            <p className="mt-4">
              Mi propósito es ayudarte a ver lo que hoy está oculto para que tomes decisiones desde la calma y no desde
              la duda. Conectemos si necesitas claridad profunda y guía respetuosa.
            </p>
          </div>
        </div>
      </Section>

      <Section ariaLabel="Bloques de intención">
        <div className="grid gap-6 lg:grid-cols-3">
          {intentions.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gold/70 bg-ivory px-6 py-8 shadow-[0_18px_40px_-32px_rgba(43,28,47,0.35)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-plum">{item.title}</h3>
              <p className="mt-3 text-sm text-olive/80">{item.description}</p>
              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-xs uppercase tracking-[0.3em] text-yellow-700 hover:text-plum "
              >
                Quiero claridad
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section ariaLabel="Tarot gratis">
        <TarotWidget />
      </Section>

      <Section id="servicios" ariaLabel="La lista de Samanda">
        <div className="space-y-10">
          <div className="flex flex-col gap-3">
            <p className="text-s uppercase tracking-[0.7em] text-yellow-700">La lista de Samanda</p>
            <h2 className="text-3xl font-semibold text-plum">
              Consultas, tratamientos y amuletos
            </h2>
            <p className="text-sm text-olive/80">
              Aquí encuentras las consultas, tratamientos y productos ritualizados que trabajo en Samanda Tarot.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-gold/70 bg-ivory px-6 py-6 shadow-[0_18px_40px_-32px_rgba(43,28,47,0.35)]">
              <p className="text-xs uppercase tracking-[0.3em] text-yellow-700">Consultas</p>
              <ul className="mt-4 space-y-2 text-sm text-olive/80">
                <li>Consultas de tarot (cartas medievales) y la cera de las velas.</li>
                <li>Interpretación de sueños.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-gold/70 bg-ivory px-6 py-6 shadow-[0_18px_40px_-32px_rgba(43,28,47,0.35)]">
              <p className="text-xs uppercase tracking-[0.3em] text-yellow-700">Tratamientos para</p>
              <ul className="mt-4 space-y-2 text-sm text-olive/80">
                <li>Atraer el amor.</li>
                <li>Arreglar la mala suerte.</li>
                <li>Arreglar el negocio/trabajos.</li>
                <li>Arreglar hogares.</li>
                <li>Quitar la mala energía (arreglar y atraer tu energía positiva).</li>
                <li>Quitar mal de ojos.</li>
                <li>Quitar hechizos.</li>
                <li>Quitar maleficios.</li>
              </ul>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-yellow-700">
                Qué hace Samanda con la curación de eso
              </p>
              <ul className="mt-3 space-y-2 text-sm text-olive/80">
                <li>Limpieza energética profunda.</li>
                <li>Desbloqueo sentimental.</li>
                <li>Escudo de protección.</li>
                <li>Armonización de espacios.</li>
                <li>Sanación familiar.</li>
                <li>Arreglar y quitar enfermedades desconocidas.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-gold/70 bg-ivory px-6 py-6 shadow-[0_18px_40px_-32px_rgba(43,28,47,0.35)]">
              <p className="text-xs uppercase tracking-[0.3em] text-yellow-700">Productos (Amuletos)</p>
              <ul className="mt-4 space-y-2 text-sm text-olive/80">
                <li>
                  Sábila o aloe vera, para purificar el hogar o el negocio, sacar malas energías, malas influencias.
                </li>
                <li>
                  Bambú, para atraer el dinero y asegurar la estabilidad emocional, el amor y la economía.
                </li>
                <li>
                  Perfumes, para el amor, desbloquear y abrir caminos para el futuro en lo sentimental y en lo
                  económico.
                </li>
                <li>
                  Yemayá, la diosa del mar y del amor, para que tu pareja siempre te sea fiel y constante.
                </li>
                <li>
                  Jabones, especialmente el azul para limpiezas esotéricas, limpiezas astrológicas, atrae todo lo
                  positivo.
                </li>
                <li>
                  Pulsera de los 7 nudos (hechas a mano), te protege de las malas energías y del mal de ojo.
                </li>
                <li>
                  La bolsa de los 7 granos, para que nunca falte alimentos, salud y amor en tu casa (protección
                  general).
                </li>
                <li>
                  Aceite de romero, untarlo en la planta de los pies en la noche al acostarse y colocarse unos
                  calcetines blancos, para evitar que entren malas influencias y malas energías al cuerpo.
                </li>
                <li>
                  Los cuarzos, se deben llevar dentro de la cartera para que siempre tengas dinero.
                </li>
                <li>
                  Rosarios: es el mejor talismán del mundo, bautizados y magnetizados con tu nombre.
                </li>
                <li>
                  Pack de velones, en tu hogar nunca puede faltar todo esto para que tengan una vida próspera y feliz.
                </li>
              </ul>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-olive/70">
                Estos amuletos tienen que estar preparados, ritualizados y magnetizados por Samanda.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {primaryServices.map((service) => (
              <ServiceCard key={service.id} item={service} />
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <CTAButton href={whatsappGeneral} size="sm">
              Consultar por WhatsApp
            </CTAButton>
            <CTAButton href={whatsappPresencial} variant="secondary" size="sm">
              Reserva presencial
            </CTAButton>
          </div>

          <p className="text-xs uppercase tracking-[0.25em] text-olive/60">
            Aviso: Mis servicios son un acompañamiento espiritual; no sustituyen tratamientos médicos o psicológicos
            profesionalizados
          </p>
        </div>
      </Section>

      <Section ariaLabel="Producto estrella velas" className="bg-[#c0a180]">
        <div className="space-y-10">
          <div className="mx-auto w-full max-w-[1040px]">
            <Image
              src={candleGuideImage}
              alt="Pergamino con explicación del set de velas Samanda Tarot"
              width={1241}
              height={1754}
              sizes="(min-width: 1280px) 1040px, (min-width: 768px) 88vw, 98vw"
              className="h-auto w-full"
            />
          </div>

          <div className="grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {candleDayLabels.map((label) => (
              <div
                key={label.image}
                className="w-full origin-center transition-transform duration-300 will-change-transform hover:scale-110"
              >
                <div className="relative aspect-[443/544] w-full">
                  <Image
                    src={label.image}
                    alt={`Etiqueta ${label.day} - ${label.intention}`}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 94vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto w-full max-w-[920px]">
            <Image
              src={candleBoxImage}
              alt="Etiqueta de la caja del set de velas Samanda Tarot"
              width={1700}
              height={1045}
              sizes="(min-width: 1280px) 920px, (min-width: 768px) 86vw, 98vw"
              className="h-auto w-full"
            />
          </div>

          <article className="grid gap-6 rounded-3xl border border-gold/70 bg-ivory px-5 py-6 shadow-[0_20px_44px_-30px_rgba(43,28,47,0.4)] lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-8">
            <CandleCarousel slides={candleCarouselSlides} />

            <div className="flex flex-col gap-4 rounded-2xl border border-gold/35 bg-gold/10 px-5 py-5">
              <p className="text-xs uppercase tracking-[0.28em] text-yellow-700">Compra del producto</p>
              <h3 className="text-2xl font-semibold text-plum">{candlePackName}</h3>
              <p className="text-sm text-olive/80">
                Incluye presentación del set, guía ritual y velas organizadas por energía semanal para mantener tu
                práctica clara y constante.
              </p>
              <p className="text-2xl font-semibold text-plum">{candlePackPrice}</p>
              <div className="flex flex-wrap gap-3">
                <CTAButton href={candlePackLink} variant="secondary" size="sm">
                  Ver en tienda
                </CTAButton>
                <CTAButton href={candlePackWhatsapp} size="sm">
                  Comprar por WhatsApp
                </CTAButton>
              </div>
            </div>
          </article>
        </div>
      </Section>

      <Section ariaLabel="Amuletos destacados">
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-yellow-700">Amuletos ritualizados</p>
            <h2 className="text-3xl font-semibold text-plum">Piezas preparadas para tu protección</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {featuredAmulets.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
          <CTAButton href="/tienda" variant="secondary" size="lg" className="w-fit">
            Ver tienda
          </CTAButton>
        </div>
      </Section>

      <Section ariaLabel="Testimonios">
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-s uppercase tracking-[0.4em] text-yellow-700">Testimonios</p>
            <h2 className="text-3xl font-semibold text-plum">Experiencias reales, acompañamiento cercano</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-3xl border border-gold/70 bg-ivory px-6 py-6">
                <p className="text-sm text-olive/80">&quot;{item.text}&quot;</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-yellow-700">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section ariaLabel="Blog y consejos">
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-s uppercase tracking-[0.4em] text-yellow-700">El Blog Oráculo</p>
            <h2 className="text-3xl font-semibold text-plum">Consejos para tu vida afectiva y energética</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="overflow-hidden rounded-3xl border border-gold/70 bg-ivory"
              >
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src="/images/blog-placeholder.svg"
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 px-6 py-6">
                  <h3 className="text-xl font-semibold text-plum">{post.title}</h3>
                  <p className="text-sm text-olive/80">{post.description}</p>
                  <Link
                    href={post.href}
                    className="text-xs uppercase tracking-[0.3em] text-yellow-700 hover:text-plum"
                  >
                    Leer artículo
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section ariaLabel="Contacto y agendamiento">
        <div className="grid gap-8 rounded-3xl border border-gold/70 bg-ivory px-6 py-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-s uppercase tracking-[0.4em] text-yellow-700">Contacto</p>
            <h2 className="text-3xl font-semibold text-plum">Agenda tu consulta</h2>
            <p className="text-sm text-olive/80">
              Atención presencial en Madrid y videollamada para toda España.
            </p>
            <div className="space-y-2 text-sm text-olive/80">
              <p>Dirección: P.º de Sta. María de la Cabeza, 4, 28045 Madrid (bajo izquierda)</p>
              <p>Fijo: +34 91 539 58 50</p>
              <p>WhatsApp: +34 651 543 179</p>
              <p>Horario: Lunes a domingo, 10:00 - 21:30 (placeholder)</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <CTAButton href={whatsappGeneral} size="sm">
                Reserva por WhatsApp
              </CTAButton>
              <CTAButton href="https://calendly.com" variant="secondary" size="sm" external>
                Agendar por Calendario
              </CTAButton>
            </div>
          </div>
          <div className="rounded-2xl border border-gold/20 bg-plum/5 p-4 text-sm text-olive/60">
            <p>Calendario integrado (placeholder).</p>
            {/* <iframe title="Calendario" src="https://calendly.com/tu-enlace" className="h-[420px] w-full" /> */}
          </div>
        </div>
      </Section>

      <Section ariaLabel="Disclaimers">
        <div className="rounded-3xl border border-gold/20 bg-plum px-6 py-6 text-ivory">
          <p className="text-sm text-ivory/80">
            Acompañamiento espiritual; no sustituye tratamientos médicos o psicológicos. Consultas privadas y
            confidenciales.
          </p>
        </div>
      </Section>
    </>
  );
}
