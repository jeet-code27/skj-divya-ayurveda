import Image from 'next/image';
import Link from 'next/link';
import { Brain, Plus, Check, Clock, Star, Phone, MapPin, Droplets, Heart } from 'lucide-react';

export default function ShirodharaPage() {
  const benefits = [
    "तनाव और चिंता कम करना",
    "सिरदर्द और माइग्रेन में राहत",
    "मानसिक तनाव कम करना",
    "अच्छी नींद लाना",
    "त्वचा व बालों को स्वस्थ व बेहतर करना"
  ];

  const indications = [
    { name: "तनाव और चिंता", icon: Brain },
    { name: "सिरदर्द और माइग्रेन", icon: Brain },
    { name: "अनिद्रा (Insomnia)", icon: Clock },
    { name: "मानसिक थकान", icon: Heart },
    { name: "त्वचा और बालों की समस्या", icon: Droplets }
  ];

  const processSteps = [
    {
      step: "01",
      title: "तैयारी",
      desc: "रोगी को आरामदायक स्थिति में लकड़ी या आयुर्वेदिक टेबल पर लेटाया जाता है।"
    },
    {
      step: "02",
      title: "धारा पात्र तैयार करना",
      desc: "विशेष पात्र (धारा पॉट) में औषधीय तेल, दूध या छाछ भरा जाता है।"
    },
    {
      step: "03",
      title: "तेल की धार",
      desc: "गर्म औषधीय तेल को धीरे-धीरे लगातार ललाट (माथे) पर डाला जाता है।"
    },
    {
      step: "04",
      title: "उपचार की अवधि",
      desc: "30-45 मिनट तक यह प्रक्रिया चलती है जिससे गहरा आराम और शांति प्राप्त होती है।"
    }
  ];

  return (
    <>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700&family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#FFFBE9] via-emerald-50 to-[#FFFBE9] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-teal-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
                <Brain className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">आयुर्वेदिक शिरोधारा चिकित्सा</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                शिरोधारा
              </h1>

              <h2 className="text-xl md:text-2xl text-emerald-700 mb-6 font-medium">
                मन और शरीर को शांत करने वाला उपचार
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                शिरोधारा एक प्रमुख आयुर्वेदिक उपचार है जिसमें औषधीय तेल या द्रव्य को ललाट (माथे) पर लगातार 
                धारा के रूप में डाला जाता है। यह तनाव, सिरदर्द, अनिद्रा और मानसिक अशांति को दूर कर मन को 
                गहरी शांति और विश्राम प्रदान करता है।
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/appointment" 
                  className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  अपॉइंटमेंट बुक करें
                </Link>
                
                <Link 
                  href="/contact-at-skj-divya-ayurveda-hospital-ajmer" 
                  className="inline-flex items-center justify-center border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-medium transition-all duration-200"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  पता देखें
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/shirodhara-treatment.jpg"
                  alt="शिरोधारा उपचार"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Shirodhara Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">परिचय</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6" style={{fontFamily: 'Philosopher, serif'}}>
              शिरोधारा क्या है?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                शिरोधारा का अर्थ है शिर (सिर) पर धारा (प्रवाह)। इसमें औषधीय तेल, दूध या छाछ को एक पात्र 
                से लगातार ललाट पर डाला जाता है। यह चिकित्सा मस्तिष्क और तंत्रिका तंत्र को गहरी शांति और 
                संतुलन प्रदान करती है।
              </p>
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <h3 className="text-xl text-emerald-800 font-semibold mb-3" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                  उपचार का लक्ष्य
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                  इसका उद्देश्य मानसिक तनाव को दूर करना, नींद की गुणवत्ता को सुधारना और समग्र स्वास्थ्य एवं 
                  सौंदर्य को बढ़ावा देना है।
                </p>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/images/shirodhara-benefits.webp"
                alt="शिरोधारा आयुर्वेदिक चिकित्सा"
                width={500}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-[#FFFBE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">प्रक्रिया</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6" style={{fontFamily: 'Philosopher, serif'}}>
              शिरोधारा की प्रक्रिया
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 hover:bg-white/80 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="text-4xl md:text-5xl font-light text-emerald-600 mb-4 opacity-80">{step.step}</div>
                <h3 className="text-xl text-gray-800 mb-4 leading-tight flex-grow" style={{fontFamily: 'Philosopher, serif'}}>
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                  {step.desc}
                </p>
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200">
            <div className="flex items-center space-x-4 mb-6">
              <Clock className="w-8 h-8 text-emerald-600" />
              <h3 className="text-2xl font-semibold text-gray-800" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                उपचार की समय अवधि
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
              सामान्यतः यह उपचार 30 से 45 मिनट तक चलता है। औषधीय तेल धीरे-धीरे माथे पर बहता है, 
              जो तंत्रिका तंत्र को शांति देता है और मानसिक संतुलन बहाल करता है।
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">फायदे</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6" style={{fontFamily: 'Philosopher, serif'}}>
              शिरोधारा के फायदे
            </h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-emerald-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indications Section */}
      <section className="py-16 lg:py-24 bg-[#FFFBE9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">संकेत</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6" style={{fontFamily: 'Philosopher, serif'}}>
              किन समस्याओं में उपयोगी है?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, index) => (
              <div key={index} className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-emerald-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                    <indication.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 leading-tight" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                      {indication.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
            आज ही शिरोधारा का अनुभव करें
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
            प्राकृतिक और सुरक्षित शिरोधारा चिकित्सा के लिए आज ही संपर्क करें और तनावमुक्त जीवन का अनुभव करें।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/appointment" 
              className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              अभी कॉल करें: +91 98765 43210
            </Link>
            
            <Link 
              href="/treatments-at-skj-ayurveda-hospital" 
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-full font-medium transition-all duration-200"
            >
              अन्य उपचार देखें
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
