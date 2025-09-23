import Link from 'next/link';
import { Plus, Smile } from 'lucide-react';

export default function SuDiviaHeroSection() {
  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/shirodhara-treatment.webp')"
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left pt-14 sm:pt-12 lg:pt-26">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-white/20">
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                  SKJ DIVYA AYURVEDA HOSPITAL
                </span>
              </div>

              {/* Main Heading */}
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight sm:leading-relaxed mb-4 sm:mb-6" 
                style={{fontFamily: 'Philosopher, serif'}}
              >
                Your Journey to{' '}
                <span className="block mt-1 sm:mt-0">
                  Natural Healing Begins
                </span>
                <span className="block mt-1 sm:mt-0">
                  Here at <span className="text-emerald-400">SKJ Divya Ayurveda</span> 
                </span>
              </h1>

              {/* Description */}
              <p className="text-white/80 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
                Experience the transformative power of <span className="text-emerald-400 font-medium">authentic Ayurveda</span>—treating the root cause of illness for lasting health, wellness, and rejuvenation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start px-4 sm:px-0">
                <Link 
                  href="/contact" 
                  className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 text-center"
                >
                  Book a Consultation
                </Link>
                <Link 
                  href="/therapies" 
                  className="inline-block bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Learn About Our Therapies
                </Link>
              </div>

              {/* Specializations */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-12 px-2 sm:px-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center">
                  <div className="text-emerald-400 font-bold text-xs sm:text-sm">Joint Pain</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center">
                  <div className="text-emerald-400 font-bold text-xs sm:text-sm">Digestive Care</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center">
                  <div className="text-emerald-400 font-bold text-xs sm:text-sm">Panchkarma</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center">
                  <div className="text-emerald-400 font-bold text-xs sm:text-sm">Detoxification</div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
                {/* Customer Avatars */}
                <div className="flex items-center">
                  <div className="flex -space-x-2 sm:-space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-white overflow-hidden bg-gradient-to-br from-pink-400 to-purple-500">
                      <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80')"}} />
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-white overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-500">
                      <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80')"}} />
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-white overflow-hidden bg-gradient-to-br from-green-400 to-emerald-500">
                      <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80')"}} />
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-white bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Smile className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* Satisfaction Text */}
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">25+ Years</div>
                  <div className="text-white/80 text-xs sm:text-sm leading-tight">
                    of trusted Ayurvedic<br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>healthcare experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-pulse" />
          </div>
        </div>
      </section>
    </>
  );
}