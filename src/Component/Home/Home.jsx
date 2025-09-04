import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Target,
  Zap,
  CalendarCheck,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import PharmacyServices from "./Services/PharmacyServices"
import Virtual from "./Services/ServiceSlider";
import TestimonialSliderHome from "../TestimonialCard/HomeTesimoial";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const slides = [
    {
      text: "Clinical Pharmacist Services for PCNs & Practices",
      subtext:
        "Primary Care Support Solutions designed to optimise patient care across Practices, PCNs, and ICBs.",
      image:
        "https://www.clinicalsupportsolutions.co.uk/storage/app/uploads/public/667/3f0/a68/6673f0a68af27438749031.jpg",
    },
    {
      text: "Integrated Clinical Pharmacy for Primary Care",
      subtext: "Supporting safer prescribing and better patient care.",
      image:
        "https://images.pexels.com/photos/7230882/pexels-photo-7230882.jpeg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation observer for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInSlide");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-section").forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Counter animation logic
  const counterSectionRef = useRef(null);
  const counterRefs = useRef([]);

  useEffect(() => {
    const counters = counterRefs.current;
    const speed = 200;

    const animateCounter = (counter) => {
      const target = +counter.dataset.target;
      let count = +counter.innerText.replace("%", "");
      const increment = target / speed;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count) + "%";
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target + "%";
        }
      };

      requestAnimationFrame(updateCount);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach((counter) => {
              if (!counter.classList.contains("animated")) {
                counter.classList.add("animated");
                animateCounter(counter);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section with Slider */}
        <section
          id="home"
          className="bg-cover bg-center bg-no-repeat relative overflow-hidden min-h-screen mt-[100px] transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundAttachment: "fixed",
            fontFamily: "'Josefin Sans', sans-serif",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-700/30 to-transparent z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center">
            <div className="flex flex-col items-start justify-center w-full py-20 text-left">
              <div className="max-w-3xl space-y-8 animate-fade-in">
                <h1
                  className={`text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-tight transition-opacity duration-700 ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    textShadow: "2px 2px 8px rgba(0, 112, 244, 0.75)",
                  }}
                >
                  {slides[currentSlide].text}
                </h1>
                <p
                  className={`text-base sm:text-xl md:text-2xl text-white transition-opacity duration-700 ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)",
                  }}
                >
                  {slides[currentSlide].subtext}
                </p>
                <NavLink
                  to="/about"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-blue-700 hover:border-blue-700 border border-transparent transition-all duration-300"
                >
                  Find Out More
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </NavLink>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
                    currentSlide === index
                      ? "bg-blue-600 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => {
                    setFade(false);
                    setTimeout(() => {
                      setCurrentSlide(index);
                      setFade(true);
                    }, 100);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Support Section */}
        <section
          id="featured-support"
          className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-2">
            {/* Hero Section */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 items-center">
                <div className="space-y-5">
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#2A3172] leading-snug">
                    <span className="text-blue-600">Innovative Technology</span>
                    <br />
                    <span className="text-gray-800">
                      to Improve Patient Care
                    </span>
                  </h2>

                  <p className="text-lg text-blue-600 font-medium leading-relaxed">
                    A multi-award winning dynamic healthcare organization
                    specializing in clinical services
                  </p>

                  <p className="text-base text-gray-600 leading-relaxed font-normal max-w-2xl">
                    Virtual Pharmacist has developed, and continues to refine,
                    our own bespoke management system. This system empowers our
                    team to deliver exceptional support to your practice with
                    effortless schedule overviews, workflow management, clinical
                    supervision, and compliance monitoring. It ensures improved
                    communication and outstanding patient care.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-3">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="font-medium">Award Winning</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">Clinical Excellence</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span className="font-medium">Innovative Solutions</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Image with Hover Effects */}
                <div
                  className="flex justify-center lg:justify-end"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div className="relative w-full max-w-lg h-80 lg:h-full rounded-xl shadow-xl group">
                    <div className="relative overflow-hidden rounded-xl shadow-xl">
                      <img
                        src="https://virtualpharmacist.co.uk/wp-content/uploads/2025/06/Untitled-Copy.png.webp"
                        alt="Virtual Pharmacist Technology Platform"
                        className="w-full h-80  md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                        Innovative Technology
                      </p>
                      <p className="text-xs text-gray-600">Patient-Centered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section
          className="relative py-24 md:py-32"
          style={{
            backgroundImage:
              "url('https://virtualpharmacist.co.uk/wp-content/uploads/2024/12/790708ca5f9ffe39291b368787ffb8d9.jpg')",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        >
          {/* Simple Overlay */}
          <div className="absolute inset-0 bg-slate-900/65"></div>

          {/* Content */}
          <div className="relative max-w-6xl mx-auto px-6">
            {/* Simple Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Healthcare Professionals
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Our proven track record speaks for itself
              </p>
            </div>

            {/* Clean Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Stat 1 */}
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 hover:-translate-y-3 transition-all duration-300">
                  <Users className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    40+
                  </h3>
                  <p className="text-white/80 text-sm">PCNs Served</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 hover:-translate-y-3 transition-all duration-300">
                  <CalendarCheck className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    20
                  </h3>
                  <p className="text-white/80 text-sm">Years Experience</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 hover:-translate-y-3 transition-all duration-300">
                  <ShieldCheck className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    100%
                  </h3>
                  <p className="text-white/80 text-sm">Managed Solution</p>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 hover:-translate-y-3 transition-all duration-300">
                  <Handshake className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    170+
                  </h3>
                  <p className="text-white/80 text-sm">Partners</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Support Tailored to Your Needs Section */}
        <PharmacyServices />
        <section
          className="max-w-7xl overflow-hidden justify-center items-center mx-auto"
          style={{
            backgroundImage:
              'url("https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/Frame-2147226559.png)',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundPosition: "top right",
          }}
        >
          <Virtual />
        </section>
        {/* New Digital Innovation Section */}
        <section className="animate-section py-20 bg-[linear-gradient(135deg,#002B5B,#0496FF)] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Digital Innovation in Healthcare
              </h2>
              <p className="text-xl text-blue-100">
                Embracing technology to transform patient care
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border hover:translate-y-[-10px] drop-shadow-sm border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <Zap className="w-12 h-12 text-blue-400 mb-6 mx-auto" />
                <h3 className="text-xl font-bold mb-4 text-center">
                  Telemedicine Solutions
                </h3>
                <p className="text-blue-100 text-center">
                  Remote consultations and digital prescriptions for enhanced
                  patient access.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl hover:translate-y-[-10px] drop-shadow-sm p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <Target className="w-12 h-12 text-blue-400 mb-6 mx-auto" />
                <h3 className="text-xl font-bold mb-4 text-center">
                  Data Analytics
                </h3>
                <p className="text-blue-100 text-center">
                  Advanced analytics to optimize prescribing patterns and
                  patient outcomes.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border hover:translate-y-[-10px] shadow-slate-300 border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <Users className="w-12 h-12 text-blue-400 mb-6 mx-auto" />
                <h3 className="text-xl font-bold mb-4 text-center">
                  Patient Portal
                </h3>
                <p className="text-blue-100 text-center">
                  Secure platform for patients to manage appointments and
                  medications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Unwavering Commitment to Care */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="text-center mb-16"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2A3172] mb-4 tracking-tight">
                Our Unwavering Commitment to Care
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Delivering exceptional healthcare solutions with compassion and
                innovation
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className="space-y-6"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <p className="text-lg text-gray-700 leading-7">
                  At Virtual Pharmacist Services, we are dedicated to
                  revolutionizing primary care through innovative,
                  patient-focused solutions. Our passionate team collaborates
                  with the NHS to deliver high-quality care, easing the burden
                  on healthcare providers and enhancing patient outcomes.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">
                      Patient-centered care delivery for better health outcomes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">
                      Innovative solutions tailored to modern healthcare
                      challenges
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">
                      Sustainable support for NHS efficiency and resilience
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="flex justify-center lg:justify-end"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="relative     w-full h-80 lg:h-96 rounded-xl shadow-xl  group">
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <img
                      src="https://i.pinimg.com/1200x/5e/42/2c/5e422ccf8fd88243f0f25019eacd39d2.jpg"
                      alt="Healthcare professional providing compassionate care"
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
                      Compassionate Care
                    </p>
                    <p className="text-xs text-gray-600">Patient-Focused</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Survey Statistics with Counter Animation */}
        <section
          ref={counterSectionRef}
          className="animate-section py-20  text-white bg-[linear-gradient(135deg,#002B5B,#0496FF)]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Challenge We Address
              </h2>
              <p className="text-xl text-blue-100">
                Understanding the pressures facing healthcare professionals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  value: 55,
                  text: "Clinical pharmacists are the most difficult to recruit",
                },
                {
                  value: 65,
                  text: "Lack of suitably trained/experienced candidates",
                },
                { value: 27, text: "Report unmanageable workloads" },
                { value: 59, text: "Manage their workloads with difficulty" },
                {
                  value: 62,
                  text: "Consider their PCN/practice workloads unmanageable",
                },
                { value: 47, text: "Class morale of their teams as poor" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:translate-y-[-10px] duration-300 transition-all"
                >
                  <div
                    ref={(el) => (counterRefs.current[index] = el)}
                    className="counter text-4xl font-bold mb-2"
                    data-target={item.value}
                  >
                    0%
                  </div>
                  <p className="text-blue-100">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialSliderHome />

        {/* Contact Section */}
        <section
          className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage:
              "url('https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/cta-section.png')",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Enhanced Background Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-indigo-900/30 to-purple-900/30 backdrop-blur-sm"></div>

          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 right-32 w-24 h-24 bg-white/15 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
            <div className="text-center space-y-8">
              {/* Enhanced Heading with Better Typography */}
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
                  <span className="text-sm font-medium text-white/90 tracking-wider uppercase">
                    Transform Your Practice
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Don't Just Manage
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Medication
                  </span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-2">
                    Optimise Care with Virtual Pharmacist
                  </span>
                </h2>
              </div>

              {/* Enhanced Description */}
              <div className="max-w-3xl mx-auto">
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                  We offer a comprehensive suite of clinical pharmacy services,
                  all delivered remotely. Build a customised programme to meet
                  your specific needs and empower your practice to deliver
                  exceptional care.
                </p>
              </div>

              {/* Enhanced CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                <NavLink
                  to="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="relative z-10">Find Out More</span>
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>

                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
                </NavLink>
              </div>
            </div>
          </div>

          {/* Floating Elements for Visual Interest */}
          <div className="absolute bottom-10 left-10 hidden lg:block">
            <div className="w-2 h-20 bg-gradient-to-t from-transparent to-white/20 rounded-full"></div>
          </div>
          <div className="absolute top-20 right-10 hidden lg:block">
            <div className="w-2 h-20 bg-gradient-to-b from-transparent to-white/20 rounded-full"></div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
