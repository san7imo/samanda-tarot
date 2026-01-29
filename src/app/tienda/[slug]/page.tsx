import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section } from "@/components/Section";
import { ProductDetailClient } from "@/components/ProductDetailClient";
import { catalog } from "@/data/catalog";

export const dynamicParams = false;

export function generateStaticParams() {
  return catalog.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = catalog.find((entry) => entry.slug === params.slug);

  if (!item) {
    return {
      title: "Producto no encontrado",
      description: "El producto solicitado no está disponible.",
    };
  }

  return {
    title: item.name,
    description: item.shortDesc,
    openGraph: {
      title: item.name,
      description: item.shortDesc,
      url: `https://samandatarotistacolombiana.com/tienda/${item.slug}`,
    },
  };
}

export default function TiendaDetailPage({ params }: { params: { slug: string } }) {
  const item = catalog.find((entry) => entry.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <Section ariaLabel={`Detalle ${item.name}`}>
      <ProductDetailClient item={item} />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-gold/20 bg-ivory px-6 py-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Beneficios</p>
          <ul className="mt-4 space-y-2 text-sm text-olive/80">
            {item.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-gold/20 bg-ivory px-6 py-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">FAQ rápido</p>
          <div className="mt-4 space-y-3 text-sm text-olive/80">
            {(item.faq ?? [
              {
                q: "¿Cómo reservo?",
                a: "Reserva por WhatsApp con el botón de compra.",
              },
              {
                q: "¿Qué incluye?",
                a: "Incluye guía y seguimiento básico según el servicio o producto.",
              },
            ]).map((entry) => (
              <div key={entry.q}>
                <p className="font-semibold text-plum">{entry.q}</p>
                <p>{entry.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
