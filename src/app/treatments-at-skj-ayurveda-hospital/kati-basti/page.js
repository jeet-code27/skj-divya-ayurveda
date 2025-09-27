import AboutUsHero from "@/components/About-Us/AboutUsHero";
import KatiBastiPage from "@/components/Treatments/KatiBastiPage";

export default function Shirodhara() {
  return (
    <>
      <AboutUsHero
        title={"Kati Basti"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
      <KatiBastiPage />
    </>
  );
}
