import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // Add these imports
import { ChevronDown, Menu, X, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation(); // Use actual location hook

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const topBarRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  const fadeIn = (element, delay = 0, duration = 0.6) => {
    if (!element) return;
    element.style.opacity = "0";
    element.style.transform = "translateY(10px)";
    element.style.transition = `opacity ${duration}s ease ${delay}s, transform ${duration}s cubic-bezier(0.68, -0.55, 0.27, 1.55) ${delay}s`;
    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, delay * 1000);
  };

  useEffect(() => {
    if (topBarRef.current) fadeIn(topBarRef.current, 0, 0.5);
    if (logoRef.current) fadeIn(logoRef.current, 0.2, 0.6);
    navItemsRef.current.forEach((item, index) => {
      if (item) fadeIn(item, 0.1 * index + 0.4, 0.5);
    });

    const handleScroll = () => setIsScrolled(window.pageYOffset > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  const servicesSubMenu = [
    { name: "Services & Support Overview", path: "/services" },
    { name: "Clinical Pharmacist Support Service", path: "/services/clinical-pharmacist" },
    { name: "Primary Care Network Management and Support", path: "/services/pcn-management" },
    { name: "Medicines Optimisation Service", path: "/services/medicines-optimisation" },
    { name: "Pharmacy Technician Support", path: "/services/pharmacy-technician" },
    { name: "GP Practice Pharmacist Support", path: "/services/gp-practice-pharmacist" },
    { name: "Enhanced Access and Extended Access Service", path: "/services/enhanced-access" },
    { name: "Additional Roles Reimbursement Scheme (ARRS)", path: "/services/arrs" },
    { name: "GP ARRS", path: "/services/gp-arrs" },
    { name: "Remote Prescribing", path: "/services/remote-prescribing" },
  ];

  const socialLinks = [
    { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/VirtualPharmacist01/", color: "hover:text-blue-400" },
    { Icon: Twitter, label: "Twitter", href: "https://x.com/VirtualPharmUK", color: "hover:text-sky-400" },
    { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/virtual-pharmacist-ltd/posts/?feedView=all", color: "hover:text-blue-500" },
    { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/virtualpharmacistuk/", color: "hover:text-pink-400" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled 
          ? "shadow-2xl bg-white/90 backdrop-blur-xl border-b border-blue-100/20" 
          : "bg-white shadow-sm"
      }`}
      ref={headerRef}
    >
      <div
        ref={topBarRef}
        className={`bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white transition-all duration-500 ${
          isScrolled ? "h-14" : "h-16"
        } px-4 relative overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center h-full text-xs sm:text-sm relative z-10">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:info@clinicalprescribingservices.co.uk"
              className="flex items-center space-x-2 transition-all duration-300 hover:scale-105 group"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">info@clinicalprescribingservices.co.uk</span>
            </a>
            <a
              href="tel:07961842069"
              className="flex items-center space-x-2 transition-all duration-300 hover:scale-105 group"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">07961 842 069</span>
            </a>
          </div>
          <div className="flex items-center space-x-3 mt-1 sm:mt-0">
            {socialLinks.map(({ href, Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-white ${color} transition-all duration-300 transform hover:scale-125`}
              >
                <Icon className="w-5 h-5 sm:w-4 sm:h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`bg-gradient-to-r from-slate-800 to-slate-700 text-white transition-all duration-500 relative ${
          isScrolled ? "h-20" : "h-28"
        }`}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-blue-600/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 h-full">
          <div className="flex justify-between items-center h-full">
            <Link
              to="/"
              className="flex items-center space-x-3 cursor-pointer group"
              ref={logoRef}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-400/30 transition-all duration-500"></div>
                <img
                  src="https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/logo-3.svg"
                  alt="Clinical Prescribing Services Logo"
                  className={`object-contain transition-all duration-500 relative z-10 ${
                    isScrolled ? "h-10 w-auto" : "h-12 w-auto"
                  }`}
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Meet the Team", path: "/meet-the-team" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  ref={(el) => (navItemsRef.current[index] = el)}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`text-sm xl:text-base font-medium transition-all duration-300 hover:scale-105 relative px-3 py-2 rounded-lg group ${
                    location.pathname === item.path
                      ? "text-blue-300 bg-blue-900/30"
                      : "text-white hover:text-blue-300 hover:bg-white/10"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left transition-transform duration-300 ${
                    hoveredItem === item.name || location.pathname === item.path ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  ref={(el) => (navItemsRef.current[3] = el)}
                  className={`flex items-center text-sm xl:text-base font-medium transition-all duration-300 hover:scale-105 relative px-3 py-2 rounded-lg group ${
                    location.pathname.startsWith("/services")
                      ? "text-blue-300 bg-blue-900/30"
                      : "text-white hover:text-blue-300 hover:bg-white/10"
                  }`}
                >
                  <span className="relative z-10">Services & Support</span>
                  <ChevronDown
                    className={`ml-2 w-4 h-4 transition-all duration-300 ${
                      isServicesOpen ? "rotate-180 text-blue-400" : ""
                    }`}
                  />
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left transition-transform duration-300 ${
                    isServicesOpen || location.pathname.startsWith("/services") ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </button>

                <div
                  className={`absolute top-full left-0 w-80 xl:w-96 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/50 py-3 z-50 transition-all duration-300 ${
                    isServicesOpen
                      ? "opacity-100 translate-y-2 visible"
                      : "opacity-0 translate-y-0 invisible"
                  }`}
                >
                  <div>
                    {servicesSubMenu.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-4 py-2.5 text-xs xl:text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 border-l-3 border-transparent hover:border-blue-500 group"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {[
                { name: "Tools", path: "/tools" },
                { name: "Training & Development", path: "/training" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  ref={(el) => (navItemsRef.current[index + 4] = el)}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`text-sm xl:text-base font-medium transition-all duration-300 hover:scale-105 relative px-3 py-2 rounded-lg group ${
                    location.pathname === item.path
                      ? "text-blue-300 bg-blue-900/30"
                      : "text-white hover:text-blue-300 hover:bg-white/10"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left transition-transform duration-300 ${
                    hoveredItem === item.name || location.pathname === item.path ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </Link>
              ))}
            </nav>

            <button
              className="lg:hidden text-white hover:text-blue-300 transition-all duration-300 hover:scale-125 p-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <X 
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-200/50 transform transition-all duration-500 ease-in-out z-40 ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-full opacity-0 invisible'
        }`}
        style={{
          top: isScrolled ? '120px' : '160px',
          maxHeight: `calc(100vh - ${isScrolled ? '120px' : '160px'})`,
        }}
      >
        <nav className="px-4 py-4 space-y-1 overflow-y-auto">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Meet the Team", path: "/meet-the-team" },
          ].map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block text-sm font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:translate-x-2 border-l-4 border-transparent hover:border-blue-500 ${
                location.pathname === item.path
                  ? "text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-500"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="border-l-4 border-transparent">
            <button
              className={`flex items-center justify-between w-full text-sm font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:translate-x-2 ${
                location.pathname.startsWith("/services")
                  ? "text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-500"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100"
              }`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services & Support
              <ChevronDown
                className={`w-5 h-5 transform transition-all duration-300 ${
                  isServicesOpen ? "rotate-180 text-blue-500" : ""
                }`}
              />
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isServicesOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-2 ml-4 space-y-1">
                {servicesSubMenu.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-xs text-gray-600 hover:text-blue-600 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-blue-50 hover:translate-x-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    • {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {[
            { name: "Tools", path: "/tools" },
            { name: "Training & Development", path: "/training" },
            { name: "Careers", path: "/careers" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block text-sm font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:translate-x-2 border-l-4 border-transparent hover:border-blue-500 ${
                location.pathname === item.path
                  ? "text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-500"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;