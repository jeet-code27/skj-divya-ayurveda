import AboutSection from "@/components/HomePage/AboutSection";
import AyurvedaImageSlider from "@/components/HomePage/AyurvedaImageSlider";
import LeadershipSection from "@/components/HomePage/CeoSection";
import DirectorSection from "@/components/HomePage/DirectorSection";
import FAQSection from "@/components/HomePage/FAQSection";
import Hero from "@/components/HomePage/Hero";
import HospitalGallery from "@/components/HomePage/HospitalGallery";
import ProcessSection from "@/components/HomePage/ProcessSection";
import ServicesSection from "@/components/HomePage/ServicesSection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";

export default function Home() {
  return (
   <>
   <Hero />
   <AboutSection />
   <DirectorSection />
   <LeadershipSection />
   <ProcessSection />
   <ServicesSection />
   <TestimonialsSection />
   <HospitalGallery />
   <FAQSection />
   <AyurvedaImageSlider/>
   </>
  );
}