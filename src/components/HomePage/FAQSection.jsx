'use client';
import { useState } from 'react';
import { Plus, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function FAQSection() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "What is SKJ Ayurveda Hospital's approach to treatment?",
      answer: "SKJ Ayurveda Hospital follows authentic Ayurvedic principles, focusing on treating the root cause of illnesses rather than just symptoms. We use traditional Panchkarma therapies, herbal medicines, and personalized treatment plans to restore balance and promote natural healing."
    },
    {
      id: 2,
      question: "What conditions do you specialize in treating?",
      answer: "We specialize in treating joint and muscular pain (back, knee, cervical), digestive disorders (acidity, ulcers, constipation), stress-related conditions, lifestyle diseases, and various chronic health issues through authentic Ayurvedic therapies."
    },
    {
      id: 3,
      question: "Is a consultation required before starting treatment?",
      answer: "Yes, we begin with a detailed diagnosis (Dash Vidha Pariksha) to understand your unique body type (Prakruti), current health imbalance (Vikruti), and overall constitution. This helps us create a personalized treatment plan tailored to your specific needs."
    },
    {
      id: 4,
      question: "How can I book an appointment at SKJ Ayurveda Hospital?",
      answer: "You can book an appointment by calling our hospital directly at 0145-4062302, 9828034603, 7665555063, or 9828014603. You can also email us at skjduywayurveda@gmail.com or visit us in person for registration."
    },
    {
      id: 5,
      question: "What should I expect during my first visit?",
      answer: "During your first visit, our Ayurvedic doctors will conduct a thorough examination, discuss your medical history, and perform diagnostic assessments. Based on this, we'll recommend appropriate therapies and create a comprehensive treatment plan for your condition."
    },
    {
      id: 6,
      question: "How long does a typical treatment program last?",
      answer: "Treatment duration varies depending on your condition and the therapies required. Some treatments provide immediate relief, while chronic conditions may require longer programs ranging from 1-4 weeks. We'll provide a clear timeline during your consultation."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
      
      <section className="py-16 lg:py-24 bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Side - Header + Image */}
            <div className="flex flex-col">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200 self-start">
                <Plus className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide uppercase">
                  FAQs
                </span>
              </div>

              {/* Main Heading */}
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-8"
                style={{fontFamily: 'Philosopher, serif'}}
              >
                Frequently Asked Questions
              </h2>

              {/* Image */}
              <div className="relative flex-grow">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                  <Image
                    src="/images/sksharma.jpg"
                    alt="Doctor consultation at SKJ Ayurveda Hospital"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    style={{ minHeight: '400px' }}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Side - FAQ Content */}
            <div className="lg:pl-8 flex flex-col md:pt-40 sm:pt-2">
              {/* FAQ Accordion */}
              <div className="space-y-1 flex-grow">
                {faqs.map((faq, index) => (
                  <div 
                    key={faq.id}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl border border-emerald-100 overflow-hidden hover:bg-white/80 transition-all duration-300 hover:shadow-lg"
                  >
                    {/* Question Header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/20 transition-colors duration-200"
                    >
                      <h3 
                        className="text-lg md:text-xl text-gray-800 font-medium pr-4"
                        style={{fontFamily: 'Philosopher, serif'}}
                      >
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <ChevronDown 
                          className={`w-5 h-5 text-emerald-600 transform transition-transform duration-300 ${
                            openAccordion === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* Answer Content */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openAccordion === index 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-emerald-100 pt-4">
                          <p 
                            className="text-gray-600 leading-relaxed"
                            style={{fontFamily: 'Philosopher, serif'}}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}