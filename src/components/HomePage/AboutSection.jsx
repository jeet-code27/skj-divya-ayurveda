'use client';
import { Plus, Check } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
      
      <section className="py-16 lg:py-24 bg-[#FFFBE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Image Grid */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Top Left Image */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-2xl overflow-hidden shadow-lg relative h-64"
                >
                  <Image 
                    src="/images/hospital-skj-divya-ayurveda.jpg" 
                    alt="Ayurvedic hospital environment"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </motion.div>

                {/* Top Right Image */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-2xl overflow-hidden shadow-lg mt-8 relative h-64"
                >
                  <Image 
                    src="/images/doctor-with-patient.jpg" 
                    alt="Panchkarma therapy at SKJ Divya Ayurveda"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </motion.div>

                {/* Bottom Left Image */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="rounded-2xl overflow-hidden shadow-lg relative h-64"
                >
                  <Image 
                    src="/images/doctor-cosulting-patient.jpg" 
                    alt="Ayurvedic doctor consultation"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </motion.div>

                {/* Bottom Right Image */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="rounded-2xl overflow-hidden shadow-lg relative h-64"
                >
                  <Image 
                    src="/images/hospital-reception.jpg" 
                    alt="Traditional Ayurvedic medicines"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </motion.div>
              </div>

            
            </motion.div>

            {/* Right Side - Content */}
            <div className="lg:pl-8">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 rounded-full px-4 py-2 mb-6 border border-emerald-200"
              >
                <Plus className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide uppercase">
                  About Us
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
                style={{fontFamily: 'Philosopher, serif'}}
              >
                Welcome to SKJ Divya Ayurveda Hospital
              </motion.h2>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-600 text-lg leading-relaxed mb-6 text-justify"
              >
                At SKJ Divya Ayurveda Hospital, we are dedicated to providing authentic and effective Ayurvedic treatments. We believe in treating the root cause of illness, not just the symptoms, to bring lasting health and wellness.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-gray-600 text-lg leading-relaxed mb-12 text-justify"
              >
                Our team of highly qualified and experienced Ayurvedic doctors, led by <span className="font-semibold text-emerald-700">Dr. S.K. Sharma</span>, uses traditional Panchkarma therapies and natural medicines to help our patients. We offer a peaceful and supportive environment where your body can heal itself naturally.
              </motion.p>

              {/* Specializations Heading */}
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl md:text-2xl text-gray-800 mb-4"
                style={{fontFamily: 'Philosopher, serif'}}
              >
                We specialize in treating:
              </motion.h3>

              {/* Features List */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="space-y-6"
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}