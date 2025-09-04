import { useEffect } from "react"
import { Trophy, Award, Star, Medal, Crown, Target, Users, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react"
import { NavLink } from "react-router-dom"
import Footer from "../Footer/Footer"

const Awards = () => {
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

  const awards2025 = [
    {
      id: 1,
      title: "HealthInvestor Awards 2025",
      status: "Finalists",
      description: "Recognized for outstanding contributions to healthcare innovation and patient care delivery.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2025/03/healthcareinvestor-awards-finalists.png",
      color: "bg-blue-600"
    }
  ]

  const awards2024 = [
    {
      id: 1,
      title: "Healthcare-Titan Health Awards 2024",
      status: "Gold Winners",
      category: "Provider & Services",
      description: "Awarded for exceptional service delivery and innovation in healthcare provider solutions.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/12/TITAN-Health-Awards-Status-Badge-Gold-updated-1.jpg",
      color: "bg-yellow-500"
    },
    {
      id: 2,
      title: "Innovation and Excellence Awards 2024",
      status: "Winner",
      category: "Innovation in Clinical Services",
      description: "Honored for pioneering clinical service innovations that enhance patient outcomes.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/09/Core-Prescribing-Solutions-IEA-2024.jpg",
      color: "bg-blue-600"
    },
    {
      id: 3,
      title: "Yorkshire Prestige Awards 2024-2025",
      status: "Winner",
      description: "Celebrated for excellence in healthcare services within the Yorkshire region.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/09/Core-Prescribing-Solutions-YPA-2024-scaled.jpg",
      color: "bg-purple-600"
    },
    {
      id: 4,
      title: "HSJ Partnership Awards 2024",
      status: "Shortlisted",
      category: "Best Healthcare Provider Partnership 2024",
      description: "Recognized for collaborative efforts in improving healthcare delivery through partnerships.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/12/hsj-awards-shortlist-2024-cps.jpg",
      color: "bg-gray-700"
    },
    {
      id: 5,
      title: "Laing Buisson Awards 2024",
      status: "Finalists",
      category: "Best in Primary Care & Diagnostics",
      description: "Acknowledged for excellence in primary care and diagnostic service provision.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/09/laing-buisson-awards-2024.png",
      color: "bg-indigo-600"
    }
  ]

  const awards2023 = [
    {
      id: 1,
      title: "Innovation and Excellence Awards 2023",
      status: "Winner",
      category: "Innovation in Clinical Services",
      description: "Awarded for groundbreaking advancements in clinical service delivery.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/08/innovation-award-2023-core-prescribing-solutions.png",
      color: "bg-blue-600"
    },
    {
      id: 2,
      title: "Yorkshire Prestige Awards 2023-2024",
      status: "Winner",
      description: "Recognized for consistent excellence in regional healthcare services.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/07/yorkshire-prestige-awards-2023-24-cps.jpg",
      color: "bg-purple-600"
    },
    {
      id: 3,
      title: "HSJ Partnership Awards 2023",
      status: "Shortlisted",
      category: "Best Healthcare Provider Partnership 2023",
      description: "Noted for impactful partnerships enhancing healthcare quality and accessibility.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/01/hsj-partnership-awards-2023_finalists_1080x1080_6_52519724963_o-2.jpg",
      color: "bg-gray-700"
    }
  ]

  const awards2022 = [
    {
      id: 1,
      title: "Primary Care Pharmacy Technician of the Year",
      status: "Team member shortlisted",
      description: "Honored for an individual team member's exceptional contribution to pharmacy services.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2022/09/pharmacy-technician-award-e1741162034238.png",
      color: "bg-teal-600"
    },
    {
      id: 2,
      title: "Yorkshire Prestige Awards 2022-2023",
      status: "Winner",
      description: "Awarded for outstanding healthcare service delivery in the Yorkshire region.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2022/09/yorkshire-prestige-awards-2022-1.jpg",
      color: "bg-purple-600"
    },
    {
      id: 3,
      title: "General Practice Awards 2022",
      status: "Shortlisted",
      description: "Recognized for excellence in general practice and patient care services.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2022/10/general-practice-awards-2022.jpg",
      color: "bg-green-600"
    },
    {
      id: 4,
      title: "Pharmacy Team of the Year 2022",
      status: "Shortlisted",
      description: "Acknowledged for teamwork and innovation in pharmacy services.",
      image: "https://scontent.fskt7-1.fna.fbcdn.net/v/t39.30808-6/487563569_1076594454494425_7563329896152039962_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGCsgQswQJj7K7UaxRva5y9dwg_3N6OS_J3CD_c3o5L8sR0oC-B3qZLr3YWrXl3vt13c99zPWhuiG19uwRgAbgs&_nc_ohc=5x2MMu54wHYQ7kNvwFk-yDX&_nc_oc=Adkk-MIQ0qXaBYRCbDIGrP9mZzhv0xWmLeswxwzIA-VBDY032i-2XjA0wJx2XPPwgCZnRWo_TBdkowFnYNRqK_pT&_nc_zt=23&_nc_ht=scontent.fskt7-1.fna&_nc_gid=8REAHy8q1p7jyfGNgWrsLw&oh=00_AfYV3nrFTyJdp_WZVPWoQZdGegv0_lXFw25oiPa_PBh9xQ&oe=68BEF4D4",
      color: "bg-blue-700",
     }
  ]

  const awards2021 = [
    {
      id: 1,
      title: "General Practice Awards 2021",
      status: "Shortlisted",
      description: "Recognized for excellence in delivering high-quality general practice services.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2022/09/gp-practice-award-2021.png",
      color: "bg-green-600"
    },
    {
      id: 2,
      title: "Yorkshire Prestige Awards 2021-2022",
      status: "Winner",
      description: "Celebrated for regional leadership in healthcare service excellence.",
      image: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2022/09/yorkshire-prestige-awards-2021.jpg",
      color: "bg-purple-600"
    }
  ]

  const supportLogos = [
    "Featured in leading healthcare publications",
    "Recognized by industry experts",
    "Trusted by healthcare professionals",
    "Award-winning clinical services"
  ]

  const renderAwardCard = (award) => (
    <div key={award.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className="relative">
        <img
          src={award.image}
          alt={award.title}
          className="w-full h-64 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300 p-4"
        />
        <div className={`absolute top-4 left-4 ${award.color} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
          {award.status}
        </div>
        {award.status === "Winner" && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 p-2 rounded-full shadow-lg">
            <Trophy className="w-5 h-5" />
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {award.title}
        </h3>
        {award.category && (
          <p className="text-blue-600 font-semibold text-sm mb-2">
            {award.category}
          </p>
        )}
        <p className="text-gray-600 text-sm mb-4">
          {award.description}
        </p>
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            award.status === "Winner" ? "bg-green-100 text-green-800" :
            award.status === "Gold Winners" ? "bg-yellow-100 text-yellow-800" :
            award.status === "Finalists" ? "bg-blue-100 text-blue-800" :
            "bg-gray-100 text-gray-800"
          }`}>
            {award.status}
          </span>
          
          {award.link && (
            <a
              href={award.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )

  return (
   <>
    <div className="min-h-screen bg-gray-50">
      <style>
        {`
          @keyframes fadeInSlide {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInSlide {
            animation: fadeInSlide 0.8s ease-out forwards;
          }
          .gradient-text {
            background: linear-gradient(135deg, #3b82f6, #1f2937, #06b6d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .floating-icon {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="animate-section py-24 mt-[100px] bg-fixed  bg-gradient-to-br from-blue-600 via-gray-800 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Trophy className="w-20 h-20 mx-auto mb-8 text-blue-200 floating-icon" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Awards and Recognition
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Every accolade is a testament to our team's commitment to delivering clinical excellence at scale
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="animate-section py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Virtual Pharmacist, we have a great story to tell. We uphold our mission by working hard every day to bring value to our clients and all the organisations we work with. We endeavour to work to the highest standards, as well as providing a first-class service. To us, this comes naturally and is deeply imbedded in our DNA.
          </p>
          <p className="text-lg text-blue-600 font-semibold">
            When we are recognised for our work, it reiterates that we are working in alignment with our company's credo and core values.
          </p>
        </div>
      </section>

      {/* Featured In & Support Section */}
      <section className="animate-section py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured in & We Proudly Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportLogos.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center h-16">
                    <CheckCircle className="w-8 h-8 text-blue-600 mb-2" />
                  </div>
                  <p className="text-sm text-gray-700 font-medium text-center">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Awards */}
      <section className="animate-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">2025 Awards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards2025.map(renderAwardCard)}
          </div>
        </div>
      </section>

      {/* 2024 Awards */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">2024 Awards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards2024.map(renderAwardCard)}
          </div>
        </div>
      </section>

      {/* 2023 Awards */}
      <section className="animate-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">2023 Awards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards2023.map(renderAwardCard)}
          </div>
        </div>
      </section>

      {/* 2022 Awards */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">2022 Awards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards2022.map(renderAwardCard)}
          </div>
        </div>
      </section>

      {/* 2021 Awards */}
      <section className="animate-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-4">2021 Awards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards2021.map(renderAwardCard)}
          </div>
        </div>
      </section>

      <section className="fade-in py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our team and contribute to excellent patient care while advancing your career.
            </p>
            <NavLink 
              to="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
   </>
  )
}

export default Awards