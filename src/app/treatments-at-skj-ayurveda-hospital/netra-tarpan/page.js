import AboutUsHero from "@/components/About-Us/AboutUsHero";
import NetraTarpanPage from "@/components/Treatments/NetraTarpanPage";

export default function NetraTarpan() {
  return (
   <>
  <AboutUsHero
        title={"Netra Tarpan"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
  <NetraTarpanPage/>
   </>
  );
}