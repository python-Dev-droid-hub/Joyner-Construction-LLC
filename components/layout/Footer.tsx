import Link from "next/link";
import { areas } from "@/content/pages";
import { footerLinks, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_0.85fr_0.95fr] md:px-8 md:py-14">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-block">
            <img
              src="/logo.png"
              alt={`${site.businessName} logo`}
              width={160}
              height={64}
              className="block h-14 w-auto object-contain object-left invert md:h-16"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/65">
            Residential framing for homes and home projects in{" "}
            {site.locationShort}. Structure first—built with care and clear
            communication.
          </p>
        </div>

        <div>
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-ivory">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ivory/75 transition-colors hover:text-ivory"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-ivory">
            Serving areas
          </p>
          <ul className="mt-4 space-y-2">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/serving-areas#${area.slug}`}
                  className="text-sm text-ivory/75 transition-colors hover:text-ivory"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-ivory">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-ivory/75">
            <li>
              <a
                href={site.phoneHref}
                className="transition-colors hover:text-ivory"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-ivory"
              >
                {site.email}
              </a>
            </li>
            <li>
              {site.hoursShort} ({site.hoursTimezoneLabel})
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10 px-5 py-5 md:px-8">
        <p className="mx-auto max-w-7xl text-xs text-ivory/40">
          © {site.copyrightYear} {site.businessName}. All rights reserved.
          Developed and designed by{" "}
          <a
            href="https://usbrandbooster.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ivory/55 underline decoration-ivory/25 underline-offset-2 transition-colors hover:text-ivory hover:decoration-ivory/50"
          >
            US Brand Booster LLC
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
