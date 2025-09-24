'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, Menu, X, Facebook, Instagram, Youtube, Linkedin, Mail, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Top Bar - Hidden on smaller screens */}
      <div className="hidden xl:block border-b border-white/20 px-4 lg:px-8 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-2">
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <Link href="http://facebook.com/p/SKJ-DIVYA-Ayurveda-Hospital-Panchkerma-Research-Center-100075817483243/" className="text-white/80 hover:text-white transition-colors duration-200 p-2 rounded-full bg-white/10 hover:bg-white/20">
                <Facebook size={16} />
              </Link>
              <Link href="https://www.instagram.com/skj_divyaayurvedahospital/" className="text-white/80 hover:text-white transition-colors duration-200 p-2 rounded-full bg-white/10 hover:bg-white/20">
                <Instagram size={16} />
              </Link>
              {/* <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200 p-2 rounded-full bg-white/10 hover:bg-white/20">
                <Youtube size={16} />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200 p-2 rounded-full bg-white/10 hover:bg-white/20">
                <Linkedin size={16} />
              </Link> */}
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>skjduywayurveda@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>0145-4062302</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-3 sm:py-4 lg:py-6">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                {/* Logo Image Container */}
                <div className="relative flex-shrink-0">
                  <Image
                    src="/images/skj-navbar-logo.png"
                    alt="SKJ Divya Ayurveda Logo"
                    width={70}
                    height={70}
                    className="w-20 h-20 sm:w-20 sm:h-20 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-contain"
                    priority
                  />
                </div>
                
                {/* Brand Text */}
                <div className="hidden xs:block">
                  <span 
                    className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-wide leading-tight" 
                    style={{fontFamily: 'Philosopher, serif'}}
                  >
                    <span className="block sm:inline">SKJ Divya</span>
                    <span className="block sm:inline sm:ml-1">Ayurveda</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link href="/" className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base">
                Home
              </Link>
              <Link href="/about-skj-divya-ayurveda-hospital-ajmer" className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base">
                About Us
              </Link>
              
              {/* Treatments Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base"
                >
                  <span>Treatments</span>
                  <ChevronDown size={16} className={`transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
                    <div className="py-2">
                      <Link href="/treatments/panchkarma" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 text-sm">
                        Panchkarma Therapy
                      </Link>
                      <Link href="/treatments/pain-management" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 text-sm">
                        Pain Management
                      </Link>
                      <Link href="/treatments/digestive-care" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 text-sm">
                        Digestive Care
                      </Link>
                      <Link href="/treatments/stress-relief" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 text-sm">
                        Stress Relief
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/doctors" className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base">
                Our Doctors
              </Link>

              {/* Patient Care Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsPagesOpen(!isPagesOpen)}
                  className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base"
                >
                  <span>Patient Care</span>
                  <ChevronDown size={16} className={`transform transition-transform duration-200 ${isPagesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isPagesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
                    <div className="py-2">
                      <Link href="/testimonials" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 text-sm">
                        Testimonials
                      </Link>
                      <Link href="/gallery" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 text-sm">
                        Gallery
                      </Link>
                      <Link href="/faq" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 text-sm">
                        FAQ
                      </Link>
                      <Link href="/blog" className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 text-sm">
                        Health Blog
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/contact-at-skj-divya-ayurveda-hospital-ajmer" className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base">
                Contact
              </Link>
            </nav>

            {/* CTA Button - Hidden on tablet, shown on desktop */}
            <div className="hidden xl:flex items-center">
              <Link 
                href="/appointment" 
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-black/40 backdrop-blur-md rounded-lg mt-2 border border-white/20 mx-0 sm:mx-4">
              <div className="px-4 py-6 space-y-4">
                <Link 
                  href="/" 
                  className="block text-white/90 hover:text-white transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about-skj-divya-ayurveda-hospital-ajmer" 
                  className="block text-white/90 hover:text-white transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                
                {/* Mobile Treatments */}
                <div>
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-white/90 hover:text-white transition-colors duration-200 font-medium"
                  >
                    <span>Treatments</span>
                    <ChevronDown size={16} className={`transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <Link 
                        href="/treatments/panchkarma" 
                        className="block text-white/80 hover:text-white transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Panchkarma
                      </Link>
                      <Link 
                        href="/treatments/pain-management" 
                        className="block text-white/80 hover:text-white transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pain Management
                      </Link>
                      <Link 
                        href="/treatments/digestive-care" 
                        className="block text-white/80 hover:text-white transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Digestive Care
                      </Link>
                      <Link 
                        href="/treatments/stress-relief" 
                        className="block text-white/80 hover:text-white transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Stress Relief
                      </Link>
                    </div>
                  )}
                </div>

                <Link 
                  href="/doctors" 
                  className="block text-white/90 hover:text-white transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Doctors
                </Link>

                {/* Mobile Patient Care */}
                <div>
                  <button 
                    onClick={() => setIsPagesOpen(!isPagesOpen)}
                    className="flex items-center justify-between w-full text-white/90 hover:text-white transition-colors duration-200 font-medium"
                  >
                    <span>Patient Care</span>
                    <ChevronDown size={16} className={`transform transition-transform duration-200 ${isPagesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isPagesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <Link 
                        href="/testimonials" 
                        className="block text-white/80 hover:text-white transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Testimonials
                      </Link>
                      <Link 
                        href="/gallery" 
                        className="block text-white/80 hover:text-white transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Gallery
                      </Link>
                      <Link 
                        href="/faq" 
                        className="block text-white/80 hover:text-white transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        FAQ
                      </Link>
                      <Link 
                        href="/blog" 
                        className="block text-white/80 hover:text-white transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Health Blog
                      </Link>
                    </div>
                  )}
                </div>

                <Link 
                  href="/contact-at-skj-divya-ayurveda-hospital-ajmer" 
                  className="block text-white/90 hover:text-white transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile CTA */}
                <Link 
                  href="/appointment" 
                  className="block w-full text-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 mt-6"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Consultation
                </Link>

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-white/20 space-y-3">
                  <div className="flex items-start space-x-2 text-white/80 text-sm">
                    <Phone size={16} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <div>0145-4062302</div>
                      <div>9828034603</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 text-white/80 text-sm">
                    <Mail size={16} className="mt-0.5 flex-shrink-0" />
                    <span className="break-all">skjduywayurveda@gmail.com</span>
                  </div>
                </div>

                {/* Mobile Social Icons */}
                <div className="flex justify-center space-x-4 pt-4">
                  <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200 p-2 rounded-full bg-white/10 hover:bg-white/20">
                    <Facebook size={18} />
                  </Link>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200 p-2 rounded-full bg-white/10 hover:bg-white/20">
                    <Instagram size={18} />
                  </Link>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200 p-2 rounded-full bg-white/10 hover:bg-white/20">
                    <Youtube size={18} />
                  </Link>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200 p-2 rounded-full bg-white/10 hover:bg-white/20">
                    <Linkedin size={18} />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}