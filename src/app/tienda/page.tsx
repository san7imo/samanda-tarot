import type { Metadata } from "next";

import { Section } from "@/components/Section";
import { StoreClient } from "@/components/StoreClient";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Catálogo de servicios, rituales y amuletos consagrados de Samanda Tarotista Colombiana.",
  openGraph: {
    title: "Tienda | Samanda Tarotista Colombiana",
    description:
      "Catálogo de servicios, rituales y amuletos consagrados de Samanda Tarotista Colombiana.",
    url: "https://samandatarotistacolombiana.com/tienda",
  },
};

export default function TiendaPage() {
  return (
    <>
      <Section className="bg-ivory" ariaLabel="Header tienda">
        <div className="rounded-3xl border border-gold/70 bg-gold/10 px-8 py-10">
          <p className="text-s uppercase tracking-[0.4em] text-yellow-700">Tienda</p>
          <h1 className="mt-3 text-4xl font-semibold text-plum sm:text-5xl">
            Amuletos, velas y servicios
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-olive/80">
            Explora el catálogo completo. Cada producto y servicio está pensado para acompañarte con claridad y
            protección.
          </p>
        </div>
      </Section>

      <Section ariaLabel="Catálogo">
        <StoreClient />
      </Section>

      <Section ariaLabel="Banner tienda">
        <div className="rounded-3xl border border-gold/70 bg-plum px-8 py-10 text-ivory">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Próximamente</p>
          <h2 className="mt-3 text-3xl font-semibold">
            Checkout profesional próximamente en shop.samandatarotistacolombiana.com
          </h2>
        </div>
      </Section>
    </>
  );
}
