import type { CatalogItem } from "@/data/catalog";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/format";
import { CTAButton } from "@/components/CTAButton";
import Image from "next/image";

type ServiceCardProps = {
  item: CatalogItem;
};

export function ServiceCard({ item }: ServiceCardProps) {
  const preference = item.modality ? `Preferencia: ${item.modality}. ` : "";
  const whatsappLink = buildWhatsAppUrl(
    `Hola Samanda, quiero reservar: ${item.name}. Precio: ${item.price} EUR. Cantidad: 1. ${preference}Gracias.`
  );

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-gold/70 bg-ivory shadow-[0_18px_40px_-30px_rgba(43,28,47,0.4)]">
      <div className="relative aspect-4/3 w-full bg-plum/5">
        <Image
          src={item.images[0]}
          alt={item.name}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex h-full flex-col gap-4 px-6 py-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-700">Servicio</p>
          <h3 className="text-xl font-semibold text-plum">{item.name}</h3>
          <p className="text-sm text-olive/80">{item.shortDesc}</p>
        </div>
        <div className="mt-auto flex flex-col gap-3">
          <p className="text-lg font-semibold text-plum">
            {formatPrice(item.price, item.currency)}
          </p>
          <div className="flex flex-wrap gap-3">
            <CTAButton href={`/tienda/${item.slug}`} variant="secondary" size="sm">
              Ver detalles
            </CTAButton>
            <CTAButton href={whatsappLink} size="sm">
              Reservar por WhatsApp
            </CTAButton>
          </div>
        </div>
      </div>
    </article>
  );
}
