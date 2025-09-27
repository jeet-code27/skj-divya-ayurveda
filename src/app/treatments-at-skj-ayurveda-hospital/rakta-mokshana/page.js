import AboutUsHero from "@/components/About-Us/AboutUsHero";
import RaktaMokshanaPage from "@/components/Treatments/RaktaMokshanaPage";

export default function RaktaMokshana() {
  return (
    <>
      <AboutUsHero
        title={"Rakta Mokshana"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
      <RaktaMokshanaPage />
    </>
  );
}
