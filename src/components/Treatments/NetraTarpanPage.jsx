import Image from 'next/image';
import Link from 'next/link';
import { Eye, Plus, Check, Clock, Star, Phone, MapPin, Shield, Droplets } from 'lucide-react';

export default function NetraTarpanPage() {
  const benefits = [
    "कॉर्निया से धूल हटाकर आंखों की सफाई करता है",
    "सूखी आंखों को नमी प्रदान करता है", 
    "धुंधली दृष्टि में सुधार करता है",
    "आंखों की जलन को कम करता है",
    "आंखों की समस्याओं में सुधार करके मन की स्पष्टता बढ़ाता है"
  ];

  const indications = [
    { name: "सूखी आंखें सिंड्रोम", icon: Droplets },
    { name: "आंखों में जलन", icon: Eye },
    { name: "आंखों में वात रोग", icon: Shield },
    { name: "टेढ़ी आंखें", icon: Eye },
    { name: "नेत्रश्लेष्मलाशोथ (कंजक्टिवाइटिस)", icon: Eye },
    { name: "आंखों में दर्द", icon: Eye },
    { name: "आंखों से पानी आना", icon: Droplets },
    { name: "रतौंधी (नाइट ब्लाइंडनेस)", icon: Eye },
    { name: "भेंगापन", icon: Eye },
    { name: "निकट दृष्टि दोष (मायोपिया)", icon: Eye },
    { name: "काले धब्बे कम करता है (नियमित करने पर)", icon: Eye }
  ];

  const processSteps = [
    {
      step: "01",
      title: "तैयारी",
      desc: "उड़द की दाल का आटा आंख के चारों ओर बांध की तरह लगाया जाता है"
    },
    {
      step: "02", 
      title: "औषधीय घी डालना",
      desc: "इस नाली में हर्बल हीलिंग घी (घृत) डाला जाता है"
    },
    {
      step: "03",
      title: "उपचार की अवधि", 
      desc: "30-35 मिनट तक गर्म रखा जाता है जो आंख और आसपास के क्षेत्र को चिकना बनाता है"
    },
    {
      step: "04",
      title: "परिणाम",
      desc: "बेहतर दृष्टि के साथ सुंदर आंखें और आंखों के टिश्यू की मजबूती मिलती है"
    }
  ];

  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700&family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#FFFBE9] via-emerald-50 to-[#FFFBE9] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-teal-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
                <Eye className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">आयुर्वेदिक नेत्र चिकित्सा</span>
              </div>

              <h1 
                className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6"
                style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}
              >
                नेत्र तर्पण
              </h1>

              <h2 className="text-xl md:text-2xl text-emerald-700 mb-6 font-medium">
                आंखों को शक्ति प्रदान करने वाला उपचार
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                नेत्र का अर्थ आंख और तर्पण का अर्थ आंखों को शक्ति देना है। गेहूं के आटे से आंख के चारों ओर एक घेरा बनाकर 
                पलकों पर औषधीय घी डाला जाता है। यह दृष्टि सुधारने और मन की स्पष्टता के लिए एक उत्कृष्ट उपचार माना जाता है।
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
                  href="/contact" 
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
                  src="/images/netra-tarpan-treatment.jpg"
                  alt="नेत्र तर्पण - आयुर्वेदिक आंखों का इलाज"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Netra Tarpan Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">परिचय</span>
            </div>
            
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{fontFamily: 'Philosopher, serif'}}
            >
              नेत्र तर्पण क्या है?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                नेत्र का अर्थ आंख और तर्पण का अर्थ आंखों को शक्ति देना है। गेहूं के आटे से आंख के चारों ओर एक घेरा बनाकर 
                पलकों पर औषधीय घी डाला जाता है।
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                यह दृष्टि सुधारने और मन की स्पष्टता के लिए एक उत्कृष्ट उपचार माना जाता है। यह चिकित्सा आंखों को गहरा 
                पोषण प्रदान करती है और विभिन्न नेत्र रोगों में अत्यंत लाभकारी है।
              </p>

              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <h3 className="text-xl text-emerald-800 font-semibold mb-3" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                  उपचार का लक्ष्य
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                  इस उपचार का उद्देश्य आंखों का अधिकतम कायाकल्प प्रदान करना है। यह बेहतर दृष्टि के साथ सुंदर आंखें 
                  और आंखों के टिश्यू की मजबूती प्रदान करता है।
                </p>
              </div>
            </div>

            <div className="relative">
              <Image 
                src="/images/ayurvedic-eye-treatment.jpg"
                alt="आयुर्वेदिक नेत्र चिकित्सा प्रक्रिया"
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
            
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{fontFamily: 'Philosopher, serif'}}
            >
              नेत्र तर्पण की प्रक्रिया
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
              इस उपचार का उद्देश्य आंखों का अधिकतम कायाकल्प प्रदान करना है। उड़द की दाल का आटा आंख के गोले के चारों ओर इस तरह लगाया जाता है 
              कि एक बांध जैसा दिखाई देता है।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 hover:bg-white/80 hover:shadow-xl hover:shadow-amber-200/20 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="text-4xl md:text-5xl font-light text-emerald-600 mb-4 opacity-80">
                  {step.step}
                </div>
                
                <h3 
                  className="text-xl text-gray-800 mb-4 leading-tight flex-grow"
                  style={{fontFamily: 'Philosopher, serif'}}
                >
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                  {step.desc}
                </p>

                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
            
            {/* Connecting Lines (Desktop Only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-emerald-300/30 via-emerald-400/50 to-emerald-300/30 -z-10 mx-8"></div>
            
            {/* Connecting Dots (Desktop Only) */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full -z-10"></div>
            <div className="hidden lg:block absolute top-1/2 left-2/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full -z-10"></div>
            <div className="hidden lg:block absolute top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full -z-10"></div>
          </div>

          {/* Additional Process Details */}
          <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200">
            <div className="flex items-center space-x-4 mb-6">
              <Clock className="w-8 h-8 text-emerald-600" />
              <h3 className="text-2xl font-semibold text-gray-800" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                उपचार की समय अवधि
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
              फिर हर्बल हीलिंग घी (स्पष्ट मक्खन) को इस नाली में डाला जाता है जो आंख और आसपास के क्षेत्रों को चिकना बनाता है 
              और 30-35 मिनट तक गर्म रखा जाता है। यह बेहतर दृष्टि के साथ सुंदर आंखें और आंखों के टिश्यू की मजबूती प्रदान करता है।
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
              style={{fontFamily: 'Philosopher, serif'}}
            >
              नेत्र तर्पण के फायदे
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
              <span className="text-sm font-medium tracking-wide uppercase">
                संकेत
              </span>
            </div>

            <h2 
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{fontFamily: 'Philosopher, serif'}}
            >
              किन समस्याओं में उपयोगी है?
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
              नेत्र तर्पण निम्नलिखित नेत्र संबंधी समस्याओं में अत्यंत प्रभावी है
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

      {/* Safety & Expert Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-3xl md:text-4xl text-gray-800 mb-6"
                style={{fontFamily: 'Philosopher, serif'}}
              >
                विशेषज्ञ देखभाल और सुरक्षा
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                      प्रमाणित आयुर्वेदाचार्य
                    </h4>
                    <p className="text-gray-600" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                      केवल योग्य और अनुभवी आयुर्वेदाचार्य द्वारा ही उपचार
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                      शुद्ध औषधीय घी
                    </h4>
                    <p className="text-gray-600" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                      केवल प्रामाणिक और शुद्ध हर्बल घी का उपयोग
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                      व्यक्तिगत देखभाल
                    </h4>
                    <p className="text-gray-600" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
                      प्रत्येक रोगी की व्यक्तिगत आवश्यकताओं के अनुसार उपचार
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl border border-emerald-100">
              <h3 
                className="text-2xl font-semibold text-emerald-800 mb-6"
                style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}
              >
                क्यों चुनें SKJ Divya Ayurveda?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>20+ वर्षों का अनुभव</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>हजारों सफल उपचार</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>आधुनिक सुविधाएं</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>पारंपरिक विधि का पालन</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>व्यक्तिगत सलाह और फॉलो-अप</span>
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
            style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}
          >
            आज ही अपनी आंखों की देखभाल शुरू करें
          </h2>
          
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto" style={{fontFamily: 'Noto Sans Devanagari, sans-serif'}}>
            प्राकृतिक और सुरक्षित नेत्र तर्पण चिकित्सा के लिए आज ही संपर्क करें। हमारे विशेषज्ञों से सलाह लें।
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
              href="/treatments" 
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