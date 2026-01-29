"use client";

import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.title}
            className="rounded-2xl border border-gold/20 bg-ivory/80 px-6 py-4"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-plum">
                {item.title}
              </span>
              <span className="text-gold">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? (
              <p className="mt-3 text-sm text-olive/80">{item.content}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
