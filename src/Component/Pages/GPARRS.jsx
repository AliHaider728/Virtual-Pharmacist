import { useEffect } from "react";
import {
  CheckCircle,
  Zap,
  Users,
  Shield,
  TrendingUp,
  ArrowRight,
  Target,
  Clock,
  DollarSign,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const GPARRS = () => {
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
        `}
      </style>

      {/* Hero Section */}
      <section
        className="animate-section py-20 mt-[150px] md:mt-[150px] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0  bg-gradient-to-r from-blue-900 via-blue-800 to-gray-800 text-white"></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-4 sm:left-10 w-10 sm:w-16 h-10 sm:h-16 bg-white/10 rounded-full animate-pulse"></div>

        <div
          className="absolute bottom-20 right-4 sm:right-10 w-12 sm:w-20 h-12 sm:h-20 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ textShadow: "2px 2px 8px rgba(0, 112, 244, 0.75)" }}
            >
              GP ARRS MODEL
            </h1>
            <p
              className="text-2xl mb-4"
              style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}
            >
              The Only Scalable GP ARRS Model developed by Primary Care Experts
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg cursor-pointer hover:translate-y-[-7px] transition-all duration-300">
                <p className="text-lg font-semibold mb-2">
                  Cost-Neutral and Fully Managed
                </p>
                <p className="text-sm">
                  Delivered within your ARRS budgets, with no extra costs to
                  your PCN
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg cursor-pointer hover:translate-y-[-7px] transition-all duration-300">
                <p className="text-lg font-semibold mb-2">
                  Faster, Stress-Free Recruitment
                </p>
                <p className="text-sm">
                  National talent pool of ARRS-compliant GPs, reducing vacancies
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg cursor-pointer hover:translate-y-[-7px] transition-all duration-300">
                <p className="text-lg font-semibold mb-2">Ongoing HR Support</p>
                <p className="text-sm">
                  We handle contracts, onboarding, supervision, and performance
                  tracking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GP ARRS Section */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is the GP ARRS Scheme?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Additional Roles Reimbursement Scheme (ARRS) is a workforce
                initiative under the NHS Long Term Plan, designed to help
                Primary Care Networks (PCNs) expand their teams by funding
                additional healthcare professionals, including newly qualified
                GPs under the general practitioner ARRS model.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With £82M in ringfenced funding, the scheme aims to reduce GP
                workload, improve patient access, and enhance primary care
                efficiency. However, many ARRS GP roles remain unfilled, with
                PCNs struggling to recruit due to hiring complexities, limited
                time and workforce shortages.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Free Consultation today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="GP ARRS Scheme"
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
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
                    ARRS Initiative
                  </p>
                  <p className="text-xs text-gray-600">Workforce Expansion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 6 Phase Process */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How the CPS ARRS Model Works
            </h2>
            <p className="text-xl text-gray-600">
              Our comprehensive 6-phase process for seamless ARRS implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Engage</h3>
              <p className="text-gray-600">
                Understanding your PCN's specific workforce needs and challenges
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Costing & Modelling
              </h3>
              <p className="text-gray-600">
                Ensuring full utilisation of ARRS funding with no hidden costs
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Internal Buy-in & Approval
              </h3>
              <p className="text-gray-600">
                Aligning with PCN leadership and clinical policies
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Resourcing & Onboarding
              </h3>
              <p className="text-gray-600">
                Recruiting, verifying, and integrating GPs seamlessly
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                5
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Go-Live</h3>
              <p className="text-gray-600">
                Full workforce implementation, ready to serve patients
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                6
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ongoing Review & Support
              </h3>
              <p className="text-gray-600">
                HR support, supervision, and continuous optimisation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits of Our ARRS GP Model
            </h2>
            <p className="text-xl text-gray-600">
              Reduce burden, improve efficiency, enhance patient access
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border-l-4 border-blue-600">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reduce Administrative Burden
              </h3>
              <p className="text-gray-600 mb-4">
                We handle HR, compliance, provide bespoke data reports, so PCNs
                and GPs can focus on patient care rather than paperwork.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border-l-4 border-blue-600">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Improve Workforce Efficiency
              </h3>
              <p className="text-gray-600 mb-4">
                Strategic workforce planning and working at scale ensures
                optimal staffing, prevents shortages, and keeps your practice
                running smoothly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border-l-4 border-blue-600">
              <DollarSign className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Maximise ARRS Funding
              </h3>
              <p className="text-gray-600 mb-4">
                We help PCNs fully utilise GP ARRS funding 2025 and beyond,
                ensuring a cost-neutral approach with no hidden costs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border-l-4 border-blue-600">
              <Users className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Seamless Integration
              </h3>
              <p className="text-gray-600 mb-4">
                We align with PCN policies, NHS workforce strategies, and
                digital systems, making onboarding and operations efficient.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border-l-4 border-blue-600">
              <Shield className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Zero Financial Liability
              </h3>
              <p className="text-gray-600 mb-4">
                No VAT, PAYE, pensions, or holiday pay burdens for PCNs—keeping
                costs fully covered within ARRS budgets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border-l-4 border-blue-600">
              <Clock className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                National Talent Pool
              </h3>
              <p className="text-gray-600 mb-4">
                Access to 100+ ARRS-compliant GPs, reducing recruitment delays
                and ready to be deployed nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with Virtual Pharmacist?
            </h2>
            <p className="text-xl text-gray-600">
              A fully managed workforce solution that goes beyond hiring
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As an alternative to other ARRS GP providers, such as
                recruitment agencies, we offer a fully managed workforce
                solution that goes beyond hiring to integrate, support, and
                retain ARRS GPs for your PCN.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are relentlessly focused on unlocking and creating value on a
                continuous basis. We are not only here to help you with GP ARRS
                recruitment, we will be your partner forward planning for a more
                sustainable future.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Core Prescribing Solutions"
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
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
                    Workforce Solutions
                  </p>
                  <p className="text-xs text-gray-600">Sustainable Care</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:translate-y-[-6px] transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <h3 className="text-lg font-bold text-gray-900">
                  Cost-Neutral Recruitment
                </h3>
              </div>
              <p className="text-gray-600">
                Delivered within ARRS budgets, with no additional hidden fees
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:translate-y-[-6px] transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <h3 className="text-lg font-bold text-gray-900">
                  End-to-End Support
                </h3>
              </div>
              <p className="text-gray-600">
                We manage recruitment, onboarding, HR, compliance, and clinical
                supervision
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:translate-y-[-6px] transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <h3 className="text-lg font-bold text-gray-900">
                  Seamless Integration
                </h3>
              </div>
              <p className="text-gray-600">
                ARRS GPs become fully embedded part of your primary care
                workforce
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:translate-y-[-6px] transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <h3 className="text-lg font-bold text-gray-900">
                  Guaranteed Compliance
                </h3>
              </div>
              <p className="text-gray-600">
                We work to regulatory standards, NHS policies, and HR best
                practices
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:translate-y-[-6px] transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <h3 className="text-lg font-bold text-gray-900">
                  Scalability & Customisation
                </h3>
              </div>
              <p className="text-gray-600">
                Short-term and long-term workforce planning solutions tailored
                to PCN needs
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:translate-y-[-6px] transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <h3 className="text-lg font-bold text-gray-900">
                  Technology-Driven
                </h3>
              </div>
              <p className="text-gray-600">
                Advanced reporting and analytics ensure ARRS GP performance
                tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Delivering results for PCNs nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg hover:translate-y-[-5px] transition-all duration-300 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">£82M</div>
              <p className="text-gray-700 font-semibold mb-2">
                Ringfenced Funding
              </p>
              <p className="text-gray-600 text-sm">
                Available through ARRS scheme
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg hover:translate-y-[-5px] transition-all duration-300 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-700 font-semibold mb-2">
                ARRS-Compliant GPs
              </p>
              <p className="text-gray-600 text-sm">
                In our national talent pool
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg hover:translate-y-[-5px] transition-all duration-300 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700 font-semibold mb-2">Cost-Neutral</p>
              <p className="text-gray-600 text-sm">
                No additional costs to PCNs
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg hover:translate-y-[-5px] transition-all duration-300 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
              <p className="text-gray-700 font-semibold mb-2">Phase Process</p>
              <p className="text-gray-600 text-sm">
                Comprehensive implementation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="animate-section py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your PCN Workforce?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with Virtual Pharmacist for a fully managed,
            cost-neutral GP ARRS solution that delivers experienced GPs within
            your existing budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services/arrs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              Learn More About ARRS
              <Shield className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GPARRS;
