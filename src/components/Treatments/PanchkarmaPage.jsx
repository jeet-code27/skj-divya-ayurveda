import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Plus, Check, Clock, Star, Phone, MapPin } from 'lucide-react';

export default function PanchkarmaPage() {
  const benefits = [
    "पाचन क्रिया को मजबूत और बेहतर बनाता है।",
    "संपूर्ण शरीर की आंतरिक शुद्धि और विषहरण करता है।",
    "रोग प्रतिरोधक क्षमता (Immunity) को बढ़ाता है।",
    "बॉडी टिशू को फिर से बनाता है और वजन कम करने में सहायक है।",
    "शारीरिक और मानसिक स्वास्थ्य को बेहतर बनाता है।",
    "तनाव कम करता है और मन को शांत रखता है।"
  ];

  const therapies = [
    { name: "वमन (Vamana)", desc: "चिकित्सकीय उल्टी द्वारा शरीर से कफ दोष को बाहर निकालना।", icon: "vomit" }, // Placeholder for specific icon if available
    { name: "विरेचन (Virechana)", desc: "औषधीय जुलाब द्वारा पित्त दोष का शरीर से निष्कासन।", icon: "intestines" }, // Placeholder for specific icon if available
    { name: "नस्य (Nasya)", desc: "नाक के माध्यम से औषधीय तेल या पाउडर डालकर सिर और गले के दोषों को दूर करना।", icon: "nose" }, // Placeholder for specific icon if available
    { name: "बस्ति (Vasthi)", desc: "औषधीय काढ़े या तेल के एनिमा द्वारा वात दोष का संतुलन।", icon: "vagina" }, // Placeholder for specific icon if available (representing lower body/colon)
    { name: "रक्त मोक्षण (Rakthamokshana)", desc: "शरीर से दूषित रक्त को बाहर निकालकर रक्त को शुद्ध करना (जोंक थेरेपी)।", icon: "blood" }, // Placeholder for specific icon if available
  ];

  // Note: For icons in therapies, you'd typically use actual Lucide React icons like <Droplets />, <Shield /> etc.
  // I've used strings for now as direct matching icons for Vamana, Virechana, Nasya, Vasthi might need custom SVG or more abstract Lucide icons.
  // The images in the original infographic are good visual cues.

  const processIntro = "पंचकर्म पांच मुख्य शोधन प्रक्रियाओं का एक समूह है, जो शरीर से विषाक्त पदार्थों (अमा) को हटाने और दोषों को संतुलित करने के लिए डिज़ाइन किया गया है।";

  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700&family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#F5FEEB] via-lime-50 to-[#F5FEEB] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400/5 to-green-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-lime-100 text-lime-700 rounded-full px-4 py-2 mb-6 border border-lime-200">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">आयुर्वेदिक शोधन चिकित्सा</span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6"
                style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
              >
                पंचकर्म थेरेपी
              </h1>

              <h2 className="text-xl md:text-2xl text-lime-700 mb-6 font-medium">
                शरीर, मन और आत्मा की संपूर्ण शुद्धि
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                पंचकर्म आयुर्वेद की एक प्राचीन और शक्तिशाली शोधन प्रक्रिया है, जो शरीर से विषाक्त पदार्थों को बाहर निकालकर स्वास्थ्य को बहाल करती है। यह पाँच मुख्य चिकित्सीय प्रक्रियाओं का एक अनूठा संयोजन है जो शारीरिक और मानसिक संतुलन लाता है।
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  अपॉइंटमेंट बुक करें
                </Link>

                <Link
                  href="/contact-at-skj-divya-ayurveda-hospital-ajmer"
                  className="inline-flex items-center justify-center border-2 border-lime-500 text-lime-600 hover:bg-lime-50 px-8 py-3 rounded-full font-medium transition-all duration-200"
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
                  src="/images/panchkarma-therapy5.png" // You'll need an image for this. Can use the one from the provided image.
                  alt="पंचकर्म थेरेपी - शरीर की संपूर्ण शुद्धि"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-lime-400/20 to-green-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-lime-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Panchkarma Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-lime-100 text-lime-700 rounded-full px-4 py-2 mb-6 border border-lime-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">परिचय</span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              पंचकर्म थेरेपी क्या है?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-green-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                पंचकर्म, जैसा कि नाम से ही स्पष्ट है, पांच विशेष चिकित्सीय प्रक्रियाओं का एक समूह है। यह आयुर्वेद में शरीर के विषहरण, कायाकल्प और त्रिदोष (वात, पित्त, कफ) को संतुलित करने के लिए उपयोग किया जाता है।
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                ये प्रक्रियाएं शरीर से विषाक्त पदार्थों (अमा) को प्रभावी ढंग से बाहर निकालती हैं, जिससे स्वास्थ्य में सुधार होता है, ऊर्जा का स्तर बढ़ता है, और बीमारियों के प्रति प्रतिरोधक क्षमता मजबूत होती है।
              </p>

              <div className="bg-lime-50 p-6 rounded-2xl border border-lime-100">
                <h3 className="text-xl text-lime-800 font-semibold mb-3" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                  उपचार का लक्ष्य
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                  पंचकर्म का लक्ष्य शरीर को अंदर से साफ करना, दोषों को संतुलन में लाना और शारीरिक प्रणालियों को पुनर्जीवित करना है, जिससे दीर्घायु और उत्तम स्वास्थ्य प्राप्त हो सके।
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl">
             <Image
                  src="/images/panchkarma.jpg" // You'll need an image for this. Can use the one from the provided image.
                  alt="पंचकर्म थेरेपी - शरीर की संपूर्ण शुद्धि"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
            </div>
          </div>
        </div>
      </section>

      {/* Therapies Section (Process Section equivalent) */}
      <section className="py-16 lg:py-24 bg-[#F5FEEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-lime-100 text-lime-700 rounded-full px-4 py-2 mb-6 border border-lime-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">थेरेपी</span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              पंचकर्म की पाँच मुख्य थेरेपी
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
              {processIntro} प्रत्येक थेरेपी का उद्देश्य एक विशिष्ट दोष को संतुलित करना है।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {therapies.map((therapy, index) => (
              <div key={index} className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-lime-200/50 hover:bg-white/80 hover:shadow-xl hover:shadow-lime-200/20 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="text-4xl md:text-5xl font-light text-lime-600 mb-4 opacity-80">
                  {/* You can replace this with actual Lucide icons if you find suitable ones */}
                  {/* For now, just showing a placeholder icon or a number */}
                  {index + 1}
                </div>

                <h3
                  className="text-xl text-gray-800 mb-4 leading-tight flex-grow"
                  style={{ fontFamily: 'Philosopher, serif' }}
                >
                  {therapy.name}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                  {therapy.desc}
                </p>

                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-lime-400 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-lime-200">
            <div className="flex items-center space-x-4 mb-6">
              <Clock className="w-8 h-8 text-lime-600" />
              <h3 className="text-2xl font-semibold text-gray-800" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                उपचार की समय अवधि
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
              प्रत्येक पंचकर्म थेरेपी की अवधि और पूरा कोर्स व्यक्ति की स्वास्थ्य स्थिति, दोषों के संतुलन और चिकित्सक की सलाह के अनुसार भिन्न होता है। इसमें आमतौर पर कई दिन या सप्ताह लग सकते हैं।
            </p>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-lime-50 text-lime-700 rounded-full px-4 py-2 mb-6 border border-lime-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                फायदे
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              पंचकर्म थेरेपी के फायदे
            </h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-2xl border border-lime-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-lime-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Expert Section (Generic, reused) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2
                        className="text-3xl md:text-4xl text-gray-800 mb-6"
                        style={{ fontFamily: 'Philosopher, serif' }}
                    >
                        विशेषज्ञ देखभाल और सुरक्षा
                    </h2>
                    
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <Check className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                                    प्रमाणित आयुर्वेदाचार्य
                                </h4>
                                <p className="text-gray-600" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                                    केवल योग्य और अनुभवी आयुर्वेदाचार्य की देखरेख में उपचार।
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <Check className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                                    प्रामाणिक जड़ी-बूटियाँ
                                </h4>
                                <p className="text-gray-600" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                                    उपचार में केवल उच्च गुणवत्ता वाली और प्रामाणिक आयुर्वेदिक सामग्री का उपयोग।
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <Check className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                                    व्यक्तिगत उपचार योजना
                                </h4>
                                <p className="text-gray-600" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                                    प्रत्येक रोगी की शारीरिक प्रकृति और आवश्यकताओं के अनुसार अनुकूलित उपचार योजना।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl border border-emerald-100">
                    <h3
                        className="text-2xl font-semibold text-emerald-800 mb-6"
                        style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
                    >
                        क्यों चुनें SKJ Divya Ayurveda?
                    </h3>
                    
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <Star className="w-5 h-5 text-emerald-600" />
                            <span className="text-gray-700" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>20+ वर्षों का अनुभव</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Star className="w-5 h-5 text-emerald-600" />
                            <span className="text-gray-700" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>हजारों सफल उपचार</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Star className="w-5 h-5 text-emerald-600" />
                            <span className="text-gray-700" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>आधुनिक सुविधाएं</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Star className="w-5 h-5 text-emerald-600" />
                            <span className="text-gray-700" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>पारंपरिक विधि का पालन</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Star className="w-5 h-5 text-emerald-600" />
                            <span className="text-gray-700" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>व्यक्तिगत सलाह और फॉलो-अप</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section (Generic, reused) */}
      <section className="py-16 bg-gradient-to-r from-lime-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
                className="text-3xl md:text-4xl text-white mb-6"
                style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
            >
                आज ही पंचकर्म से स्वास्थ्य लाभ प्राप्त करें
            </h2>
            
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                संपूर्ण शरीर की शुद्धि और कायाकल्प के लिए हमारी विशेषज्ञ पंचकर्म थेरेपी के बारे में अधिक जानें।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center bg-white text-lime-600 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                    <Phone className="w-4 h-4 mr-2" />
                    अभी कॉल करें: +91 9828034603
                </Link>
                
                <Link
                    href="/treatments-at-skj-ayurveda-hospital"
                    className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-3 rounded-full font-medium transition-all duration-200"
                >
                    अन्य उपचार देखें
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}