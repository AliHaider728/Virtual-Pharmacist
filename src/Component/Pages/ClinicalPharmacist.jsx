import { useEffect } from "react";
import {
  CheckCircle,
  Stethoscope,
  Users,
  Clock,
  Target,
  ArrowRight,
  Shield,
  BookOpen,
  Award,
  Phone,
  Mail,
} from "lucide-react";
import Footer from "../Footer/Footer";

const ClinicalPharmacist = () => {
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

  // Updated function to navigate to contact page
  const handleGetStarted = () => {
    // Navigate to contact page
    window.location.href = "/contact";
  };

  // Separate function for scrolling to contact section on same page
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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
          className="animate-section bg-fixed py-20 mt-[140px] md:mt-[150px] bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage:
              'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTptHy7VxCVRFE_Bb11DA-85V2P7w1rJVQZ9Q&s")',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/80"></div>
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
                Clinical Pharmacist Support Service
              </h1>
              <p
                className="text-2xl mb-4"
                style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}
              >
                Clinical Pharmacist Support That Delivers – Scalable, Trusted,
                Expert-Led
              </p>
              <div className="text-lg mb-8 space-y-2">
                <p>
                  ✓ Seamless Integration: Clinical pharmacists supporting PCNs,
                  GP practices, and federations
                </p>
                <p>
                  ✓ Reduced GP Workload: Medication management, SMRs, and
                  long-term condition support
                </p>
                <p>
                  ✓ Flexible Service Models: Tailored solutions for your team,
                  remote or in-practice
                </p>
              </div>
              <button
                onClick={handleGetStarted}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                Book Your Free Consultation Today
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* What Is a Clinical Pharmacist */}
        <section className="animate-section py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  What Is a Clinical Pharmacist?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  A clinical pharmacist is a healthcare professional trained to
                  provide expert advice on medicines, manage complex medication
                  plans, and support patients directly within healthcare
                  settings. The role of a clinical pharmacist goes beyond
                  traditional pharmacy duties, focusing on patient-centred care,
                  medication optimisation, and improving treatment outcomes.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  As part of the NHS clinical pharmacist role, they work
                  alongside GPs, nurses, and wider healthcare teams to reduce
                  workloads, manage long-term conditions, and enhance patient
                  safety. At Virtual Pharmacists Solutions, our clinical
                  pharmacist services are designed to integrate seamlessly into
                  your practice, PCN or Federation ensuring patients receive
                  safe, effective, and personalised care.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-lg group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/7230263/pexels-photo-7230263.jpeg"
                      alt="Clinical Pharmacist"
                      className="w-full h-96  md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
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
                      Expert Care
                    </p>
                    <p className="text-xs text-gray-600">Patient-Centred</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Clinical Pharmacists Are Essential */}
        <section className="animate-section py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Clinical Pharmacists Are Essential in Primary Care
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Clinical pharmacists in primary care play a crucial role in
                supporting the modern NHS, helping to deliver safer, more
                efficient healthcare at the community level. Through the ARRS
                clinical pharmacist programme, NHS England has made clinical
                pharmacists a key part of Primary Care Networks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] text-center">
                <Shield className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Medicines Optimisation
                </h3>
                <p className="text-gray-600 text-sm">
                  Ensuring patients receive the most effective, safe treatments
                  in primary care
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] text-center">
                <Users className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Complex Medication Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Managing complex medication regimes for patients with multiple
                  conditions
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] text-center">
                <Stethoscope className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  GP Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Supporting GPs with medication reviews, repeat prescriptions,
                  and patient consultations
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] text-center">
                <Target className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Long-term Conditions
                </h3>
                <p className="text-gray-600 text-sm">
                  Managing long-term conditions and chronic disease management
                  to reduce hospital admissions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Clinical Pharmacist Services */}
        <section className="animate-section py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Clinical Pharmacist Services
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our clinical pharmacist support service is built to strengthen
                your practice, PCN or Federation by improving patient care and
                easing workload pressures. Our experienced primary care
                pharmacists deliver a full range of clinical pharmacist
                services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                <Stethoscope className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Medication Management Service
                </h3>
                <p className="text-gray-600 mb-4">
                  Safer, optimised prescribing for improved patient outcomes
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                <Target className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Structured Medication Reviews (SMRs)
                </h3>
                <p className="text-gray-600 mb-4">
                  Ensuring safe and effective long-term medication use
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                <Clock className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Discharge Letter Reconciliation
                </h3>
                <p className="text-gray-600 mb-4">
                  Preventing medication errors during care transitions
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                <Shield className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Antibiotic Stewardship Service
                </h3>
                <p className="text-gray-600 mb-4">
                  Reducing resistance risks and promoting best practice
                  prescribing
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                <CheckCircle className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Clinical Audits
                </h3>
                <p className="text-gray-600 mb-4">
                  Supporting continuous improvement and compliance for practices
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
                <Award className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  QoF Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Helping meet Quality and Outcomes Framework targets
                  efficiently
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Flexible Service Delivery Options
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    PCNs and Practices:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>
                        PCN workforce integration for seamless team alignment
                      </span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>Practice-level support to reduce GP workload</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>Flexible contracts and service models</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Remote Clinical Pharmacist Support:
                  </h4>
                  <p className="text-gray-600">
                    We offer flexible remote options to help practices and PCNs
                    access expert medicines management without needing
                    full-time, on-site staff. Trusted, scalable support tailored
                    to your workforce needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Virtual Pharmacists Solutions */}
        <section className="animate-section py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Virtual Pharmacists
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We understand the pressures of managing primary care services.
                  Our clinical pharmacist solutions are built to reduce the
                  burden on your teams while improving patient outcomes across
                  your network.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Experienced Clinical Pharmacists
                      </h4>
                      <p className="text-gray-600">
                        Real-world primary care expertise you can trust
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Reduced GP Workload
                      </h4>
                      <p className="text-gray-600">
                        Safe delegation of medicines-related tasks to qualified
                        professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Faster Service Improvements
                      </h4>
                      <p className="text-gray-600">
                        From SMRs to medicines optimisation, see results quickly
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Flexible Support
                      </h4>
                      <p className="text-gray-600">
                        Designed around your PCN and practice needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Ongoing Training & Integration
                      </h4>
                      <p className="text-gray-600">
                        Strengthen your healthcare team for long-term success
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-lg group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="https://www.digitalhealth.gov.au/sites/default/files/styles/hero_1_up/public/2020-11/Dr%20Kean-Seng_Lim_sitting_at_computer.jpg?h=c9f93661&itok=N9osnLkW"
                      alt="Why Choose Clinical Prescribing Services"
                      className="w-full h-[490px] object-cover transition-transform duration-700 group-hover:scale-105"
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
                      Trusted Expertise
                    </p>
                    <p className="text-xs text-gray-600">
                      Primary Care Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="animate-section py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="mb-6">
                <div className="relative w-40 h-40 mx-auto group">
                  <div className="relative overflow-hidden rounded-full shadow-2xl">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ERM2l20nYC52fyRCbkzAI33w6eQ2OxcxzA&s"
                      alt="Clinical Pharmacist"
                      className="w-40 h-40 rounded-full mx-auto mb-4 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                "Virtual Pharmacists has been nothing short of an incredible
                journey—one that has allowed me to truly make a meaningful,
                positive impact on patients lives. I've witnessed the team grow
                in extraordinary ways, yet the unwavering support I've received
                as an individual has never faltered."
              </blockquote>
              <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                "Virtual Pharmacists feels like a family—one where everyone
                uplifts and encourages each other, not just to grow
                professionally, but to thrive as individuals. I am incredibly
                proud to be part of an organisation where optimal patient care
                isn't just a goal—it's at the very heart of everything we do."
              </blockquote>
              <cite className="text-blue-600 font-semibold">
                N Ali – Clinical Pharmacist
              </cite>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="animate-section py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions about Clinical Pharmacists
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What is the role of a clinical pharmacist in healthcare?
                </h3>
                <p className="text-gray-600">
                  Clinical pharmacists work collaboratively with other
                  healthcare professionals to optimize patient medication
                  therapy, provide medication management, and improve healthcare
                  outcomes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Can a clinical pharmacist prescribe medications?
                </h3>
                <p className="text-gray-600">
                  Yes, a clinical pharmacist in the UK can prescribe
                  medications, but they must first obtain an additional
                  qualification known as an Independent Prescribing
                  qualification. This qualification allows pharmacists to assess
                  patients, make a diagnosis, and prescribe medications related
                  to their area of expertise and competence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Is a clinical pharmacist a doctor?
                </h3>
                <p className="text-gray-600">
                  No, a clinical pharmacist is not a doctor. They are healthcare
                  professionals with specialised training in pharmacology,
                  focusing on medication management, patient care, and
                  collaborating with doctors, but they do not hold a medical
                  degree.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="animate-section py-20 bg-[linear-gradient(135deg,#002B5B,#0496FF)] text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contact Virtual Pharmacists Solutions for Expert Clinical
                Pharmacist Support
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
                If you're looking to strengthen your PCN, practice, or
                federation with dedicated pharmacist support, Virtual
                Pharmacists Solutions is here to help. Our experienced Clinical
                Pharmacists work directly with your teams to deliver safe,
                effective, and patient-focused care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Get Your Free Consultation
                </h3>
                <p className="text-blue-100 mb-8">
                  Take the first step towards improving your medication
                  management and reducing practice pressures. Schedule a free,
                  no-obligation consultation with our experts.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-blue-200" />
                    <span className="text-lg">0113 871 5065</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-blue-200" />
                    <span className="text-lg">
                      Hello@virtualpharmacist.co.uk
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-4">
                  Ready to Get Started?
                </h4>
                <p className="text-blue-100 mb-6">
                  Book your free consultation today to explore how our solutions
                  can support your workforce and enhance patient outcomes.
                </p>
                <button
                  onClick={handleGetStarted}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 w-full justify-center"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default ClinicalPharmacist;
