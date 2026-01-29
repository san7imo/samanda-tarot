"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import type { CatalogItem } from "@/data/catalog";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/format";
import { CTAButton } from "@/components/CTAButton";

type Modality = "Presencial" | "Videollamada";

const getDefaultModality = (item: CatalogItem): Modality => {
  if (item.modality === "Presencial y videollamada") {
    return "Presencial";
  }
  if (item.modality === "Videollamada") {
    return "Videollamada";
  }
  return "Presencial";
};

export function ProductDetailClient({ item }: { item: CatalogItem }) {
  const [qty, setQty] = useState(1);
  const [modality, setModality] = useState<Modality>(getDefaultModality(item));

  const preference = item.type === "service" ? `Preferencia: ${modality}. ` : "";

  const whatsappLink = useMemo(() => {
    const message = `Hola Samanda, quiero comprar: ${item.name}. Precio: ${item.price} EUR. Cantidad: ${qty}. ${preference}Gracias.`;
    return buildWhatsAppUrl(message);
  }, [item.name, item.price, preference, qty]);

  const modalityOptions = useMemo<Modality[]>(() => {
    if (item.type !== "service") {
      return [];
    }
    if (item.modality === "Presencial y videollamada") {
      return ["Presencial", "Videollamada"];
    }
    if (item.modality === "Videollamada") {
      return ["Videollamada"];
    }
    if (item.modality === "Presencial") {
      return ["Presencial"];
    }
    return ["Presencial", "Videollamada"];
  }, [item]);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-gold/20 bg-ivory">
        <Image
          src={item.images[0]}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            {item.category}
          </p>
          <h1 className="text-3xl font-semibold text-plum sm:text-4xl">
            {item.name}
          </h1>
          <p className="text-base text-olive/80">{item.longDesc}</p>
          <p className="text-2xl font-semibold text-plum">
            {formatPrice(item.price, item.currency)}
          </p>
        </div>

        <div className="space-y-4">
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-olive/70">
            Cantidad
            <input
              type="number"
              min={1}
              value={qty}
              onChange={(event) => {
                const value = Number(event.target.value);
                setQty(Number.isNaN(value) ? 1 : Math.max(1, value));
              }}
              className="w-28 rounded-full border border-gold/40 bg-transparent px-4 py-2 text-sm text-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            />
          </label>

          {item.type === "service" ? (
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-olive/70">
              Modalidad
              <select
                value={modality}
                onChange={(event) =>
                  setModality(event.target.value as Modality)
                }
                className="w-full rounded-full border border-gold/40 bg-transparent px-4 py-2 text-sm text-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {modalityOptions.map((option) => (
                  <option key={option} value={option} className="text-olive">
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
        </div>

        <CTAButton href={whatsappLink} size="lg">
          Comprar por WhatsApp
        </CTAButton>
      </div>
    </div>
  );
}
