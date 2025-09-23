import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <section className="relative py-8 lg:py-12 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Quote Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <Quote className="w-10 h-10 text-emerald-300 transform rotate-180" fill="currentColor" />
            </div>
          </div>

          {/* Testimonial Text */}
          <blockquote 
            className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed mb-6 max-w-5xl mx-auto"
            style={{fontFamily: 'Philosopher, serif'}}
          >
            After suffering from chronic back pain for 5 years, the Panchkarma treatment at SKJ Divya Ayurveda 
            gave me a new lease on life. The personalized care and authentic therapies completely transformed my health.
          </blockquote>

          {/* Author Information */}
          <div className="space-y-1">
            {/* Name */}
            <div 
              className="text-xl md:text-2xl lg:text-3xl text-white/95"
              style={{fontFamily: 'Dancing Script, cursive'}}
            >
              Rajesh Kumar
            </div>
            
            {/* Title */}
            <div 
              className="text-sm md:text-base text-emerald-300 tracking-wide"
              style={{fontFamily: 'Philosopher, serif'}}
            >
              Patient - Chronic Back Pain
            </div>
            
            {/* Treatment Details */}
            <div className="flex justify-center items-center space-x-4 text-white/80 text-xs mt-1">
              <span>Panchkarma Therapy</span>
              <span>•</span>
              <span>Kati Basti Treatment</span>
              <span>•</span>
              <span>3 Weeks Program</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-2 border-t border-emerald-300/30">
            <div>
              <div className="text-xl font-bold text-emerald-300">95%</div>
              <div className="text-white/80 text-xs">Pain Relief</div>
            </div>
            <div>
              <div className="text-xl font-bold text-emerald-300">3</div>
              <div className="text-white/80 text-xs">Weeks Treatment</div>
            </div>
            <div>
              <div className="text-xl font-bold text-emerald-300">100%</div>
              <div className="text-white/80 text-xs">Satisfied</div>
            </div>
          </div>
        </div>

       
      </section>
    </>
  );
}