import Image from "next/image";
import Link from "next/link";
import {
  Ear,
  Plus,
  Check,
  Clock,
  Star,
  Phone,
  MapPin,
  Shield,
} from "lucide-react";

export default function KarnaPuranaPage() {
  const benefits = [
    "श्रवण शक्ति (सुनने की क्षमता) में सुधार करता है।",
    "कान के संक्रमण, दर्द और खुजली में राहत देता है।",
    "सिरदर्द और माइग्रेन में अत्यंत लाभकारी है।",
    "तनाव, चिंता और अनिद्रा को कम करने में मदद करता है।",
    "मस्तिष्क और तंत्रिका तंत्र को शांत करता है।",
    "गर्दन और जबड़े के दर्द (TMJ) में आराम देता है।",
  ];

  const indications = [
    { name: "कान का दर्द (Earache)", icon: Ear },
    { name: "टिनिटस (कान बजना)", icon: Ear },
    { name: "सुनने में कमी (Hearing Loss)", icon: Ear },
    { name: "वर्टिगो / चक्कर आना", icon: Shield },
    { name: "जबड़े का दर्द (TMJ Pain)", icon: Shield },
    { name: "अनिद्रा (Insomnia)", icon: Shield },
    { name: "सिरदर्द और माइग्रेन", icon: Shield },
    { name: "कान में सूखापन और खुजली", icon: Ear },
  ];

  const processSteps = [
    {
      step: "01",
      title: "तैयारी",
      desc: "रोगी को आरामदायक स्थिति में एक तरफ लिटाया जाता है और सिर, गर्दन और कान के आसपास हल्की मालिश की जाती है।",
    },
    {
      step: "02",
      title: "तेल डालना",
      desc: "गुनगुने औषधीय तेल को धीरे-धीरे और लगातार कान में तब तक डाला जाता है जब तक कि कान की नली पूरी तरह से भर न जाए।",
    },
    {
      step: "03",
      title: "तेल को रोकना",
      desc: "तेल को 5 से 10 मिनट के लिए कान में ही रहने दिया जाता है ताकि यह अंदर की संरचनाओं को पोषण और चिकनाई दे सके।",
    },
    {
      step: "04",
      title: "प्रक्रिया पूर्ण करना",
      desc: "इसके बाद, तेल को कान से बाहर निकाल दिया जाता है और यही प्रक्रिया दूसरे कान के लिए दोहराई जाती है, जिससे गहरी शांति मिलती है।",
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
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/5 to-cyan-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 rounded-full px-4 py-2 mb-6 border border-sky-200">
                <Ear className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">
                  आयुर्वेदिक कर्ण चिकित्सा
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6"
                style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
              >
                कर्ण पूर्ण थेरेपी
              </h1>

              <h2 className="text-xl md:text-2xl text-sky-700 mb-6 font-medium">
                कानों के स्वास्थ्य और मानसिक शांति के लिए
              </h2>

              <p
                className="text-gray-600 text-lg leading-relaxed mb-8"
                style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
              >
                'कर्ण' का अर्थ है कान और 'पूर्ण' का अर्थ है भरना। इस सुखदायक
                चिकित्सा में, गर्म औषधीय तेल को कानों में कुछ समय के लिए रखा
                जाता है। यह कान से संबंधित समस्याओं को दूर करने और तंत्रिका
                तंत्र को शांत करने के लिए एक उत्कृष्ट उपचार है।
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
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
                  src="/images/karna-purana-therapy.jpg" // Replace with your actual image path
                  alt="कर्ण पूर्ण थेरेपी - आयुर्वेदिक कान का इलाज"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-cyan-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-violet-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Karna Purana Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 rounded-full px-4 py-2 mb-6 border border-sky-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                परिचय
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: "Philosopher, serif" }}
            >
              कर्ण पूर्ण थेरेपी क्या है?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <p
                className="text-gray-700 text-lg leading-relaxed mb-6"
                style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
              >
                कर्ण पूर्ण एक आरामदायक आयुर्वेदिक प्रक्रिया है जिसमें औषधीय तेल
                को कान में डाला जाता है। यह कान के मैल को नरम करता है, कान के
                अंदर की नाजुक हड्डियों और तंत्रिकाओं को पोषण देता है, और वात दोष
                के कारण होने वाली समस्याओं को शांत करता है।
              </p>

              <p
                className="text-gray-700 text-lg leading-relaxed mb-6"
                style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
              >
                यह न केवल कानों के लिए फायदेमंद है, बल्कि इसका शांत प्रभाव पूरे
                शरीर पर पड़ता है, जिससे तनाव और चिंता कम होती है और गहरी नींद को
                बढ़ावा मिलता है।
              </p>

              <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
                <h3
                  className="text-xl text-sky-800 font-semibold mb-3"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  उपचार का लक्ष्य
                </h3>
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  इस चिकित्सा का मुख्य उद्देश्य कानों को साफ, स्वस्थ और पोषित
                  करना है, साथ ही मस्तिष्क और तंत्रिका तंत्र को शांत करके समग्र
                  कल्याण को बढ़ावा देना है।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 rounded-full px-4 py-2 mb-6 border border-sky-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                प्रक्रिया
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: "Philosopher, serif" }}
            >
              कर्ण पूर्ण की प्रक्रिया
            </h2>

            <p
              className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              यह एक सरल, दर्द रहित और अत्यंत आरामदायक प्रक्रिया है जिसे चार
              मुख्य चरणों में पूरा किया जाता है।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-cyan-200/50 hover:bg-white/80 hover:shadow-xl hover:shadow-cyan-200/20 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="text-4xl md:text-5xl font-light text-sky-600 mb-4 opacity-80">
                  {step.step}
                </div>

                <h3
                  className="text-xl text-gray-800 mb-4 leading-tight flex-grow"
                  style={{ fontFamily: "Philosopher, serif" }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-gray-600 leading-relaxed text-sm"
                  style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                >
                  {step.desc}
                </p>

                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}

            <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-sky-300/30 via-sky-400/50 to-sky-300/30 -z-10 mx-8"></div>

            <div className="hidden lg:block absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-sky-400 rounded-full -z-10"></div>
            <div className="hidden lg:block absolute top-1/2 left-2/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-sky-400 rounded-full -z-10"></div>
            <div className="hidden lg:block absolute top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-sky-400 rounded-full -z-10"></div>
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
              कर्ण पूर्ण थेरेपी के फायदे
            </h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-sky-50 to-cyan-50 p-6 rounded-2xl border border-sky-100 hover:shadow-lg transition-all duration-300"
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
              कर्ण पूर्ण निम्नलिखित समस्याओं और स्थितियों में अत्यंत प्रभावी है:
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

      {/* Safety & Expert Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl text-gray-800 mb-6"
                style={{ fontFamily: "Philosopher, serif" }}
              >
                विशेषज्ञ देखभाल और सुरक्षा
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      className="text-lg font-semibold text-gray-800 mb-2"
                      style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                    >
                      प्रमाणित आयुर्वेदाचार्य
                    </h4>
                    <p
                      className="text-gray-600"
                      style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                    >
                      केवल योग्य और अनुभवी आयुर्वेदाचार्य की देखरेख में उपचार।
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      className="text-lg font-semibold text-gray-800 mb-2"
                      style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                    >
                      शुद्ध औषधीय तेल
                    </h4>
                    <p
                      className="text-gray-600"
                      style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                    >
                      उपचार में केवल उच्च गुणवत्ता वाले और शुद्ध हर्बल तेलों का
                      उपयोग।
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      className="text-lg font-semibold text-gray-800 mb-2"
                      style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                    >
                      व्यक्तिगत देखभाल
                    </h4>
                    <p
                      className="text-gray-600"
                      style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                    >
                      प्रत्येक रोगी की व्यक्तिगत आवश्यकताओं के अनुसार उपचार।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl border border-emerald-100">
              <h3
                className="text-2xl font-semibold text-emerald-800 mb-6"
                style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
              >
                क्यों चुनें SKJ Divya Ayurveda?
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <span
                    className="text-gray-700"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    20+ वर्षों का अनुभव
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <span
                    className="text-gray-700"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    हजारों सफल उपचार
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <span
                    className="text-gray-700"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    आधुनिक सुविधाएं
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <span
                    className="text-gray-700"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    पारंपरिक विधि का पालन
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <span
                    className="text-gray-700"
                    style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
                  >
                    व्यक्तिगत सलाह और फॉलो-अप
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl text-white mb-6"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            अपने कानों को दें आयुर्वेदिक देखभाल
          </h2>

          <p
            className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            कर्ण पूर्ण थेरेपी के आरामदायक और curative लाभों का अनुभव करने के लिए
            आज ही हमारे विशेषज्ञ से संपर्क करें।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center bg-white text-sky-600 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              अभी कॉल करें: +91 9828034603
            </Link>

            <Link
              href="/treatments-at-skj-ayurveda-hospital"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-3 rounded-full font-medium transition-all duration-200"
            >
              अन्य उपचार देखें
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
