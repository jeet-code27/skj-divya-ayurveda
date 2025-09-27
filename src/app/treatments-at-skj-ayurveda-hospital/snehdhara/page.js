import AboutUsHero from "@/components/About-Us/AboutUsHero";
import SnehdharaPage from "@/components/Treatments/SnehdharaPage";



export default function Snehdhara() {
  return (
    <>
      <AboutUsHero
        title={"Snehdhara"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
      <SnehdharaPage />
    </>
  );
}
