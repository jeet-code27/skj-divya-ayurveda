import AboutUsHero from "@/components/About-Us/AboutUsHero";
import PanchkarmaPage from "@/components/Treatments/PanchkarmaPage";


export default function Panchkarma() {
  return (
    <>
      <AboutUsHero
        title={"Panchkarma"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
      <PanchkarmaPage />
    </>
  );
}
