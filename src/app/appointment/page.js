import AboutUsHero from "@/components/About-Us/AboutUsHero";
import BookConsultationForm from "@/components/BookConsultation/BookConsultation";
import React from "react";

export default function BookConsultation() {
  return (
    <>
      <AboutUsHero
        title={" Book Appointment"}
        breadcrumbs={[
          { label: "HOME", href: "/" },
          {
            label: "Book Appointment",
            href: "/appointment",
          },
        ]}
      />
      <BookConsultationForm />
    </>
  );
}
