import Image from 'next/image';
import Link from 'next/link';
import { Plus, Phone, MapPin, Shield, Droplets } from 'lucide-react';

export default function JanuBastiPage() {
  const benefits = [
    "घुटनों के दर्द में राहत",
    "घुटनों की अकड़न व जकड़न में राहत",
    "घुटनों का लचीलापन बढ़ाता है",
    "घुटनों का क्षयरोधन से बचाव",
    "जोड़ों को पोषण और मज़बूती प्रदान करता है"
  ];

  const indications = [
    { name: "घुटनों का दर्द", icon: Shield },
    { name: "ऑस्टियोआर्थराइटिस", icon: Droplets },
    { name: "रूमेटाइड आर्थराइटिस", icon: Shield },
    { name: "जोड़ों की अकड़न", icon: Shield },
    { name: "घुटनों में सूजन", icon: Shield },
  ];

  const processSteps = [
    {
      step: "01",
      title: "तैयारी",
      desc: "गेहूं/मूंग दाल के आटे से घुटनों के चारों ओर बांध जैसा घेरा बनाते हैं।"
    },
    {
      step: "02",
      title: "औषधीय तेल डालना",
      desc: "इस घेरे में गुनगुना औषधीय तेल धीरे-धीरे डाला जाता है।"
    },
    {
      step: "03",
      title: "उपचार की अवधि",
      desc: "30–40 मिनट तक तेल को गर्म रखकर उपचार किया जाता है।"
    },
    {
      step: "04",
      title: "परिणाम",
      desc: "घुटनों के दर्द, अकड़न और सूजन में उल्लेखनीय लाभ मिलता है।"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#FFFBE9] via-emerald-50 to-[#FFFBE9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">आयुर्वेदिक जॉइंट थेरेपी</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6">
              जानु बस्ति
            </h1>

            <h2 className="text-xl md:text-2xl text-emerald-700 mb-6 font-medium">
              घुटनों और जोड़ों के लिए विशेष उपचार
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              जानु बस्ति एक आयुर्वेदिक उपचार है जिसमें औषधीय तेल को घुटनों के चारों ओर बांध में रखा जाता है। 
              यह दर्द, सूजन, अकड़न और आर्थराइटिस जैसी समस्याओं में अत्यंत लाभकारी है।
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointment" className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-medium shadow-lg">
                <Phone className="w-4 h-4 mr-2" />
                अपॉइंटमेंट बुक करें
              </Link>
              <Link href="/contact-at-skj-divya-ayurveda-hospital-ajmer" className="inline-flex items-center justify-center border-2 border-emerald-500 text-emerald-600 px-8 py-3 rounded-full font-medium">
                <MapPin className="w-4 h-4 mr-2" />
                पता देखें
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/janu-basti-treatment.jpg"
                alt="जानु बस्ति उपचार"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6">जानु बस्ति की प्रक्रिया</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
                <div className="text-4xl text-emerald-600 mb-4">{step.step}</div>
                <h3 className="text-xl text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">फायदे</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-10">जानु बस्ति के लाभ</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100 hover:shadow-lg transition">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indications Section */}
      <section className="py-16 bg-[#FFFBE9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-10">किन समस्याओं में उपयोगी है?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border hover:shadow-md transition">
                <indication.icon className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-800">{indication.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            जानु बस्ति से अपने घुटनों को स्वस्थ और मजबूत बनाएं!
          </h2>
          <p className="text-white text-lg mb-8">
            आज ही अपॉइंटमेंट बुक करें और आयुर्वेदिक उपचार का लाभ उठाएं।
          </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                    <Phone className="w-4 h-4 mr-2" />
                    अभी कॉल करें: +91 9828034603
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
