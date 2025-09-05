import { useEffect, useState } from "react"
import { FileText, Calendar, Shield, Users, AlertCircle, Scale, Mail, Phone, MapPin, CheckCircle, Scroll, Globe, Lock } from "lucide-react"
import Footer from "../Footer/Footer"

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState(null)

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
    return () => observer.disconnect()
  }, [])

  const termsData = [
    {
      id: 1,
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: "By accessing or using VirtualPharmacist, you confirm that you are at least 18 years old and agree to abide by these Terms & Conditions. Your continued use of our services constitutes ongoing acceptance of these terms."
    },
    {
      id: 2,
      icon: <Shield className="w-6 h-6" />,
      title: "Nature of Services",
      content: "VirtualPharmacist provides informational and educational content about pharmaceutical products and health-related topics.",
      details: [
        "Not Medical Advice: The content on the Site is not intended to replace professional medical advice, diagnosis, or treatment. Always consult a licensed healthcare professional for specific medical concerns.",
        "Accuracy: While we strive to ensure accuracy, we do not guarantee the completeness or reliability of any information on the Site."
      ]
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6" />,
      title: "User Obligations",
      details: [
        "Use the Site responsibly and in compliance with applicable laws",
        "Provide accurate information when registering, submitting inquiries, or making transactions",
        "Not use the Site to distribute harmful or unlawful content, including spam or viruses"
      ]
    },
    {
      id: 4,
      icon: <Lock className="w-6 h-6" />,
      title: "Account Registration",
      content: "If you create an account on the Site, you are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. Notify us immediately of unauthorized use."
    },
    {
      id: 5,
      icon: <Globe className="w-6 h-6" />,
      title: "Purchases and Payments",
      details: [
        "Prices and availability are subject to change without notice",
        "Payments must be made through secure and approved methods listed on the Site",
        "Refund and cancellation policies will be provided at the point of purchase"
      ]
    },
    {
      id: 6,
      icon: <Scroll className="w-6 h-6" />,
      title: "Intellectual Property Rights",
      content: "All content on VirtualPharmacist, including text, images, logos, and software, is owned by us or licensed to us. You may not copy, distribute, modify, or use any content without prior written consent."
    },
    {
      id: 7,
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Disclaimer of Warranties",
      content: "The Site and its content are provided 'as is' and 'as available,' without any express or implied warranties.",
      details: [
        "We do not guarantee uninterrupted or error-free access to the Site",
        "We disclaim all warranties, including merchantability and fitness for a particular purpose"
      ]
    },
    {
      id: 8,
      icon: <Scale className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: "To the maximum extent permitted by law, VirtualPharmacist and its affiliates will not be liable for any indirect, incidental, or consequential damages arising from your use of the Site or reliance on its content."
    }
  ]

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <style>
        {`
          @keyframes fadeInSlide {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInSlide {
            animation: fadeInSlide 0.8s ease-out forwards;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(1deg); }
            66% { transform: translateY(-5px) rotate(-1deg); }
          }
          .float-animation {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
            50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
          }
          .pulse-glow {
            animation: pulse-glow 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Hero Section with Enhanced Design */}
      <section className="animate-section relative py-24 mt-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-transparent"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm float-animation"></div>
        <div className="absolute bottom-20 right-16 w-16 h-16 bg-blue-400/20 rounded-full blur-sm float-animation" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-indigo-400/30 rounded-full blur-sm float-animation" style={{ animationDelay: "4s" }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-white/20 rounded-full blur-sm float-animation" style={{ animationDelay: "1s" }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block p-4 mt-8 bg-white/10 rounded-full mb-8 pulse-glow">
            <FileText className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Legal terms governing the use of VirtualPharmacist services
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
            <Calendar className="w-5 h-5 text-blue-200" />
            <span className="text-blue-100 font-medium">Effective Date: November 22, 2024</span>
          </div>
        </div>
      </section>

      {/* Welcome Notice */}
      <section className="animate-section py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Shield className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Welcome to VirtualPharmacist!</h2>
            </div>
            <p className="text-xl leading-relaxed text-blue-100">
              These Terms & Conditions govern your use of our website ("the Site") and services. By accessing or using the Site, you agree to be bound by these terms. If you do not agree, please discontinue using the Site.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content with Modern Cards */}
      <section className="animate-section py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {termsData.map((term, index) => (
              <div 
                key={term.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white">
                      {term.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {term.id}. {term.title}
                    </h3>
                  </div>
                  
                  {term.content && (
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {term.content}
                    </p>
                  )}
                  
                  {term.details && (
                    <div className="space-y-4">
                      {term.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="animate-section py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Indemnification */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-blue-600" />
                Indemnification
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify and hold harmless VirtualPharmacist, its affiliates, and employees from any claims, damages, or expenses resulting from your use of the Site or violation of these Terms & Conditions.
              </p>
            </div>

            {/* Termination */}
            <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
                Termination
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to terminate or suspend your access to the Site at any time, without notice, for violations of these terms or for any other reason.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Scroll className="w-6 h-6 text-green-600" />
                Changes to Terms
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We may update these Terms & Conditions from time to time. Any changes will be posted on this page, and continued use of the Site constitutes acceptance of the updated terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-purple-600" />
                Governing Law
              </h3>
              <p className="text-gray-600 leading-relaxed">
                These Terms & Conditions are governed by and construed in accordance with the laws of United Kingdom, without regard to conflict of law principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Enhanced Design */}
      <section className="animate-section py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Have questions about these Terms & Conditions? We're here to help!
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500 rounded-full">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Email</p>
                      <p className="text-white text-lg font-semibold">Hello@virtualpharmacist.co.uk</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-500 rounded-full">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Phone</p>
                      <p className="text-white text-lg font-semibold">0113 871 5065</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2 text-blue-100">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  )
}

export default TermsConditions