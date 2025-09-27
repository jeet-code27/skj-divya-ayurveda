import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Plus, Check, Clock, Star, Phone, MapPin, Droplets, Heart } from 'lucide-react';

export default function SnehdharaPage() {
  const benefits = [
    "स्नायु (Ligaments) और मांसपेशियों को मजबूती प्रदान करता है।",
    "जोड़ों के रोग, दर्द और सूजन में अत्यंत लाभकारी है।",
    "तनाव, चिंता और मानसिक थकान को दूर करता है।",
    "रोग प्रतिरोधक क्षमता (Immunity) को बढ़ाता है।",
    "त्वचा की सेहत और चमक में सहायक है।",
    "शरीर को आराम देता है और ऊर्जा के स्तर को बढ़ाता है।"
  ];

  const indications = [
    { name: "मांसपेशियों का दर्द", icon: Plus },
    { name: "जोड़ों का दर्द (Arthralgia)", icon: Droplets },
    { name: "तंत्रिका संबंधी विकार", icon: Heart },
    { name: "तनाव और चिंता", icon: Heart },
    { name: "रुमेटीइड गठिया (Rheumatoid Arthritis)", icon: Droplets },
    { name: "त्वचा के सूखेपन की समस्या", icon: Plus },
    { name: "शरीर की कमजोरी", icon: Plus },
    { name: "अनिद्रा (Insomnia)", icon: Heart },
  ];

  const processSteps = [
    {
      step: "01",
      title: "तैयारी",
      desc: "रोगी को आरामदायक स्थिति में बिठाया जाता है। विशेषज्ञ उपचार के क्षेत्र को तैयार करते हैं।"
    },
    {
      step: "02",
      title: "तेल की धारा",
      desc: "शरीर के प्रभावित क्षेत्र (जैसे पीठ, गर्दन या जोड़) पर गुनगुने औषधीय तेल की धीमी और निरंतर धारा डाली जाती है।"
    },
    {
      step: "03",
      title: "मालिश और अवशोषण",
      desc: "तेल की धारा के साथ-साथ हल्की मालिश की जाती है ताकि तेल त्वचा और ऊतकों में गहराई तक समा सके।"
    },
    {
      step: "04",
      title: "उपचार पूर्ण करना",
      desc: "निर्धारित समय के बाद, अतिरिक्त तेल को हटा दिया जाता है और रोगी को आराम करने के लिए निर्देशित किया जाता है।"
    }
  ];

  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700&family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#F5FEEB] via-emerald-50 to-[#F5FEEB] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-teal-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">आयुर्वेदिक तेल चिकित्सा</span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6"
                style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
              >
                स्नेहधारा थेरेपी
              </h1>

              <h2 className="text-xl md:text-2xl text-emerald-700 mb-6 font-medium">
                मांसपेशियों और जोड़ों को पोषण, तनाव से मुक्ति
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                स्नेहधारा, जिसका अर्थ है 'तेल की धारा', आयुर्वेद की एक शक्तिशाली बाहरी तेल चिकित्सा है। इसमें शरीर के प्रभावित क्षेत्रों पर गुनगुने औषधीय तेल की निरंतर धारा डाली जाती है, जो मांसपेशियों और जोड़ों को गहरी राहत और पोषण प्रदान करती है।
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
                  src="/images/snehdhara.png" // Replace with your actual image path
                  alt="स्नेहधारा थेरेपी - आयुर्वेदिक तेल चिकित्सा"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-lime-400/20 to-yellow-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Snehdhara Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">परिचय</span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              स्नेहधारा थेरेपी क्या है?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                स्नेहधारा एक विशिष्ट उपचार विधि है जिसमें औषधीय तेलों को एक विशेष उपकरण के माध्यम से नियंत्रित गति से शरीर पर धीरे-धीरे डाला जाता है। यह प्रक्रिया शरीर के वात दोष को शांत करने, मांसपेशियों को मजबूत करने और जोड़ों की गतिशीलता में सुधार करने में मदद करती है।
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                यह सिर्फ शारीरिक दर्द से राहत नहीं देता, बल्कि मन और शरीर को गहरा आराम भी प्रदान करता है, जिससे मानसिक स्पष्टता और भावनात्मक स्थिरता आती है।
              </p>

              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <h3 className="text-xl text-emerald-800 font-semibold mb-3" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                  उपचार का लक्ष्य
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                  इस चिकित्सा का मुख्य उद्देश्य शरीर के दर्द को कम करना, सूजन को शांत करना, मांसपेशियों और स्नायु को पोषण देना, और समग्र शारीरिक व मानसिक स्वास्थ्य को बढ़ावा देना है।
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/snehdhara2.png" // Replace with your actual image path
                alt="आयुर्वेदिक स्नेहधारा प्रक्रिया"
                width={500}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-[#F5FEEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">प्रक्रिया</span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              स्नेहधारा की प्रक्रिया
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
              यह एक आरामदायक और प्रभावी प्रक्रिया है, जिसे चार मुख्य चरणों में पूरा किया जाता है।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-teal-200/50 hover:bg-white/80 hover:shadow-xl hover:shadow-teal-200/20 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="text-4xl md:text-5xl font-light text-emerald-600 mb-4 opacity-80">
                  {step.step}
                </div>

                <h3
                  className="text-xl text-gray-800 mb-4 leading-tight flex-grow"
                  style={{ fontFamily: 'Philosopher, serif' }}
                >
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                  {step.desc}
                </p>

                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
            
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-emerald-300/30 via-emerald-400/50 to-emerald-300/30 -z-10 mx-8"></div>
            
            <div className="hidden lg:block absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full -z-10"></div>
            <div className="hidden lg:block absolute top-1/2 left-2/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full -z-10"></div>
            <div className="hidden lg:block absolute top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full -z-10"></div>
          </div>

          <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200">
            <div className="flex items-center space-x-4 mb-6">
              <Clock className="w-8 h-8 text-emerald-600" />
              <h3 className="text-2xl font-semibold text-gray-800" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                उपचार की समय अवधि
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
              एक सत्र में आमतौर पर 45 से 60 मिनट लगते हैं। चिकित्सक की सलाह के अनुसार, सर्वोत्तम परिणामों के लिए कई सत्रों का एक कोर्स निर्धारित किया जा सकता है।
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
              <span className="text-sm font-medium tracking-wide uppercase">
                फायदे
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              स्नेहधारा थेरेपी के फायदे
            </h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-emerald-600 font-bold text-sm">{index + 1}</span>
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

      {/* Indications Section */}
      <section className="py-16 lg:py-24 bg-[#F5FEEB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                संकेत
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              किन समस्याओं में उपयोगी है?
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
              स्नेहधारा निम्नलिखित समस्याओं और स्थितियों में अत्यंत प्रभावी है:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, index) => (
              <div key={index} className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-emerald-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                    <indication.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 leading-tight" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
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
                                    शुद्ध औषधीय तेल
                                </h4>
                                <p className="text-gray-600" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                                    उपचार में केवल उच्च गुणवत्ता वाले और शुद्ध हर्बल तेलों का उपयोग।
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
                className="text-3xl md:text-4xl text-white mb-6"
                style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
            >
                स्नेहधारा से पाएं दर्द मुक्त जीवन
            </h2>
            
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                मांसपेशियों और जोड़ों के दर्द से राहत पाने और शारीरिक कायाकल्प के लिए आज ही हमारे विशेषज्ञ से संपर्क करें।
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