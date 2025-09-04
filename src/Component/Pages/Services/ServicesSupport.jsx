import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle,
  Users,
  Stethoscope,
  Pill,
  UserCheck,
  Clock,
  Shield,
  Target,
  Zap,
  Activity,
  HeartPulse,
  ShieldCheck,
  ClipboardList,
  FileText,
  Repeat,
  AlertTriangle,
  PhoneCall,
} from "lucide-react";
import Footer from "../../Footer/Footer";
import VirtualPharmacist from "./ServiceSlider/WHYChooseSlider";
const ServicesSupport = () => {
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

  const cards = [
    {
      icon: <HeartPulse size={48} className="mx-auto text-[#0496FF]" />,
      title: "Clinical Medication Reviews",
      description:
        "Thorough medication reviews improving outcomes, reducing errors, and saving your practice time.",
    },
    {
      icon: <ShieldCheck size={48} className="mx-auto text-[#0496FF]" />,
      title: "High-Risk Medication Monitoring",
      description:
        "Proactively monitoring high-risk meds to ensure patient safety and care compliance.",
    },
    {
      icon: <ClipboardList size={48} className="mx-auto text-[#0496FF]" />,
      title: "Review of Acute Medication Requests",
      description:
        "Efficient handling of acute medication requests ensuring prompt interventions.",
    },
    {
      icon: <Users size={48} className="mx-auto text-[#0496FF]" />,
      title: "Chronic Conditions Clinics",
      description:
        "Expert support for chronic condition clinics to improve patient outcomes.",
    },
    {
      icon: <FileText size={48} className="mx-auto text-[#0496FF]" />,
      title: "Medication & Prescription Queries",
      description:
        "Quick, accurate responses to medication queries enhancing communication.",
    },
    {
      icon: <CheckCircle size={48} className="mx-auto text-[#0496FF]" />,
      title: "Hospital Discharge Reconciliation",
      description:
        "Reconcile meds for discharged patients, reducing readmission risks.",
    },
    {
      icon: <Repeat size={48} className="mx-auto text-[#0496FF]" />,
      title: "Repeat Prescription Process Management",
      description:
        "Efficiently managing repeat prescriptions freeing up your practice time.",
    },
    {
      icon: <AlertTriangle size={48} className="mx-auto text-[#0496FF]" />,
      title: "Drug Alerts & Coding Issues",
      description:
        "Manage drug alerts, withdrawals, and resolve coding issues smoothly.",
    },
  ];

  const services = [
    {
      title: "Clinical Pharmacist Support Service",
      description:
        "Expert clinical pharmacists providing remote and on-site support for medication management and patient care optimization.",
      icon: <Stethoscope className="w-8 h-8" />,
      link: "/services/clinical-pharmacist",
      features: [
        "Medication Reviews",
        "Clinical Decision Support",
        "Chronic Disease Management",
        "Prescribing Optimization",
      ],
    },
    {
      title: "Primary Care Network Management",
      description:
        "Comprehensive PCN management solutions including workforce planning, compliance, and performance optimization.",
      icon: <Users className="w-8 h-8" />,
      link: "/services/pcn-management",
      features: [
        "Workforce Integration",
        "Compliance Support",
        "Performance Monitoring",
        "Strategic Planning",
      ],
    },
    {
      title: "Medicines Optimisation Service",
      description:
        "Advanced medicines management to improve patient outcomes while reducing costs and medication-related problems.",
      icon: <Pill className="w-8 h-8" />,
      link: "/services/medicines-optimisation",
      features: [
        "Medication Audits",
        "Cost Analysis",
        "Safety Reviews",
        "Protocol Development",
      ],
    },
    {
      title: "Pharmacy Technician Support",
      description:
        "Skilled pharmacy technicians providing technical support for medicines management and administrative tasks.",
      icon: <UserCheck className="w-8 h-8" />,
      link: "/services/pharmacy-technician",
      features: [
        "Technical Support",
        "Inventory Management",
        "Quality Assurance",
        "Administrative Support",
      ],
    },
    {
      title: "GP Practice Pharmacist Support",
      description:
        "Dedicated pharmacist support tailored specifically for GP practices to enhance clinical services.",
      icon: <Shield className="w-8 h-8" />,
      link: "/services/gp-practice-pharmacist",
      features: [
        "Practice Integration",
        "Clinical Support",
        "Training Programs",
        "Quality Improvement",
      ],
    },
    {
      title: "Enhanced & Extended Access Service",
      description:
        "Support for extended hours services ensuring continuity of pharmaceutical care beyond standard hours.",
      icon: <Clock className="w-8 h-8" />,
      link: "/services/enhanced-access",
      features: [
        "Extended Hours Support",
        "Weekend Coverage",
        "Holiday Support",
        "Emergency Services",
      ],
    },
    {
      title: "Additional Roles Reimbursement Scheme",
      description:
        "Complete ARRS management including recruitment, training, and integration of additional healthcare roles.",
      icon: <Target className="w-8 h-8" />,
      link: "/services/arrs",
      features: [
        "Role Recruitment",
        "Training Programs",
        "Compliance Management",
        "Performance Monitoring",
      ],
    },
    {
      title: "GP ARRS Solutions",
      description:
        "Cost-neutral GP workforce solutions through ARRS funding, simplifying recruitment and integration.",
      icon: <Zap className="w-8 h-8" />,
      link: "/services/gp-arrs",
      features: [
        "Cost-Neutral Solutions",
        "Rapid Deployment",
        "Full Compliance",
        "Ongoing Support",
      ],
    },
    {
      title: "Remote Prescribing",
      description:
        "Secure, efficient remote prescribing solutions enabling flexible healthcare delivery.",
      icon: <Users className="w-8 h-8" />,
      link: "/services/remote-prescribing",
      features: [
        "Secure Platform",
        "Clinical Oversight",
        "Compliance Monitoring",
        "Patient Safety",
      ],
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

  const [active, setActive] = useState(1);
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
    <div className="min-h-screen bg-white">
      <style>
        {`
          @keyframes fadeInSlide {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInSlide {
            animation: fadeInSlide 1s ease-out forwards;
          }
          
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15%);
            }
          }

          .animate-bounce-slow {
            animation: bounce-slow 4s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(5deg); }
            66% { transform: translateY(10px) rotate(-5deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.4; box-shadow: 0 0 20px rgba(4, 150, 255, 0.3); }
            50% { opacity: 0.8; box-shadow: 0 0 40px rgba(4, 150, 255, 0.6); }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          .float-animation { animation: float 6s ease-in-out infinite; }
          .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
          
          .shimmer-effect {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s ease-in-out infinite;
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .gradient-border {
            background: linear-gradient(45deg, #0496FF, #2A3172);
            padding: 2px;
            border-radius: 12px;
          }
          
          .gradient-border-inner {
            background: white;
            border-radius: 10px;
            height: 100%;
          }
        `}
      </style>

      {/* Hero Section */}
      <section
        className="animate-section py-32  mt-[180px] md:mt-[100px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0   bg-[linear-gradient(135deg,rgba(0,43,91,0.6),rgba(4,150,255,0.6))]"></div>
        

        {/* Enhanced floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-[#0496FF]/30 rounded-full float-animation"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-[#0496FF]/20 rounded-full animate-bounce"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-white/50 rounded-full pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ textShadow: "3px 3px 12px rgba(0, 0, 0, 0.5)" }}
            >
              Services & Support
            </h1>
            <p
              className="text-2xl md:text-3xl mb-8 font-light"
              style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.4)" }}
            >
              Comprehensive healthcare solutions for modern practices
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full opacity-80"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="animate-section py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-[#0496FF]/10 rounded-full mb-6">
              <Activity className="w-8 h-8 text-[#0496FF]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2A3172] mb-6">
              Our Complete Service Portfolio
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0496FF] to-[#2A3172] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide end-to-end healthcare solutions designed to optimize
              clinical outcomes, reduce costs, and improve operational
              efficiency for practices and PCNs across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="animate-section py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="gradient-border hover:scale-105 transition-all duration-500 group"
              >
                <div className="gradient-border-inner p-8 hover:bg-gradient-to-br hover:from-white hover:to-blue-50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-[#0496FF] to-[#2A3172] text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#2A3172] group-hover:text-[#0496FF] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-[#2A3172] mb-4 text-sm uppercase tracking-wide">
                      Key Features:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-gray-700 transition-colors"
                        >
                          <CheckCircle className="w-5 h-5 text-[#0496FF] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-[#0496FF] hover:text-[#2A3172] font-semibold transition-all duration-300 group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section with Bouncing Balls */}
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-0 w-96 h-96 bg-[#0496FF] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2A3172] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
  </div>

  <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    {/* Text Content */}
    <div className="flex-1 lg:pr-8">
      <div className="group">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-[#0496FF] to-[#2A3172] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0496FF] to-[#2A3172] bg-clip-text text-transparent">
            Our Story
          </h2>
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-[#0496FF]">Virtual Pharmacist LTD</span>, we're revolutionizing primary care through innovative solutions and expert pharmacist support. Our mission is to empower pharmacists to excel in General Practice and Primary Care Network (PCN) settings with unmatched expertise.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Partner with us to bring innovation, dedication, and industry-leading knowledge to your practice, enhancing patient care and operational efficiency through tailored expertise that transforms your practice.
          </p>
        </div>
        
        <div className="mt-10">
          <a
            href="/About"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0496FF] to-[#2A3172] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Learn More
            <div className="p-1 bg-white/20 rounded-full group-hover:translate-x-1 transition-transform duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>

    {/* Image */}
    <div className="flex-1 lg:pl-8">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-[#0496FF]/20 to-[#2A3172]/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
          <img
            src="https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/photo-2.png.webp"
            alt="Virtual Pharmacist Team"
            className="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-[1.03] transition-all duration-500 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl"></div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Why Choose Our Services */}
      <section className="animate-section py-24 bg-gradient-to-br from-[#2A3172] to-[#0496FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Services
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-blue-100">
              The advantages that set us apart in healthcare service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 glass-effect rounded-2xl hover:scale-105 transition-all duration-500 group">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                <Shield className="w-12 h-12 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Proven Expertise
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Years of experience in clinical pharmacy and healthcare
                management
              </p>
            </div>

            <div className="text-center p-8 glass-effect rounded-2xl hover:scale-105 transition-all duration-500 group">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                <Target className="w-12 h-12 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Tailored Solutions
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Customized services designed to meet your specific practice
                needs
              </p>
            </div>

            <div className="text-center p-8 glass-effect rounded-2xl hover:scale-105 transition-all duration-500 group">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                <Zap className="w-12 h-12 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Rapid Implementation
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Quick deployment with minimal disruption to your operations
              </p>
            </div>

            <div className="text-center p-8 glass-effect rounded-2xl hover:scale-105 transition-all duration-500 group">
              <div className="p-4 bg-white/20 rounded-full w-fit mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                <Users className="w-12 h-12 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Ongoing Support
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Continuous support and monitoring to ensure optimal outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-32 px-6 text-white relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/Patner-with-us-2.png')",
        }}
      >
        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A3172]/20 to-[#0496FF]/30"></div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-[#0496FF]/30 rounded-full float-animation"></div>

        <div className="max-w-5xl mx-auto text-start relative z-10">
          <div className="glass-effect p-12 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Partner with Virtual Pharmacist and experience the difference that
              <span className="text-[#0496FF]"> expertise, innovation</span> and
              <span className="text-[#0496FF]"> dedication</span> can make to
              your practice.
            </h2>

            <div className="mt-8 inline-flex items-center gap-3 text-xl font-bold text-[#0496FF] hover:text-white transition-all cursor-pointer group bg-white/20 px-6 py-3 rounded-full hover:bg-[#0496FF]/90">
              Contact Us
              <ArrowUpRight
                size={24}
                className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Support Cards Section */}
      <section className="py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-b from-white to-gray-50">
        {/* Title and Description */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block p-3 bg-[#0496FF]/10 rounded-full mb-6">
            <Target className="w-8 h-8 text-[#0496FF]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2A3172]">
            Support Tailored to Your Needs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0496FF] to-[#2A3172] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8">
            We offer a fully managed, remote service that enhances medication
            management and clinical support across Practices, PCNs, and ICBs.
          </p>
          <p className="text-[#2A3172] font-bold text-lg max-w-3xl mx-auto italic">
            We are experts in:
          </p>
        </div>

        {/* Enhanced Cards container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="relative bg-white text-[#2A3172] rounded-2xl shadow-lg hover:shadow-2xl p-8 flex flex-col items-center text-center group hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mb-6 group-hover:from-[#0496FF]/10 group-hover:to-[#2A3172]/10 transition-all duration-300">
                  {icon}
                </div>
                <h3 className="font-bold text-xl mt-4 mb-4 group-hover:text-[#0496FF] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors">
                  {description}
                </p>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0496FF]/20 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Success Stories Slider */}
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

          {/* Slider (unchanged) */}
          <div className="relative w-full h-[300px] sm:h-[320px] md:h-[340px] flex justify-center items-center overflow-hidden">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="slider-item absolute w-[320px] sm:w-[360px] md:w-[480px] h-[260px] sm:h-[280px] bg-white rounded-xl p-6 text-center cursor-pointer transition-all duration-500 ease-out flex flex-col justify-center items-center"
                onClick={() => goToSlide(i)}
              >
                <p className="testimonial-text italic text-gray-500 mb-6">
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
     {/* Why Choose Virtual Pharmacist */}
     <div className="max-w-full overflow-hidden justify-center items-center mx-auto"style={{
      backgroundImage:'url("https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/Frame-2147226559.png)',
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      objectFit:"cover",
      backgroundPosition:"top right"
     }}>
     <VirtualPharmacist/>
     </div>

      {/* CTA Section */}

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
                Ready to make{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  changes
                </span>{" "}
                in your Practice?
              </h2>

               <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
                We provide tailored, fully managed pharmacist services that
                elevate patient care and streamline your operations. Let's
                discuss how we can transform your practice.
              </p>

              {/* CTA Button */}
              <a
                href="tel:01138715065"
                className="group inline-flex  items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-blue-500/25 transition-all duration-300"
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
                  Learn More
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

      {/*  Footer Section */}
      <Footer />
    </div>
  );
};

export default ServicesSupport;
