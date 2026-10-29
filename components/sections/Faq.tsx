"use client";

import Image from "next/image";
import { useState } from "react";
import type { LandingPageContent } from "@/content/landing";
import { faqContent } from "@/content/site";

type FaqProps = {
  content?: LandingPageContent["faq"];
};

export function Faq({ content }: FaqProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const data = content ?? {
    eyebrow: faqContent.eyebrow,
    title: faqContent.title,
    description: faqContent.description,
    image: faqContent.image,
    items: [...faqContent.items],
  };

  return (
    <section
      id="faqs"
      className="scroll-mt-24 border-t border-charcoal/10 bg-ivory text-charcoal"
      aria-labelledby="faq-heading"
    >
      <div className="relative h-[52vh] min-h-[18rem] overflow-hidden lg:hidden">
        <Image
          src={data.image.src}
          alt={data.image.alt}
          fill
          sizes="100vw"
          className="object-cover object-center contrast-[1.04] saturate-[1.08]"
          priority={false}
        />
        <p className="absolute bottom-5 left-5 rounded-full border border-charcoal/10 bg-ivory/90 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-charcoal shadow-sm backdrop-blur-sm">
          {data.image.caption}
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:items-stretch">
        <aside className="relative hidden min-h-full lg:block">
          <div className="sticky top-0 h-svh w-full overflow-hidden">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              sizes="50vw"
              className="object-cover object-center contrast-[1.04] saturate-[1.08]"
              priority={false}
            />
            <div className="absolute inset-x-0 bottom-0 p-8 xl:p-10">
              <p className="inline-flex rounded-full border border-charcoal/10 bg-ivory/90 px-4 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-charcoal shadow-sm backdrop-blur-sm">
                {data.image.caption}
              </p>
            </div>
          </div>
        </aside>

        <div className="flex flex-col justify-center px-5 py-12 md:px-10 md:py-14 lg:px-12 lg:py-16 xl:px-14">
          <div className="mx-auto w-full max-w-xl">
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-copper">
              {data.eyebrow}
            </p>
            <h2
              id="faq-heading"
              className="max-w-lg font-display text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-charcoal"
            >
              {data.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-stone-ink">
              {data.description}
            </p>

            <div className="mt-10 divide-y divide-charcoal/10 border-y border-charcoal/10">
              {data.items.map((item, index) => {
                const open = openIndex === index;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;

                return (
                  <div key={item.question}>
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={open}
                        aria-controls={panelId}
                        className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
                        onClick={() => setOpenIndex(open ? null : index)}
                      >
                        <span className="font-display text-lg font-semibold tracking-tight text-charcoal md:text-xl">
                          {item.question}
                        </span>
                        <span
                          className={`mt-1 shrink-0 text-copper transition-transform duration-300 ${
                            open ? "rotate-45" : ""
                          }`}
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!open}
                      className="pb-6 pr-8"
                    >
                      <p className="text-base leading-relaxed text-stone-ink">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
