import { Plus, Leaf, Heart, Shield, Activity } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Panchkarma (Detoxification & Rejuvenation)",
      description: "A deep cleansing process to remove toxins from the body and mind.",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Pain Management Therapies",
      description: "Specialized treatments like Kati Basti (for back), Janu Basti (for knees), and Greeva Basti (for neck).",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Stress Relief Therapies",
      description: "Relaxing treatments like Shirodhara (oil stream on forehead) and Shiro Basti (oil pooling on head).",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Digestive Care (Gastrocare)",
      description: "Treatments for Acidity, Constipation, Liver issues, and Gastritis.",
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      icon: <Plus className="w-8 h-8" />,
      title: "Other Specialized Care",
      description: "Netra Tarpan (for eyes), Nasya (for sinuses), and Raktamokshana (blood purification).",
      gradient: "from-teal-400 to-cyan-600"
    }
  ];

  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
      
      <section className="py-16 lg:py-24 bg-[#FFFBE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                Our Services
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{fontFamily: 'Philosopher, serif'}}
            >
              Healing Services We Offer
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              We provide a wide range of traditional Ayurvedic treatments to restore your health.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 border border-emerald-100 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${service.gradient} -z-10`}></div>
                
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 
                  className="text-xl text-gray-800 mb-4 leading-tight font-semibold"
                  style={{fontFamily: 'Philosopher, serif'}}
                >
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
            
            {/* Consultation Card - Extra card for balance */}
            <div className="group bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Plus className="w-8 h-8" />
              </div>

              <h3 
                className="text-xl mb-4 leading-tight font-semibold"
                style={{fontFamily: 'Philosopher, serif'}}
              >
                Free Consultation
              </h3>

              <p className="leading-relaxed opacity-90">
                Book a complimentary consultation with our Ayurvedic experts to discuss your health concerns.
              </p>

              <button className="mt-6 bg-white text-emerald-700 px-6 py-2 rounded-full font-medium hover:bg-emerald-50 transition-colors duration-300">
                Schedule Now
              </button>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-8">
              Can't find what you're looking for? Contact us for more information about our treatments.
            </p>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}