"use client";

import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { ContactMap } from "@/components/sections/ContactMap";
import type { LandingPageContent } from "@/content/landing";
import { contactContent, site } from "@/content/site";
import { useReveal } from "@/hooks/useReveal";

type ContactProps = {
  content?: LandingPageContent["contact"];
};

export function Contact({ content }: ContactProps = {}) {
  const ref = useRef<HTMLElement>(null);
  useReveal({ scope: ref, stagger: 0.08, id: "reveal-contact" });

  const eyebrow = content?.eyebrow ?? contactContent.eyebrow;
  const title = content?.title ?? contactContent.title;
  const description = content?.description ?? contactContent.description;
  const servingLabel = content?.servingLabel ?? site.locationShort;
  const map = content?.map ?? contactContent.map;

  const details = [
    {
      label: "Phone",
      value: site.phone,
      href: site.phoneHref,
      icon: Phone,
    },
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: Mail,
    },
    {
      label: "Serving area",
      value: servingLabel,
      icon: MapPin,
    },
  ] as const;

  return (
    <section
      id="contact"
      ref={ref}
      className="scroll-mt-24 border-t border-charcoal/10 bg-ivory px-5 py-14 text-charcoal md:px-8 md:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="max-w-2xl">
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-copper">
            {eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="font-display text-[clamp(1.85rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-charcoal"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-ink md:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-12 lg:items-stretch lg:gap-6">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <aside
              data-reveal
              className="border border-charcoal/10 bg-white p-6 md:p-7"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-stone">
                Business contact
              </p>
              <dl className="mt-6 space-y-5">
                {details.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-3">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center border border-charcoal/10 bg-ivory text-copper">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-sm leading-snug text-charcoal md:text-base">
                          {"href" in item && item.href ? (
                            <a
                              href={item.href}
                              className="underline decoration-copper/50 underline-offset-4 transition-colors hover:decoration-copper"
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </aside>

            <div data-reveal className="min-h-[20rem] flex-1">
              <ContactMap
                map={map}
                title={`Map of service area in ${map.zoomLabel}`}
              />
            </div>
          </div>

          <div
            data-reveal
            className="relative border border-charcoal/10 bg-white p-6 md:p-8 lg:col-span-7"
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/50 to-transparent"
              aria-hidden="true"
            />
            <div className="mb-6">
              <p className="font-display text-2xl font-semibold tracking-tight text-charcoal md:text-3xl">
                Let&apos;s Talk!
              </p>
              <p className="mt-2 text-sm text-stone-ink">
                Share project details — we follow up on the contact info you
                provide.
              </p>
            </div>
            <EstimateForm />
          </div>
        </div>
      </div>
    </section>
  );
}
