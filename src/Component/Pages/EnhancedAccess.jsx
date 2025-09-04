import { useEffect } from "react";
import {
  CheckCircle,
  Clock,
  Shield,
  Users,
  Phone,
  ArrowRight,
  Target,
  TrendingUp,
  Star,
  Award,
  MailCheck,
  PhoneCallIcon,
} from "lucide-react";
// import { Link } from "react-router-dom"
import Footer from "../Footer/Footer";

const Link = ({ to, children, className }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

const EnhancedAccess = () => {
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
        className="animate-section py-20  mt-[150px] md:mt-[150px] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-800 text-white"></div>
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
              Enhanced & Extended Access Service
            </h1>
            <p
              className="text-2xl mb-4"
              style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}
            >
              Enhanced and Extended Access That Works – Practical, Scalable,
              Patient-Centred
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:translate-y-[-6px] transition-all duration-300">
                <p className="text-lg font-semibold">Improved Patient Access</p>
                <p className="text-sm">
                  Evening, weekend, and remote consultations
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:translate-y-[-6px] transition-all duration-300">
                <p className="text-lg font-semibold">Reduced A&E Pressure</p>
                <p className="text-sm">
                  More availability means fewer emergency visits
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:translate-y-[-6px] transition-all duration-300">
                <p className="text-lg font-semibold">
                  Cost-Effective Solutions
                </p>
                <p className="text-sm">
                  Expert-led services tailored for PCNs and practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Enhanced Access and Extended Access?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-blue-50 p-8 rounded-lg hover:translate-y-[-6px] transition-all duration-300 shadow-lg]">
              <h3 className="text-2xl font-bold text-blue-900 mb-4  ">
                Enhanced Access
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Enhanced Access allows GP practices, PCNs, and GP federations to
                offer appointments outside standard hours, including evenings
                and weekends. This improves patient access to routine and urgent
                care, easing pressure on core GP hours.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It also supports remote consultations, ensuring flexibility
                through phone and online services.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg hover:translate-y-[-6px] transition-all duration-300 shadow-lg]">
              <h3 className="text-2xl font-bold text-green-900 mb-4 ">
                Extended Access
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Extended Access provides out-of-hours primary care, ensuring
                urgent support when GP surgeries are closed. It helps reduce
                unnecessary A&E visits by offering medication consultations,
                physiotherapy, and mental health support.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Delivered by specialist clinical teams, it ensures patients
                receive timely care beyond standard GP hours.
              </p>
            </div>
          </div>

          <div
            className="w-full h-96 md:h-[500px] bg-cover bg-center rounded-lg shadow-lg mb-8"
            style={{
              backgroundImage:
                'url("https://ideogram.ai/assets/progressive-image/balanced/response/6gzZQL3NR32hr2lrC5eDaQ)',
            }}
          ></div>
        </div>
      </section>

      {/* Why Essential */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Enhanced Access and Extended Access Are Essential
            </h2>
            <p className="text-xl text-gray-600">
              Expanding patient care availability while reducing pressure on
              overstretched healthcare systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Users className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Patient Accessibility
              </h3>
              <p className="text-gray-600">
                Helping patients who struggle to attend GP appointments during
                the workday access the care they need.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Shield className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reduced NHS Pressure
              </h3>
              <p className="text-gray-600">
                Reducing NHS workload by diverting non-emergency cases away from
                A&E and urgent care services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Phone className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Remote Consultations
              </h3>
              <p className="text-gray-600">
                Enabling remote consultations, improving accessibility without
                overloading in-person clinics.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              By offering greater flexibility and alternative routes to care,
              Enhanced and Extended Access services not only improve patient
              satisfaction but also support more sustainable, efficient
              healthcare delivery. As the NHS continues to adapt to rising
              demand and limited resources, these services remain a cornerstone
              of accessible, modern primary care.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with Virtual Pharmacist?
            </h2>
            <p className="text-xl text-gray-600">
              A trusted, experienced provider that delivers measurable results
              for Primary Care Networks, GP Federations, and GP surgeries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-lg hover:translate-y-[-6px] transition-all duration-300">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Proven Impact
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>
                    Expanding primary care capacity by helping practices meet
                    NHS demand without increasing workload
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>
                    Reducing A&E and urgent care pressures by offering more
                    accessible GP services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span>
                    Improving patient satisfaction with flexible appointment
                    options
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg hover:translate-y-[-6px] transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                Cost-Effective Solutions
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    Maximising NHS reimbursement funding by ensuring optimal use
                    of ARRS roles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    Reducing operational costs through efficient staffing models
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    Scalable service models tailored to specific PCN needs
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg hover:translate-y-[-6px] transition-all duration-300">
              <Award className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                Quality Assurance
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span>
                    Full alignment with Enhanced Access DES and NHS guidelines
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span>
                    Quality-driven service delivery with best practices in
                    clinical governance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span>
                    Comprehensive reporting and data analysis for performance
                    tracking
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="w-full h-64 md:h-[600px]  bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage:
                'url("https://ideogram.ai/assets/progressive-image/balanced/response/v8TY-CnFRXyqCeV3oeQFnA")',
            }}
          ></div>
        </div>
      </section>

      {/* Our Services */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Support Your Enhanced Access Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive, fully managed service ensuring smooth delivery and
              high-quality patient care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Clock className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Medication Reviews
              </h3>
              <p className="text-gray-600 mb-4">
                Urgent and routine medication reviews, reducing prescribing
                workload and optimising medication management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Shield className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Condition Management
              </h3>
              <p className="text-gray-600 mb-4">
                Acute and chronic condition management, delivering timely
                support for patients with immediate or ongoing healthcare needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Users className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Out-of-Hours Clinics
              </h3>
              <p className="text-gray-600 mb-4">
                Out-of-hours primary care clinics, extending access during
                evenings and weekends without adding pressure to in-house teams.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Star className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Workforce Management
              </h3>
              <p className="text-gray-600 mb-4">
                Providing skilled professionals, including pharmacists and
                ARRS-funded roles, to ensure seamless service delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Phone className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Remote Consultations
              </h3>
              <p className="text-gray-600 mb-4">
                Offering telephone-based and digital consultations to improve
                patient access and convenience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Performance Monitoring
              </h3>
              <p className="text-gray-600 mb-4">
                Delivering data-driven insights to enhance service efficiency
                and compliance with NHS standards.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Our services are scalable, cost-effective, and fully aligned with
              NHS Enhanced Access DES requirements, helping healthcare providers
              reduce operational strain while improving patient care outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="animate-section py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Struggling with Enhanced Access Demand?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We Deliver the Solution – Get Started Today. Contact us to learn how
            our enhanced and extended access services can transform your
            healthcare delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneCallIcon className="w-8 h-8 text-white" />
              </div>
              <a
                href="tel:0113 871 5065"
                className="text-xl font-semibold hover:text-blue-200 transition-colors"
              >
                0113 871 5065
              </a>
            </div>
            <div className="hidden sm:block text-blue-200">|</div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MailCheck className="w-8 h-8 text-white" />
              </div>
              <a
                href="mailto:info@clinicalprescribingservices.co.uk"
                className="text-md font-semibold hover:text-blue-200 transition-colors"
              >
               Hello@virtualpharmacist.co.uk
              </a>
            </div>
          </div>
          <div className="mt-8">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnhancedAccess;
