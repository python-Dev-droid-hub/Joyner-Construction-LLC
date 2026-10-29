import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";
import { Reviews } from "@/components/sections/Reviews";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Services } from "@/components/sections/Services";
import type { LandingPageContent } from "@/content/landing";

type LandingSectionsProps = {
  content?: LandingPageContent;
};

/** Shared below-the-fold sections used on home and service × area pages. */
export function LandingSections({ content }: LandingSectionsProps = {}) {
  return (
    <>
      <About content={content?.about} />
      <Services content={content?.services} />
      <CtaBanner content={content?.cta} />
      <Reviews content={content?.reviews} />
      <ServiceArea content={content?.serviceArea} />
      <Faq content={content?.faq} />
      <Contact content={content?.contact} />
    </>
  );
}
