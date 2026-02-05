import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { TarotWidget } from "@/components/TarotWidget";
import { ServiceCard } from "@/components/ServiceCard";
import { ProductCard } from "@/components/ProductCard";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { featuredAmulets, primaryServices } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Tarot en Madrid y videollamada",
  description:
    "Lecturas de tarot premium, rituales energéticos y amuletos consagrados. Atención presencial en Madrid y videollamada.",
  openGraph: {
    title: "Samanda Tarotista Colombiana",
    description:
      "Lecturas de tarot premium, rituales energéticos y amuletos consagrados. Atención presencial en Madrid y videollamada.",
    url: "https://samandatarotistacolombiana.com",
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

const rituals = [
  {
    ritual: "Lectura de Velas",
    purpose: "Análisis de la llama y la cera.",
    result: "Entender bloqueos ocultos y mensajes del entorno.",
  },
  {
    ritual: "Endulzamiento",
    purpose: "Suavizar asperezas en relaciones.",
    result: "Recuperar la armonía y la apertura emocional con otros.",
  },
  {
    ritual: "Baños de Purificación",
    purpose: "Descarga energética profunda.",
    result: "Sentirte ligera, renovada y con el aura \"limpia\".",
  },
  {
    ritual: "Limpieza Espiritual",
    purpose: "Eliminación de energías densas.",
    result: "Recuperar la paz en tu hogar o en tu estado de ánimo.",
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

export default function HomePage() {
  const whatsappGeneral = buildWhatsAppUrl(
    "Hola Samanda, quiero información sobre una lectura."
  );
  const whatsappRitual = buildWhatsAppUrl(
    "Hola Samanda, no sé cuál ritual elegir. ¿Me asesoras?"
  );
  const whatsappRitualRequest = buildWhatsAppUrl(
    "Hola Samanda, quiero solicitar mi ritual."
  );
  const whatsappPresencial = buildWhatsAppUrl(
    "Hola Samanda, quiero reservar mi sesión presencial de tarot en Madrid."
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Samanda Tarotista Colombiana",
    address: {
      "@type": "PostalAddress",
      streetAddress: "P.º de Sta. María de la Cabeza, 4, 28045 Madrid (bajo izquierda)",
      addressLocality: "Madrid",
      addressCountry: "ES",
    },
    telephone: "+34 91 539 58 50",
    url: "https://samandatarotistacolombiana.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section
        id="hero"
        className="bg-[radial-gradient(120%_120%_at_10%_0%,rgba(244,195,137,0.18),transparent_60%),linear-gradient(180deg,#2b1c2f_0%,#1b131f_100%)] text-ivory"
        ariaLabel="Hero Samanda Tarot"
      >
        <div className="relative overflow-hidden rounded-[40px] border border-gold/20 bg-plum/40 px-8 py-12 sm:px-10 lg:px-14">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-placeholder.svg"
          >
            <source src="/videos/hero-smoke.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-plum/55" aria-hidden="true" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">
                Tarotista colombiana en Madrid
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Tu destino no está escrito en piedra, está escrito en tu energía
              </h1>
              <p className="max-w-xl text-base text-ivory/80">
                ¡Desbloquea tu camino hoy! Tarot medieval, guía espiritual y claridad real para amor, trabajo y camino
                personal. Atención presencial y por videollamada.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTAButton href={whatsappGeneral} size="lg">
                  Reserva tu Lectura
                </CTAButton>
                <CTAButton href="#servicios" variant="secondary" size="lg">
                  Ver servicios
                </CTAButton>
              </div>
            </div>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-[36px] border border-gold/20">
              <Image
                src="/images/hero-placeholder.svg"
                alt="Lectura de tarot premium"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
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
              Samanda | Tarot y Guía Espiritual
            </p>
            <h2 className="text-3xl font-semibold text-plum">
              Transformemos juntos la incertidumbre en paz
            </h2>
            <p className="text-sm text-olive/80">
              Soy Samanda, tarotista colombiana dedicada a iluminar tu camino. Ya sea en mi consulta presencial en
              Madrid o mediante videollamada, trabajaremos para despejar tus dudas y encontrar las respuestas que tu
              futuro reserva para ti.
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

      <section className="bg-gold/40 px-6 py-6 text-center sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs uppercase tracking-[0.4em] text-plum">
            <a href="/tv" className="hover:text-plum/70">
              Iberoamérica TV - todos los días 20:30 (hora española)
            </a>
          </p>
        </div>
      </section>

      <Section ariaLabel="Tarot gratis">
        <TarotWidget />
      </Section>

      <Section id="servicios" ariaLabel="Servicios principales">
        <div className="space-y-8">
          <div className="flex flex-col gap-3">
            <p className="text-s uppercase tracking-[0.7em] text-yellow-700">Servicios principales</p>
            <h2 className="text-3xl font-semibold text-plum">
              Lecturas y rituales para guiar tu camino
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-gold/70 bg-ivory px-8 py-8 shadow-[0_18px_40px_-32px_rgba(43,28,47,0.35)]">
              <p className="text-s uppercase tracking-[0.4em] text-yellow-700">
                Lectura del Tarot Presencial en Madrid
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-plum italic">
                Una sesión honesta para entender tu presente y diseñar tu futuro
              </h3>
              <p className="mt-4 text-sm text-olive/80">
                No es adivinación, es una hoja de ruta. Nos sentamos frente a frente en mi espacio en Madrid para
                desgranar tus dudas sobre amor, trabajo o propósito con total transparencia.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton href={whatsappPresencial} size="sm">
                  Reservar mi sesión presencial
                </CTAButton>
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.25em] text-olive/60">
                Aviso: Mis servicios son un acompañamiento espiritual; no sustituyen tratamientos médicos o psicológicos
                profesionalizados
              </p>
            </div>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-gold/20">
              <Image
                src="/images/service-placeholder.svg"
                alt="Sesión presencial de tarot"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {primaryServices.map((service) => (
              <ServiceCard key={service.id} item={service} />
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-olive/60">
            Aviso: Mis servicios son un acompañamiento espiritual; no sustituyen tratamientos médicos o psicológicos
            profesionalizados
          </p>
        </div>
      </Section>

      <Section ariaLabel="Rituales energéticos">
        <div className="rounded-3xl border border-gold/70 bg-ivory px-6 py-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-s uppercase tracking-[0.4em] text-yellow-700">Rituales energéticos</p>
              <h2 className="text-3xl font-semibold text-plum">Encuentra el ritual ideal</h2>
              <p className="mt-3 text-sm text-olive/80">
                Encuentra los diferentes rituales que te ofrezco: lectura de velas, endulzamiento, baños de purificación
                y limpieza espiritual. Elige el que más resuene contigo.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton href={whatsappRitual} variant="secondary" size="sm">
                No sé cuál elegir
              </CTAButton>
              <CTAButton href={whatsappRitualRequest} size="md">
                Solicitar mi ritual
              </CTAButton>
            </div>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-130 border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gold/20 text-xs uppercase tracking-[0.3em] text-olive/70">
                  <th className="py-3">Ritual</th>
                  <th className="py-3">¿Para qué sirve?</th>
                  <th className="py-3">Resultado esperado</th>
                </tr>
              </thead>
              <tbody>
                {rituals.map((ritual) => (
                  <tr key={ritual.ritual} className="border-b border-gold/10">
                    <td className="py-4 font-semibold text-plum">{ritual.ritual}</td>
                    <td className="py-4 text-olive/80">{ritual.purpose}</td>
                    <td className="py-4 text-olive/80">{ritual.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-olive/60">
            Aviso: Mis servicios son un acompañamiento espiritual; no sustituyen tratamientos médicos o psicológicos
            profesionalizados
          </p>
        </div>
      </Section>

      <Section ariaLabel="Amuletos destacados">
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-yellow-700">Amuletos destacados</p>
            <h2 className="text-3xl font-semibold text-plum">Piezas consagradas para tu protección</h2>
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
