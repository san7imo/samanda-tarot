import type { Metadata } from "next";

import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Samanda Tarotista Colombiana para agendar lecturas presenciales o por videollamada.",
  openGraph: {
    title: "Contacto | Samanda Tarotista Colombiana",
    description:
      "Contacta con Samanda Tarotista Colombiana para agendar lecturas presenciales o por videollamada.",
    url: "https://samandatarotistacolombiana.com/contacto",
  },
};

export default function ContactoPage() {
  const whatsappLink = buildWhatsAppUrl(
    "Hola Samanda, quiero reservar una lectura o servicio."
  );

  return (
    <>
      <Section className="bg-plum text-ivory" ariaLabel="Contacto hero">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Contacto</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Hablemos de tu consulta</h1>
          <p className="max-w-2xl text-base text-ivory/80">
            Agenda tu sesión presencial en Madrid o conecta por videollamada. Respuesta rápida por WhatsApp.
          </p>
          <CTAButton href={whatsappLink} size="lg">
            Reservar por WhatsApp
          </CTAButton>
        </div>
      </Section>

      <Section ariaLabel="Datos de contacto">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-gold/20 bg-ivory px-6 py-8">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Formulario de contacto</p>
            <p className="mt-3 text-sm text-olive/80">
              Completa este formulario y te respondo con la mayor brevedad posible.
            </p>
            <form className="mt-6 space-y-4">
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-olive/70">
                Nombre
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  className="rounded-full border border-gold/40 bg-transparent px-4 py-3 text-sm text-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-olive/70">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  className="rounded-full border border-gold/40 bg-transparent px-4 py-3 text-sm text-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-olive/70">
                Tema
                <input
                  type="text"
                  name="subject"
                  placeholder="Lectura, ritual, amuleto..."
                  className="rounded-full border border-gold/40 bg-transparent px-4 py-3 text-sm text-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                />
              </label>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-olive/70">
                Mensaje
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Cuéntame tu situación con calma."
                  className="rounded-3xl border border-gold/40 bg-transparent px-4 py-3 text-sm text-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  required
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-plum transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(244,195,137,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-gold/20 bg-ivory px-6 py-8">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Información directa</p>
              <div className="mt-4 space-y-3 text-sm text-olive/80">
                <p>Dirección: P.º de Sta. María de la Cabeza, 4, 28045 Madrid (bajo izquierda)</p>
                <p>
                  Fijo:{" "}
                  <a href="tel:+34915395850" className="text-plum hover:text-gold">
                    +34 91 539 58 50
                  </a>
                </p>
                <p>
                  WhatsApp:{" "}
                  <a href={whatsappLink} className="text-plum hover:text-gold">
                    +34 651 543 179
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:contacto@samandatarotistacolombiana.com"
                    className="text-plum hover:text-gold"
                  >
                    contacto@samandatarotistacolombiana.com
                  </a>
                </p>
                <p>Horario: Lunes a domingo, 10:00 - 21:30 (placeholder)</p>
              </div>
            </div>

            <div className="rounded-3xl border border-gold/20 bg-ivory px-6 py-8">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Redes sociales</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-olive/80">
                <a
                  href="https://instagram.com"
                  className="flex items-center gap-3 rounded-2xl border border-gold/20 px-4 py-3 text-plum hover:border-gold hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 9.5zM18 6.7a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  className="flex items-center gap-3 rounded-2xl border border-gold/20 px-4 py-3 text-plum hover:border-gold hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h2v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://tiktok.com"
                  className="flex items-center gap-3 rounded-2xl border border-gold/20 px-4 py-3 text-plum hover:border-gold hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M16 3a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.7V15a5 5 0 1 1-5-5c.3 0 .7 0 1 .1V13a2 2 0 1 0 2 2V3h2z" />
                  </svg>
                  TikTok
                </a>
                <a
                  href="https://youtube.com"
                  className="flex items-center gap-3 rounded-2xl border border-gold/20 px-4 py-3 text-plum hover:border-gold hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
