import { Quote } from 'lucide-react';

export default function LeadershipSection() {
  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <section className="relative py-14 lg:py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Title */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-white mb-12"
            style={{fontFamily: 'Philosopher, serif'}}
          >
            Meet Our Expert Ayurvedic Team
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
            Our strength lies in our dedicated team of doctors who are committed to your well-being.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dr. S.K. Sharma */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/30">
                <img 
                  src="/images/drsksharma.jpg" 
                  alt="Dr. S.K. Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Dr. S.K. Sharma</h3>
              <p className="text-emerald-300 mb-3">Director</p>
              <p className="text-white/80 text-sm">
                A visionary leader with years of experience in Ayurveda, guiding the hospital's mission to provide genuine care.
              </p>
            </div>

            {/* Dr. Dharmendra Jakhar */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/30">
                <img 
                  src="/images/doctor.png" 
                  alt="Dr. Dharmendra Jakhar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Dr. Dharmendra Jakhar</h3>
              <p className="text-emerald-300 mb-3">BAMS, Ayurvedacharya</p>
              <p className="text-white/80 text-sm">
                Registered Ayurvedic physician specializing in Panchkarma and pain management.
              </p>
            </div>

            {/* Dr. Reena Saini */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/30">
                <img 
                  src="/images/doctor.png" 
                  alt="Dr. Reena Saini" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Dr. Reena Saini</h3>
              <p className="text-emerald-300 mb-3">BAMS, Ayurvedacharya</p>
              <p className="text-white/80 text-sm">
                Registered Ayurvedic physician with expertise in women's wellness and rejuvenation therapies.
              </p>
            </div>

            {/* Dr. Aaesha Aslam Chohan */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/30">
                <img 
                  src="/images/doctor.png" 
                  alt="Dr. Aaesha Aslam Chohan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Dr. Aaesha Aslam Chohan</h3>
              <p className="text-emerald-300 mb-3">BAMS, Ayurvedacharya</p>
              <p className="text-white/80 text-sm">
                Registered Ayurvedic physician focused on holistic treatments and patient care.
              </p>
            </div>
          </div>

          {/* Quote at Bottom */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-emerald-300 transform rotate-180" fill="currentColor" />
            </div>
            <blockquote 
              className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-4xl mx-auto"
              style={{fontFamily: 'Philosopher, serif'}}
            >
              At SKJ Divya Ayurveda Hospital, we're dedicated to providing authentic Ayurvedic care 
              that treats the root cause of illness for lasting health and wellness.
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}