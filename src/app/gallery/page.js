import AboutUsHero from "@/components/About-Us/AboutUsHero";
import ImageGallery from "@/components/Gallery";
import React from "react";

export default function Gallery() {
  return (
    <div className="bg-[#fffbe8]">
      <AboutUsHero
        title={"Gallery"}
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />
      <ImageGallery />
    </div>
  );
}
