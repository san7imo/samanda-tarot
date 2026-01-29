"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "@/assets/logos/logoHorizontal.png";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { CTAButton } from "@/components/CTAButton";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Samanda", href: "/samanda" },
  { label: "Tienda", href: "/tienda" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = buildWhatsAppUrl(
    "Hola Samanda, quiero información sobre una lectura."
  );

  return (
    <header className="sticky top-0 z-40 border-b border-gold/10 bg-plum/95 backdrop-blur">
      <div className="hidden border-b border-gold/10 bg-plum/90 text-xs uppercase tracking-[0.3em] text-ivory/70 lg:block">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2 sm:px-10 lg:px-16">
          <span className="max-w-[55%] truncate">
            Presencial Madrid + videollamada - P.º de Sta. María de la Cabeza, 4, 28045 Madrid (bajo izquierda)
          </span>
          <span>Fijo +34 91 539 58 50 - WhatsApp +34 651 543 179</span>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="Samanda Tarotista Colombiana"
            width={140}
            height={60}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.2em] text-ivory/80 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <CTAButton href={whatsappLink} size="sm">
            Reserva tu lectura
          </CTAButton>
        </div>

        <button
          type="button"
          className="rounded-full border border-gold/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Abrir menú"
        >
          Menú
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-gold/10 bg-plum px-6 py-6 sm:px-10 lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-[0.2em] text-ivory/80">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-gold"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <CTAButton href={whatsappLink} size="sm" className="w-fit">
              Reserva tu lectura
            </CTAButton>
            <div className="pt-4 text-xs uppercase tracking-[0.3em] text-ivory/60">
              <p>Madrid + videollamada</p>
              <p>P.º de Sta. María de la Cabeza, 4, 28045 Madrid (bajo izquierda)</p>
              <p>Fijo +34 91 539 58 50 - WhatsApp +34 651 543 179</p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
