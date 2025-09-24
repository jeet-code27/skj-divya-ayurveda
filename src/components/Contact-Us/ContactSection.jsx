'use client';
import Image from 'next/image';
import { useState } from 'react';
import { MapPin, Phone, Mail, Plus } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <>
      {/* Google Fonts Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap"
        rel="stylesheet"
      />
      
      <section className="relative min-h-[750px] flex items-center justify-center overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-amber-50 " />
        
        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 rounded-3xl  overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              
              {/* Left Side - Contact Form */}
              <div className="bg-[#1D4026] p-8 lg:p-12 flex flex-col justify-center">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center space-x-2 text-emerald-200 mb-4">
                    <Plus className="w-5 h-5" />
                    <span className="text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Philosopher, serif' }}>
                      Contact Us
                    </span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Philosopher, serif' }}>
                    Get in Touch With
                    <span className="block text-emerald-300" style={{ fontFamily: 'Philosopher, serif' }}>
                      SKJ Divya Ayurveda
                    </span>
                  </h2>
                  
                  <p className="text-emerald-100 text-lg leading-relaxed" style={{ fontFamily: 'Philosopher, serif' }}>
                    Contact us today to start your journey towards holistic wellness. We're here to assist with any inquiries or bookings
                  </p>
                </div>

                {/* Contact Form */}
                <div className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 text-gray-800 placeholder-gray-500 text-sm transition-all duration-300"
                      style={{ fontFamily: 'Philosopher, serif' }}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 text-gray-800 placeholder-gray-500 text-sm transition-all duration-300"
                      style={{ fontFamily: 'Philosopher, serif' }}
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 text-gray-800 placeholder-gray-500 text-sm transition-all duration-300"
                      style={{ fontFamily: 'Philosopher, serif' }}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 text-gray-800 placeholder-gray-500 text-sm transition-all duration-300"
                      style={{ fontFamily: 'Philosopher, serif' }}
                    />
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    placeholder="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 text-gray-800 placeholder-gray-500 text-sm transition-all duration-300 resize-none"
                    style={{ fontFamily: 'Philosopher, serif' }}
                  />

                  {/* Submit Button */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-4 px-6 rounded-lg text-base transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none shadow-lg hover:shadow-emerald-500/25 mt-6"
                    style={{ fontFamily: 'Philosopher, serif' }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Now'}
                  </button>
                </div>
              </div>

              {/* Right Side - Full Image with Overlay Contact Card */}
              <div className="relative overflow-hidden">
                {/* Full Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/hospital-reception.jpg"
                    alt="Serene woman in meditation pose with tropical background"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Subtle overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Contact Information Card - Positioned at bottom */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="text-left">
                          <p className="text-gray-800 font-semibold text-sm" style={{ fontFamily: 'Philosopher, serif' }}>
                            11, Aashirwad Gandhinagar, gali no 1, Makarwali Rd, opp. Dainik Bhaskar press,   Ajmer, Rajasthan
                          </p>
                          {/* <p className="text-gray-600 text-sm" style={{ fontFamily: 'Philosopher, serif' }}>
                            Ajmer, Rajasthan
                          </p> */}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="text-left">
                          <p className="text-gray-800 font-semibold text-sm" style={{ fontFamily: 'Philosopher, serif' }}>
                            +0145-4062302, 9828034603
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="text-left">
                          <p className="text-gray-800 font-semibold text-sm" style={{ fontFamily: 'Philosopher, serif' }}>
                            skjduywayurveda@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}