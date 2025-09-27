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
  Wind,
  BrainCircuit,
} from "lucide-react";

export default function NasyaTherapyPage() {
  const benefits = [
    "नाक के मार्ग और साइनस को साफ करता है।",
    "श्वसन क्रिया में सुधार करता है और एलर्जी में राहत देता है।",
    "साइनस को दूर कर सिरदर्द और माइग्रेन को कम करता है।",
    "मानसिक स्पष्टता, एकाग्रता और याददाश्त को बढ़ाता है।",
    "प्रतिरक्षा प्रणाली (Immunity) को मजबूत करता है।",
    "तनाव, चिंता को कम कर नींद की गुणवत्ता में सुधार करता है।",
  ];

  const indications = [
    { name: "साइनसाइटिस (Sinusitis)", icon: Wind },
    { name: "सिरदर्द और माइग्रेन", icon: BrainCircuit },
    { name: "एलर्जिक राइनाइटिस", icon: Wind },
    { name: "तनाव और चिंता", icon: BrainCircuit },
    { name: "अनिद्रा (Insomnia)", icon: BrainCircuit },
    { name: "गर्दन और कंधे की जकड़न", icon: Plus },
    { name: "बालों का झड़ना", icon: Plus },
    { name: "समय से पहले बालों का सफेद होना", icon: Plus },
  ];

  const processSteps = [
    {
      step: "01",
      title: "पूर्व-कर्म (तैयारी)",
      desc: "रोगी को आराम से लिटाकर चेहरे, सिर और गर्दन पर हल्की मालिश की जाती है और भाप दी जाती है।",
    },
    {
      step: "02",
      title: "औषधि डालना",
      desc: "सिर को थोड़ा पीछे झुकाकर प्रत्येक नथुने में गुनगुने औषधीय तेल या घी की कुछ बूँदें डाली जाती हैं।",
    },
    {
      step: "03",
      title: "पश्च-कर्म",
      desc: "दवा डालने के बाद, गले में आए कफ या दवा को थूकने के लिए कहा जाता है। हथेलियों और तलवों पर मालिश की जाती है।",
    },
    {
      step: "04",
      title: "आराम",
      desc: "प्रक्रिया के बाद, रोगी को कुछ मिनटों के लिए शांति से लेटने और आराम करने की सलाह दी जाती है।",
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
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#F0F9FF] via-sky-50 to-[#F0F9FF] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/5 to-blue-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 rounded-full px-4 py-2 mb-6 border border-sky-200">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">
                  पंचकर्म चिकित्सा
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6"
                style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
              >
                नस्य थेरेपी
              </h1>

              <h2 className="text-xl md:text-2xl text-sky-700 mb-6 font-medium">
                साइनस, सिरदर्द और मानसिक स्पष्टता का आयुर्वेदिक समाधान
              </h2>

              <p
                className="text-gray-600 text-lg leading-relaxed mb-8"
                style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
              >
                नस्य थेरेपी आयुर्वेद की पंचकर्म चिकित्सा का एक महत्वपूर्ण अंग
                है, जिसमें नाक के माध्यम से औषधीय तेल, घी या जड़ी-बूटियों का
                प्रयोग किया जाता है। नाक को 'सिर का द्वार' माना जाता है, इसलिए
                यह चिकित्सा सिर, गर्दन और कंधों से जुड़े रोगों में अत्यंत
                प्रभावी है।
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  अपॉइंटमेंट बुक करें
                </Link>

                <Link
                  href="/contact-at-skj-divya-ayurveda-hospital-ajmer"
                  className="inline-flex items-center justify-center border-2 border-sky-500 text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-full font-medium transition-all duration-200"
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
                  src="/images/nasya-therapy.jpg" // Replace with your actual image path
                  alt="नस्य थेरेपी - आयुर्वेदिक चिकित्सा"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-sky-50 text-sky-700 rounded-full px-4 py-2 mb-6 border border-sky-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                फायदे
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: "Philosopher, serif" }}
            >
              नस्य थेरेपी के फायदे
            </h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-2xl border border-sky-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sky-600 font-bold text-sm">
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
      <section className="py-16 lg:py-24 bg-[#F0F9FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-sky-50 text-sky-700 rounded-full px-4 py-2 mb-6 border border-sky-200">
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
              नस्य थेरेपी निम्नलिखित समस्याओं और स्थितियों में अत्यंत प्रभावी
              है:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-sky-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center group-hover:bg-sky-200 transition-colors duration-300">
                    <indication.icon className="w-5 h-5 text-sky-600" />
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
            नस्य थेरेपी से अपने श्वसन और मानसिक स्वास्थ्य को बेहतर बनाएं!
          </h2>
          <p className="text-white text-lg mb-8">
            आज ही अपॉइंटमेंट बुक करें और आयुर्वेदिक उपचार का लाभ उठाएं।
          </p>
          {/* Buttons */}
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
      {/* ... (rest of the sections like Process, Safety, CTA can be added here, styled with the sky/blue theme) */}
    </>
  );
}
