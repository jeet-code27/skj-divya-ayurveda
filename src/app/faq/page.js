import AboutUsHero from "@/components/About-Us/AboutUsHero";

import FAQSection from "@/components/HomePage/FAQSection";

import React from "react";

export default function Faqs() {
  return (
    <>
      <AboutUsHero
        title={"Faqs"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
      <FAQSection />
    </>
  );
}
