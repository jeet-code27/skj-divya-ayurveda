import AboutUsHero from "@/components/About-Us/AboutUsHero";
import Testimonial from "@/components/About-Us/Testimonial";

import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import React from "react";

export default function Testimonials() {
  return (
    <>
      <AboutUsHero
        title={"Testimonials"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
    <TestimonialsSection />
    <Testimonial />
    </>
  );
}
