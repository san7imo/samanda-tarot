import type { Metadata } from "next";
import Image from "next/image";

import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { Accordion } from "@/components/Accordion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Samanda",
  description:
    "Conoce la historia, enfoque y valores de Samanda Tarotista Colombiana. Consultas presenciales y online.",
  openGraph: {
    title: "Samanda Tarotista Colombiana",
    description:
      "Historia, enfoque y valores de Samanda Tarotista Colombiana. Consultas presenciales y online.",
    url: "https://samandatarotistacolombiana.com/samanda",
  },
};

const steps = [
  {
    title: "Consulta",
    description: "Escuchamos tu intención con calma y abrimos el espacio ritual.",
  },
  {
    title: "Interpretación",
    description: "Lectura clara para comprender lo que está sucediendo en tu camino.",
  },
  {
    title: "Recomendación",
    description: "Guía práctica y, si aplica, rituales o acciones para avanzar.",
  },
];

const values = [
  "Confidencialidad",
  "Respeto profundo",
  "Claridad sin juicios",
  "Acompañamiento consciente",
];

const faqItems = [
  {
    title: "¿Presencial o videollamada?",
    content:
      "Ambas modalidades están disponibles. Elegimos la que mejor se adapte a tu situación.",
  },
  {
    title: "¿Cuánto dura una lectura?",
    content:
      "Entre 50 y 70 minutos, dependiendo de la profundidad de la consulta.",
  },
  {
    title: "¿Qué necesito preparar?",
    content:
      "Una intención clara, un espacio tranquilo y apertura para recibir guía.",
  },
  {
    title: "Políticas de cancelación",
    content:
      "Aviso con 24 horas de antelación. Reprogramaciones sujetas a disponibilidad (placeholder).",
  },
];

export default function SamandaPage() {
  const whatsappLink = buildWhatsAppUrl(
    "Hola Samanda, quiero reservar una lectura personalizada."
  );

  return (
    <>
      <Section className="bg-plum text-ivory" ariaLabel="Samanda hero">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-4xl border border-gold/20">
            <Image
              src="/images/samanda-portrait-placeholder.svg"
              alt="Retrato de Samanda Tarotista Colombiana"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">
              Samanda - Tarotista Colombiana
            </p>
            <h1 className="text-4xl font-semibold sm:text-5xl">
              El alma del proyecto
            </h1>
            <p className="text-base text-ivory/80">
              Tarot medieval, guía espiritual y acompañamiento consciente. Atención presencial en Madrid y sesiones por
              videollamada para todo el mundo.
            </p>
            <CTAButton href={whatsappLink} size="lg">
              Reserva tu lectura
            </CTAButton>
          </div>
        </div>
      </Section>

      <Section ariaLabel="Historia y enfoque">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-s uppercase tracking-[0.4em] text-yellow-700">Historia y enfoque</p>
            <h2 className="text-3xl font-semibold text-plum">Tarot medieval con una mirada espiritual moderna</h2>
            <p className="text-sm text-olive/80">
              Samanda integra tradición, intuición y escucha profunda. Cada sesión busca claridad, responsabilidad
              emocional y guía práctica para que tomes decisiones con confianza.
            </p>
            <p className="text-sm text-olive/80">
              La experiencia se diseña a medida: puedes asistir en Madrid o conectar por videollamada sin perder la
              profundidad del ritual.
            </p>
          </div>
          <div className="rounded-3xl border border-gold/70 bg-ivory px-6 py-6 shadow-[0_18px_40px_-32px_rgba(43,28,47,0.35)]">
            <p className="text-s uppercase tracking-[0.3em] text-yellow-700">Valores</p>
            <ul className="mt-4 space-y-3 text-sm text-olive/80">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section ariaLabel="Método de trabajo">
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-s uppercase tracking-[0.4em] text-yellow-700">Método de trabajo</p>
            <h2 className="text-3xl font-semibold text-plum">Un proceso claro, íntimo y respetuoso</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-gold/70 bg-ivory px-6 py-8 shadow-[0_18px_40px_-32px_rgba(43,28,47,0.35)]"
              >
                <h3 className="text-2xl font-semibold text-plum">{step.title}</h3>
                <p className="mt-3 text-sm text-olive/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section ariaLabel="Llamado a la acción">
        <div className="rounded-3xl border border-gold/70 bg-plum px-8 py-10 text-ivory">
          <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Reserva hoy</p>
              <h2 className="text-3xl font-semibold">Déjate guiar con claridad y respeto</h2>
            </div>
            <CTAButton href={whatsappLink} size="lg">
              Hablar con Samanda
            </CTAButton>
          </div>
        </div>
      </Section>

      <Section ariaLabel="Preguntas frecuentes">
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-s uppercase tracking-[0.4em] text-yellow-700">FAQ</p>
            <h2 className="text-3xl font-semibold text-plum">Respuestas rápidas</h2>
          </div>
          <Accordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}
