import AboutUsHero from "@/components/About-Us/AboutUsHero";
import JanuBastiPage from "@/components/Treatments/JanuBastiPage";

export default function JanuBasti() {
  return (
    <>
      <AboutUsHero
        title={"Janu Basti"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
      <JanuBastiPage />
    </>
  );
}
