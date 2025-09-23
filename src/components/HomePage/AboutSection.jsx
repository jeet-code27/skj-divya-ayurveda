import { Plus, Check } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
      
      <section className="py-16 lg:py-24 bg-[#FFFBE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Top Left Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg relative h-64">
                  <Image 
                    src="/images/ayurveda-hospital.png" 
                    alt="Ayurvedic hospital environment"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>

                {/* Top Right Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg mt-8 relative h-64">
                  <Image 
                    src="/images/panchkarma-therapy.png" 
                    alt="Panchkarma therapy at SKJ Divya Ayurveda"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>

                {/* Bottom Left Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg relative h-64">
                  <Image 
                    src="/images/doctor-consulting.webp" 
                    alt="Ayurvedic doctor consultation"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>

                {/* Bottom Right Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg relative h-64">
                  <Image 
                    src="/images/hospital-interior.webp" 
                    alt="Traditional Ayurvedic medicines"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl"></div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:pl-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200">
                <Plus className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide uppercase">
                  About Us
                </span>
              </div>

              {/* Main Heading */}
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
                style={{fontFamily: 'Philosopher, serif'}}
              >
                Welcome to SKJ Divya Ayurveda Hospital
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At SKJ Divya Ayurveda Hospital, we are dedicated to providing authentic and effective Ayurvedic treatments. We believe in treating the root cause of illness, not just the symptoms, to bring lasting health and wellness.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                Our team of highly qualified and experienced Ayurvedic doctors, led by <span className="font-semibold text-emerald-700">Dr. S.K. Sharma</span>, uses traditional Panchkarma therapies and natural medicines to help our patients. We offer a peaceful and supportive environment where your body can heal itself naturally.
              </p>

              {/* Specializations Heading */}
              <h3 
                className="text-xl md:text-2xl text-gray-800 mb-4"
                style={{fontFamily: 'Philosopher, serif'}}
              >
                We specialize in treating:
              </h3>

              {/* Features List */}
              <div className="space-y-6">
                {/* Feature 1 */}
                <div>
                  <h4 
                    className="text-lg md:text-xl text-gray-800 mb-2 flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span>Joint and Muscular Pain (Knee, Back, Cervical)</span>
                  </h4>
                </div>

                {/* Feature 2 */}
                <div>
                  <h4 
                    className="text-lg md:text-xl text-gray-800 mb-2 flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span>Digestive Issues (Acidity, Ulcers, Constipation)</span>
                  </h4>
                </div>
                
                {/* Feature 3 */}
                <div>
                  <h4 
                    className="text-lg md:text-xl text-gray-800 mb-2 flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span>Stress and Lifestyle Disorders</span>
                  </h4>
                </div>
                
                {/* Feature 4 */}
                <div>
                  <h4 
                    className="text-lg md:text-xl text-gray-800 mb-2 flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span>And many more health conditions</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}