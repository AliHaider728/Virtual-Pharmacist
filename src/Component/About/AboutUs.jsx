import { useEffect } from "react";
import { CheckCircle, Award, Users, Target, Heart, Shield } from "lucide-react";
import Footer from "../Footer/Footer";
import TestimonialSlider from "../TestimonialCard/TestimonialCard";

const About = () => {
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
        className="animate-section  bg-fixed  py-28 mt-[160px] bg-cover bg-top bg-no-repeat relative"
        style={{
          backgroundImage:
            'url("https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/hero-4.png")', 
        }}
      >
        <div className="absolute inset-0 bg-blue-900/10"></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-20 h-20 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/30 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ textShadow: "2px 2px 8px rgba(0, 112, 244, 0.75)" }}
            >
              About Virtual Pharmacist
            </h1>
            <p
              className="text-2xl mb-8"
              style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}
            >
              A Virtual Pharmacist is a digital tool that helps users manage
              medicines, gives drug info, and checks for side effects or
              interactions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="animate-section py-20"
        style={{
          backgroundImage:
            'url("https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/Frame-2147226559.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold  text-[#002B5B] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 font-semibold  mb-6 leading-relaxed">
                At Virtual Pharmacist, we are deeply committed to advancing
                Primary Care through innovative solutions and expert pharmacist
                support. Our passion is to empower pharmacists, enabling them to
                excel in General Practice and Primary Care Network (PCN)
                settings.
              </p>
              <p className="text-lg text-gray-600 font-semibold  mb-6 leading-relaxed">
                We thrive on providing your practice with the expertise it needs
                and will struggle to find elsewhere.
              </p>
              <p className="text-lg text-gray-600 font-semibold mb-6 leading-relaxed">
                This system is not just a tool for management but also a
                platform for ongoing training and development, enhanced by
                artificial intelligence that adapts and evolves to meet the
                dynamic needs of Primary Care.
              </p>
              <p className="text-lg text-gray-600 font-semibold mb-6 leading-relaxed">
                This technology also monitors for specific keywords and tones,
                enabling us to proactively address potential issues and maintain
                the highest standards of care.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/photo-3.png.webp"
                    alt="Our Story"
                    className="w-full h-96 object-cover transition-transform rounded-lg duration-700 group-hover:scale-105"
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
                    Our Mission
                  </p>
                  <p className="text-xs text-gray-600">Innovative Healthcare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Target className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-[#002B5B] mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To empower healthcare providers with innovative solutions that
                optimize medicines management, reduce costs, and improve patient
                outcomes while supporting the sustainability of the NHS.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Award className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-[#002B5B] mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To be the leading provider of clinical pharmacy services in the
                UK, recognized for our innovation, excellence, and commitment to
                transforming primary care through technology and expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Heart className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-[#002B5B] mb-4 text-center">
                Our Values
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Patient-centered care</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Clinical excellence</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Innovation & technology</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Integrity & transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*   A Fully Managed Clinical Pharmacist Solution */}
      <section
        className="animate-section py-20"
        style={{
          backgroundImage:
            'url("https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/Frame-2147226559.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold  text-[#002B5B] mb-6">
                A Fully Managed Clinical Pharmacist Solution
              </h2>
              <p className="text-lg text-gray-600 font-semibold  mb-6 leading-relaxed">
                Integrating clinical pharmacists into general practice is vital
                as NHS primary care evolves. PCNs serving 50,000 patients
                typically need 6 full-time pharmacists.
              </p>
              <p className="text-lg text-gray-600 font-semibold  mb-6 leading-relaxed">
                Recruiting and training pharmacists is resource-heavy and often
                underfunded, leading to high turnover.
              </p>
              <p className="text-lg text-gray-600 font-semibold mb-6 leading-relaxed">
                Virtual Pharmacist LTD solves this with a fully managed
                service—from recruitment and training to workflow
                support—ensuring seamless integration into GP practices.
              </p>
              <p className="text-lg text-gray-600 font-semibold mb-6 leading-relaxed">
                Our model cuts costs, improves retention, and keeps pharmacists
                productive and GPs satisfied.
              </p>
              <p className="text-lg text-gray-600 font-semibold mb-6 leading-relaxed">
                We're redefining medication management with tailored support, so
                you can focus on what matters most—patient care.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full   group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://scontent.fskt7-1.fna.fbcdn.net/v/t39.30808-6/487563569_1076594454494425_7563329896152039962_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGCsgQswQJj7K7UaxRva5y9dwg_3N6OS_J3CD_c3o5L8sR0oC-B3qZLr3YWrXl3vt13c99zPWhuiG19uwRgAbgs&_nc_ohc=8VKJGuT9e9UQ7kNvwHSbcUE&_nc_oc=AdkEJ6lDbENudjmwV5d1qHS0_BzwPk7SdA7F31APlJwezLVd293dRmETADk0eN0spgSFreyIYb92dJ5hh3S5Ax6y&_nc_zt=23&_nc_ht=scontent.fskt7-1.fna&_nc_gid=gnt6X-C1JuUIB4sA88bVbg&oh=00_AfVXer9FyWGF8uUVkA2zxbgWuYlY1BJpLsHjhgUhUefxTg&oe=68BB3894"
                    alt="Our Story"
                    className="w-full h-96 md:h-[550px] md:w-[800px] object-cover transition-transform rounded-lg duration-700 group-hover:scale-105"
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
                   Virtual Pharmacist
                  </p>
                  <p className="text-xs text-gray-600">Simplifying clinical pharmacy integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600">
              Our unique approach to healthcare solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#002B5B] mb-2">
                  Proven Expertise
                </h3>
                <p className="text-gray-600">
                  Our team consists of experienced clinical pharmacists,
                  healthcare managers, and technology specialists with deep
                  understanding of NHS operations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Users className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#002B5B] mb-2">
                  Collaborative Approach
                </h3>
                <p className="text-gray-600">
                  We work closely with practices and PCNs to understand their
                  unique challenges and develop tailored solutions that fit
                  their specific needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Target className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#002B5B] mb-2">
                  Results-Driven
                </h3>
                <p className="text-gray-600">
                  We focus on measurable outcomes, from cost savings and
                  improved patient satisfaction to enhanced clinical efficiency
                  and compliance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#002B5B] mb-2">
                  Award-Winning Service
                </h3>
                <p className="text-gray-600">
                  Our commitment to excellence has been recognized through
                  multiple industry awards and certifications, validating our
                  approach and results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {TesimonialCard } */}
      <TestimonialSlider/>

      {/* Our Impact */}
      <section className="animate-section py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">
              Making a difference in healthcare across the UK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Practices Supported</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold mb-2">£2M+</div>
              <p className="text-blue-100">Cost Savings Generated</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <p className="text-blue-100">Patients Benefited</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-blue-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
