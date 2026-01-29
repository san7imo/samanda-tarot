import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const whatsappLink = buildWhatsAppUrl(
    "Hola Samanda, quiero información sobre una lectura."
  );

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-plum shadow-[0_12px_30px_-12px_rgba(244,195,137,0.8)] transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
      aria-label="Abrir WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 0.8 0.8-2.9-.2-.3A8 8 0 1 1 20 12a8 8 0 0 1-8 8zm4.5-6.1c-.2-.1-1.4-.7-1.6-.7s-.4-.1-.6.1-.7.7-.8.8-.3.2-.6.1a6.5 6.5 0 0 1-1.9-1.1 7.2 7.2 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.4-.4c.2-.2.2-.3.3-.5s0-.4 0-.6-.6-1.4-.8-1.9-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2 5.1 5.1 0 0 0 1.1 2.6 11.7 11.7 0 0 0 4.5 4.1 5.2 5.2 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6-.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.2-.2-.5-.3z" />
      </svg>
    </a>
  );
}
