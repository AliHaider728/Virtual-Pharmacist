import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  MailCheck,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { useState, useEffect } from "react";
 

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 -mr-3 animate-fade-in-up">
            <div className="flex items-center mb-6 group">
              <div className="relative">
                <img
                  src="https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/logo-3.svg"
                  alt=" Virtual Pharmacist"
                  className="w-full h-16 -ml-4  rounded-full transform transition-all duration-300"
                />
               </div>
              
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Transforming healthcare through innovative clinical services and
              technology-driven solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, color: "hover:text-blue-400", },
                { Icon: Twitter, color: "hover:text-sky-400",  },
                { Icon: Linkedin, color: "hover:text-blue-600",   },
                { Icon: Instagram, color: "hover:text-pink-400",   },
                { Icon: SiTiktok, color: "hover:text-white",  },
              ].map(({ Icon, color, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`cursor-pointer transition-all duration-300 transform ${color} hover:scale-125 hover:rotate-6`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up delay-200">
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Quick Links
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/meet-the-team", label: "Meet the Team" },
                { to: "/services", label: "Services" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }, index) => (
                <li
                  key={to}
                  className="transform transition-all duration-300 hover:translate-x-2"
                >
                  <Link
                    to={to}
                    className="text-gray-300 hover:text-white transition-all duration-300 relative group text-sm sm:text-base"
                    style={{ animationDelay: `${300 + index * 50}ms` }}
                  >
                    <span className="relative z-10">{label}</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up delay-300">
            <h3 className="text-lg font-semibold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h3>
            <ul className="space-y-3">
              {[
                {
                  to: "/services/clinical-pharmacist",
                  label: "Clinical Pharmacist Support",
                },
                { to: "/services/pcn-management", label: "PCN Management" },
                {
                  to: "/services/medicines-optimisation",
                  label: "Medicines Optimisation",
                },
                { to: "/services/gp-arrs", label: "GP ARRS" },
                {
                  to: "/services/remote-prescribing",
                  label: "Remote Prescribing",
                },
                { to: "/tools", label: "Tools" },
              ].map(({ to, label }, index) => (
                <li
                  key={to}
                  className="transform transition-all duration-300 hover:translate-x-2"
                >
                  <Link
                    to={to}
                    className="text-gray-300 hover:text-white transition-all duration-300 relative group text-sm sm:text-base"
                    style={{ animationDelay: `${400 + index * 50}ms` }}
                  >
                    <span className="relative z-10">{label}</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up delay-400">
            <h3 className="text-lg font-semibold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contact Info
              </span>
            </h3>
            <div className="space-y-5">
              {[
                {
                  Icon: MailCheck,
                  text: "Hello@virtualpharmacist.co.uk",
                  color: "text-blue-800",
                },
                { Icon: Phone, text: "0113 871 5065", color: "text-green-400" },
                {
                  Icon: MapPin,
                  text: "Central Clinic – Tipton Horseley Road, Tipton, DY4 7NB",
                  color: "text-purple-400",
                },
              ].map(({ Icon, text, color }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <Icon
                    className={`w-5 h-5 ${color} transition-all duration-300 group-hover:rotate-12`}
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 animate-fade-in-up delay-600">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm text-center lg:text-left">
              © {new Date().getFullYear()}  Virtual Pharmacist All rights
              reserved. Powered by Tecnosphere
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6">
              {[
                { to: "/award", label: "Awards" },
                { to: "/blog", label: "Blog" },
                { to: "/event", label: "Events" },
                { to: "/Testimonials", label: "Testimonials" },
            
                { to: "/Term", label: "TermsCondition" },
                { to: "/privacy", label: "Privacy" },
                
              ].map(({ to, label }, index) => (
                to ? (
                  <Link
                    key={label}
                    to={to}
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-all duration-300 relative group"
                    style={{ animationDelay: `${700 + index * 50}ms` }}
                  >
                    <span className="relative z-10">{label}</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                  </Link>
                ) : (
                  <span
                    key={label}
                    className="text-gray-400 text-xs sm:text-sm cursor-not-allowed"
                    style={{ animationDelay: `${700 + index * 50}ms` }}
                  >
                    {label}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 z-50 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
 