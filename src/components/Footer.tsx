import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-plum px-6 py-12 text-ivory sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Samanda Tarot - El ojo que todo lo ve.</p>
          <p className="text-sm text-ivory/80">
            Atención presencial en Madrid y sesiones por videollamada.
          </p>
          <div className="space-y-2 text-sm text-ivory/80">
            <p>Dirección: P.º de Sta. María de la Cabeza, 4, 28045 Madrid (bajo izquierda)</p>
            <p>Fijo: +34 91 539 58 50</p>
            <p>WhatsApp: +34 651 543 179</p>
          </div>
        </div>

        <div className="space-y-3 text-sm uppercase tracking-[0.2em] text-ivory/70">
          <p className="text-gold">Navegación</p>
          <Link href="/" className="block hover:text-gold">
            Home
          </Link>
          <Link href="/samanda" className="block hover:text-gold">
            Samanda
          </Link>
          <Link href="/tienda" className="block hover:text-gold">
            Tienda
          </Link>
          <Link href="/contacto" className="block hover:text-gold">
            Contacto
          </Link>
        </div>

        <div className="space-y-3 text-sm text-ivory/70">
          <p className="text-sm uppercase tracking-[0.2em] text-gold">Legal</p>
          <p>Acompañamiento espiritual; no sustituye tratamientos médicos o psicológicos.</p>
          <div className="space-y-2 text-xs uppercase tracking-[0.25em]">
            <Link href="/legal" className="block hover:text-gold">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="block hover:text-gold">
              Política de privacidad
            </Link>
            <Link href="/cookies" className="block hover:text-gold">
              Cookies
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-3 border-t border-gold/10 pt-6 text-xs uppercase tracking-[0.3em] text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
        <span>(c) 2026 Samanda Tarot - El ojo que todo lo ve</span>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  );
}
