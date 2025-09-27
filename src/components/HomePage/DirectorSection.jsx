'use client';
import Link from 'next/link';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DirectorSection() {
  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
      
      <section className="py-16 lg:py-24 bg-[#FFFBE9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl text-gray-800 leading-tight mb-6"
              style={{fontFamily: 'Philosopher, serif'}}
            >
              Meet Our Visionary Leader
            </motion.h2>
            
            {/* Mission Statement */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-emerald-700 font-semibold italic mb-12 max-w-4xl mx-auto"
            >
              "OUR MOTIVE IS TO BUILD A HEALTHY INDIA & BELIEVE US WE WILL DO IT"
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/drsksharma.jpg"
                  alt="Dr. S.K. Sharma - Director of SKJ Divya Ayurveda Hospital"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '500px' }}
                />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <div className="lg:pl-8">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl text-emerald-800 mb-6"
                style={{fontFamily: 'Philosopher, serif'}}
              >
                Meet Our Director
              </motion.h3>

              {/* Description */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 text-gray-700 leading-relaxed"
              >
                <p>
                  <strong>Dr. S.K. Sharma</strong> is the Director of SKJ Divya Ayurveda Hospital. His dedication towards 
                  authentic Ayurvedic treatments has helped thousands of patients rediscover health and wellness 
                  through natural healing methods.
                </p>
                
                <p>
                  Dr. Sharma is an experienced Ayurvedacharya and visionary leader who emphasizes treating the 
                  root cause of illness rather than just symptoms. Through SKJ Divya Ayurveda Hospital, he is 
                  helping people embrace the ancient wisdom of Ayurveda for lasting health and happiness.
                </p>
                
                <p>
                  With decades of experience in Ayurvedic medicine, Dr. Sharma believes that traditional 
                  Ayurvedic practices combined with modern diagnostic approaches can provide comprehensive 
                  healthcare solutions. His leadership has established SKJ Divya Ayurveda as a trusted center 
                  for authentic Ayurvedic treatments.
                </p>
                
                <p>
                  Dr. Sharma aims to revolutionize healthcare by making Ayurveda accessible to everyone and 
                  educating people about the profound benefits of natural, holistic healing practices for 
                  sustainable wellness.
                </p>
              </motion.div>

              {/* Name Highlight */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 pt-6 border-t border-emerald-200"
              >
                <h4 
                  className="text-xl md:text-2xl text-emerald-700 font-bold"
                  style={{fontFamily: 'Philosopher, serif'}}
                >
                  DR. S.K. SHARMA
                </h4>
                <p className="text-gray-600">Director & Chief Ayurvedacharya</p>
              </motion.div>

              {/* CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8"
              >
                <Link 
                  href="/about-skj-divya-ayurveda-hospital-ajmer" 
                  className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Quote Section at Bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-12 border-t border-emerald-200"
          >
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-emerald-400 transform rotate-180" fill="currentColor" />
            </div>
            <blockquote 
              className="text-xl md:text-2xl text-center text-emerald-700 leading-relaxed max-w-4xl mx-auto italic"
              style={{fontFamily: 'Philosopher, serif'}}
            >
              "Ayurveda is not just a medical system, it's a way of life that brings harmony between body, 
              mind, and consciousness. Our mission is to make this ancient wisdom accessible to all for 
              a healthier India."
            </blockquote>
            <p className="text-center text-gray-600 mt-4">- Dr. S.K. Sharma</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}