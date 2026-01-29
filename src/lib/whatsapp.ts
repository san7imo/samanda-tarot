const WHATSAPP_NUMBER = "34651543179";

export const buildWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
