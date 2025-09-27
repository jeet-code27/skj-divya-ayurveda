import AboutUsHero from "@/components/About-Us/AboutUsHero";
import GreevaBastiPage from "@/components/Treatments/GreevaBastiPage";

export default function GreevaBasti() {
  return (
    <>
      <AboutUsHero
        title={"Greeva Basti"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
      <GreevaBastiPage />
    </>
  );
}
