import AboutUsHero from "@/components/About-Us/AboutUsHero";

import ShirodharaPage from "@/components/Treatments/Shirodara";

export default function Shirodhara() {
  return (
    <>
      <AboutUsHero
        title={"Shirodhara"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />
      <ShirodharaPage />
    </>
  );
}
