import { useEffect } from "react";
import {
  CheckCircle,
  Users,
  Target,
  Shield,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  Star,
} from "lucide-react";
// import { Link } from "react-router-dom" // Commented out for demo
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

const PCNManagement = () => {
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
        className="animate-section py-20  mt-[130px] md:mt-[150px] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700"></div>
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-20 h-20 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ textShadow: "2px 2px 8px rgba(0, 112, 244, 0.75)" }}
            >
              Primary Care Network Management and Support
            </h1>
            <p
              className="text-2xl mb-4"
              style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}
            >
              Seamless Primary Care Network Management: End-to-end PCN
              management service for efficient operations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 text-lg">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold">✓ Specialist PCN Support</p>
                <p className="text-sm">
                  Tailored service to meet your network's needs
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold">✓ Integrated Solutions</p>
                <p className="text-sm">
                  Holistic solutions to strengthen patient care
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold">✓ Flexible Delivery Models</p>
                <p className="text-sm">Remote or in-practice support</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold">✓ Expert Service Provider</p>
                <p className="text-sm">Experienced PCN management team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is PCN Section */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Is a Primary Care Network (PCN)?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Primary Care Network (PCN) is a group of GP practices and
                local health services working together to deliver coordinated,
                community-based care. Introduced in 2019 as part of the NHS Long
                Term Plan, PCNs in healthcare aim to improve patient access,
                manage population health, and ease pressures on GP surgeries.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The NHS PCN model allows practices to pool resources and share
                services, from clinical pharmacists to social prescribing,
                helping to deliver more personalised, proactive care to local
                communities.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Why Work With Us"
                    className="w-full h-96 bg-cover bg-center rounded-lg shadow-lg transition-transform duration-700 group-hover:scale-105"
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
                    PCN Collaboration
                  </p>
                  <p className="text-xs text-gray-600">Community Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Challenges of Managing a PCN
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Running a Primary Care Network comes with unique complexities.
              Beyond day-to-day operations, PCNs face growing PCN management
              challenges, from coordinating multi-professional teams to ensuring
              consistent service delivery across practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                PCN Workforce Integration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                One of the biggest hurdles is effective PCN workforce
                integration. Bringing together GPs, clinical pharmacists,
                pharmacy technicians, and wider healthcare roles under the ARRS
                scheme requires careful planning, clear leadership, and a deep
                understanding of workforce pressures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                PCN DES Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Keeping pace with PCN DES compliance adds another layer of
                responsibility. Networks must align with contractual
                requirements while continuing to meet patient needs and manage
                evolving priorities. Balancing service targets, funding streams,
                and staff expectations demands expert support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our PCN Management and Support Services
            </h2>
            <p className="text-xl text-gray-600">
              We deliver a full PCN management service built around the real
              needs of your network. Our experts work alongside you to provide
              proactive, flexible, and results-driven support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Strategic Leadership
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Define clear vision and goals for your Primary Care Network
                    support
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Leadership coaching and guidance for PCN Clinical Directors
                    and managers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Data-led decision making to shape sustainable service
                    delivery
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Shield className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Operational Support
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Day-to-day management of clinical services for PCNs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Administrative support to reduce practice burdens</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Monitoring performance and ensuring smooth delivery across
                    the network
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Users className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Workforce and Clinical Integration
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Seamless integration of roles under the ARRS scheme PCN
                    support
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Workforce planning to meet PCN growth and service needs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Support for multidisciplinary teams to improve collaboration
                    and efficiency
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <CheckCircle className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                DES and ARRS Scheme Navigation
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Expert support in navigating DES requirements and funding
                    streams
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Ensuring alignment with NHS contractual frameworks
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Ongoing PCN service provider guidance for compliance and
                    optimisation
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Clock className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Workflow Systems and Process Improvement
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Streamline workflow systems in primary care for smoother
                    operations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Reduce duplication and delays across practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Implement best-practice processes for sustainable growth
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Remote Scalable Services
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Flexible support options, including fully remote service
                    delivery
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Scalable solutions that grow with your PCN</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    No impact on estate requirements or practice space
                    constraints
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Support Section */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://info.nhanow.com/hubfs/images/Learning+Leading/5-ways-to-engage-PT-feature.jpg"
                    alt="Specialist Support"
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
                    PCN Support
                  </p>
                  <p className="text-xs text-gray-600">Integrated Teams</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Specialist Support: Clinical Pharmacists and Pharmacy
                Technicians
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Effective PCN pharmacy support goes beyond hiring individuals —
                it's about building an integrated clinical team that works
                seamlessly within your network. We supply full-service teams of
                Clinical Pharmacists and Pharmacy Technicians, aligned to your
                PCN's needs and service objectives.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Clinical pharmacist PCN integration to manage medication
                    reviews, support long-term condition management, and lead
                    medicines optimisation initiatives
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Pharmacy technician PCN integration to streamline medication
                    supply processes and assist with patient consultations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Full compliance with ARRS scheme clinical pharmacy
                    requirements, ensuring your PCN maximises workforce funding
                    and service potential
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Proactive medicines optimisation in PCNs to reduce
                    prescribing risks, enhance patient safety, and support
                    effective long-term care plans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Virtual Pharmacists
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As a trusted PCN service provider, we deliver more than services —
              we deliver partnership, expertise, and proven results. We
              understand the complexities of managing primary care networks and
              work alongside your teams to ensure your PCN thrives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                National PCN Support
              </h3>
              <p className="text-gray-600">
                Track record of success across varied patient populations and
                demographics
              </p>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Seamless Integration
              </h3>
              <p className="text-gray-600">
                Aligning with local systems and processes for smooth service
                delivery
              </p>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Flexible Service Models
              </h3>
              <p className="text-gray-600">
                Scalable solutions that grow with your network's needs
              </p>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Clock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Data-Driven Insights
              </h3>
              <p className="text-gray-600">
                Improvements to optimise performance and track progress
              </p>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <CheckCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Expert Leadership
              </h3>
              <p className="text-gray-600">
                Support to guide your PCN through challenges, strategy, and
                transformation
              </p>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Star className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Proven Results
              </h3>
              <p className="text-gray-600">
                Partnership, expertise, and measurable outcomes for your PCN
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our PCN Clients Say
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAYhhA4B_MxolEKoHkdTOIF3pZazGRxBYfQ&s"
                    alt="Client Testimonial"
                    className="h-24 w-24 rounded-full object-cover border border-gray-200 shadow-sm"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Olivia</h3>
                  <p className="text-gray-600">
                    Former Clinical Director PCN and Current Pharmacy Team Lead
                  </p>
                </div>
              </div>

              <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                "We are subcontracting our remote pharmacy team from Virtual Pharmacists ... They have been a professional and
                responsive company to work with and always respond promptly to
                any queries or concerns. They successfully recruited 3
                pharmacists for us when we had been struggling for a long time
                to find suitable candidates. We wouldn't have originally chosen
                a remote service but actually the pharmacists have been great
                and have integrated well with our on-site team and have provided
                much needed stability and capacity to our pharmacy service."
              </blockquote>

              <p className="text-gray-700">
                "Virtual Pharmacists have provided great support to
                the pharmacists to enable them to get up and running quickly and
                be able to provide much needed support to our GP practice teams.
                I would highly recommend Virtual Pharmacists to any
                PCN considering subcontracting their pharmacists as part of the
                ARRS scheme."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Strengthen Your PCN with Expert Support?
            </h2>
            <p className="text-xl text-gray-600">
              Contact us today to learn more about our comprehensive PCN
              management services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-lg text-blue-600 font-semibold">
              0113 871 5065
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-lg text-blue-600 font-semibold">
               Hello@virtualpharmacist.co.uk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="animate-section py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your PCN Operations Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join PCNs nationwide who trust Virtual Pharmacists for
            expert management support, workforce integration, and improved
            patient outcomes.
          </p>
          <NavLink
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </NavLink>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PCNManagement;
