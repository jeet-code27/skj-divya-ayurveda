import Image from 'next/image';
import Link from 'next/link';

const AboutUsHero = ({ 
  title = "About Us",
  backgroundImage = "/images/aboutus-banner.jpg",
  breadcrumbs = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about-skj-divya-ayurveda-hospital-ajmer" }
  ],
  showBreadcrumbs = true,
  className = ""
}) => {
  return (
    <section className={`relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Spa interior background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 bg-opacity-40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-wide"
          style={{ fontFamily: "'Philosopher', serif" }}
        >
          {title}
        </h1>

        {/* Breadcrumbs */}
        {showBreadcrumbs && (
          <nav className="flex items-center justify-center space-x-2 text-sm sm:text-base tracking-widest">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {crumb.href ? (
                  <Link 
                    href={crumb.href}
                    className="text-white hover:text-green-300 transition-colors duration-300 font-light"
                    style={{ fontFamily: "'Philosopher', serif" }}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span 
                    className="text-gray-300 font-light"
                    style={{ fontFamily: "'Philosopher', serif" }}
                  >
                    {crumb.label}
                  </span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-3 text-white">→</span>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-white opacity-60"></div>
    </section>
  );
};

export default AboutUsHero;