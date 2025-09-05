import { useEffect } from "react"
import { Shield, Calendar, Globe, Lock, Eye, Users, Database, FileText, Settings, AlertCircle, Cookie } from "lucide-react"
import Footer from "../Footer/Footer"

const PrivacyPolicy = () => {
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

  const privacySections = [
    {
      id: 1,
      icon: <Globe className="w-6 h-6" />,
      title: "Who we are",
      content: "Our website address is: https://virtualpharmacist.co.uk."
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6" />,
      title: "Comments",
      content: "When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.",
      details: [
        "An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/.",
        "After approval of your comment, your profile picture is visible to the public in the context of your comment."
      ]
    },
    {
      id: 3,
      icon: <FileText className="w-6 h-6" />,
      title: "Media",
      content: "If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website."
    },
    {
      id: 4,
      icon: <Cookie className="w-6 h-6" />,
      title: "Cookies",
      details: [
        "If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.",
        "If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.",
        "When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select \"Remember Me\", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.",
        "If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day."
      ]
    },
    {
      id: 5,
      icon: <Settings className="w-6 h-6" />,
      title: "Embedded content from other websites",
      content: "Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.",
      details: [
        "These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website."
      ]
    },
    {
      id: 6,
      icon: <Database className="w-6 h-6" />,
      title: "Who we share your data with",
      content: "If you request a password reset, your IP address will be included in the reset email."
    },
    {
      id: 7,
      icon: <Eye className="w-6 h-6" />,
      title: "How long we retain your data",
      details: [
        "If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.",
        "For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information."
      ]
    },
    {
      id: 8,
      icon: <Lock className="w-6 h-6" />,
      title: "What rights you have over your data",
      content: "If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes."
    },
    {
      id: 9,
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Where your data is sent",
      content: "Visitor comments may be checked through an automated spam detection service."
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

      {/* Hero Section */}
      <section className="animate-section relative py-24 mt-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-transparent"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm float-animation"></div>
        <div className="absolute bottom-20 right-16 w-16 h-16 bg-blue-400/20 rounded-full blur-sm float-animation" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-indigo-400/30 rounded-full blur-sm float-animation" style={{ animationDelay: "4s" }}></div>
        <div className="absolute bottom-32 left-20 w-8 h-8 bg-white/20 rounded-full blur-sm float-animation" style={{ animationDelay: "1s" }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block p-4 bg-white/10 rounded-full mb-8 mt-8 pulse-glow">
            <Shield className="w-16  h-16 text-white" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Privacy policy of Virtual Pharmacist - How we protect and handle your personal information
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
            <Calendar className="w-5 h-5 text-blue-200" />
            <span className="text-blue-100 font-medium">Last updated: March 2022</span>
          </div>
        </div>
      </section>

      {/* Privacy Content with Modern Cards */}
      <section className="animate-section py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {privacySections.map((section, index) => (
              <div 
                key={section.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  
                  {section.content && (
                    <div className="mb-6">
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  )}
                  
                  {section.details && (
                    <div className="space-y-4">
                      {section.details.map((detail, idx) => (
                        <div key={idx} className="p-4 bg-gray-50 rounded-xl border-l-4 border-blue-500">
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

      {/* Footer Section */}
      <section className="animate-section py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Questions About Privacy?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're committed to protecting your privacy and personal data. Contact us if you have any concerns.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 text-center">
            <div className="inline-block p-4 bg-blue-500 rounded-full mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Virtual Pharmacist</h3>
            <p className="text-blue-100 text-lg mb-6">
              Your trusted partner in pharmaceutical care and health information
            </p>
            <div className="inline-flex items-center gap-2 text-blue-200">
              <Globe className="w-4 h-4" />
              <span className="font-medium">https://virtualpharmacist.co.uk</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  )
}

export default PrivacyPolicy