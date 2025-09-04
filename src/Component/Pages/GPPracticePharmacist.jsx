import { useEffect } from "react";
import {
  CheckCircle,
  Shield,
  Users,
  Stethoscope,
  Target,
  ArrowRight,
  Phone,
  Mail,
  MapPinCheckInsideIcon,
} from "lucide-react";
import Footer from "../Footer/Footer";
import { Link, NavLink } from "react-router-dom";

const GPPracticePharmacist = () => {
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
            'url("https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ textShadow: "2px 2px 8px rgba(0, 112, 244, 0.75)" }}
            >
              GP Practice Pharmacist Support
            </h1>
            <p
              className="text-2xl mb-8"
              style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}
            >
              As overworked GP's struggle to manage patient needs amidst
              increased demand, our services can help right now
            </p>
          </div>
        </div>
      </section>

     {/* Importance Section */}
<section className="animate-section py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          The Importance of GP Practice Pharmacists
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          GP Practice Pharmacists play a crucial role in primary care,
          enhancing patient care with their expertise and nuanced
          approach. As healthcare access becomes increasingly challenging,
          their role as  Virtual Pharmacist in General Practice is
          increasingly important for optimising processes and further
          efficiency.
        </p>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          In healthcare, understanding the patient holistically is
          imperative. GP pharmacists are essential, linking patients'
          health goals with a safe, patient-centered approach to
          medication management. Their skills are vital in GP Practices,
          PCNs, and GP Federations for effective patient care and
          personalized treatment plans.
        </p>
        <NavLink
          to="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
        >
          Get Support
          <ArrowRight className="w-5 h-5" />
        </NavLink>
      </div>
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-full max-w-lg group">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://ideogram.ai/assets/progressive-image/balanced/response/cKeBx2RRS3-vcQvZF3k3iw"
              alt="GP Practice Pharmacists"
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
              GP Pharmacists
            </p>
            <p className="text-xs text-gray-600">Enhanced Care</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Diverse Roles Section */}
<section className="animate-section py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Diverse Roles in General Practice
      </h2>
      <p className="text-xl text-gray-600">
        Versatile professionals serving as medication strategists,
        educators, and key players in chronic disease management
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center lg:justify-start">
        <div className="relative w-full max-w-lg group">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://ideogram.ai/assets/progressive-image/balanced/response/teFP1bibSvqSahusocFe-A"
              alt="Diverse Roles in General Practice"
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
              Versatile Roles
            </p>
            <p className="text-xs text-gray-600">Patient Support</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          GP Practice Pharmacists are versatile, serving as medication
          strategists, educators, and key players in chronic disease
          management. They offer accessible support for medication-related
          issues and collaborate with other healthcare professionals to
          improve patient outcomes.
        </p>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Their role is integral to primary care and will continue to
          grow, shaping the future of patient-centred healthcare.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Evolving Role Section */}
<section className="animate-section py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        The Evolving Role of Pharmacists in General Practice
      </h2>
      <p className="text-xl text-gray-600">
        GP Practice Pharmacists have transformed into key healthcare team
        members
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border">
        <Target className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Expanded Responsibilities
        </h3>
        <p className="text-gray-600">
          Their role now includes direct patient care, clinical
          consultations, and chronic disease management, utilising their
          pharmacological expertise for complex medication therapies.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border">
        <Stethoscope className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          From Dispensing to Patient Care
        </h3>
        <p className="text-gray-600">
          They've shifted to active patient care, conducting medication
          reviews, managing drug interactions, and customising medication
          plans for efficacy and safety.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border">
        <Users className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Collaborative Healthcare Approach
        </h3>
        <p className="text-gray-600">
          These pharmacists collaborate with doctors, nurses, and other
          professionals to develop comprehensive treatment plans for
          holistic patient care.
        </p>
      </div>
    </div>
  </div>
</section>

{/* How Pharmacists Enhance GP Support */}
<section className="animate-section py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        How Pharmacists Enhance GP Support and Practice Efficiency
      </h2>
      <p className="text-xl text-gray-600">
         Virtual Pharmacist are key to enhancing GP support and the
        efficiency of GP practices
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Integral to Team Dynamics
              </h3>
              <p className="text-gray-600">
                As Practice Pharmacists, they are crucial team members,
                handling medication management and patient counselling,
                freeing GPs to focus on diagnoses and treatment with
                patients who have complex needs.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Efficiency in Medication Management
              </h3>
              <p className="text-gray-600">
                They play a significant role in efficient medication
                management, overseeing prescription accuracy, compliance
                and adherence, improving patient outcomes and reducing
                errors.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Patient Care and Education
              </h3>
              <p className="text-gray-600">
                Pharmacists provide patient education on medication and
                lifestyle changes, enhancing care quality and boosting
                patient satisfaction and engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-full max-w-lg group">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src=" https://images.pexels.com/photos/8657290/pexels-photo-8657290.jpeg"
              alt="Pharmacists Enhance GP Support"
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
              GP Support
            </p>
            <p className="text-xs text-gray-600">Efficient Care</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Services Offered */}
<section className="animate-section py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Services Offered by GP Practice Pharmacists
      </h2>
      <p className="text-xl text-gray-600">
        Specialised services to enhance patient care and improve GP
        practice operations
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border">
        <Shield className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Comprehensive Medication Management
        </h3>
        <p className="text-gray-600 mb-4">
          A service, involving reviewing medication regimens, ensuring
          proper usage, and managing prescriptions to prevent errors and
          optimise outcomes.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border">
        <Users className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Patient Consultations and Education
        </h3>
        <p className="text-gray-600 mb-4">
          They conduct one-on-one consultations, discussing medications,
          side effects, and interactions, and educate patients to
          understand their treatment plans fully.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border">
        <Stethoscope className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Chronic Disease Management
        </h3>
        <p className="text-gray-600 mb-4">
          Actively involved in managing chronic diseases like diabetes and
          hypertension, they offer medication advice and monitor patient
          progress.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border">
        <Target className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Collaborative Care Planning
        </h3>
        <p className="text-gray-600 mb-4">
          Pharmacists work with GPs and healthcare professionals to
          develop and implement holistic care plans.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border">
        <Shield className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Medication Safety and Compliance
        </h3>
        <p className="text-gray-600 mb-4">
          They are key in ensuring medication safety, assessing patient
          compliance, adjusting dosages, and monitoring for adverse
          reactions.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border">
        <Users className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Administrative Support
        </h3>
        <p className="text-gray-600 mb-4">
          Beyond clinical care, they assist in administrative tasks such
          as complex discharge reconciliation and staying updated with
          regulatory changes.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Value Section with Image */}
<section className="animate-section py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        The Value of  Virtual Pharmacist on Patient Care
      </h2>
      <p className="text-xl text-gray-600">
         Virtual Pharmacist in General Practice have revolutionised
        patient care within GP practices
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center lg:justify-start">
        <div className="relative w-full max-w-lg group">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Value of  Virtual Pharmacist"
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
              Patient Care
            </p>
            <p className="text-xs text-gray-600">Clinical Impact</p>
          </div>
        </div>
      </div>
      <div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">
                Personalised Patient Care
              </h3>
              <p className="text-gray-600 text-sm">
                They work closely with patients, understanding their
                health needs and medication histories, leading to
                effective treatments and improved outcomes.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">
                Enhanced Medication Management
              </h3>
              <p className="text-gray-600 text-sm">
                As pharmaceutical experts, GP Pharmacists manage
                medications accurately, especially for patients with
                complex conditions, reducing drug interactions and
                improving adherence.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">
                Preventive Healthcare Measures
              </h3>
              <p className="text-gray-600 text-sm">
                Practice Pharmacists implement preventive strategies,
                identifying at-risk patients and advising early
                interventions for better long-term health.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">
                Improved Access to Healthcare Services
              </h3>
              <p className="text-gray-600 text-sm">
                They alleviate GP workload, allowing for more accessible
                healthcare services and timely patient care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*    Virtual Pharmacist Services */}
<section className="animate-section py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
           Virtual Pharmacist: Tailored Pharmacist Services
      </h2>
      <p className="text-xl text-gray-600">
        We provide specialised services integrating into GP practices,
        PCNs and GP Federations
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-blue-50 p-8 rounded-lg hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
        <Shield className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Expert Clinical Pharmacist Integration
        </h3>
        <p className="text-gray-600">
          We ensure access to  Virtual Pharmacist in General Practice,
          adept in medication management and collaborative healthcare.
        </p>
      </div>
      <div className="bg-blue-50 p-8 rounded-lg hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
        <Target className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Comprehensive Medication Management Services
        </h3>
        <p className="text-gray-600">
          Specialising in medication management in GP Practices, we offer
          everything from prescription management to methodical medication
          reviews.
        </p>
      </div>
      <div className="bg-blue-50 p-8 rounded-lg hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
        <Users className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Training and Development Support
        </h3>
        <p className="text-gray-600">
          We support ongoing education for pharmacists to ensure they
          remain at the forefront of pharmaceutical practice.
        </p>
      </div>
      <div className="bg-blue-50 p-8 rounded-lg hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
        <Stethoscope className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Collaborative Care and Support
        </h3>
        <p className="text-gray-600">
          Our clinical work alongside GPs and primary care teams,
          enhancing patient care through collaborative approaches.
        </p>
      </div>
      <div className="bg-blue-50 p-8 rounded-lg hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
        <Users className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Customised Patient Consultation
        </h3>
        <p className="text-gray-600">
          Understanding diverse patient needs, our pharmacists provide
          tailored consultations, addressing health and medication
          concerns.
        </p>
      </div>
      <div className="bg-blue-50 p-8 rounded-lg hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
        <Shield className="w-12 h-12 text-blue-600 mb-6" />
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Quality Assurance and Improvement
        </h3>
        <p className="text-gray-600">
          Committed to healthcare quality improvement, our pharmacists
          engage in quality assurance and best practice development.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* Testimonial Section */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What PCN's say about our clinical services?
            </h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">D.C</h3>
                <p className="text-gray-600">PCN Operations Manager</p>
              </div>
            </div>
            <blockquote className="text-lg text-gray-700 italic leading-relaxed">
              "Great communication throughout the service… The GPs especially
              Duty doctors has seen a great difference in the amount of
              medication related work that gets allocated to them. Our
              pharmacists via   Virtual Pharmacist are great, upon
              learning the weird and wonderful ways each Practice works they
              have really been brilliant in delivering great Clinical Pharmacist
              support. Great communication throughout the service, really good
              with wanting to work with the Practices/ PCN to suit needs of the
              Practices."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="animate-section py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact    Virtual Pharmacist
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to enhance your GP practice with our pharmacist support
              services? Get in touch today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a
                href="tel: 01138715065"
                className="text-blue-100 hover:text-white text-lg"
              >
                0113 871 5065
              </a>
            </div>
            

            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:info@clinicalprescribingservices.co.uk"
                className="text-blue-100 hover:text-white text-lg"
              >
              Hello@virtualpharmacist.co.uk
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <NavLink
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Enquiry Form
              <ArrowRight className="w-5 h-5" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

export default GPPracticePharmacist;
