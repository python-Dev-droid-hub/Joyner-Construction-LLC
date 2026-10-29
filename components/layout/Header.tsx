"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { navLinks, site } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    // Move keyboard focus into the open panel
    requestAnimationFrame(() => firstLinkRef.current?.focus());

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled || open
          ? "bg-charcoal/95 shadow-[0_1px_0_rgba(243,237,227,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-5 md:h-[4.75rem] md:px-8">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
          onClick={closeMenu}
        >
          {/* Plain img: black logo on transparent; invert for dark header */}
          <img
            src="/logo.png"
            alt={`${site.businessName} logo`}
            width={160}
            height={64}
            className="block h-9 w-auto object-contain object-left invert md:h-10"
          />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const isServingAreas = link.href === "/serving-areas";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isServingAreas
                    ? "nav-serving-areas text-[0.7rem] font-semibold uppercase tracking-[0.2em] hover:bg-ivory/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
                    : "text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ivory/80 transition-colors hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/#contact" variant="primary" className="min-h-10 px-5">
            Request an Estimate
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center text-ivory lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`block h-px bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id={menuId}
        className={`border-t border-ivory/10 bg-charcoal lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6"
          aria-label="Mobile"
        >
          {navLinks.map((link, index) => {
            const isServingAreas = link.href === "/serving-areas";
            return (
              <Link
                key={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={closeMenu}
                className={
                  isServingAreas
                    ? "nav-serving-areas my-1 w-fit text-sm font-semibold uppercase tracking-[0.18em] hover:bg-ivory/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
                    : "px-2 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ivory/90 transition-colors hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-4 px-2">
            <Button
              href="/#contact"
              variant="primary"
              className="w-full"
              onClick={closeMenu}
            >
              Request an Estimate
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
