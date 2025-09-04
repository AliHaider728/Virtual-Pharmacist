import { useEffect } from "react";
import {
  CheckCircle,
  Target,
  Users,
  Shield,
  TrendingUp,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const ARRS = () => {
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
        className="animate-section bg-fixed py-20 mt-[150px] md:mt-[150px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage:
            'url("https://assets.grok.com/users/f8a26a7a-7a73-4b20-8385-6b937d0fd366/generated/b9e3f2e8-2303-48e5-929f-d4657e4dc016/image.jpg")',
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

        <div
          className="absolute top-1/2 left-1/6 sm:left-1/4 w-6 sm:w-8 h-6 sm:h-8 bg-white/30 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ textShadow: "2px 2px 8px rgba(0, 112, 244, 0.75)" }}
            >
              Additional Roles Reimbursement Scheme (ARRS)
            </h1>
            <p
              className="text-2xl mb-8"
              style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}
            >
              Optimise your ARRS funding with Clinical Prescribing Services
            </p>
          </div>
        </div>
      </section>

      {/* What is ARRS */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is ARRS?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Additional Roles Reimbursement Scheme (ARRS) is a
                cornerstone initiative within the NHS Long Term Plan, designed
                to revolutionise primary care services across the UK. By
                offering strategic funding through the NHS Reimbursement Scheme,
                the ARRS enables Primary Care Networks (PCNs) to enrich their
                teams with diverse roles, addressing the urgent need for a more
                comprehensive healthcare workforce.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The ARRS roles list encompasses a wide range of healthcare
                professionals, from clinical pharmacists to social prescribing
                link workers, significantly expanding the capabilities of PCN
                ARRS teams.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://midlands.leadershipacademy.nhs.uk/wp-content/uploads/sites/30/2023/02/Generic-Primary-Care-Team-1024x576.png"
                    alt="ARRS Initiative"
                    className="w-full h-96 md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
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
                    ARRS Support
                  </p>
                  <p className="text-xs text-gray-600">Team Enhancement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals of ARRS */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What are the Goals of ARRS?
            </h2>
            <p className="text-xl text-gray-600">
              The primary goal of the ARRS is to alleviate the increasing
              pressures on general practices and improve access to healthcare
              services for patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300  hover:translate-y-[-6px] ">
              <Target className="w-12 h-12 text-blue-600 mb-6 hover:translate-y-[-6px] transition-all duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Enhanced Capacity
              </h3>
              <p className="text-gray-600">
                Enhance the capacity of primary care services to meet the
                growing demand for healthcare.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300  hover:translate-y-[-6px] ">
              <Users className="w-12 h-12 text-blue-600 mb-6 hover:translate-y-[-6px] transition-all duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Broader Services
              </h3>
              <p className="text-gray-600">
                Deliver a broader range of services to patients, thereby
                improving patient outcomes and satisfaction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300  hover:translate-y-[-6px] ">
              <Shield className="w-12 h-12 text-blue-600 mb-6 hover:translate-y-[-6px] transition-all duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Service Integration
              </h3>
              <p className="text-gray-600">
                Support the integration of services within PCNs, facilitating a
                more collaborative and efficient approach to patient care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300  hover:translate-y-[-6px] ">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-6 hover:translate-y-[-6px] transition-all duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Preventative Approach
              </h3>
              <p className="text-gray-600">
                Drive forward the shift towards a more preventative approach to
                healthcare, reducing the reliance on hospital services and
                promoting community-based care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARRS Roles */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The 19 ARRS Roles
            </h2>
            <p className="text-xl text-gray-600">
              Diverse healthcare professionals contributing uniquely to patient
              care and broadening services offered by PCNs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Clinical Pharmacist",
              "Pharmacy Technician",
              "Health and Well-being Coach",
              "Dietician",
              "Podiatrist",
              "Paramedic",
              "Adult Mental Health Practitioner",
              "Children and Young People's Mental Health Practitioner",
              "Nursing Associate",
              "Trainee Nursing Associate",
              "Occupational Therapist",
              "First-contact Physiotherapist",
              "Care Co-ordinator",
              "Physician Associate",
              "Social Prescribing Link Worker",
              "General Practice Assistant",
              "Digital and Transformation Lead",
              "Advanced Practitioner",
              "Enhanced Practice Nurse",
              "General Practitioner (GP) - New in 2025/26",
            ].map((role, index) => (
              <div
                key={index}
                className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition-colors cursor-pointer"
              >
                <p className="font-semibold text-gray-900 text-sm  hover:translate-y-[-6px] transition-all duration-300">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Role Details */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key ARRS Role Details
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the impact of essential ARRS roles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300  hover:translate-y-[-8px] ">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Clinical Pharmacists
              </h3>
              <p className="text-gray-600 text-sm">
                Play a critical role in patient care through medication
                management, conducting medication reviews, providing advice on
                medication usage, and supporting chronic disease management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300  hover:translate-y-[-8px] ">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                First-contact Physiotherapists
              </h3>
              <p className="text-gray-600 text-sm">
                Offering direct access to musculoskeletal expertise, reducing
                the need for GP consultations for musculoskeletal issues,
                providing assessments, diagnoses, and treatment plans.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300  hover:translate-y-[-8px] ">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Care Co-ordinators
              </h3>
              <p className="text-gray-600 text-sm">
                Play a pivotal role in managing patient care, ensuring that
                individuals receive coordinated services across different
                healthcare providers, crucial for patients with complex health
                needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300  hover:translate-y-[-8px] ">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Social Prescribing Link Workers
              </h3>
              <p className="text-gray-600 text-sm">
                Help patients connect with non-medical sources of support within
                the community to improve their well-being, addressing social,
                emotional, and practical needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300  hover:translate-y-[-8px] ">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Mental Health Practitioners
              </h3>
              <p className="text-gray-600 text-sm">
                Deliver crucial support in primary care settings, focusing on
                adults and children with complex mental health needs, bridging
                the gap between primary and secondary care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300  hover:translate-y-[-8px] ">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Physician Associates
              </h3>
              <p className="text-gray-600 text-sm">
                Working alongside doctors, they support the diagnosis and
                management of patients, perform medical histories, conduct
                physical exams, and can recommend treatment plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARRS Funding */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ARRS Funding Details
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the financial support available
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">£969M</div>
              <p className="text-gray-700 font-semibold mb-2">
                2025/26 Funding Uplift
              </p>
              <p className="text-gray-600 text-sm">
                Total funding including core contract and e-RS
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                30,000+
              </div>
              <p className="text-gray-700 font-semibold mb-2">
                Additional Staff
              </p>
              <p className="text-gray-600 text-sm">
                Target recruitment into general practice
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">19</div>
              <p className="text-gray-700 font-semibold mb-2">ARRS Roles</p>
              <p className="text-gray-600 text-sm">
                Including new GP role for 2025/26
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                Per Capita
              </div>
              <p className="text-gray-700 font-semibold mb-2">
                Funding Allocation
              </p>
              <p className="text-gray-600 text-sm">
                Based on weighted population share
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges and Solutions */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Challenges and Solutions
            </h2>
            <p className="text-xl text-gray-600">
              How Core Prescribing Solutions addresses ARRS integration
              challenges
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-6  hover:translate-y-[-8px] transition-all duration-300">
                <div className="bg-red-100 p-3 rounded-lg flex-shrink-0  hover:translate-y-[-8px] transition-all duration-300">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Challenge 1: Role Clarity & Primary Care Estates
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Problem:</strong> Lack of role clarity and defined
                    expectations for ARRS roles within PCNs, plus inadequate
                    room availability in primary care estates.
                  </p>
                  <p className="text-gray-600">
                    <strong>CPS Solution:</strong> We offer fully managed
                    technology-enabled clinical services with clear service
                    agreements. Services like remote prescribing don't
                    negatively impact primary care estates and can be seamlessly
                    integrated into any GP surgery.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-6  hover:translate-y-[-8px] transition-all duration-300">
                <div className="bg-red-100 p-3 rounded-lg flex-shrink-0  hover:translate-y-[-8px] transition-all duration-300">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Challenge 2: Team Integration & Collaboration
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Problem:</strong> Ensuring effective integration of
                    ARRS roles into existing teams, which can lead to resistance
                    or lack of collaboration.
                  </p>
                  <p className="text-gray-600">
                    <strong>CPS Solution:</strong> We facilitate sessions aimed
                    at fostering a collaborative environment, emphasising unique
                    contributions of each role and providing ongoing support to
                    address interpersonal issues.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-6  hover:translate-y-[-8px] transition-all duration-300">
                <div className="bg-red-100 p-3 rounded-lg flex-shrink-0  hover:translate-y-[-8px] transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Challenge 3: Role Sustainability & Development
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Problem:</strong> Ensuring long-term sustainability
                    and career development of ARRS roles, including adequate
                    training and job progression opportunities.
                  </p>
                  <p className="text-gray-600">
                    <strong>CPS Solution:</strong> We implement comprehensive
                    development programs with CPD opportunities, mentorship
                    programs, and clear pathways for career advancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="animate-section py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-12 rounded-lg text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-6">
              <img
                src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2022/12/face-placeholder-2.png"
                className=""
                alt=""
              />
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 italic">
              "There has been a tangible reduction in GP workload... Virtual Pharmacist  have worked very hard to recruit the best
              clinical pharmacists out there within the context of a national
              shortage of suitably qualified pharmacists. The PCN Pharmacist
              team have adapted to the individual needs of the member Practices
              and are working towards the specified targets. There has been a
              tangible benefit/reduction in GP workload as a consequence."
            </blockquote>
            <p className="font-semibold text-gray-900">
              Dr A Biswas (GP Partner)
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What does PCN stand for in medical terms?
              </h3>
              <p className="text-gray-600">
                In a medical context, a Primary Care Network (PCN) refers to a
                group of GP practices collaborating with other local health and
                care providers to deliver more integrated, community-based
                services to their populations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Who is eligible for ARRS funding?
              </h3>
              <p className="text-gray-600">
                Primary Care Networks (PCNs) within the NHS are eligible for
                ARRS funding. Each PCN can apply for reimbursement for specific
                roles that align with their needs and meet the criteria set by
                NHS England.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                How much ARRS funding can a PCN benefit from?
              </h3>
              <p className="text-gray-600">
                A PCN is allocated a sum for an entire year, based on its
                weighted population share of the total ARRS funding. Although
                PCNs are able to claim up to this maximum sum each year, an
                underspend has commonly been reported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="animate-section py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Maximise Your ARRS Funding?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team is on call to help you maximise your ARRS funding. Book
            your FREE CONSULTATION today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>0113 871 5065</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
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

export default ARRS;
