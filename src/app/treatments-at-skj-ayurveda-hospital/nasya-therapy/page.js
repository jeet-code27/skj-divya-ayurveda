import AboutUsHero from "@/components/About-Us/AboutUsHero";
import NasyaTherapyPage from "@/components/Treatments/NasyaTherapyPage";

export default function NasyaTherapy() {
  return (
    <>
      <AboutUsHero
        title={"Nasya Therapy"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
      <NasyaTherapyPage />
    </>
  );
}
