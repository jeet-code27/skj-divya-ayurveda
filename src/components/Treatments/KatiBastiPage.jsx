import Image from 'next/image';
import Link from 'next/link';
import { Shield, Plus, Check, Clock, Star, Phone, MapPin } from 'lucide-react';

export default function KatiBastiPage() {
  const benefits = [
    "मांसपेशियों की अकड़न को दूर करता है",
    "साइटिका के दर्द में अत्यंत लाभकारी",
    "पुराने और तीव्र कमर दर्द में राहत देता है",
    "रीढ़ की हड्डी को मजबूती और पोषण प्रदान करता है",
    "कमर के क्षेत्र में रक्त परिसंचरण में सुधार करता है",
    "रीढ़ की हड्डी में लचीलापन बढ़ाता है"
  ];

  const indications = [
    { name: "कमर दर्द (लम्बर स्पॉन्डिलाइटिस)", icon: Shield },
    { name: "साइटिका", icon: Shield },
    { name: "मांसपेशियों में ऐंठन", icon: Shield },
    { name: "रीढ़ की हड्डी में अकड़न", icon: Shield },
    { name: "स्लिप डिस्क", icon: Shield },
    { name: "कटिस्नायुशूल (लम्बर स्पॉन्डिलोसिस)", icon: Shield },
  ];

  const processSteps = [
    {
      step: "01",
      title: "तैयारी",
      desc: "रोगी को आराम से पेट के बल लिटाया जाता है और उड़द दाल के आटे से कमर पर एक गोलाकार बांध बनाया जाता है।"
    },
    {
      step: "02",
      title: "औषधीय तेल डालना",
      desc: "इस बांध के अंदर रोगी की स्थिति के अनुसार गुनगुना औषधीय तेल सावधानी से डाला जाता है।"
    },
    {
      step: "03",
      title: "उपचार की अवधि",
      desc: "तेल को 30-40 मिनट तक कमर पर रखा जाता है और उसके तापमान को बनाए रखा जाता है ताकि ऊतकों को गहरा पोषण मिले।"
    },
    {
      step: "04",
      title: "परिणाम",
      desc: "तेल और बांध को हटाने के बाद हल्की मालिश की जाती है, जिससे दर्द और अकड़न में तत्काल राहत मिलती है।"
    }
  ];

  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700&family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#FFFBE9] via-orange-50 to-[#FFFBE9] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-amber-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 rounded-full px-4 py-2 mb-6 border border-orange-200">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">आयुर्वेदिक कटि चिकित्सा</span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6"
                style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
              >
                कटि बस्ति
              </h1>

              <h2 className="text-xl md:text-2xl text-orange-700 mb-6 font-medium">
                कमर दर्द और रीढ़ की समस्याओं का अचूक समाधान
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                'कटि' का अर्थ है कमर और 'बस्ति' का अर्थ है धारण करना। इस प्रक्रिया में उड़द की दाल के आटे का एक बांध बनाकर कमर पर रखा जाता है और उसमें गर्म औषधीय तेल भरा जाता है। यह कमर दर्द, अकड़न और साइटिका के लिए एक अत्यंत प्रभावी उपचार है।
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  अपॉइंटमेंट बुक करें
                </Link>

                <Link
                  href="/contact-at-skj-divya-ayurveda-hospital-ajmer"
                  className="inline-flex items-center justify-center border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full font-medium transition-all duration-200"
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
                  src="/images/kati-basti.jpg" // Replace with your actual image path
                  alt="कटि बस्ति - आयुर्वेदिक कमर दर्द का इलाज"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-amber-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Kati Basti Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 rounded-full px-4 py-2 mb-6 border border-orange-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">परिचय</span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              कटि बस्ति क्या है?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                कटि बस्ति एक पारंपरिक आयुर्वेदिक चिकित्सा है जिसमें औषधीय तेल को कमर के निचले हिस्से पर एक विशेष अवधि के लिए रखा जाता है। यह प्रक्रिया मांसपेशियों को आराम देने, सूजन कम करने और दर्द से राहत दिलाने में मदद करती है।
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                यह चिकित्सा न केवल दर्द को कम करती है, बल्कि रीढ़ की हड्डी और आसपास की मांसपेशियों को पोषण और मजबूती भी प्रदान करती है, जिससे भविष्य में होने वाली समस्याओं से बचाव होता है।
              </p>

              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <h3 className="text-xl text-orange-800 font-semibold mb-3" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                  उपचार का लक्ष्य
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                  इस उपचार का मुख्य उद्देश्य कमर और रीढ़ से संबंधित दर्द, अकड़न और अन्य वात विकारों को जड़ से खत्म करना है। यह प्रभावित क्षेत्र में लचीलापन और शक्ति को पुनर्स्थापित करता है।
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl">
             <Image
                  src="/images/kati-basti-treatment.jpg" // Replace with your actual image path
                  alt="कटि बस्ति - आयुर्वेदिक कमर दर्द का इलाज"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
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
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 rounded-full px-4 py-2 mb-6 border border-orange-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">प्रक्रिया</span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              कटि बस्ति की प्रक्रिया
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
              यह एक सरल और आरामदायक प्रक्रिया है, जिसे चार मुख्य चरणों में पूरा किया जाता है।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 hover:bg-white/80 hover:shadow-xl hover:shadow-amber-200/20 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="text-4xl md:text-5xl font-light text-orange-600 mb-4 opacity-80">
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

                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
            
            {/* Connecting Lines (Desktop Only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-orange-300/30 via-orange-400/50 to-orange-300/30 -z-10 mx-8"></div>
            
            {/* Connecting Dots (Desktop Only) */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full -z-10"></div>
            <div className="hidden lg:block absolute top-1/2 left-2/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full -z-10"></div>
            <div className="hidden lg:block absolute top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full -z-10"></div>
          </div>

          <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-orange-200">
            <div className="flex items-center space-x-4 mb-6">
              <Clock className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl font-semibold text-gray-800" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                उपचार की समय अवधि
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
              एक सत्र में लगभग 30-40 मिनट लगते हैं। सर्वोत्तम परिणामों के लिए, स्थिति की गंभीरता के आधार पर 5 से 7 दिनों का कोर्स करने की सलाह दी जाती है।
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 rounded-full px-4 py-2 mb-6 border border-orange-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                फायदे
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              कटि बस्ति के फायदे
            </h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-orange-600 font-bold text-sm">{index + 1}</span>
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
      <section className="py-16 lg:py-24 bg-[#FFFBE9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 rounded-full px-4 py-2 mb-6 border border-orange-200">
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
              कटि बस्ति निम्नलिखित समस्याओं और स्थितियों में अत्यंत प्रभावी है:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, index) => (
              <div key={index} className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                    <indication.icon className="w-5 h-5 text-orange-600" />
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

      {/* Safety & Expert Section (This section is generic and can be reused) */}
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
                                    केवल योग्य और अनुभवी आयुर्वेदाचार्य द्वारा ही उपचार
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
                                    केवल प्रामाणिक और शुद्ध हर्बल तेलों का उपयोग
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <Check className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                                    व्यक्तिगत देखभाल
                                </h4>
                                <p className="text-gray-600" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                                    प्रत्येक रोगी की व्यक्तिगत आवश्यकताओं के अनुसार उपचार
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

      {/* CTA Section (This section is also generic and can be reused) */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
                className="text-3xl md:text-4xl text-white mb-6"
                style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
            >
                आज ही कमर दर्द से छुटकारा पाएं
            </h2>
            
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                प्राकृतिक और सुरक्षित कटि बस्ति चिकित्सा के लिए आज ही संपर्क करें। हमारे विशेषज्ञों से सलाह लें और दर्द मुक्त जीवन जिएं।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                    <Phone className="w-4 h-4 mr-2" />
                    अभी कॉल करें: +91 98765 43210
                </Link>
                
                <Link
                    href="/treatments-at-skj-ayurveda-hospital"
                    className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full font-medium transition-all duration-200"
                >
                    अन्य उपचार देखें
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}