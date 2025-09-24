'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Linkedin, Clock, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
      
      <footer className="bg-[#1D4026] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Top Section */}
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                {/* Logo Image with white background */}
                <div className="relative  bg-white rounded-full">
                  <Image
                    src="/images/skj-footer-logo.jpg"
                    alt="SKJ Divya Ayurveda Logo"
                    width={94}
                    height={94}
                    className="w-28 h-28 object-contain rounded-full"
                    priority
                  />
                </div>
                
               
                <span 
                  className="text-2xl text-white font-light tracking-wide"
                  style={{fontFamily: 'Philosopher, serif'}}
                >
                  SKJ Divya Ayurveda Hospital
                </span>
              </div>

              {/* Description */}
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md">
                Providing authentic Ayurvedic treatments to restore health and promote natural healing through traditional therapies.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <Link 
                  href="http://facebook.com/p/SKJ-DIVYA-Ayurveda-Hospital-Panchkerma-Research-Center-100075817483243/" 
                  target='_blank'
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110 transform"
                >
                  <Facebook size={18} />
                </Link>
                <Link 
                  href="https://www.instagram.com/skj_divyaayurvedahospital/" 
                    target='_blank'
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110 transform"
                >
                  <Instagram size={18} />
                </Link>
                {/* <Link 
                  href="#" 
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110 transform"
                >
                  <Youtube size={18} />
                </Link>
                <Link 
                  href="#" 
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110 transform"
                >
                  <Linkedin size={18} />
                </Link> */}
              </div>
            </div>

            {/* Working Hours */}
            <div className="lg:col-span-1">
              <h3 
                className="text-xl font-semibold mb-6"
                style={{fontFamily: 'Philosopher, serif'}}
              >
                Working Hours
              </h3>
              <div className="space-y-4">
                <p className="text-white/80">
                  We're here to serve your health needs
                </p>
                <div className="flex items-start space-x-3">
                  <Clock size={18} className="text-emerald-400 mt-1 flex-shrink-0" />
                  <div className="text-white/80">
                    <div>Monday - Saturday: <br/> 8:00 AM - 8:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock size={18} className="text-emerald-400 mt-1 flex-shrink-0" />
                  <div className="text-white/80">
                    <div>Sunday: 9:00 AM - 2:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 
                className="text-xl font-semibold mb-6"
                style={{fontFamily: 'Philosopher, serif'}}
              >
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/" 
                    className="text-white/80 hover:text-white hover:text-emerald-300 transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about-skj-divya-ayurveda-hospital-ajmer" 
                    className="text-white/80 hover:text-white hover:text-emerald-300 transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services" 
                    className="text-white/80 hover:text-white hover:text-emerald-300 transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/doctors" 
                    className="text-white/80 hover:text-white hover:text-emerald-300 transition-colors duration-200"
                  >
                    Our Doctors
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/treatments" 
                    className="text-white/80 hover:text-white hover:text-emerald-300 transition-colors duration-200"
                  >
                    Treatments
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-white/80 hover:text-white hover:text-emerald-300 transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Address & Contact Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 border-t border-white/20 pt-8">
            {/* Address */}
            <div>
              <h3 
                className="text-xl font-semibold mb-4"
                style={{fontFamily: 'Philosopher, serif'}}
              >
                Address
              </h3>
              <p className="text-white/80 leading-relaxed">
                SKJ Divya Ayurveda Hospital<br />
                11, Aashirwad Gandhinagar, gali no 1, Makarwali Rd, opp. Dainik Bhaskar press,Ajmer, Rajasthan<br />
                305001, India
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 
                className="text-xl font-semibold mb-4"
                style={{fontFamily: 'Philosopher, serif'}}
              >
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-emerald-400" />
                  <span className="text-white/80">0145-4062302</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-emerald-400" />
                  <span className="text-white/80">9828034603</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-emerald-400" />
                  <span className="text-white/80">skjduywayurveda@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 text-sm mb-4 md:mb-0">
                © 2025 SKJ Ayurveda Hospital. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link 
                  href="/terms" 
                  className="text-white/60 hover:text-white/80 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-white/60 hover:text-white/80 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

      
      </footer>
    </>
  );
}