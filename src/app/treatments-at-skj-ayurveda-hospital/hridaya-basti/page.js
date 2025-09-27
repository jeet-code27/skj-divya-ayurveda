import AboutUsHero from "@/components/About-Us/AboutUsHero";
import HridayaBastiPage from "@/components/Treatments/HridayaBastiPage";



export default function HridayaBasti() {
  return (
    <>
      <AboutUsHero
        title={"Hridaya Basti"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
      <HridayaBastiPage />
    </>
  );
}
