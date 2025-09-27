"use client";
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  FileText,
  Send,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
export default function BookConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    address: "",
    chiefComplaint: "",
    healthCondition: "",
    previousTreatment: "",
    preferredDate: "",
    preferredTime: "",
    consultationType: "in-person",
    additionalNotes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const healthConditions = [
    "Joint and Muscular Pain (Knee, Back, Cervical)",
    "Digestive Issues (Acidity, Ulcers, Constipation)",
    "Stress and Lifestyle Disorders",
    "Skin Disorders",
    "Respiratory Issues",
    "Women's Health",
    "Men's Health",
    "Chronic Fatigue",
    "Sleep Disorders",
    "Other",
  ];

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-orange-50 placeholder-gray-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 style={{ fontFamily: "'Philosopher', serif" }} className="text-2xl font-bold text-gray-800 mb-4">
            Consultation Booked!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing SKJ Divya Ayurveda Hospital. Our team will
            contact you within 24 hours to confirm your appointment.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                age: "",
                gender: "",
                address: "",
                chiefComplaint: "",
                healthCondition: "",
                previousTreatment: "",
                preferredDate: "",
                preferredTime: "",
                consultationType: "in-person",
                additionalNotes: "",
              });
            }}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300"
          >
            Book Another Consultation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className=" min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-orange-50 py-12 px-4 text-gray-900 ">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 rounded-full mb-6">
            <Image
              src={"/images/skj-footer-logo.jpg"}
              alt={"logo"}
              width={800} // A reasonable width for the blog card
              height={800} // A reasonable height, maintaining a 3:2 aspect ratio
              className="w-full h-full object-cover transform scale-120  group-hover:scale-130 transition-transform rounded-full duration-700"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4"
           style={{ fontFamily: "'Philosopher', serif" }}>
            SKJ Divya Ayurveda Hospital
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Book your consultation with <strong>Dr. S.K. Sharma</strong> and our
            experienced team. We specialize in authentic Ayurvedic treatments
            using traditional Panchkarma therapies to treat the root cause of
            illness for lasting wellness.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-8">
            <h2 style={{ fontFamily: "'Philosopher', serif" }} className="text-3xl font-bold text-white text-center">
              Book Your Consultation
            </h2>
            <p className="text-green-100 text-center mt-2">
              Let us help you on your journey to natural healing
            </p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 border-b pb-2">
                  <User className="w-5 h-5 text-green-600" />
                  Personal Information
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      min="1"
                      max="120"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                      placeholder="Age"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="Your complete address"
                  />
                </div>
              </div>

              {/* Medical Information */}
              <div className="space-y-6  placeholder-gray-500 ">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 border-b pb-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  Medical Information
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Health Condition *
                  </label>
                  <select
                    name="healthCondition"
                    value={formData.healthCondition}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900"
                  >
                    <option value="">Select your primary concern</option>
                    {healthConditions.map((condition, index) => (
                      <option key={index} value={condition}>
                        {condition}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Chief Complaint *
                  </label>
                  <textarea
                    name="chiefComplaint"
                    value={formData.chiefComplaint}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="Describe your main symptoms and concerns in detail..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Treatment History
                  </label>
                  <textarea
                    name="previousTreatment"
                    value={formData.previousTreatment}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="Any previous treatments, medications, or consultations..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Consultation Type *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center p-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-green-50 placeholder-gray-500 transition-colors">
                      <input
                        type="radio"
                        name="consultationType"
                        value="in-person"
                        checked={formData.consultationType === "in-person"}
                        onChange={handleInputChange}
                        className="mr-3 text-green-600 placeholder-gray-500"
                      />
                      In-Person Visit
                    </label>
                    <label className="flex items-center p-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-green-50 transition-colors">
                      <input
                        type="radio"
                        name="consultationType"
                        value="online"
                        checked={formData.consultationType === "online"}
                        onChange={handleInputChange}
                        className="mr-3 text-green-600 placeholder-gray-500"
                      />
                      Online Consultation
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 border placeholder-gray-500 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900"
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-3 mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Booking Consultation...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Book Consultation
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                Our team will contact you within 24 hours to confirm your
                appointment.
              </p>
              <p className="mt-1">
                For urgent inquiries, please call us directly.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Information */}
       
      </div>
    </div>
  );
}
