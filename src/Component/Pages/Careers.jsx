import React, { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  Users,
  Award,
  ChevronRight,
  Mail,
  Phone,
  Calendar,
  Building2,
  Heart,
  Briefcase,
  GraduationCap,
  Trophy,
  Target,
  Star,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import JobListings from "./VirtualPharmacistJobs/VirtualPharmacist";
import Footer from "../Footer/Footer";

function CareersPage() {
  const [activeTab, setActiveTab] = useState("openings");

  const values = [
    {
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do",
    },
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Patient Care",
      description: "Patient wellbeing is at the heart of all our decisions",
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: "Innovation",
      description: "We embrace new technologies and approaches",
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Teamwork",
      description: "Collaboration and mutual support drive our success",
    },
  ];

  const testimonials = [
    {
      name: "— 0B – GP",
      text: "I've been using Virtual Pharmacist for several months now, and I couldn't be happier with the service. The pharmacists are not only knowledgeable but also incredibly responsive. It feels like having a personal pharmacist on call anytime I need advice or have a question about prescribing.",
    },
    {
      name: "— LB – Reception Manager",
      text: "Their script signing service has greatly reduced prescription errors and increased patient satisfaction. They have helped change our practices for the better.",
    },
    {
      name: "— AK Clinical Director PCN",
      text: "You're amazing – it feels like you're sitting next door.",
    },
    {
      name: "— John – GP",
      text: "Integrating Virtual Pharmacist into our GP practice has significantly enhanced patient care. The knowledgeable pharmacists work seamlessly with our doctors, improving both medication management and patient outcomes",
    },
  ];

  const [active, setActive] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);

  const loadShow = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const items = document.querySelectorAll(".slider-item");
    items.forEach((item, index) => {
      const cardWidth = window.innerWidth < 640 ? 320 : 380;
      const centerOffset = cardWidth / 2;

      if (index === active) {
        // Active card - center with blue background and white text
        item.style.transform = `translateX(calc(50% - ${centerOffset}px)) scale(1.05)`;
        item.style.zIndex = 20;
        item.style.opacity = 1;
        item.style.filter = "none";
        item.style.backgroundColor = "#0496FF";
        item.style.color = "white";
        item.style.boxShadow = "0 20px 40px rgba(4, 150, 255, 0.3)";

        // Update text color for active card
        const textElement = item.querySelector(".testimonial-text");
        const nameElement = item.querySelector(".testimonial-name");
        if (textElement) textElement.style.color = "white";
        if (nameElement) nameElement.style.color = "#2A3172";
      } else if (index > active) {
        // Cards to the right
        const stt = index - active;
        const offset = window.innerWidth < 640 ? 90 * stt : 110 * stt;
        item.style.transform = `translateX(calc(50% - ${centerOffset}px + ${offset}px)) scale(${
          1 - 0.08 * stt
        })`;
        item.style.zIndex = 20 - stt;
        item.style.opacity = stt > 2 ? 0 : 0.7;
        item.style.filter = "none";
        item.style.backgroundColor = "white";
        item.style.color = "#374151";
        item.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";

        // Reset text colors for inactive cards
        const textElement = item.querySelector(".testimonial-text");
        const nameElement = item.querySelector(".testimonial-name");
        if (textElement) textElement.style.color = "#6B7280";
        if (nameElement) nameElement.style.color = "#374151";
      } else {
        // Cards to the left
        const stt = active - index;
        const offset = window.innerWidth < 640 ? 90 * stt : 110 * stt;
        item.style.transform = `translateX(calc(50% - ${centerOffset}px - ${offset}px)) scale(${
          1 - 0.08 * stt
        })`;
        item.style.zIndex = 20 - stt;
        item.style.opacity = stt > 2 ? 0 : 0.7;
        item.style.filter = "none";
        item.style.backgroundColor = "white";
        item.style.color = "#374151";
        item.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";

        // Reset text colors for inactive cards
        const textElement = item.querySelector(".testimonial-text");
        const nameElement = item.querySelector(".testimonial-name");
        if (textElement) textElement.style.color = "#6B7280";
        if (nameElement) nameElement.style.color = "#374151";
      }
    });

    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    loadShow();
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", loadShow);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", loadShow);
    };
  }, [active]);

  // Auto-slide functionality for smooth operation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [active, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setActive((prev) => (prev + 1 < testimonials.length ? prev + 1 : 0));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : testimonials.length - 1));
  };

  const goToSlide = (index) => {
    if (isAnimating || index === active) return;
    setActive(index);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="animate-fadeSlideIn relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-32 overflow-hidden">
          {/* Background Image with fixed attachment */}
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg")',
              backgroundPosition:"top"
             }}
          ></div>

          {/* Optional Dark Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Light Gradient Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-2xl"></div>

          {/* Main Content */}
          <div className="relative container mt-16 mx-auto px-6 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Growing Team
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Careers at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Virtual Pharmacist
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Maximise your career with Virtual Pharmacist Ltd. Join our
              innovative team to provide exceptional pharmacy services across
              the NHS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        <section
          className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
          style={{
            backgroundImage:
              'url("https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/Frame-2147226559.png")',
            backgroundPosition: "top right",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#0496FF] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2A3172] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div
              className="flex justify-center lg:justify-end"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-80 lg:h-96 rounded-xl shadow-xl group">
                <div className="relative overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/photo-5.png.webp"
                    alt="Healthcare professional providing Build Your Career"
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm font-bold text-[#3b97d0]">
                    Build Your Career
                  </p>
                  <p className="text-xs text-gray-600">
                    Join Virtual Pharmacist
                  </p>
                </div>
              </div>
            </div>
            {/* Text Content */}
            <div className="flex-1 lg:pr-8">
              <div className="group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-[#0496FF] to-[#2A3172] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0496FF] to-[#2A3172] bg-clip-text text-transparent">
                    Careers with Virtual Pharmacist
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    At{" "}
                    <span className="font-semibold text-[#0496FF]">
                      Virtual Pharmacist LTD
                    </span>
                    , we are committed to excellence in pharmacist careers and
                    services. We seek to enrich our team with dedicated
                    pharmacists who are looking for meaningful and flexible work
                    arrangements. Whether you are seeking a full-time position
                    or project-based engagements, we offer roles that can
                    accommodate a variety of professional aspirations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR Team Contribute */}
        <section
          className="w-full bg-cover bg-center bg-fixed relative py-20 mt-28"
          style={{
            backgroundImage:
              "url('https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/Contact-Us.png')",
          }}
        >
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

          {/* Content container */}
          <div className="relative z-10 max-w-7xl mx-auto px-0">
            <div className="flex justify-end">
              <div className="w-full md:w-1/2 lg:w-2/4 text-white">
                {/* Badge/Label */}
                <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                  Transform Your Practice Today
                </div>

                {/* Main heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Want to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    contribute
                  </span>{" "}
                  to our team?
                </h2>

                <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
                  For more information about how you can contribute to our
                  innovative team and continue building your pharmacist career,
                  please get in touch at apply@virtualpharmacist.co.uk. We are
                  eager to learn more about your expertise and discuss how we
                  can work together.
                </p>

                {/* CTA Button */}
                <a
                  href="tel:01138715065"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <PhoneCall className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Request a Call Back
                  <div className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </div>
                </a>

                {/* Contact */}
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center ml-2 px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 backdrop-blur-sm text-lg font-medium rounded-xl transition-all duration-300"
                >
                  Contact
                </a>

                {/* Trust indicators */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-6 text-sm text-gray-300">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      24/7 Support
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      Fully Managed
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      Expert Team
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
        </section>

        {/* Discover Desired Jobs Section */}
        <JobListings />

        {/* Reviews */}
        <section className="w-full bg-gradient-to-br from-[#2A3172] to-[#1a2456] py-16 md:py-20 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block p-3 bg-[#0496FF]/20 rounded-full mb-6">
                <Users className="w-8 h-8 text-[#0496FF]" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#0496FF]">
                Success Stories
              </h3>
              <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-4">
                Client Success Stories:
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-6">
                Virtual Pharmacists in Action
              </h1>
              <div className="w-24 h-1 bg-[#0496FF] mx-auto rounded-full"></div>
            </div>

            {/* Slider */}
            <div className="relative w-full h-[300px] sm:h-[320px] md:h-[340px] flex justify-center items-center overflow-hidden">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="slider-item absolute w-[320px] sm:w-[360px] md:w-[480px] h-[260px] sm:h-[280px] bg-white rounded-xl p-6 text-center cursor-pointer transition-all duration-500 ease-out flex flex-col justify-center items-center"
                  onClick={() => goToSlide(i)}
                >
                  <p className="testimonial-text italic text-gray-500 font-semibold mb-6">
                    "{t.text}"
                  </p>
                  <h2 className="testimonial-name text-lg font-bold text-gray-800">
                    {t.name}
                  </h2>
                </div>
              ))}
              {/* Enhanced Nav Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 md:left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#0496FF] to-[#2A3172] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 text-xl font-bold"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 md:right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#0496FF] to-[#2A3172] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 text-xl font-bold"
              >
                →
              </button>
            </div>

            {/* Enhanced Dots */}
            <div className="flex justify-center gap-4 mt-12">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                    active === i
                      ? "bg-[#0496FF] scale-125 shadow-lg shadow-[#0496FF]/50"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default CareersPage;
