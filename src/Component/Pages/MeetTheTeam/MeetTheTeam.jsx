import { useEffect } from "react";
import { Linkedin, Mail, Award, GraduationCap } from "lucide-react";
import Footer from "../../Footer/Footer";

const MeetTheTeam = () => {
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

  const teamMembers = [
    {
      name: "Laura",
      position: "Clinical Director",
      image:
        "https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/pic.png.webp",
      bio: "As the founder of Virtual Pharmacist, Laura is a passionate pharmacist who strives for the best clinical care and service for all the practices and patients we serve. Laura has over a decade's experience spanning different Primary Care sectors, combined with extensive training, mentoring, and consultancy services. Her dedication to high‑quality services sets us apart, holding us to the highest standards for patient care and outcomes.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Luke",
      position: "Operations Director",
      image:
        "https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/pic-1.png.webp",
      bio: "As the Operations Director at Virtual Pharmacist, Luke drives the advancement of cutting‑edge technology and AI solutions within the company. With a strong focus on research and development, he leads initiatives to enhance the functionality and efficiency of their systems, ensuring innovation remains at the heart of their operations. His strategic oversight and commitment to continuous improvement play a pivotal role in maintaining their leadership in healthcare.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Jodie",
      position: "Operations Manager",
      image:
        "https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/pic-2.png.webp",
      bio: "As Operations Manager, Jodie oversees the day‑to‑day running of services while contributing to the development and implementation of internal AI and technology projects. With extensive Primary Care experience across GP practices and PCNs, she has a special interest in QOF and systems training, supporting pharmacists with complex tasks. Her hands‑on role ensures their services remain efficient and forward‑thinking.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Chloe",
      position: "Operations Coordinator",
      image:
        "https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/pic-3.png.webp",
      bio: "As the Operations Coordinator, Chloe oversees recruitment, onboarding, and supports their practice teams in addition to assisting the head office in ensuring smooth operations and effective communication across departments.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Ellie",
      position: "Senior Administrator",
      image:
        "https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/pic-4.png.webp",
      bio: "As the Senior Administrator, Ellie is essential for managing communications. She provides support wherever necessary, ensuring smooth operations and timely assistance across the organisation.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Lilly",
      position: "Administrator",
      image:
        "https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/pic-5.png.webp",
      bio: "Serving as an Administrator, Lilly is vital in managing communications. She ensures smooth operations and timely assistance across the organisation—whether working in the office, supporting clients, or assisting pharmacists.",
      qualifications: [],
      specialties: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style>
        {`
  @keyframes fadeInSlide {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeInSlide {
    animation: fadeInSlide 1s ease-out forwards;
  }
  .gradient-bg {
    background: linear-gradient(135deg, rgba(0, 43, 91, 0.6), rgba(4, 150, 255, 0.6)), url("https://images.pexels.com/photos/33714897/pexels-photo-33714897.jpeg");
    background-size: cover;
    background-position: center;
 
     
  }
  .hover-lift {
    transition: all 0.3s ease;
  }
  .hover-lift:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(2, 43, 91, 0.15);
  }
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`}
      </style>
      {/* Hero Section */}

      <section className="bg-fixed animate-section py-28 mt-[150px] md:mt-[150px] bg-cover bg-center bg-no-repeat relative gradient-bg">
        <div className="absolute inset-0 bg-black/20" style={{
          objectFit:"cover",
          backgroundRepeat:"no-repeat"
        }}></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-20 h-20 bg-white/15 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/20 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Meet Our Expert Team
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Dedicated professionals committed to transforming healthcare
              through innovation and excellence
            </p>
            <div className="w-24 h-1 bg-white/60 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002B5B] mb-6 tracking-tight">
              Our Leadership Team
            </h2>
            <div className="w-16 h-1 bg-[#0496FF] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our diverse team of healthcare professionals, technologists, and
              business experts brings together decades of experience in clinical
              pharmacy, healthcare management, and digital innovation. We are
              united by our commitment to improving patient outcomes and
              supporting healthcare providers.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="animate-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover-lift overflow-hidden border border-gray-100"
              >
                <div className="aspect-w-1 justify-center flex aspect-h-1 p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full ring-4 ring-[#0496FF]/20"
                  />
                </div>
                <div className="p-6 pt-0">
                  <h3 className="text-2xl font-bold text-[#002B5B] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#0496FF] font-semibold mb-4 text-lg">
                    {member.position}
                  </p>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex gap-4 pt-4 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-[#0496FF] hover:text-[#002B5B] transition-colors font-medium">
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm">LinkedIn</span>
                    </button>
                    <button className="flex items-center gap-2 text-[#0496FF] hover:text-[#002B5B] transition-colors font-medium">
                      <Mail className="w-5 h-5" />
                      <span className="text-sm">Contact</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002B5B] mb-8 tracking-tight">
                Why Work With Us
              </h2>
              <div className="w-16 h-1 bg-[#0496FF] mb-8 rounded-full"></div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Each of our clinicians is fully adaptable with fantastic
                  clinical acumen, and must meet vigorous internal
                  specifications.
                </p>
                <p>
                  We carry out a specialised in-depth review of all team members
                  to ensure they are fully compliant and trained to an excellent
                  standard.
                </p>
                <p>
                  We have an experienced clinical support team who are on hand
                  to provide training and support to our team, alongside
                  assistance with continuing professional development.
                </p>
                <p>
                  We take immense pride in our colleagues and in hand-selecting
                  our team.
                </p>
                <p>
                  Our team has regular input and training from senior management
                  to review any educational and development needs, and to
                  support in meeting and exceeding clinical and non-clinical
                  requirements. We offer a variety of flexible roles to suit
                  individual experience and skill sets.
                </p>
                <p className="font-medium text-[#002B5B]">
                  We are always looking to help individuals flourish in their
                  careers. Get in touch to see how we can accommodate you in our
                  friendly, vibrant team!
                </p>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-md border-l-4 border-[#0496FF]">
                <p className="text-lg font-semibold text-[#002B5B] mb-4">
                  In a recent survey, 100% of our team stated that they enjoy
                  working for Virtual Pharmacist
                </p>
                <p className="font-semibold text-gray-800 mb-3">
                  Some of their comments:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#0496FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Good morale, good team and flexibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#0496FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Being clinically involved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#0496FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Extremely supportive team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#0496FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      The managing team are very approachable and make working
                      for Virtual Pharmacist very comfortable
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#0496FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Excellent trained staff all around. Previously working for
                      another company which I found difficult because it was not
                      organised as well as Virtual Pharmacist
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#0496FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      I have had a great experience so far working with my
                      practice; they really appreciate the pharmacist's
                      contribution and I feel a valued member of the team
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/6129494/pexels-photo-6129494.jpeg"
                    alt="Why Work With Us"
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#0496FF]/20 to-[#002B5B]/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <p className="font-bold text-[#002B5B] text-lg">
                    Join Our Team
                  </p>
                  <p className="text-sm text-[#0496FF]">
                    Supportive Environment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="animate-section py-20 gradient-bg text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Join Our Growing Team
          </h2>
          <div className="w-16 h-1 bg-white/60 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
            We're always looking for talented healthcare professionals who share
            our passion for innovation and excellence. Explore career
            opportunities with us.
          </p>
          <button className="bg-white text-[#002B5B] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View Career Opportunities
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MeetTheTeam;
