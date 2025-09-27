import Image from 'next/image';
import Link from 'next/link';
import { Droplets, Shield, Plus, Check, Clock, Star, Phone, MapPin } from 'lucide-react';

export default function RaktaMokshanaPage() {
  const benefits = [
    "शरीर से खराब और अशुद्ध रक्त को बाहर निकालता है।",
    "रक्त को पतला करके रक्त संचार में सुधार करता है।",
    "चोट, फ्रैक्चर और सर्जरी के बाद की सूजन को कम करता है।",
    "त्वचा रोगों जैसे एक्जिमा, सोरायसिस और मुंहासों में अत्यंत प्रभावी।",
    "गठिया, जोड़ों और नसों के दर्द से राहत दिलाता है।",
    "शरीर को डिटॉक्सिफाई करके नई ऊर्जा प्रदान करता है।"
  ];

  const indications = [
    { name: "सोरायसिस (Psoriasis)", icon: Shield },
    { name: "एक्जिमा (Eczema)", icon: Shield },
    { name: "मुंहासे और फोड़े-फुंसी", icon: Shield },
    { name: "गठिया का दर्द (Arthritis)", icon: Shield },
    { name: "वैरिकोज वेन्स (Varicose Veins)", icon: Droplets },
    { name: "जोड़ों का दर्द", icon: Shield },
    { name: "रक्त-विकार (Blood Disorders)", icon: Droplets },
    { name: "बालों का झड़ना (Alopecia)", icon: Shield },
    { name: "पुराने घाव जो भर न रहे हों", icon: Shield },
  ];

  const processSteps = [
    {
      step: "01",
      title: "तैयारी",
      desc: "रोगी के प्रभावित क्षेत्र को अच्छी तरह से साफ और संक्रमण-मुक्त किया जाता है।"
    },
    {
      step: "02",
      title: "जलोका का प्रयोग",
      desc: "औषधीय जोंक (जलोका) को सावधानीपूर्वक उस स्थान पर लगाया जाता है जहाँ से अशुद्ध रक्त निकालना होता है।"
    },
    {
      step: "03",
      title: "रक्त मोक्षण",
      desc: "जोंक धीरे-धीरे केवल अशुद्ध रक्त चूसती है। इस प्रक्रिया में 20 से 45 मिनट लग सकते हैं।"
    },
    {
      step: "04",
      title: "उपचार के बाद",
      desc: "जोंक के हटने के बाद, उस स्थान पर औषधीय लेप लगाकर पट्टी कर दी जाती है ताकि रक्तस्त्राव रुक जाए।"
    }
  ];

  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700&family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#FEF2F2] via-red-50 to-[#FEF2F2] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-400/5 to-rose-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 rounded-full px-4 py-2 mb-6 border border-red-200">
                <Droplets className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">आयुर्वेदिक रक्त शुद्धि चिकित्सा</span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6"
                style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
              >
                रक्त मोक्षण
              </h1>

              <h2 className="text-xl md:text-2xl text-red-700 mb-6 font-medium">
                (जलोका थेरेपी - Leech Therapy)
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                रक्त मोक्षण आयुर्वेद के पंचकर्म की एक प्रमुख शोधन प्रक्रिया है, जिसमें जोंक (जलोका) की मदद से शरीर के किसी हिस्से से अशुद्ध रक्त को बाहर निकाला जाता है। यह त्वचा रोगों, दर्द और सूजन के लिए एक अत्यधिक प्रभावी उपचार है।
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  अपॉइंटमेंट बुक करें
                </Link>

                <Link
                  href="/contact-at-skj-divya-ayurveda-hospital-ajmer"
                  className="inline-flex items-center justify-center border-2 border-red-500 text-red-600 hover:bg-red-50 px-8 py-3 rounded-full font-medium transition-all duration-200"
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
                  src="/images/rakta-mokshana-leech-therapy.jpg" // Replace with your actual image path
                  alt="रक्त मोक्षण - जलोका थेरेपी"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-400/20 to-rose-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Rakta Mokshana Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 rounded-full px-4 py-2 mb-6 border border-red-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">परिचय</span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              रक्त मोक्षण क्या है?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-rose-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                'रक्त' का अर्थ है खून और 'मोक्षण' का अर्थ है निकालना। यह एक रक्त-शोधन प्रक्रिया है। जलोका (जोंक) द्वारा रक्त मोक्षण सबसे सुरक्षित तरीकों में से एक है। जोंक की लार में हिरुडिन नामक एक यौगिक होता है जो रक्त को पतला करता है और थक्के बनने से रोकता है।
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                यह केवल अशुद्ध रक्त को चूसता है, जिससे प्रभावित क्षेत्र में रक्त का संचार सुधरता है और शरीर की स्वयं को ठीक करने की क्षमता बढ़ती है।
              </p>

              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <h3 className="text-xl text-red-800 font-semibold mb-3" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                  उपचार का लक्ष्य
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                  इस उपचार का मुख्य उद्देश्य रक्त में जमा विषाक्त पदार्थों को बाहर निकालकर रक्त को शुद्ध करना है, जिससे कई प्रकार के रोगों, विशेषकर त्वचा और जोड़ों से सम्बंधित समस्याओं का निवारण होता है।
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/LeechTherapy.png" // Replace with your actual image path
                alt="आयुर्वेदिक जलोका थेरेपी प्रक्रिया"
                width={500}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-[#FEF2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 rounded-full px-4 py-2 mb-6 border border-red-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">प्रक्रिया</span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              रक्त मोक्षण की प्रक्रिया
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
              यह एक विशेषज्ञ द्वारा की जाने वाली एक नियंत्रित और सुरक्षित प्रक्रिया है, जिसे चार चरणों में किया जाता है।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 hover:bg-white/80 hover:shadow-xl hover:shadow-rose-200/20 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="text-4xl md:text-5xl font-light text-red-600 mb-4 opacity-80">
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

                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-red-400 to-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
            
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-red-300/30 via-red-400/50 to-red-300/30 -z-10 mx-8"></div>
            
            <div className="hidden lg:block absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-red-400 rounded-full -z-10"></div>
            <div className="hidden lg:block absolute top-1/2 left-2/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-red-400 rounded-full -z-10"></div>
            <div className="hidden lg:block absolute top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-red-400 rounded-full -z-10"></div>
          </div>

          <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-red-200">
            <div className="flex items-center space-x-4 mb-6">
              <Clock className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-semibold text-gray-800" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                उपचार की समय अवधि
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
              एक सत्र में लगभग 30 से 60 मिनट लगते हैं। रोग की स्थिति के अनुसार, चिकित्सक कई सत्रों की सलाह दे सकते हैं।
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 rounded-full px-4 py-2 mb-6 border border-red-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                फायदे
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              रक्त मोक्षण के फायदे
            </h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-600 font-bold text-sm">{index + 1}</span>
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
      <section className="py-16 lg:py-24 bg-[#FEF2F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 rounded-full px-4 py-2 mb-6 border border-red-200">
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
              जलोका थेरेपी निम्नलिखित समस्याओं और स्थितियों में अत्यंत प्रभावी है:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, index) => (
              <div key={index} className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-red-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                    <indication.icon className="w-5 h-5 text-red-600" />
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
                                    स्वच्छ और औषधीय जोंक
                                </h4>
                                <p className="text-gray-600" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                                    उपचार में केवल स्वच्छ, सुरक्षित और औषधीय जोंक का उपयोग।
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                            <Check className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                                    संक्रमण रहित प्रक्रिया
                                </h4>
                                <p className="text-gray-600" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                                    पूरी प्रक्रिया में स्वच्छता और सुरक्षा के उच्चतम मानकों का पालन।
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
      <section className="py-16 bg-gradient-to-r from-red-500 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
                className="text-3xl md:text-4xl text-white mb-6"
                style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
            >
                आज ही रक्त शुद्धि का अनुभव करें
            </h2>
            
            <p className="text-rose-100 text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                प्राकृतिक और सुरक्षित जलोका थेरेपी के लिए आज ही संपर्क करें। हमारे विशेषज्ञों से सलाह लें और स्वस्थ जीवन की ओर कदम बढ़ाएं।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                    <Phone className="w-4 h-4 mr-2" />
                    अभी कॉल करें: +91 98765 43210
                </Link>
                
                <Link
                    href="/treatments-at-skj-ayurveda-hospital"
                    className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-full font-medium transition-all duration-200"
                >
                    अन्य उपचार देखें
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}