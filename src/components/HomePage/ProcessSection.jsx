import { Plus } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Detailed Diagnosis (Dash Vidha Pariksha)",
      description: "We begin with a thorough examination to understand your unique body type (Prakruti), current health imbalance (Vikruti), digestion, and overall strength."
    },
    {
      number: "02", 
      title: "Personalized Treatment Plan",
      description: "Based on the diagnosis, our doctors create a custom plan that may include dietary advice, herbal medicines, and specific therapies."
    },
    {
      number: "03",
      title: "Authentic Therapies", 
      description: "Our skilled therapists perform classical Ayurvedic treatments like Panchkarma, Basti, Shirodhara, and more in a clean, modern facility."
    },
    {
      number: "04",
      title: "Guidance & Follow-up",
      description: "We believe in empowering our patients with knowledge and provide continuous support even after your treatment is complete."
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
                Our Process
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{fontFamily: 'Philosopher, serif'}}
            >
              Our Holistic Approach to Your Health
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              We follow the timeless principles of Ayurveda to ensure a complete and accurate treatment plan for every patient.
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 hover:bg-white/80 hover:shadow-xl hover:shadow-amber-200/20 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                {/* Step Number */}
                <div className="text-4xl md:text-5xl font-light text-emerald-600 mb-4 opacity-80">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 
                  className="text-xl text-gray-800 mb-4 leading-tight flex-grow"
                  style={{fontFamily: 'Philosopher, serif'}}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
            
            {/* Connecting Lines (Desktop Only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-emerald-300/30 via-emerald-400/50 to-emerald-300/30 -z-10 mx-8"></div>
            
            {/* Connecting Dots (Desktop Only) */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full -z-10"></div>
            <div className="hidden lg:block absolute top-1/2 left-2/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full -z-10"></div>
            <div className="hidden lg:block absolute top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full -z-10"></div>
          </div>
        </div>
      </section>
    </>
  );
}