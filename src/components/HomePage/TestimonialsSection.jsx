import Link from 'next/link';
import { Plus, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      text: "The Panchkarma treatment at SKJ Ayurveda Hospital transformed my health. After years of digestive issues, I finally found relief through their authentic Ayurvedic approach. The doctors are truly knowledgeable and caring.",
      name: "Rajesh Kumar",
      role: "Patient - Digestive Issues",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 2,
      text: "I suffered from chronic back pain for 5 years. The Kati Basti therapy at SKJ Ayurveda Hospital gave me incredible relief. The staff is professional and the facility is clean and peaceful. Highly recommended!",
      name: "Priya Sharma", 
      role: "Patient - Back Pain",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 3,
      text: "Dr. S.K. Sharma and his team provided excellent care for my stress-related issues. The Shirodhara therapy was deeply relaxing, and the dietary recommendations have helped me maintain balance in my daily life.",
      name: "Meera Patel",
      role: "Patient - Stress Management", 
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 4,
      text: "After my knee replacement surgery, the Janu Basti therapy at SKJ Ayurveda Hospital accelerated my recovery significantly. The personalized approach and genuine care exceeded my expectations.",
      name: "Vikram Singh",
      role: "Patient - Knee Pain",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
      
      <section className="py-16 lg:py-24 bg-[#FFFBE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div className="mb-8 lg:mb-0">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
                <Plus className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide uppercase">
                  Patient Stories
                </span>
              </div>

              {/* Main Heading */}
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight max-w-3xl"
                style={{fontFamily: 'Philosopher, serif'}}
              >
                Healing Experiences at SKJ Ayurveda Hospital
              </h2>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Link 
                href="/testimonials" 
                className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              >
                More Stories
              </Link>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100 hover:bg-white hover:shadow-xl hover:shadow-emerald-200/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-16 h-16 text-emerald-600 transform rotate-180" fill="currentColor" />
                </div>

                {/* Testimonial Text */}
                <div className="mb-8 relative z-10">
                  <p 
                    className="text-gray-700 leading-relaxed text-lg"
                    style={{fontFamily: 'Philosopher, serif'}}
                  >
                    {testimonial.text}
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center space-x-4 relative z-10">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-200">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name and Role */}
                  <div className="flex-grow">
                    <h4 
                      className="text-lg font-semibold text-gray-800"
                      style={{fontFamily: 'Philosopher, serif'}}
                    >
                      {testimonial.name}
                    </h4>
                    <p className="text-emerald-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Decorative Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-emerald-100">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">25+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">5000+</div>
              <div className="text-gray-600">Patients Treated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">15+</div>
              <div className="text-gray-600">Therapies Offered</div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/5 to-teal-500/5 rounded-full blur-3xl"></div> */}
      </section>
    </>
  );
}