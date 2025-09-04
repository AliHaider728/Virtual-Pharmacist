import { useEffect } from "react";
import {
  CheckCircle,
  UserCheck,
  Cog,
  Shield,
  Clock,
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  PhoneCall,
  MailCheckIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const PharmacyTechnician = () => {
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
            'url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-4 sm:left-10 w-10 sm:w-16 h-10 sm:h-16 bg-white/10 rounded-full animate-pulse"></div>

        <div
          className="absolute bottom-20 right-4 sm:right-10 w-12 sm:w-20 h-12 sm:h-20 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>

        <div
          className="hidden absolute top-1/2 left-1/6 sm:left-1/4 w-6 sm:w-8 h-6 sm:h-8 bg-white/30 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ textShadow: "2px 2px 8px rgba(0, 112, 244, 0.75)" }}
            >
              Pharmacy Technician Support
            </h1>
            <p
              className="text-2xl mb-8"
              style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}
            >
              Pharmacy Technicians for your GP Practice, PCN or GP Federations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:translate-y-[-5px] duration-300 transition-all">
                <p className="text-sm text-white/90">
                  Enhance patient care with expert pharmacy technician support
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:translate-y-[-5px] duration-300 transition-all">
                <p className="text-sm text-white/90">
                  Reduce admin and clinical workload for your in-house team
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:translate-y-[-5px] duration-300 transition-all">
                <p className="text-sm text-white/90">
                  Scalable, flexible service designed for primary care settings
                  nationally
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:translate-y-[-5px] duration-300 transition-all">
                <p className="text-sm text-white/90">
                  Improve medicines safety, adherence, and health outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is a Pharmacy Technician */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Is a Pharmacy Technician?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Pharmacy technicians are essential healthcare professionals who
                support safe and effective medicines use across GP practices,
                PCNs, and GP federations. They handle key tasks like medication
                reviews, audits, and discharge reconciliation, working closely
                with clinical pharmacists but focusing on technical and
                operational aspects of care.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                While pharmacists make clinical decisions, technicians manage
                the processes that keep prescribing safe and efficient making
                the UK pharmacy technician a vital part of the modern primary
                care team.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Pharmacy Technician"
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
                    Technician Support
                  </p>
                  <p className="text-xs text-gray-600">Efficient Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pharmacy Technician Responsibilities in Primary Care
            </h2>
            <p className="text-xl text-gray-600">
              Our primary care pharmacy technicians provide hands-on support
              that helps GP practices, PCNs, and GP federations run more
              efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <UserCheck className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Medicines Management
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Medicines reconciliation and optimisation</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>
                    Discharge summary reviews and medication alignment
                  </span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Support for structured medication reviews (SMRs)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Cog className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Digital Prescribing Support
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>
                    EPS and ERD facilitation to streamline digital prescribing
                  </span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Repeat prescription management</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>
                    Supporting utilisation of electronic repeat dispensing
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Shield className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quality & Audit
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Service evaluation and audit participation</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Quality improvement initiatives</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Assistance with chronic disease management plans</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Users className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Patient Education & Support
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>
                    Health promotion and patient education initiatives
                  </span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Training and mentorship for clinical staff</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Training and mentorship for non-clinical staff</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Value Section */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Value Pharmacy Technicians Bring to Primary Care
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements in safety, efficiency, and patient care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div
                className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg mb-6"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80")',
                }}
              ></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Improving Patient Safety and Education
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pharmacy technicians play a key role in promoting safe
                medication use through timely reviews, accurate reconciliation,
                and patient-facing support. Their involvement enhances medicines
                optimisation and helps patients better understand how to manage
                their treatments, improving both safety and adherence.
              </p>
            </div>

            <div className="text-center p-8">
              <div
                className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg mb-6"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80")',
                }}
              ></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reducing GP and Pharmacist Workload
              </h3>
              <p className="text-gray-600 leading-relaxed">
                By taking on technical, repeat prescribing, and administrative
                tasks, technicians free up clinical time for GPs, nurses and
                clinical pharmacists. This form of pharmacy technician support
                allows other professionals to focus on more complex clinical
                duties while maintaining high standards across routine
                prescribing functions.
              </p>
            </div>

            <div className="text-center p-8">
              <div
                className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg mb-6"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80")',
                }}
              ></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Driving Efficiency and Cost-Effectiveness
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The pharmacy technician role in primary care contributes
                directly to operational efficiency. From implementing audits to
                managing digital prescribing systems, technicians deliver
                measurable value making pharmacy technician services a
                cost-effective solution for modern general practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Services */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Tailored Pharmacy Technician Services
            </h2>
            <p className="text-xl text-gray-600">
              Designed to meet the real-world demands of general practice, PCNs,
              and GP federations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Medication Management
              </h3>
              <p className="text-gray-600 mb-4">
                Our technicians support safe, efficient medicines use by
                assisting with reviews, reconciliation, and day-to-day
                prescribing tasks — improving patient outcomes and reducing
                delays.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Clock className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Administrative Support
              </h3>
              <p className="text-gray-600 mb-4">
                We handle essential admin tasks such as updating records,
                processing EPS prescriptions, and managing repeat requests —
                freeing up valuable clinical time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Health Promotion
              </h3>
              <p className="text-gray-600 mb-4">
                From advising patients on healthy lifestyles to supporting
                vaccination campaigns, our technicians contribute to proactive
                care and preventative health services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Users className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Clinical Staff Support
              </h3>
              <p className="text-gray-600 mb-4">
                We offer reliable pharmacy technician support for GP practices,
                easing pressure on GPs, pharmacists, and nurses by taking on
                technical and operational responsibilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <UserCheck className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Training and Upskilling
              </h3>
              <p className="text-gray-600 mb-4">
                Our technicians can help deliver in-practice training, mentor
                junior staff, and support continuous improvement across the
                team.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Cog className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Flexible, Scalable Workforce
              </h3>
              <p className="text-gray-600 mb-4">
                Whether you need part-time help or full-time integration, we
                provide tailored healthcare technician support that fits your
                staffing model and patient demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Direct Benefits to Your Practice and Patients
            </h2>
            <p className="text-xl text-gray-600">
              Practical, measurable value to both your practice operations and
              the patients you care for
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Practice Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Reduces GP workload
                    </h4>
                    <p className="text-gray-600 text-sm">
                      By handling routine tasks, technicians free up time for
                      more complex clinical work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Improves SOP implementation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Technicians support process consistency, helping embed
                      safe practices across the team.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Streamlines medication processes
                    </h4>
                    <p className="text-gray-600 text-sm">
                      They enhance workflow around repeat prescribing, EPS, and
                      discharge reconciliation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Cost-effective team expansion
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Affordable support that boosts your skill mix without
                      needing full-time clinical hires.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">
                Patient Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Better medication adherence
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Patients receive guidance on how and when to take
                      medications correctly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      More informed about medications
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Patients benefit from one-to-one support and explanations,
                      improving confidence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Access to health education
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Technicians promote healthy living, vaccinations, and
                      preventative care.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Improved safety and outcomes
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Their input helps reduce errors, identify risks, and
                      support long-term condition management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Virtual Pharmacist for Pharmacy Technician
              Support?
            </h2>
            <p className="text-xl text-gray-600">
              We're more than just a provider — we're a trusted NHS partner
              committed to supporting sustainable, high-quality primary care
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center lg:justify-start">
              <div className="relative  w-full h-96 bg-cover bg-center rounded-lg shadow-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Pharmacy Technician Support"
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
                    Trusted Support
                  </p>
                  <p className="text-xs text-gray-600">NHS Partner</p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Experienced Workforce
                    </h3>
                    <p className="text-gray-600">
                      Our pharmacy technicians are skilled, GPhC-registered
                      professionals with direct experience in general practice
                      and PCN settings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Cog className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Scalable Service Model
                    </h3>
                    <p className="text-gray-600">
                      Whether you need part-time support or a full-time embedded
                      role, we tailor our service to suit your size, workload,
                      and staffing mix.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Tailored Implementation and Training
                    </h3>
                    <p className="text-gray-600">
                      We work closely with your team to ensure smooth
                      onboarding, alignment with your systems, and optional
                      mentoring support to build internal capacity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Trusted Across the NHS
                    </h3>
                    <p className="text-gray-600">
                      From local practices to large-scale PCNs and GP
                      Federations, we've delivered proven results nationally
                      that improve efficiency, reduce pressure, and enhance
                      patient care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="animate-section py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-8 md:p-12 rounded-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What's it like working as a Pharmacy Technician?
              </h2>
              <p className="text-lg text-gray-600">
                Reviews from technicians on working with Core Prescribing
                Solutions
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16  h-16 md:h-40 md:w-40 md:rounded-full bg-cover bg-center rounded-full"
                  style={{
                    backgroundImage:
                      'url("https://image.cnbcfm.com/api/v1/image/108097230-1738692290295-Ethan_Kross_Headshot_PC_Mike_Blabac_2.jpg?v=1738694398")',
                  }}
                ></div>
                <div>
                  <h3 className="font-bold text-gray-900">Ethan Cross</h3>
                  <p className="text-sm text-gray-600">
                    MAPharmT MAPCPharm – Pharmacy Technician
                  </p>
                </div>
              </div>

              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "I joined Virtual Pharmacist at a time in my career
                when I was looking to expand not just my role as pharmacy
                technician but also my clinical knowledge, the part of pharmacy
                and healthcare I enjoy the most. Since working here, I have
                learned so much clinically: blood test results, medicine
                optimisations and drug audits, all with the amazing support of
                colleagues at Virtual Pharmacist and in the PCN."
              </blockquote>

              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "I have been put on to the CPPE Primary Care Pharmacy Education
                Pathway, which has increased my knowledge and skills. I was very
                proud and honoured to be nominated and shortlisted for APTUK
                Primary Care Pharmacy Technician of the Year Award 2022 with the
                support of Virtual Pharmacist."
              </blockquote>

              <blockquote className="text-gray-700 text-lg leading-relaxed">
                "I would highly recommend working for Clinical Prescribing
                Services to any Clinical Services Teams also any PCN's to engage
                with Virtual Pharmacist."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="animate-section py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Pharmacy Technicians for your PCN or Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to learn how our pharmacy technician support can
            improve efficiency, reduce workload, and enhance patient care in
            your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <span>
                  <PhoneCall />
                </span>
                <span>0113 871 5065</span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <MailCheckIcon />
                </span>
                <span>Hello@virtualpharmacist.co.uk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PharmacyTechnician;
