import { Plus, Smile, Check, ThumbsUp, Heart, Leaf } from 'lucide-react';

export default function CoreValues() {
  const coreValues = [
    {
      id: 1,
      icon: <Plus className="w-8 h-8 text-emerald-600" />,
      title: "Root Cause Healing",
      description: "We believe in treating the underlying cause of illness rather than just symptoms, ensuring lasting health and wellness through authentic Ayurvedic principles."
    },
    {
      id: 2,
      icon: <Smile className="w-8 h-8 text-emerald-600" />,
      title: "Personalized Care", 
      description: "Every patient receives a customized treatment plan based on their unique body type (Prakriti), health imbalances, and specific needs through detailed Dash Vidha Pariksha."
    },
    {
      id: 3,
      icon: <Check className="w-8 h-8 text-emerald-600" />,
      title: "Authentic Ayurveda",
      description: "We practice traditional Ayurvedic treatments including Panchkarma therapies, herbal medicines, and classical procedures exactly as prescribed in ancient texts."
    },
    {
      id: 4,
      icon: <ThumbsUp className="w-8 h-8 text-emerald-600" />,
      title: "Natural & Sustainable",
      description: "Our treatments use 100% natural medicines and therapies that work in harmony with your body's natural healing mechanisms for sustainable wellness."
    },
    {
      id: 5,
      icon: <Heart className="w-8 h-8 text-emerald-600" />,
      title: "Compassionate Service",
      description: "Our team of experienced Ayurvedic doctors provides caring, supportive treatment in a peaceful environment that promotes natural healing and rejuvenation."
    },
    {
      id: 6,
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "Holistic Balance",
      description: "We restore harmony between body, mind, and consciousness through treatments that address physical, mental, and spiritual well-being simultaneously."
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
                Our Philosophy
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 leading-tight"
              style={{fontFamily: 'Philosopher, serif'}}
            >
              Our Core Values: Building a Healthy India
            </h2>
            
            {/* Subheading */}
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by Dr. S.K. Sharma's vision, we are committed to making authentic Ayurvedic healing accessible to everyone for lasting wellness.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={value.id}
                className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-amber-200/50 hover:bg-white/90 hover:shadow-xl hover:shadow-amber-200/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                  {value.icon}
                </div>

                {/* Title */}
                <h3 
                  className="text-xl md:text-2xl text-gray-800 mb-4 leading-tight"
                  style={{fontFamily: 'Philosopher, serif'}}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="text-center mt-16 bg-white/50 rounded-2xl p-8 border border-amber-200/30">
            <blockquote className="text-xl md:text-2xl text-gray-800 italic leading-relaxed" style={{fontFamily: 'Philosopher, serif'}}>
              "OUR MOTIVE IS TO BUILD A HEALTHY INDIA & BELIEVE US WE WILL DO IT"
            </blockquote>
            <p className="mt-4 text-gray-600 font-medium">- Dr. S.K. Sharma, Director & Chief Ayurvedacharya</p>
          </div>
        </div>
      </section>
    </>
  );
}