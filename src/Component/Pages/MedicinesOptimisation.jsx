import { useEffect } from "react";
import {
  CheckCircle,
  Pill,
  TrendingDown,
  Shield,
  ArrowRight,
  Users,
  Award,
  Target,
  FileText,
  MapIcon,
} from "lucide-react";
// import { Link } from "react-router-dom" // Commented out for standalone version
import Footer from "../Footer/Footer"; // You may need to adjust this path
import { NavLink } from "react-router-dom";

const MedicinesOptimisation = () => {
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
        className="animate-section py-20  mt-[150px]  md:mt-[150px] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1200")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        {/* Floating elements */}
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
              Medicines Optimisation
            </h1>
            <p
              className="text-2xl mb-8"
              style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}
            >
              Maximising Medicines Optimisation for Safer, More Effective
              Healthcare
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center  hover:translate-y-[-5px] duration-300 transition-all ">
                <Target className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Better Patient Outcomes
                </h3>
                <p className="text-sm text-blue-100">
                  Ensuring the right medicines are prescribed and used
                  effectively
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:translate-y-[-5px] duration-300 transition-all">
                <Shield className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Increased Safety</h3>
                <p className="text-sm text-blue-100">
                  Reducing medication errors, adverse drug reactions, and
                  unnecessary prescriptions
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center  hover:translate-y-[-5px] duration-300 transition-all  ">
                <TrendingDown className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Improved Efficiency
                </h3>
                <p className="text-sm text-blue-100">
                  Minimising medicine waste and optimising healthcare resources
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Medicines Optimisation */}
     <section className="animate-section py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          What is Medicines Optimisation?
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Medicines optimisation ensures medicines are prescribed,
          dispensed, and used effectively to achieve the best patient
          outcomes. It focuses on safety, evidence-based prescribing, and
          patient needs, going beyond medicines management, which handles
          logistics like procurement and distribution.
        </p>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Some examples of medicine optimisation include regular
          medication reviews, switching to cost-effective alternatives,
          and improving patient adherence through targeted education. By
          reducing waste and improving adherence, medicines optimisation
          enhances both patient care and healthcare efficiency.
        </p>
        <NavLink
          to={"/Contact"}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
        >
          Learn More
          <ArrowRight className="w-5 h-5" />
        </NavLink>
      </div>
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-full max-w-lg group">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Medicines Optimisation"
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
              Optimised Care
            </p>
            <p className="text-xs text-gray-600">Patient Safety</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Why Essential */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Medicines Optimisation is Essential for Healthcare Providers
            </h2>
            <p className="text-xl text-gray-600">
              Medicines optimisation goes beyond prescribing—it ensures
              medicines are used safely, effectively, and efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Better Patient Outcomes
              </h3>
              <p className="text-gray-600">
                Optimised medicines lead to fewer complications, improved
                symptom control, and better overall health.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Shield className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Enhanced Safety
              </h3>
              <p className="text-gray-600">
                Reduces medication errors and adverse reactions by ensuring
                prescriptions are appropriate and regularly reviewed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <TrendingDown className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cost Savings
              </h3>
              <p className="text-gray-600">
                Minimises medicine waste, improves stock management and ensures
                resources are used effectively.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Award className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Regulatory Compliance
              </h3>
              <p className="text-gray-600">
                Helps providers meet NICE and NHS guidelines, maintaining high
                standards while delivering safer treatments.
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
              Our Medicines Optimisation Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive services designed to support Primary Care Networks
              (PCNs), GP federations, and individual practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
              <FileText className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Medication Reviews and Audits
              </h3>
              <p className="text-gray-600 mb-4">
                We conduct comprehensive medication reviews and audits to
                identify inefficiencies, reduce waste, and improve prescribing
                accuracy.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Structured medication reviews</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Prescribing pattern analysis</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Polypharmacy management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
              <Users className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Clinician Support
              </h3>
              <p className="text-gray-600 mb-4">
                Our expert clinicians provide direct support, ensuring safer
                prescribing, better medication use, and improved patient
                outcomes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Clinical pharmacist support</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Specialist consultation</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Collaborative care planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100">
              <Award className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Training & Compliance
              </h3>
              <p className="text-gray-600 mb-4">
                We equip healthcare teams with the latest best practices and
                ensure alignment with NHS and NICE guidelines.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Training and education</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Compliance and governance</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Best practice implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
    <section className="animate-section py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center lg:justify-start">
        <div className="relative w-full max-w-lg group">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Why Partner with  Virtual Pharmacist"
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
              Partner with Us
            </p>
            <p className="text-xs text-gray-600">Enhanced Care</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Why Partner with  Virtual Pharmacist?
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          We work closely with GPs and healthcare teams to deliver
          tailored medicines optimisation solutions that enhance patient
          care, improve safety, and drive efficiency. Our approach is
          built on collaboration, expertise, and measurable results.
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Collaborative Approach
              </h3>
              <p className="text-gray-600 text-sm">
                We integrate seamlessly with healthcare teams, providing
                specialist support and clinical reviews
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Customised Strategies
              </h3>
              <p className="text-gray-600 text-sm">
                Tailored medicines optimisation plans that align with your
                clinical and operational goals
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Proven Impact
              </h3>
              <p className="text-gray-600 text-sm">
                Measurable improvements in patient care, safety, and cost
                efficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Testimonial */}
      <section className="animate-section py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Practice Manager Testimonial
              </h3>
            </div>
            <blockquote className="text-lg text-gray-600 mb-6 italic leading-relaxed">
              "After several pitched presentations  Virtual Pharmacist
              were unanimously chosen... The clinical pharmacists are now an
              integral part of our team. We are currently ranked 1st for total %
              SMR for polypharmacy. The ethos of CPS is all about being
              positive, working collaboratively and delivering on results and
              safety."
            </blockquote>
            <p className="font-semibold text-gray-900">S Child</p>
            <p className="text-gray-600">Practice Manager</p>
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements in patient care and healthcare efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">1st</div>
              <p className="text-gray-700 font-semibold mb-2">
                Ranking Achieved
              </p>
              <p className="text-gray-600 text-sm">
                For total % SMR polypharmacy
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700 font-semibold mb-2">
                Client Satisfaction
              </p>
              <p className="text-gray-600 text-sm">
                Unanimously chosen by practices
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
              <p className="text-gray-700 font-semibold mb-2">
                Waste Reduction
              </p>
              <p className="text-gray-600 text-sm">
                Average reduction in medication waste
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
              <p className="text-gray-700 font-semibold mb-2">
                Fewer Adverse Events
              </p>
              <p className="text-gray-600 text-sm">
                Reduction in medication-related problems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="animate-section py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Maximise Medicines Efficiency – Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to learn how our medicines optimisation services
            can transform your healthcare delivery and improve patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NavLink
              to={"/contact"}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </NavLink>
            <div className="text-blue-100">
              <p className="font-semibold">Call: 0113 871 5065</p>
              <p> Email: Hello@virtualpharmacist.co.uk</p>
               
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicinesOptimisation;
