"use client";
import { useState } from "react";
import Image from "next/image";

const ImageGallery = ({ images = [] }) => {
  // Sample images if none provided
  const sampleImages = [
    { id: 1, src: "/images/gallery/1.jpg", alt: "Gallery Image 1" },
    { id: 2, src: "/images/gallery/2.jpg", alt: "Gallery Image 2" },
    { id: 3, src: "/images/gallery/3.jpg", alt: "Gallery Image 3" },
    { id: 4, src: "/images/gallery/4.jpg", alt: "Gallery Image 4" },
    { id: 5, src: "/images/gallery/5.jpg", alt: "Gallery Image 5" },
    { id: 6, src: "/images/gallery/6.jpg", alt: "Gallery Image 6" },
    { id: 7, src: "/images/gallery/7.jpg", alt: "Gallery Image 7" },
    { id: 8, src: "/images/gallery/8.jpg", alt: "Gallery Image 8" },
    { id: 9, src: "/images/gallery/9.jpg", alt: "Gallery Image 9" },
    { id: 10, src: "/images/gallery/10.jpg", alt: "Gallery Image 10" },
    { id: 11, src: "/images/gallery/11.jpg", alt: "Gallery Image 11" },
    { id: 12, src: "/images/gallery/12.jpg", alt: "Gallery Image 12" },
    { id: 13, src: "/images/gallery/13.jpg", alt: "Gallery Image 13" },
    { id: 14, src: "/images/gallery/14.jpg", alt: "Gallery Image 14" },
    { id: 15, src: "/images/gallery/15.jpg", alt: "Gallery Image 15" },
    { id: 16, src: "/images/gallery/16.jpg", alt: "Gallery Image 16" },
    { id: 17, src: "/images/gallery/17.jpg", alt: "Gallery Image 17" },
    { id: 18, src: "/images/gallery/18.jpg", alt: "Gallery Image 18" },
    { id: 19, src: "/images/gallery/19.jpg", alt: "Gallery Image 19" },

    { id: 20, src: "/images/gallery/20.jpg", alt: "Gallery Image 20" },
  ];

  const galleryImages = images.length > 0 ? images : sampleImages;

  // State for modal
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center justify-center space-x-2 bg-white shadow-lg border border-emerald-100 text-emerald-700 rounded-full px-6 py-3 mb-6 hover:shadow-xl transition-shadow duration-300">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold tracking-wider uppercase">
            Gallery
          </span>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        </div>

        <h2
          className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 bg-clip-text text-transparent leading-tight mb-6"
          style={{ fontFamily: "Philosopher, serif" }}
        >
          Discover Our World
        </h2>

        <p className="text-gray-600 text-xl leading-relaxed max-w-4xl mx-auto">
          Step into our serene healing sanctuary where ancient Ayurvedic wisdom
          meets modern comfort
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 rounded-3xl   py-0.5 border-y-5 border-y-[#007a56]">
        {galleryImages.map((image, index) => (
          <div
            key={image.id || index}
            className="relative aspect-square overflow-hidden  rounded-3xl  group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            {/* Image */}
            <Image
              src={image.src}
              alt={image.alt || `Gallery image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, 
               (max-width: 768px) 50vw, 
               (max-width: 1024px) 33vw, 
               (max-width: 1280px) 25vw, 
               20vw"
              placeholder="blur"
              blurDataURL="/images/gallery/21.jpg"
            />

            {/* Overlay with Title */}
            <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/100 via-black/10 to-transparent p-3 text-white text-lg font-semibold"></div>
            {/* <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 text-white text-lg font-semibold">
              {image.alt || `Gallery image ${index + 1}`}
            </div> */}
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="rounded-lg object-contain mx-auto"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/60 rounded-full px-3 py-1"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
