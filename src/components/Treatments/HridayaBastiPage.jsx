import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Plus,
  Check,
  Clock,
  Star,
  Phone,
  MapPin,
  Heart,
  Shield,
  Droplets,
} from "lucide-react";

export default function HridayaBastiPage() {
  const benefits = [
    "हृदय की मांसपेशियों को पोषण देती है और कार्यक्षमता को बढ़ाता है।",
    "तनाव, चिंता और भावनात्मक आघात को कम करता है।",
    "हृदय रोग की रोकथाम में सहायक है और नसों के ब्लॉकेज में लाभ देती है।",
    "शरीर में ऊर्जा और स्फूर्ति को बढ़ाती है।",
    "उच्च रक्त चाप (BP) को नियमित करने में सहायक है।",
    "हृदय रोगियों के लिए विशेष रूप से लाभकारी है।",
  ];

  const indications = [
    { name: "उच्च रक्तचाप (High BP)", icon: Heart },
    { name: "हृदय की कमजोरी", icon: Shield },
    { name: "कोरोनरी धमनी रोग", icon: Droplets },
    { name: "तनाव और चिंता", icon: Shield },
    { name: "असामान्य धड़कन", icon: Heart },
    { name: "कार्डियोमायोपैथी", icon: Droplets },
    { name: "भावनात्मक संतुलन के लिए", icon: Shield },
    { name: "अस्थमा और श्वसन संबंधी समस्याएं", icon: Plus },
  ];

  const processSteps = [
    {
      step: "01",
      title: "बांध का निर्माण",
      desc: "रोगी को आराम से पीठ के बल लिटाकर, छाती पर हृदय क्षेत्र के ऊपर उड़द की दाल के आटे से एक गोलाकार बांध बनाया जाता है।",
    },
    {
      step: "02",
      title: "तेल डालना",
      desc: "इस बांध के अंदर विशेषज्ञ द्वारा निर्धारित गुनगुना औषधीय तेल या घी धीरे-धीरे डाला जाता है।",
    },
    {
      step: "03",
      title: "तापमान नियंत्रण",
      desc: "तेल को एक निश्चित अवधि तक बांध में रखा जाता है और उसके तापमान को गुनगुना बनाए रखने के लिए बदला जाता है।",
    },
    {
      step: "04",
      title: "पूर्ण करना",
      desc: "निर्धारित समय के बाद, तेल और आटे के बांध को सावधानी से हटा दिया जाता है और उस क्षेत्र की सफाई की जाती है।",
    },
  ];

  return (
    <>
      {/* Google Fonts Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700&family=Philosopher:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#FFF1F2] via-rose-50 to-[#FFF1F2] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-400/5 to-red-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 rounded-full px-4 py-2 mb-6 border border-rose-200">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">
                  हृदय स्वास्थ्य चिकित्सा
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6"
                style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
              >
                हृदय बस्ति थेरेपी
              </h1>

              <h2 className="text-xl md:text-2xl text-rose-700 mb-6 font-medium">
                हृदय को पोषण, बल और भावनात्मक संतुलन प्रदान करें
              </h2>

              <p
                className="text-gray-600 text-lg leading-relaxed mb-8"
                style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
              >
                हृदय बस्ति एक अनूठी, गहरी और आरामदायक आयुर्वेदिक चिकित्सा है, जो
                विशेष रूप से हृदय क्षेत्र पर केंद्रित है। इसमें छाती पर आटे का
                एक बांध बनाकर उसमें गर्म औषधीय तेल को रखा जाता है, जो हृदय की
                मांसपेशियों को पोषण देता है और तनाव को दूर करता है।
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  अपॉइंटमेंट बुक करें
                </Link>

                <Link
                  href="/contact-at-skj-divya-ayurveda-hospital-ajmer"
                  className="inline-flex items-center justify-center border-2 border-rose-500 text-rose-600 hover:bg-rose-50 px-8 py-3 rounded-full font-medium transition-all duration-200"
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
                  src="/images/hridaya-basti-therapy.jpg" // Replace with your actual image path
                  alt="हृदय बस्ति थेरेपी - आयुर्वेदिक चिकित्सा"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-400/20 to-red-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-rose-50 text-rose-700 rounded-full px-4 py-2 mb-6 border border-rose-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                फायदे
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: "Philosopher, serif" }}
            >
              हृदय बस्ति के फायदे
            </h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-2xl border border-rose-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-rose-600 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p
                    className="text-gray-700 text-lg leading-relaxed"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indications Section */}
      <section className="py-16 lg:py-24 bg-[#FFF1F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-rose-50 text-rose-700 rounded-full px-4 py-2 mb-6 border border-rose-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                संकेत
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: "Philosopher, serif" }}
            >
              किन समस्याओं में उपयोगी है?
            </h2>
            <p
              className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              हृदय बस्ति निम्नलिखित समस्याओं और स्थितियों में अत्यंत प्रभावी है:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-rose-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center group-hover:bg-rose-200 transition-colors duration-300">
                    <indication.icon className="w-5 h-5 text-rose-600" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold text-gray-800 leading-tight"
                      style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                    >
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
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            हृदय बस्ति के लिए अपॉइंटमेंट बुक करें
          </h2>
          <p className="text-white mb-8">
            हमारे विशेषज्ञ चिकित्सक आपकी सेवा में तत्पर हैं। आज ही संपर्क करें!
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
      {/* ... (rest of the sections like Process, Safety, CTA can be added here, styled with the rose/red theme) */}
    </>
  );
}
