import AboutUsHero from "@/components/About-Us/AboutUsHero";
import LeadershipSection from "@/components/HomePage/CeoSection";
import React from "react";

export default function Doctors() {
  return (
    <>
      <AboutUsHero
        title={"Our Doctors"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
      <LeadershipSection />
    </>
  );
}
