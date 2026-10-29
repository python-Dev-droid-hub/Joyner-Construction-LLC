"use client";

import TestimonialsMarquee from "@/components/ui/testimonials-with-marquee";
import type { LandingPageContent } from "@/content/landing";
import { reviewsContent } from "@/content/site";

type ReviewsProps = {
  content?: LandingPageContent["reviews"];
};

export function Reviews({ content }: ReviewsProps = {}) {
  return (
    <TestimonialsMarquee
      id="reviews"
      title={content?.title ?? reviewsContent.title}
      description={content?.body ?? reviewsContent.body}
      testimonials={
        content?.testimonials
          ? [...content.testimonials]
          : [...reviewsContent.testimonials]
      }
    />
  );
}
