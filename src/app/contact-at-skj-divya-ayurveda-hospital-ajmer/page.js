import AboutUsHero from "@/components/About-Us/AboutUsHero";
import ContactSection from "@/components/Contact-Us/ContactSection";
import GoogleMapComponent from "@/components/Contact-Us/GoogleMapComponent";
import FAQSection from "@/components/HomePage/FAQSection";

export default function ContactAtSkjDivyaAyurvedaHospitalAjmer() {
  return (
    <>
      <AboutUsHero
        title="Contact Us"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          {
            label: "CONTACT US",
            href: "/contact-at-skj-divya-ayurveda-hospital-ajmer",
          },
        ]}
      />
      <ContactSection />
      <div className="px-26 py-8 bg-[#FFFBE9]">
        <GoogleMapComponent />
      </div>
      <FAQSection />
    </>
  );
}
