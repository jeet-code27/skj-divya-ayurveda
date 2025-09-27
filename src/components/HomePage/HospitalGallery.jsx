'use client';
import { useState } from 'react';
import { Plus, Eye, Heart, Award, Activity, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HospitalGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "/images/panchkarma-therapy5.png",
      alt: "Panchkarma Therapy",
      category: "Treatments",
      icon: Heart,
      className: "md:col-span-2 md:row-span-2",
      description: "Ancient Ayurvedic detoxification and rejuvenation therapy"
    },
    {
      id: 2,
      src: "/images/kati-basti.jpg",
      alt: "Kati Basti for Back Pain",
      category: "Therapies", 
      icon: Activity,
      className: "md:col-span-1 md:row-span-1",
      description: "Specialized therapy for lower back pain and spinal issues"
    },
    {
      id: 3,
      src: "/images/doctor-consulting.webp",
      alt: "Expert Consultation",
      category: "Doctors",
      icon: Eye,
      className: "md:col-span-1 md:row-span-2",
      description: "Personalized consultations with experienced Ayurvedic practitioners"
    },
    {
      id: 4,
      src: "/images/hospital-interior.webp",
      alt: "Hospital Interior",
      category: "Pharmacy",
      icon: Plus,
      className: "md:col-span-1 md:row-span-2",
      description: "Modern facilities combined with traditional healing environment"
    },
    {
      id: 5,
      src: "/images/shirodhara-treatment.webp",
      alt: "Shirodhara Treatment",
      category: "Therapies",
      icon: Heart,
      className: "md:col-span-2 md:row-span-1",
      description: "Continuous oil pouring therapy for mental relaxation and stress relief"
    },
    {
      id: 6,
      src: "/images/janu-basti-therapy.webp",
      alt: "Janu Basti for Knee Pain",
      category: "Treatments",
      icon: Award,
      className: "md:col-span-1 md:row-span-1",
      description: "Targeted therapy for knee joint pain and mobility issues"
    }
  ];

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
      
      <section className="py-16 lg:py-24 bg-[#FFFBE9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 relative z-10">
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center space-x-2 bg-white shadow-lg border border-emerald-100 text-emerald-700 rounded-full px-6 py-3 mb-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold tracking-wider uppercase">
                Gallery Showcase
              </span>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </motion.div>

            {/* Main Heading with Gradient */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 bg-clip-text text-transparent leading-tight mb-6"
              style={{fontFamily: 'Philosopher, serif'}}
            >
              Discover Our World
            </motion.h2>

            {/* Enhanced Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 text-xl leading-relaxed max-w-4xl mx-auto"
            >
              Step into our serene healing sanctuary where ancient Ayurvedic wisdom meets modern comfort
            </motion.p>
          </div>

          {/* New Masonry-Style Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 auto-rows-[200px]">
            {galleryImages.map((image, index) => {
              const IconComponent = image.icon;
              return (
                <motion.div 
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  className={`${image.className} group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[0.98] cursor-pointer border-2 border-transparent hover:border-emerald-200`}
                  onClick={() => openLightbox(index)}
                >
                  {/* Image with Parallax Effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <Image 
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-fit group-hover:scale-110 transition-transform duration-700 ease-out"
                      priority={index < 2}
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 rounded-3xl" />

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-emerald-400/50">
                      {image.category}
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {/* Title */}
                      <h3 className="text-white text-lg font-bold mb-2 group-hover:text-emerald-100 transition-colors duration-300">
                        {image.alt}
                      </h3>

                      {/* View More Button */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <button className="inline-flex items-center space-x-2 text-emerald-300 hover:text-white text-sm font-medium">
                          <Eye className="w-4 h-4" />
                          <span>View Image</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <div className="absolute top-6 right-6 w-1 h-1 bg-emerald-300 rounded-full"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Bottom Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-20"
          >
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">1000+</div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">Happy Patients</div>
              </div>
              <div className="w-px h-12 bg-gray-300 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">15+</div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-300 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">50+</div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">Treatments</div>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="flex justify-center space-x-4">
              <div className="w-4 h-4 bg-emerald-200 rounded-full opacity-40 animate-pulse"></div>
              <div className="w-6 h-6 bg-emerald-400 rounded-full opacity-60"></div>
              <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
              <div className="w-6 h-6 bg-emerald-400 rounded-full opacity-60"></div>
              <div className="w-4 h-4 bg-emerald-200 rounded-full opacity-40 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-60 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-60 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-60 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Main Image */}
              <div className="relative max-w-full max-h-[70vh] mb-6">
                <Image
                  src={galleryImages[selectedImageIndex].src}
                  alt={galleryImages[selectedImageIndex].alt}
                  width={800}
                  height={600}
                  className="object-contain max-w-full max-h-[70vh] rounded-2xl shadow-2xl"
                  priority
                />
              </div>

              {/* Image Info */}
              <div className="text-center max-w-2xl">
                <div className="inline-block bg-emerald-500/90 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  {galleryImages[selectedImageIndex].category}
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">
                  {galleryImages[selectedImageIndex].alt}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {galleryImages[selectedImageIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}