'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export default function AyurvedaImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    {
      src: "/images/hospital-banner.jpg",
      alt: "Ayurvedic hospital environment",
      title: "Modern Ayurvedic Facility"
    },
    {
      src: "/images/banner1.jpg",
      alt: "Panchkarma therapy at SKJ Divya Ayurveda",
      title: "Traditional Panchkarma Therapy"
    },
    {
      src: "/images/banner2.jpg",
      alt: "Ayurvedic doctor consultation",
      title: "Expert Consultation"
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-4 bg-[#FDFDFD]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 ">
            Experience Authentic Ayurvedic Care
          </h3>
          <p className="text-gray-600 text-sm">
            Discover our healing environment and traditional treatments
          </p>
        </div>

        {/* Slider Container - Full Width with Fixed Height */}
        <div className="relative bg-white shadow-lg overflow-hidden">    
          {/* Main Image Display - Fixed Height */}
          <div className="relative w-full h-98 sm:h-[500px] lg:h-[600px]">
            {/* Images */}
            <div className="relative w-full h-full overflow-hidden">
              {images.map((image, index) => (  
                <div   
                  key={index}     
                  className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                    index === currentSlide 
                      ? 'translate-x-0' 
                      : index < currentSlide 
                        ? '-translate-x-full' 
                        : 'translate-x-full'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-fit"
                  />
                  {/* Overlay with title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6 lg:p-8">
                    <h4 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold">
                      {image.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />  
            </button>

            {/* Auto-play toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
              aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center space-x-3 py-6 bg-gray-50">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-emerald-600 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}