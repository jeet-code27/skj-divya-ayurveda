import AboutUsHero from "@/components/About-Us/AboutUsHero";
import KarnaPuranaPage from "@/components/Treatments/KarnaPuranaPage";


export default function KarnaPurana() {
  return (
    <>
      <AboutUsHero
        title={"Karna Purana"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
      <KarnaPuranaPage />
    </>
  );
}
