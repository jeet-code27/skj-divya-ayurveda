import Link from 'next/link';
import { Plus, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Specialists() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. S.K. Sharma",
      role: "Director & Chief Ayurvedacharya",
      image: "/images/drsksharma.jpg",
      experience: "25+ Years",
      specialization: "Panchkarma & Root Cause Treatment",
      social: {
        facebook: "#",
        instagram: "#",
        youtube: "#"
      }
    },
    {
      id: 2,
      name: "Dr. Dharmendra Jakhar",
      role: "BAMS, Ayurvedacharya",
      image: "/images/doctor.png",
      experience: "Registered Physician",
      specialization: "Panchkarma & Pain Management",
      featured: true,
      social: {
        facebook: "#",
        instagram: "#",
        youtube: "#"
      }
    },
    {
      id: 3,
      name: "Dr. Reena Saini",
      role: "BAMS, Ayurvedacharya",
      image: "/images/doctor.png",
      experience: "Registered Physician",
      specialization: "Women's Wellness & Regeneration Therapies",
      social: {
        facebook: "#",
        instagram: "#",
        youtube: "#"
      }
    },
    {
      id: 4,
      name: "Dr. Aaesha Aslam Chohan",
      role: "BAMS, Ayurvedacharya",
      image: "/images/doctor.png",
      experience: "Registered Physician",
      specialization: "Holistic Treatments & Patient Care",
      social: {
        facebook: "#",
        instagram: "#",
        youtube: "#"
      }
    }
  ];

  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
      
      <section className="py-16 lg:py-24 bg-[#FFFBE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                Expert Team
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 leading-tight"
              style={{fontFamily: 'Philosopher, serif'}}
            >
              Meet Our Ayurvedic Experts
            </h2>
            
            {/* Subheading */}
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of highly qualified and experienced Ayurvedic doctors is dedicated to providing authentic treatments that address the root cause of your health concerns.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  member.featured ? 'lg:transform lg:scale-105' : ''
                }`}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Social Icons - Show on Hover */}
                  {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                    <Link 
                      href={member.social.facebook}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                      <Facebook size={18} className="text-white" />
                    </Link>
                    <Link 
                      href={member.social.instagram}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                      <Instagram size={18} className="text-white" />
                    </Link>
                    <Link 
                      href={member.social.youtube}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                      <Youtube size={18} className="text-white" />
                    </Link>
                  </div> */}

                  {/* Experience Badge */}
                  <div className="absolute top-4 left-4 bg-emerald-500/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {member.experience}
                  </div>

              
                  
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  {/* Name */}
                  <h3 
                    className="text-xl md:text-2xl text-gray-800 mb-2"
                    style={{fontFamily: 'Philosopher, serif'}}
                  >
                    {member.name}
                  </h3>
                  
                  {/* Role */}
                  <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">
                    {member.role}
                  </p>
                  
                  {/* Specialization */}
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                    {member.specialization}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Card Border Animation */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-400/30 rounded-3xl transition-colors duration-500"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link 
              href="/appointment" 
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>

      
      </section>
    </>
  );
}