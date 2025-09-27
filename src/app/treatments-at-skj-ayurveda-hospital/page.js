import React from "react";
import Link from "next/link";
import AboutUsHero from "@/components/About-Us/AboutUsHero";

const treatmentsData = [
  {
    name: "Netra Tarpan",
    slug: "netra-tarpan",
    description: "Eye care therapy",
  },
  {
    name: "Greeva Basti",
    slug: "greeva-basti",
    description: "Neck pain treatment",
  },
  {
    name: "Shirodhara",
    slug: "shirodhara",
    description: "Oil pouring therapy",
  },
  {
    name: "Snehdhara",
    slug: "snehdhara",
    description: "Medicated oil therapy",
  },
  {
    name: "Rakta Mokshana",
    slug: "rakta-mokshana",
    description: "Blood purification therapy",
  },
  {
    name: "Panch Karma",
    slug: "panch-karma",
    description: "Five-action detoxification",
  },
  {
    name: "Kati Basti",
    slug: "kati-basti",
    description: "Lower back pain treatment",
  },
  {
    name: "Karna Purana",
    slug: "karna-purana",
    description: "Ear therapy treatment",
  },
  { name: "Janu Basti", slug: "janu-basti", description: "Knee joint therapy" },
  {
    name: "Hridaya Basti",
    slug: "hridaya-basti",
    description: "Heart region therapy",
  },
  {
    name: "Nasya Therapy",
    slug: "nasya-therapy",
    description: "Nasal administration therapy",
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <AboutUsHero
        title={"Treatments at SKJ Ayurveda Hospital"}
        breadcrumbs={[{ label: "HOME", href: "/" }]}
      />

      {/* Hero Section with Introduction */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2    style={{ fontFamily: "'Philosopher', serif" }} className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our Ayurvedic Treatments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of traditional Ayurvedic therapies
            designed to heal, rejuvenate, and restore balance to your mind,
            body, and spirit.
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {treatmentsData.map((treatment, index) => (
              <Link
                key={treatment.slug}
                href={`/treatments-at-skj-ayurveda-hospital/${treatment.slug}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100 overflow-hidden"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Treatment Icon/Number */}
                  {/* <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div> */}

                  {/* Treatment Name */}
                  <h3    style={{ fontFamily: "'Philosopher', serif" }} className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {treatment.name}
                  </h3>

                  {/* Treatment Description */}
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {treatment.description}
                  </p>

                  {/* Learn More Arrow */}
                  <div className="flex items-center text-green-600 font-medium text-sm group-hover:text-green-700">
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 style={{ fontFamily: "'Philosopher', serif" }} className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a consultation with our experienced Ayurvedic practitioners
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Book Consultation
            </Link>
            <Link
              href="/about-skj-divya-ayurveda-hospital-ajmer"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300 inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
