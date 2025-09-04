import { useEffect } from "react"
import { Calendar, ExternalLink, FileText, Award, Heart } from "lucide-react"
import Footer from "../Footer/Footer"
import { NavLink } from "react-router-dom"
const PressMedia = () => {
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

  const pressReleases = [
    {
      id: 1,
      title: "Core Prescribing Solutions wins gold at the Titan Health Awards",
      date: "2024",
      excerpt:
        "Core Prescribing Solutions was recognised at the Titan Health Awards for their role in advancing healthcare digitisation and improving patient outcomes through technology-enabled clinical pharmacy services.",
      type: "Award",
      link: "https://titanhealthawards.com/winner-info.php?id=729",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/11/titan-health-awards-logo.png",
    },
    {
      id: 2,
      title: "Core Prescribing Solutions is a confirmed finalist for the Health Investor Awards",
      date: "2025",
      excerpt:
        "Core Prescribing Solutions has been named a finalist at the Health Investor Awards! This recognition highlights our commitment to delivering innovative and impactful pharmacy services within primary care.",
      type: "Award Recognition",
      link: "https://healthinvestorawards.com/finalists-2025/?utm_campaign=HealthInvestor%20Awards%202025&utm_medium=email&_hsenc=p2ANqtz-9E7XlS9AWEj-zdzbhBMOPNuN39lVZR94sa2Nt_i2SJVt9sawu05CLO3Jr9nBmQBJynm0eDzFM9TlQNiDhB-KBXC_2-J2ypjvZKunOJe_mUFbmU_8A&_hsmi=104567019&utm_content=104567019&utm_source=hs_email",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2025/03/health-investor-awards-2025.png",
    },
    {
      id: 3,
      title: "Core Prescribing Solutions donates £1,000 to Pharmacist Support Again in 2024",
      date: "2024",
      excerpt:
        "The team at Core Prescribing Solutions has proudly received the prestigious Titan Health Award, recognizing our innovative contributions to healthcare while continuing our commitment to supporting the pharmacy community.",
      type: "Community Support",
      link: "https://pharmacistsupport.org/news/core-prescribing-solutions-donation-2024/",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/03/pharmacist-support-logo.jpg",
    },
    {
      id: 4,
      title: "Core Prescribing Solutions donates £1,000 to Doctors in Distress",
      date: "2025",
      excerpt:
        "The team at Core Prescribing Solutions has reached out to donate £1,000 to the Doctors in Distress charity in order to show their support for the health sector family and give back to the profession.",
      type: "Community Support",
      link: "https://doctors-in-distress.org.uk/sponsorship-thanks/",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2025/07/did-logo.png",
    },
    {
      id: 5,
      title: "Core Prescribing Solutions donates £1,000 to Pharmacist Support",
      date: "2023",
      excerpt:
        "The team at Core Prescribing Solutions has reached out to donate £1,000 to the Pharmacy Support charity in order to show their support for the pharmacy family and give back to the profession.",
      type: "Community Support",
      link: "https://pharmacistsupport.org/",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/03/pharmacist-support-logo.jpg",
    },
  ]

  const mediaFeatures = [
    {
      id: 1,
      title: "Optimising clinical pharmacy services in the UK: A pathway to enhanced healthcare delivery",
      publication: "Open Access Government",
      date: "2024",
      type: "Article",
      description:
        "Adeem Azhar, our Co-Founder and CEO, shared insights on how Core Prescribing Solutions is tackling challenges in clinical pharmacy services and enhancing healthcare delivery in the UK.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://www.openaccessgovernment.org/optimising-clinical-pharmacy-services-in-the-uk-a-pathway-to-enhanced-healthcare-delivery/182705/",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/10/logo-oag.png",
    },
    {
      id: 2,
      title: "Shaping the future: The evolving role of pharmacy professionals in primary care",
      publication: "Chemist and Druggist",
      date: "2024",
      type: "Article",
      description:
        "Explore the evolving roles of pharmacy professionals in UK primary care. This article highlights how pharmacists are enhancing patient care and healthcare outcomes.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://www.chemistanddruggist.co.uk/CD138074/Shaping-the-future-The-evolving-role-of-pharmacy-professionals-in-primary-care",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/04/chemmist-druggist-logo-cps.png",
    },
    {
      id: 3,
      title: "The crucial role of pharmacy professionals and their impact on primary care",
      publication: "Chemist and Druggist",
      date: "2024",
      type: "Article",
      description:
        "Explore the vital role of pharmacy professionals in enhancing primary care and how they alleviate GP pressures by adopting advanced roles that extend beyond traditional dispensing.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://www.chemistanddruggist.co.uk/CD138082/The-crucial-role-of-pharmacy-professionals-and-their-impact-on-primary-care",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/04/chemmist-druggist-logo-cps.png",
    },
    {
      id: 4,
      title: "Investing in Clinical Pharmacist Support for Better Patient Care",
      publication: "Medics Money",
      date: "2023",
      type: "Article",
      description:
        "Our team crafted a comprehensive article on the vital role and benefits of clinical pharmacist support in modern healthcare, emphasizing its impact on patient care and financial sustainability.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://www.medicsmoney.co.uk/investing-in-clinical-pharmacist-support-for-better-patient-care/",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/11/medics-money-logo.png",
    },
    {
      id: 5,
      title: "Meet the Pharmacy Team of the Year Award shortlist: Core Prescribing Solutions Clacton PCN Pharmacy Team",
      publication: "The Pharmacist",
      date: "2023",
      type: "Award",
      description:
        "Core Prescribing Solutions Clacton PCN Pharmacy Team in North-East Essex were shortlisted for Pharmacy Team of the Year Award.",
      icon: <Award className="w-6 h-6" />,
      link: "https://www.thepharmacist.co.uk/news/meet-the-pharmacy-team-of-the-year-award-shortlist-core-prescribing-solutions-clacton-pcn-pharmacy-team/",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/03/the-pharmacist-logo.jpg",
    },
    {
      id: 6,
      title: "Community Pharmacist Consultation Service (CPCS) – Has it helped since inception?",
      publication: "Pharmacy Business",
      date: "2023",
      type: "Article",
      description:
        "Our expert Clinical Pharmacists have put together an article on The NHS Community Pharmacist Consultation Service CPCS, explaining the challenges and benefits.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://www.pharmacy.biz/news/community-pharmacist-consultation-service-cpcs-has-it-helped-since-inception/",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/03/pharmacybiz-logo.jpg",
    },
  ]

  const healthExpertise = [
    {
      id: 1,
      title: "Myrkl Hangover Cure: Does it Work",
      publication: "Healthline",
      date: "2023",
      type: "Health Expertise",
      description:
        "Core Prescribing Solutions was asked questions regarding a new anti-hangover supplement called Mykrl. Our Clinical Pharmacist provided insight on how it works and potential risks.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://www.healthline.com/health-news/myrkl-hangover-cure-does-it-work?",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/03/healthline-logo.png",
    },
    {
      id: 2,
      title: "Wearable tech is revolutionising how people with high blood pressure track their health",
      publication: "Metro",
      date: "2023",
      type: "Health Expertise",
      description:
        "We provided expert insight on Hypertension, including what it is, whether it affects young people, what causes it and what can reduce it.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://metro.co.uk/2023/03/13/this-wearable-tech-is-revolutionising-how-people-track-their-health-18432221/",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/03/the-metro-logo.png",
    },
    {
      id: 3,
      title: "The Elf Bar epidemic: is vaping harming our health?",
      publication: "Living 360",
      date: "2023",
      type: "Health Expertise",
      description:
        "We provided insight on vaping questions including whether it's healthier than smoking, more harmful than thought, and its long-term effects.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://living360.uk/the-elf-bar-epidemic-dangers-of-vaping/",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/03/livinf360-logo-v2.png",
    },
    {
      id: 4,
      title: "These are the Symptoms of the New Covid Strain we're Seeing",
      publication: "The Daily Express",
      date: "2023",
      type: "Health Expertise",
      description:
        "A journalist reached out and asked us to comment on the symptoms of the new Covid strain we're seeing.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://www.express.co.uk/life-style/health/1807448/pharmacist-new-covid-strain-symptoms-pirola-eris",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/09/Daily_Express_logo.png",
    },
    {
      id: 5,
      title: "Covid and the capital: how London plans to live with the virus this winter",
      publication: "Evening Standard",
      date: "2023",
      type: "Health Expertise",
      description:
        "Our expert provided useful information on the mask situation and social awareness needed to stop the spread of Covid in London.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://www.standard.co.uk/insider/covid-london-infections-rising-variants-spike-b1029831.html",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/03/evening-standard-logo.png",
    },
    {
      id: 6,
      title: "Is it Normal to Keep Needing to Spit while Running?",
      publication: "The Stylist",
      date: "2023",
      type: "Health Expertise",
      description:
        "We commented on what causes dry mouth during exercise and whether it can be dangerous to swallow phlegm while running.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://www.stylist.co.uk/fitness-health/workouts/spitting-while-running/798109",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/08/stylistlogo.png",
    },
    {
      id: 7,
      title: "7 Ways to Reduce the Risk of Arthritis",
      publication: "FlexiSEQ",
      date: "2023",
      type: "Health Expertise",
      description:
        "A journalist reached out and asked us to comment on ways to reduce the risk of arthritis. Our expert was able to provide information on how to improve joint flexibility and improve pain management.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://flexiseq.com/",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/04/flexiseq-logo.png",
    },
    {
      id: 8,
      title: "What is the Best Direction for Sleep?",
      publication: "Homes & Gardens",
      date: "2023",
      type: "Health Expertise",
      description:
        "Can the direction you sleep have an impact on sleep quality? We were asked to provide insight on whether there is scientific evidence to support this and whether switching directions might be worth a try.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://www.homesandgardens.com/",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/07/homes-and-gardens-logo.png",
    },
    {
      id: 9,
      title: "Is Captagon spreading to the UK?",
      publication: "The Daily Mail Online",
      date: "2023",
      type: "Health Expertise",
      description:
        "Explore the evolving roles of pharmacy professionals in UK primary care. This article highlights how pharmacists are enhancing patient care and healthcare outcomes by engaging in more dynamic roles within healthcare teams.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://www.dailymail.co.uk/",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/08/mail-online-logo.jpg",
    },
    {
      id: 10,
      title: "What is Nutrafol and is it Worth it?",
      publication: "Health.com",
      date: "2023",
      type: "Health Expertise",
      description:
        "A journalist reached out and asked us to comment on some of the ingredients of Nutrafol as well as if any potential side effects.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://www.health.com/",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/11/health.com-logo.png",
    },
    {
      id: 11,
      title: "Late period? Your magnesium supplement could be to blame",
      publication: "The Stylist",
      date: "2023",
      type: "Health Expertise",
      description:
        "We provided expert commentary on why the magnesium supplement you are taking could be one of the reasons for a late period.",
      icon: <FileText className="w-6 h-6" />,
      link: "https://www.stylist.co.uk/",
      logo: "https://coreprescribingsolutions.co.uk/wp-content/uploads/2023/08/stylistlogo.png",
    },
  ]

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
          .logo-img {
            max-height: 100px;
            max-width: 200px;
            object-fit: contain;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin-bottom: 1rem;
          }
          @media (max-width: 640px) {
            .logo-img {
              max-height: 60px;
              max-width: 150px;
            }
          }
        `}
      </style>

      {/* Hero Section */}

      <section
        className="animate-section py-20 mt-[100px]  bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
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
              Press & Media
            </h1>
            <p className="text-2xl mb-8" style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}>
              With over 25 years' combined experience, our experts provide guidance to national publications on pharmacy and healthcare topics
            </p>
          </div>
        </div>
      </section>
      <section id="featured-support" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Featured In Section */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 tracking-tight">Featured In</h2>
      <p className="mt-4 text-lg text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
        Our work has been celebrated by top-tier publications for driving innovation in healthcare.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
        <div className="flex flex-col items-center group bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <img
            src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/10/images.png"
            alt="Featured In 1"
            className="h-16 max-w-full object-contain mb-4 transform group-hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-900 font-light text-base leading-relaxed text-center">
            Recognized for innovative healthcare solutions in leading industry publications.
          </p>
        </div>
        <div className="flex flex-col items-center group bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <img
            src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/10/m.jpg"
            alt="Featured In 2"
            className="h-16 max-w-full object-contain mb-4 transform group-hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-900 font-light text-base leading-relaxed text-center">
            Highlighted for advancing medical technology in top journals.
          </p>
        </div>
        <div className="flex flex-col items-center group bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <img
            src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/10/h.jpg"
            alt="Featured In 3"
            className="h-16 max-w-full object-contain mb-4 transform group-hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-900 font-light text-base leading-relaxed text-center">
            Featured for excellence in patient care and innovation.
          </p>
        </div>
      </div>
      
    </div>
    {/* We Proudly Support Section */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 tracking-tight">We Proudly Support</h2>
      <p className="mt-4 text-lg text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
        We collaborate with leading organizations to advance healthcare and support communities.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
        <div className="flex flex-col items-center group bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <img
            src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/11/pharma.jpg"
            alt="Support 1"
            className="h-16 max-w-full object-contain mb-4 transform group-hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-900 font-light text-base leading-relaxed text-center">
            Partnering with pharmaceutical leaders to enhance treatment outcomes.
          </p>
        </div>
        <div className="flex flex-col items-center group bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <img
            src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/11/nhs.jpg"
            alt="Support 2"
            className="h-16 max-w-full object-contain mb-4 transform group-hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-900 font-light text-base leading-relaxed text-center">
            Supporting the NHS to deliver world-class healthcare services.
          </p>
        </div>
        <div className="flex flex-col items-center group bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <img
            src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2025/06/doctors_in_distress_logo.jpeg"
            alt="Support 3"
            className="h-16 max-w-full object-contain mb-4 transform group-hover:scale-105 transition-transform duration-300"
          />
          <p className="text-gray-900 font-light text-base leading-relaxed text-center">
            Backing initiatives for doctor well-being and mental health support.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <NavLink to={"/contact"}
          href="#join-us"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Join Our Mission
        </NavLink>
      </div>
    </div>
  </div>
</section>
      {/* Press Releases */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Latest Press Releases</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay updated with our latest announcements, awards, partnerships, and community contributions.
            </p>
          </div>

          <div className="space-y-8">
            {pressReleases.map((release) => (
              <div
                key={release.id}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
              >
                <div className="text-center">
                  {release.logo && (
                    <img
                      src={release.logo}
                      alt={`${release.title} logo`}
                      className="logo-img mx-auto"
                    />
                  )}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      release.type === 'Award' ? 'bg-yellow-100 text-yellow-800' :
                      release.type === 'Award Recognition' ? 'bg-purple-100 text-purple-800' :
                      release.type === 'Community Support' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {release.type}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{release.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{release.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{release.excerpt}</p>
                  <a
                    href={release.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Media Coverage</h2>
            <p className="text-xl text-gray-600">Featured articles, professional insights, and industry recognition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="text-center">
                  {feature.logo && (
                    <img
                      src={feature.logo}
                      alt={`${feature.publication} logo`}
                      className="logo-img mx-auto"
                    />
                  )}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      feature.type === 'Award' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {feature.type}
                    </span>
                    <span className="text-sm text-gray-500">{feature.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">{feature.publication}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{feature.description}</p>
                  <div className="flex justify-center items-center gap-2">
                    <div className={`${feature.type === 'Award' ? 'text-yellow-600' : 'text-blue-600'} mr-2`}>
                      {feature.icon}
                    </div>
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                    >
                      Read Article
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Expertise Section */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Health Expertise Commentary</h2>
            <p className="text-xl text-gray-600">Our experts provide professional commentary on healthcare topics across national media</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthExpertise.map((expertise) => (
              <div
                key={expertise.id}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-100"
              >
                <div className="text-center">
                  {expertise.logo && (
                    <img
                      src={expertise.logo}
                      alt={`${expertise.publication} logo`}
                      className="logo-img mx-auto"
                    />
                  )}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                      {expertise.type}
                    </span>
                    <span className="text-sm text-gray-500">{expertise.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{expertise.title}</h3>
                  <p className="text-green-600 font-medium mb-3">{expertise.publication}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{expertise.description}</p>
                  <div className="flex justify-center items-center gap-2">
                    <div className="text-green-600 mr-2">
                      {expertise.icon}
                    </div>
                    <a
                      href={expertise.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-green-600 hover:text-green-800 font-medium text-sm transition-colors"
                    >
                      Read Article
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

     

      <Footer />
    </div>
  )
}

export default PressMedia
