"use client";

import { useState } from "react";

import { CTAButton } from "@/components/CTAButton";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type TarotCard = {
  name: string;
  message: string;
};

const tarotCards: TarotCard[] = [
  {
    name: "El Oráculo del Alba",
    message:
      "Tienes todos los recursos para ganar. Deja de buscar fuera lo que ya tienes dentro. Actúa.",
  },
  { name: "La Torre de Bruma", message: "Lo que se mueve ahora limpia el camino futuro." },
  { name: "La Rosa de Fuego", message: "El amor pide valentía; la claridad llega con un gesto." },
  { name: "El Guardián del Norte", message: "Protege tu energía y avanza con calma consciente." },
  { name: "La Estrella Oscura", message: "Tu deseo es legítimo; ordénalo con intención." },
  { name: "El Espejo de Marfil", message: "No busques fuera lo que ya brilla dentro." },
  { name: "La Corona de Humo", message: "La paciencia alinea todo lo que hoy parece confuso." },
  { name: "El Portal Carmesí", message: "Una decisión firme abre un nuevo ciclo." },
  { name: "El Círculo Sagrado", message: "La energía se equilibra cuando pones límites." },
  { name: "La Luna Serpentina", message: "Confía en los tiempos; lo invisible trabaja para ti." },
  { name: "El Camino Dorado", message: "La prosperidad responde al foco y la acción constante." },
  { name: "La Voz del Río", message: "Deja fluir, pero guía el rumbo con claridad." },
];

export function TarotWidget() {
  const [current, setCurrent] = useState<TarotCard | null>(null);
  const [revealKey, setRevealKey] = useState(0);
  const whatsappLink = buildWhatsAppUrl(
    "Hola Samanda, quiero profundizar en una consulta de tarot."
  );

  const revealCard = () => {
    const next = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    setCurrent(next);
    setRevealKey((prev) => prev + 1);
  };

  return (
    <div className="rounded-3xl border border-gold/20 bg-plum/95 p-8 text-ivory shadow-[0_24px_50px_-32px_rgba(43,28,47,0.6)]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Tarot gratis</p>
          <h3 className="text-2xl font-semibold text-ivory">¿Qué necesitas escuchar hoy?</h3>
          <p className="max-w-xl text-sm text-ivory/80">
            Cierra los ojos, respira y pulsa el botón. Recibe un consejo breve para tu momento actual.
          </p>
          <a
            href="/tv"
            className="inline-flex text-xs uppercase tracking-[0.3em] text-gold/80 hover:text-gold"
          >
            Iberoamérica TV - acceso al programa de Samanda (placeholder)
          </a>
        </div>
        <button
          type="button"
          onClick={revealCard}
          className="rounded-full border border-gold/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold transition hover:bg-gold/10"
        >
          Recibir mi consejo
        </button>
      </div>

      <div className="mt-8 grid gap-6 rounded-3xl border border-gold/20 bg-plum/70 p-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div key={revealKey} className={current ? "fade-in" : ""}>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Carta revelada</p>
          <h4 className="mt-2 text-2xl font-semibold text-ivory">
            {current ? current.name : "Aún no has revelado una carta"}
          </h4>
          <p className="mt-3 text-sm text-ivory/80">
            {current ? current.message : "Pulsa el botón para recibir un mensaje breve."}
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-3 lg:items-end lg:justify-center">
          <p className="text-sm text-ivory/80">¿Quieres profundizar en tu lectura?</p>
          <CTAButton href={whatsappLink} size="sm">
            Reserva una consulta
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
