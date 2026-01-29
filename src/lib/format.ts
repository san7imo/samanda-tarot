export const formatPrice = (value: number, currency: string = "EUR") => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
};
