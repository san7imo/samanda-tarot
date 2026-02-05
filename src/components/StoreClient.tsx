"use client";

import { useMemo, useState } from "react";

import { ProductCard } from "@/components/ProductCard";
import { catalog } from "@/data/catalog";

const categoryOptions = (() => {
  const order = ["Servicios", "Amuletos", "Velas", "Rituales"] as const;
  const list = order.filter((value) =>
    catalog.some((item) => item.category === value)
  );
  return ["Todos", ...list];
})();

export function StoreClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");

  const filteredItems = useMemo(() => {
    return catalog.filter((item) => {
      const matchesCategory = category === "Todos" || item.category === category;
      const matchesQuery = `${item.name} ${item.shortDesc} ${item.tags.join(" ")}`
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-3xl border border-gold/70 bg-ivory px-6 py-6 md:grid-cols-[1fr_auto] md:items-center">
        <label className="flex flex-col gap-2 text-s uppercase tracking-[0.3em] text-yellow-700">
          Buscar
          <input
            type="search"
            placeholder="Buscar por nombre, beneficio o etiqueta"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="rounded-full border border-gold/40 bg-transparent px-4 py-2 text-sm text-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Buscar productos o servicios"
          />
        </label>

        <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-yellow-700">
          Categoría
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-full border border-gold/40 bg-transparent px-4 py-2 text-sm text-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            {categoryOptions.map((item) => (
              <option key={item} value={item} className="text-olive">
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className="rounded-3xl border border-gold/20 bg-ivory px-6 py-10 text-center text-sm text-olive/80">
          No encontramos resultados. Ajusta tu búsqueda o categoría.
        </div>
      ) : null}
    </div>
  );
}
