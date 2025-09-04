
import { useEffect } from "react"
// import { Link } from "react-router-dom"  
import { Monitor, Shield, Clock, Users, ArrowRight, CheckCircle, Stethoscope, FileText, Target, Phone, Mail } from "lucide-react"
import Footer from "../Footer/Footer"  
import { NavLink } from "react-router-dom"

 

const RemotePrescribing = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInSlide")
          }
        })
      },
      { threshold: 0.1 },
    )
    document.querySelectorAll(".animate-section").forEach((section) => {
      observer.observe(section)
    })
    const elements = document.querySelectorAll(".fade-in")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible")
      }, index * 200)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white remote-prescribing">
      <style>
        {`
          @keyframes fadeInSlide {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInSlide {
            animation: fadeInSlide 1s ease-out forwards;
          }
          .fade-in {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
          }
          .fade-in.visible {
            opacity: 1;
          }
          .benefit-card {
            border-left: 4px solid #2563eb;
          }
        `}
      </style>

      {/* Hero Section */}
      <div
        className="hero-section  fade-in py-20 mt-[150px] md:mt-[150px] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>

         <div className="absolute top-20 left-4 sm:left-10 w-10 sm:w-16 h-10 sm:h-16 bg-white/10 rounded-full animate-pulse"></div>

        <div
          className="absolute bottom-20 right-4 sm:right-10 w-12 sm:w-20 h-12 sm:h-20 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>

        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 hero-content">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            style={{ textShadow: "2px 2px 8px rgba(0, 112, 244, 0.75)" }}
          >
            Remote Prescribing
          </h1>
          <p className="text-2xl mb-4 text-white" style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}>
            Remote Prescribing That Works – Safe, Scalable, Fully Managed
          </p>
          <div className="text-lg text-blue-100 space-y-2">
            <p>✓ Clinical support from expert Virtual Pharmacist and pharmacy technicians</p>
            <p>✓ Reduce GP prescribing workload, improve safety, and boost efficiency</p>
            <p>✓ Delivered via secure NHS systems (EMIS, SystmOne), fully ARRS-compliant</p>
            <p>✓ Trusted by GP practices, PCNs, and GP Federations across the UK</p>
          </div>
        </div>
      </div>

      {/* What is Remote Prescribing */}
  {/* What is Remote Prescribing */}
      <section className="service-overview fade-in animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is Remote Prescribing?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Remote prescribing is the process of prescribing medications through secure digital systems such as via EMIS, or SystmOne electronically without the need for face-to-face consultations. In the UK, this service is typically delivered by qualified professionals like Virtual Pharmacist or remote pharmacists, who are trained to manage structured medication reviews (SMRs), repeat prescriptions, and medicines optimisation remotely.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As part of broader digital prescribing in primary care, remote prescribing supports safe, efficient patient care and is fully NHS-compliant. Whether through an online pharmacist UK service or integrated PCN support, this approach reduces GP workload while maintaining clinical governance and high standards of care.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Digital healthcare consultation"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
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
                    Remote Prescribing
                  </p>
                  <p className="text-xs text-gray-600">Digital Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Service Works */}
      <section className="how-it-works fade-in animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Our Remote Prescribing Service Works</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            Our remote prescribing service is designed to slot seamlessly into your existing setup whether you're a single practice, a PCN, or a GP federation. Delivered by qualified remote pharmacists and pharmacy technicians, the service is fully managed, NHS-aligned, and built to reduce your workload from day one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <Users className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Delivery Team</h3>
              <p className="text-gray-600">
                Our team of remote pharmacists handle prescribing, reauthorisations, and medicines-related admin remotely — all within your preferred systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <Monitor className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seamless Integration</h3>
              <p className="text-gray-600">
                We plug into your workflow with minimal disruption, using EMIS or SystmOne and sharing protocols with your in-house team.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <Shield className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Setup</h3>
              <p className="text-gray-600">
                Choose a model that suits your needs, fully remote, hybrid, or a tailored setup, depending on your practice size and priorities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <FileText className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Clear Communication</h3>
              <p className="text-gray-600">
                Daily handovers or monthly reports keep your team fully informed, ensuring transparency and continuity of care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Activities */}
      <section className="clinical-activities fade-in animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Healthcare professional reviewing prescriptions"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
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
                    Clinical Services
                  </p>
                  <p className="text-xs text-gray-600">Optimized Care</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Cover – Clinical Activities</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our remote pharmacist and pharmacy technician teams provide a wide range of clinical services that go far beyond basic admin support. Every task is handled under clinical governance and tailored to meet the needs of your practice or PCN.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Structured Medication Reviews (SMRs)</h4>
                    <p className="text-gray-600">Comprehensive reviews ensuring patients receive the most appropriate, safe, and effective treatments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Prescription Reauthorisation</h4>
                    <p className="text-gray-600">Efficient management of prescription reauthorisation, reducing delays and ensuring continuity of care.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Medicines Optimisation and Safety</h4>
                    <p className="text-gray-600">Focus on medicines optimisation by reviewing ongoing treatment plans and identifying potential risks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">High-Risk Medication Management</h4>
                    <p className="text-gray-600">Track and support the safe prescribing and monitoring of high-risk drugs with proper follow-up.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">QoF and IIF Target Support</h4>
                    <p className="text-gray-600">Virtual Pharmacist assist in meeting QoF, DES and IIF targets with structured reviews and documentation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="benefits fade-in animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Benefits of Remote Prescribing</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">For GP Practices</h3>
              <div className="space-y-6">
                <div className="benefit-card bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Reduce GP Workload by 90%+</h4>
                  <p className="text-gray-600">Delegate routine prescribing tasks, reauthorisations, and SMRs to qualified remote pharmacists, freeing up your GPs to focus on direct patient care.</p>
                </div>
                <div className="benefit-card bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Improve Compliance with NHS Frameworks</h4>
                  <p className="text-gray-600">Stay aligned with CQC, NICE, ARRS and IIF requirements through structured, auditable prescribing processes.</p>
                </div>
                <div className="benefit-card bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Faster, Safer Delivery</h4>
                  <p className="text-gray-600">From repeat prescribing to medicines optimisation, our service improves workflow efficiency without compromising quality.</p>
                </div>
                <div className="benefit-card bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Cost-Effective Alternative</h4>
                  <p className="text-gray-600">No recruitment, no training overhead — just a flexible, managed model that adapts to your practice's needs.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-6">For Patients</h3>
              <div className="space-y-6">
                <div className="benefit-card bg-green-50 p-4 rounded-lg border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Faster Access to Medications</h4>
                  <p className="text-gray-600">Digital prescribing means patients receive their treatments without unnecessary delays — even for repeat meds.</p>
                </div>
                <div className="benefit-card bg-green-50 p-4 rounded-lg border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Improved Safety and Continuity</h4>
                  <p className="text-gray-600">Consistent medication reviews and follow-ups reduce the risk of errors and missed interactions.</p>
                </div>
                <div className="benefit-card bg-green-50 p-4 rounded-lg border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Remote Consultations When Needed</h4>
                  <p className="text-gray-600">Our Virtual Pharmacist can support patients through secure remote consultations, improving flexibility and accessibility.</p>
                </div>
                <div className="benefit-card bg-green-50 p-4 rounded-lg border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Stronger Support for Long-Term Conditions</h4>
                  <p className="text-gray-600">Ongoing monitoring and medicines optimisation enhance outcomes for patients managing chronic conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NHS Compliance Section */}
      <section className="compliance fade-in animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">NHS Compliance & Remote Prescribing Safety</h2>
              <p className="text-lg text-gray-600 mb-8">
                At Virtual Pharmacist, patient safety and regulatory compliance are at the heart of everything we do. Our remote prescribing service is delivered exclusively by qualified and regulated remote pharmacists and pharmacy technicians working within a clear clinical governance framework.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Regulated Prescribers Only</h4>
                    <p className="text-gray-600">All prescribing carried out by fully qualified independent prescribers working within their scope of competence.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Aligned with National Standards</h4>
                    <p className="text-gray-600">Complies with ARRS, NICE guidelines, and NHS England digital strategies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Information Governance Compliant</h4>
                    <p className="text-gray-600">Following best-practice data security and confidentiality protocols for sensitive patient data.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Auditable and Accountable</h4>
                    <p className="text-gray-600">Every aspect logged, reportable, and clinically overseen with built-in audit trails.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="NHS compliance and safety standards"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
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
                    NHS Compliance
                  </p>
                  <p className="text-xs text-gray-600">Safe Prescribing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial fade-in animate-section py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Don't take our word for it</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-200 flex items-center justify-center">
              <Users className="w-8 h-8 text-gray-600" />
            </div>
            <blockquote className="text-lg text-gray-700 mb-6 italic">
              "The team at Virtual Pharmacist are great and I would highly recommend… We use a mixture of prescribing and non-prescribing pharmacists from Virtual Pharmacist across our 2 practice PCN. They consult remotely and do a whole range of different tasks including routine medication reviews, on the day triage, meds management. They are efficient and reliable. Set up was straight forward. The team are great would highly recommend."
            </blockquote>
            <cite className="text-gray-600 font-semibold">M Harfield (PCN Manager)</cite>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section fade-in animate-section py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Are you looking for a fully managed clinical service?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get started with our remote prescribing solutions today and transform your practice workflow
          </p>
          <NavLink
            to="/contact"
            onClick={() => window.location.href = '/contact'}
            className="cta-button bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </NavLink>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default RemotePrescribing