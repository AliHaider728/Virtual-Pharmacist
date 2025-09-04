import { useEffect, useState } from "react";
import { Calendar, User, ArrowRight, BookOpen, Search, Tag, ArrowLeft, Share2, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";

const Blog = () => {
  const [currentView, setCurrentView] = useState("listing");
  const [selectedPostId, setSelectedPostId] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchTerm, setSearchTerm] = useState("");

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
  }, [currentView]);

  const blogPosts = [
  {
    id: 1,
    title: "Transforming Patient Care with Clinical Services Support",
    date: "15th January 2025",
    author: "Virtual Pharmacist Team",
    excerpt: "Discover how our comprehensive clinical services support is revolutionizing patient care delivery across Primary Care Networks. From medication reviews to chronic disease management, we're helping healthcare providers deliver exceptional outcomes through expert pharmaceutical care.",
    category: "Clinical Services",
    readTime: "6 min read",
    image: "https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/118680.png",
    detailImage: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    content: `
      <p>At Virtual Pharmacist, we're transforming patient care through comprehensive clinical services support that empowers healthcare providers to deliver exceptional outcomes. Our expert team of clinical pharmacists works seamlessly with Primary Care Networks, GP practices, and healthcare organizations to optimize medication management and enhance patient safety.</p>

      <h2>Comprehensive Clinical Pharmacy Services</h2>
      <p>Our clinical services support encompasses a full spectrum of pharmaceutical care activities designed to improve patient outcomes and support healthcare teams. We provide structured medication reviews, clinical consultations, and ongoing medication management for complex patients.</p>

      <p>Our team specializes in chronic disease management, working closely with patients who have diabetes, cardiovascular conditions, respiratory diseases, and other long-term health conditions. Through regular monitoring and medication optimization, we help patients achieve better health outcomes while reducing the risk of medication-related complications.</p>

      <h2>Medication Review Excellence</h2>
      <p>Our structured medication review process is designed to identify opportunities for optimization, reduce polypharmacy risks, and improve medication adherence. We conduct comprehensive assessments that consider:</p>

      <ul>
        <li><strong>Clinical Effectiveness:</strong> Ensuring medications are achieving desired therapeutic outcomes</li>
        <li><strong>Safety Assessment:</strong> Identifying potential drug interactions and contraindications</li>
        <li><strong>Patient Adherence:</strong> Evaluating and improving medication compliance</li>
        <li><strong>Cost Optimization:</strong> Recommending cost-effective alternatives without compromising care quality</li>
        <li><strong>Lifestyle Integration:</strong> Ensuring medication regimens fit with patient lifestyles and preferences</li>
      </ul>

      <h2>Supporting Primary Care Networks</h2>
      <p>We understand the unique challenges facing Primary Care Networks and have developed services specifically to address these needs. Our flexible service delivery model allows PCNs to access expert clinical pharmacy support without the overhead of direct employment.</p>

      <p>Our pharmacists integrate seamlessly with existing healthcare teams, participating in multidisciplinary meetings, contributing to care planning, and providing specialist expertise when needed. This collaborative approach ensures continuity of care while enhancing the overall quality of patient services.</p>

      <h2>Quality Assurance and Clinical Governance</h2>
      <p>All our clinical services operate under robust quality assurance frameworks that ensure the highest standards of patient care. We maintain comprehensive clinical governance processes, including regular audits, peer review, and continuous professional development.</p>

      <p>Our team holds appropriate professional registrations and indemnity insurance, providing peace of mind for partner organizations. We work within established clinical protocols while maintaining the flexibility to adapt to local needs and preferences.</p>

      <h2>Measurable Outcomes and Impact</h2>
      <p>Our clinical services support delivers measurable improvements in patient outcomes, including reduced hospital admissions, improved medication adherence, and enhanced patient satisfaction scores. We provide regular reporting and analytics to demonstrate the value and impact of our services.</p>

      <p>Partner organizations benefit from improved clinical indicators, enhanced CQC ratings, and better patient feedback scores. Our services also contribute to cost savings through optimized prescribing and reduced medication waste.</p>

      <h2>Getting Started with Clinical Services Support</h2>
      <p>Implementing our clinical services support is straightforward and can be tailored to your organization's specific needs. We offer flexible engagement models, from ongoing support contracts to project-based services, ensuring you get exactly the level of support you need.</p>

      <h2>Conclusion</h2>
      <p>Our clinical services support represents a new standard in pharmaceutical care delivery, combining expert knowledge with flexible service models to meet the evolving needs of modern healthcare. Partner with Virtual Pharmacist to transform your patient care delivery and achieve exceptional outcomes.</p>

      <p>Contact our team today to learn how our clinical services support can benefit your organization and improve patient outcomes in your community.</p>
    `,
    tags: ["Clinical Services", "Patient Care", "Medication Reviews", "Primary Care", "Healthcare Support"],
  },
  {
    id: 2,
    title: "Elevating Healthcare Delivery with Clinical Support Solutions",
    date: "8th January 2025",
    author: "Virtual Pharmacist Team",
    excerpt: "Explore how our innovative clinical support solutions are elevating healthcare delivery standards across the UK. From advanced medication management to comprehensive patient care protocols, discover the difference expert pharmaceutical support makes.",
    category: "Healthcare Solutions",
    readTime: "8 min read",
    image: "https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/supervision-1.png",
    detailImage: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    content: `
      <p>Healthcare delivery is evolving rapidly, and organizations need innovative solutions to meet growing patient demands while maintaining exceptional care standards. Virtual Pharmacist's clinical support solutions are designed to elevate healthcare delivery through expert pharmaceutical expertise and comprehensive service integration.</p>

      <h2>Advanced Medication Management Systems</h2>
      <p>Our clinical support solutions center around advanced medication management systems that optimize therapeutic outcomes while minimizing risks. We implement evidence-based protocols that ensure every patient receives the most appropriate medication therapy for their individual circumstances.</p>

      <p>Through systematic medication reviews and ongoing monitoring, we identify opportunities for optimization, reduce adverse drug reactions, and improve patient adherence. Our approach combines clinical expertise with cutting-edge technology to deliver superior pharmaceutical care.</p>

      <h2>Integrated Care Delivery Models</h2>
      <p>Our clinical support solutions integrate seamlessly with existing healthcare delivery models, enhancing rather than disrupting established workflows. We work collaboratively with healthcare teams to provide specialized pharmaceutical expertise exactly when and where it's needed most.</p>

      <p>This integrated approach ensures continuity of care while providing access to specialized knowledge that may not be available within individual practices. Our pharmacists become trusted partners in delivering comprehensive patient care.</p>

      <h2>Quality Improvement and Clinical Excellence</h2>
      <p>Our clinical support solutions drive continuous quality improvement through systematic monitoring, evaluation, and enhancement of pharmaceutical care processes. We implement best practice guidelines and evidence-based protocols to ensure optimal patient outcomes.</p>

      <p>Regular clinical audits, outcome assessments, and performance reviews ensure our services consistently meet the highest standards. We provide detailed reporting and analytics to demonstrate the impact and value of our clinical support.</p>

      <h2>Technology-Enhanced Service Delivery</h2>
      <p>We leverage advanced technology platforms to enhance service delivery and improve patient engagement. Our digital solutions include secure communication systems, electronic prescribing support, and comprehensive medication management platforms.</p>

      <p>These technology solutions enable real-time collaboration, immediate access to patient information, and seamless integration with existing healthcare systems. The result is more efficient, effective, and responsive pharmaceutical care.</p>

      <h2>Patient-Centered Care Approach</h2>
      <p>All our clinical support solutions are built around a patient-centered care philosophy that prioritizes individual needs, preferences, and circumstances. We recognize that effective pharmaceutical care must be personalized to achieve optimal outcomes.</p>

      <p>Our pharmacists take time to understand each patient's unique situation, including their health goals, lifestyle factors, and treatment preferences. This personalized approach leads to better adherence, improved outcomes, and higher patient satisfaction.</p>

      <h2>Conclusion</h2>
      <p>Virtual Pharmacist's clinical support solutions represent the future of pharmaceutical care delivery – combining expert knowledge, advanced technology, and patient-centered approaches to elevate healthcare standards. Partner with us to transform your healthcare delivery and achieve exceptional patient outcomes.</p>
    `,
    tags: ["Clinical Support", "Healthcare Delivery", "Medication Management", "Quality Improvement", "Patient Care"],
  },
  {
    id: 3,
    title: "What is the ARRS Scheme and How Can It Benefit Your Practice?",
    date: "2nd January 2025",
    author: "Virtual Pharmacist Team",
    excerpt: "The Additional Roles Reimbursement Scheme (ARRS) provides funding for Primary Care Networks to employ additional healthcare professionals, including clinical pharmacists. Learn how to maximize ARRS benefits and implement effective pharmacy services in your PCN.",
    category: "ARRS Funding",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    detailImage: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    content: `
      <p>The Additional Roles Reimbursement Scheme (ARRS) represents one of the most significant opportunities for Primary Care Networks to enhance their service delivery through additional healthcare professionals. Understanding how to effectively utilize ARRS funding for clinical pharmacy services can transform patient care in your practice.</p>

      <h2>Understanding ARRS Funding</h2>
      <p>ARRS provides 100% reimbursement for eligible additional roles within Primary Care Networks, including clinical pharmacists, pharmacy technicians, and other healthcare professionals. This funding enables PCNs to expand their workforce without direct financial burden.</p>

      <p>The scheme is designed to support the NHS Long Term Plan objectives by enabling PCNs to provide enhanced services, improve patient access, and deliver more comprehensive care within community settings.</p>

      <h2>Clinical Pharmacist Roles Under ARRS</h2>
      <p>ARRS funding supports various clinical pharmacist roles, each designed to address specific healthcare needs within Primary Care Networks. These roles include medication review specialists, chronic disease management pharmacists, and prescribing support pharmacists.</p>

      <p>Clinical pharmacists funded through ARRS can provide structured medication reviews, support prescribing decisions, manage complex polypharmacy cases, and deliver specialized clinics for conditions such as diabetes, cardiovascular disease, and respiratory conditions.</p>

      <h2>Maximizing ARRS Benefits</h2>
      <p>To maximize the benefits of ARRS funding, PCNs should develop clear service specifications that align with local population health needs and practice priorities. This includes identifying target patient groups, defining service outcomes, and establishing performance metrics.</p>

      <p>Successful ARRS implementation requires careful planning, including workforce development, service integration, and ongoing evaluation. PCNs should consider both direct employment and outsourcing options to find the most effective approach for their circumstances.</p>

      <h2>Implementation Strategies</h2>
      <p>Effective ARRS implementation begins with comprehensive needs assessment and service planning. PCNs should evaluate their current capabilities, identify gaps in service provision, and develop strategies to address priority areas.</p>

      <p>Collaboration with experienced pharmacy service providers can accelerate implementation and ensure services are delivered to the highest standards from day one. This approach reduces implementation risks and maximizes the return on ARRS investment.</p>

      <h2>Measuring Success and Impact</h2>
      <p>Successful ARRS utilization requires robust measurement and evaluation frameworks to demonstrate value and impact. Key performance indicators should include clinical outcomes, patient satisfaction, and service efficiency metrics.</p>

      <p>Regular reporting and review processes ensure ARRS-funded services continue to meet objectives and deliver value for patients and practices. This data also supports future funding applications and service development initiatives.</p>

      <h2>Conclusion</h2>
      <p>ARRS funding provides an unprecedented opportunity for Primary Care Networks to enhance their pharmaceutical care capabilities. By understanding the scheme requirements and implementing effective clinical pharmacy services, PCNs can significantly improve patient outcomes while building sustainable, high-quality healthcare delivery models.</p>
    `,
    tags: ["ARRS", "PCN Funding", "Clinical Pharmacists", "Primary Care", "NHS Funding"],
  },
  {
    id: 4,
    title: "Virtual Pharmacist: An Award-Winning Company Trusted by Our Customers",
    date: "28th December 2024",
    author: "Virtual Pharmacist Team",
    excerpt: "Discover why Virtual Pharmacist has become the trusted partner for healthcare organizations across the UK. Our award-winning services, customer-focused approach, and proven track record make us the preferred choice for clinical pharmacy support.",
    category: "Company News",
    readTime: "5 min read",
    image: "https://virtualpharmacist.co.uk/wp-content/uploads/2025/03/1742399712047.jpg",
    detailImage: "https://images.pexels.com/photos/7551653/pexels-photo-7551653.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    content: `
      <p>Virtual Pharmacist has established itself as a leading provider of clinical pharmacy services, earning recognition for our innovative approach, exceptional service quality, and unwavering commitment to customer satisfaction. Our award-winning services have transformed healthcare delivery for organizations across the UK.</p>

      <h2>Award-Winning Excellence</h2>
      <p>Our commitment to excellence has been recognized through multiple industry awards and accreditations. These achievements reflect our dedication to delivering outstanding clinical pharmacy services and our continuous pursuit of innovation in healthcare delivery.</p>

      <p>Awards and recognition validate our approach and provide assurance to potential partners that they're working with a proven, reliable service provider. Our track record demonstrates consistent delivery of high-quality services that exceed customer expectations.</p>

      <h2>Customer-Focused Service Philosophy</h2>
      <p>Our success is built on a customer-focused service philosophy that prioritizes understanding and meeting the unique needs of each healthcare organization we serve. We recognize that every practice, PCN, and healthcare provider has distinct requirements and challenges.</p>

      <p>This customer-centric approach drives everything we do, from initial service design through ongoing delivery and continuous improvement. We listen to our customers, adapt our services to meet their needs, and consistently deliver value that exceeds expectations.</p>

      <h2>Proven Track Record of Success</h2>
      <p>Our proven track record includes successful partnerships with numerous Primary Care Networks, GP practices, and healthcare organizations. These partnerships have delivered measurable improvements in patient outcomes, service efficiency, and customer satisfaction.</p>

      <p>Case studies and testimonials from our customers demonstrate the real-world impact of our services, including reduced hospital admissions, improved medication adherence, and enhanced patient safety outcomes.</p>

      <h2>Innovation and Continuous Improvement</h2>
      <p>We maintain our competitive edge through continuous innovation and service improvement. Our team regularly evaluates emerging trends, new technologies, and evolving healthcare needs to ensure our services remain at the forefront of clinical pharmacy practice.</p>

      <p>This commitment to innovation ensures our customers benefit from the latest advances in pharmaceutical care while maintaining the reliability and consistency they depend on for their daily operations.</p>

      <h2>Building Long-Term Partnerships</h2>
      <p>We focus on building long-term partnerships rather than transactional relationships. Our approach emphasizes understanding our customers' strategic objectives and supporting their long-term success through reliable, high-quality pharmaceutical care services.</p>

      <p>These partnerships are built on trust, transparency, and mutual respect, creating sustainable relationships that benefit all stakeholders – healthcare providers, patients, and our organization.</p>

      <h2>Conclusion</h2>
      <p>Virtual Pharmacist's award-winning services and customer-focused approach have established us as the trusted choice for clinical pharmacy support. Our proven track record, commitment to excellence, and focus on customer success make us the ideal partner for healthcare organizations seeking to enhance their pharmaceutical care capabilities.</p>
    `,
    tags: ["Awards", "Customer Trust", "Service Excellence", "Healthcare Partnerships", "Quality Assurance"],
  },
  {
    id: 5,
    title: "The Essential Role of Pharmacists in General Practice",
    date: "20th December 2024",
    author: "Virtual Pharmacist Team",
    excerpt: "Pharmacists play an increasingly vital role in general practice, providing specialized expertise that enhances patient care and supports GP workload management. Explore how clinical pharmacists are transforming primary care delivery and improving patient outcomes.",
    category: "Primary Care",
    readTime: "6 min read",
    image: "https://virtualpharmacist.co.uk/wp-content/uploads/2025/01/Screenshot_6.png",
    detailImage: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    content: `
      <p>The role of pharmacists in general practice has evolved dramatically, transforming from traditional dispensing functions to comprehensive clinical care delivery. Today's practice pharmacists are essential members of primary care teams, providing specialized expertise that enhances patient outcomes and supports sustainable healthcare delivery.</p>

      <h2>Clinical Expertise in Primary Care Settings</h2>
      <p>Pharmacists bring unique clinical expertise to general practice, particularly in medication management, drug interactions, and therapeutic optimization. Their specialized knowledge complements GP skills, creating more comprehensive patient care approaches.</p>

      <p>This expertise is particularly valuable in managing complex patients with multiple comorbidities, where medication interactions and optimization opportunities require specialized pharmaceutical knowledge. Pharmacists can identify issues that might be missed in busy GP consultations.</p>

      <h2>Supporting GP Workload Management</h2>
      <p>One of the most significant benefits of integrating pharmacists into general practice is their ability to manage specific aspects of patient care, reducing GP workload while maintaining high-quality outcomes. Pharmacists can handle medication reviews, chronic disease monitoring, and prescribing support.</p>

      <p>This delegation allows GPs to focus on complex diagnostic work and acute care while ensuring patients receive comprehensive pharmaceutical care. The result is more efficient practice operations and improved patient access to specialized services.</p>

      <h2>Enhanced Patient Safety and Outcomes</h2>
      <p>Pharmacists in general practice significantly enhance patient safety through systematic medication reviews, drug interaction monitoring, and adherence support. Their involvement reduces medication errors, prevents adverse drug reactions, and improves therapeutic outcomes.</p>

      <p>Studies consistently demonstrate that practices with integrated pharmacy services achieve better clinical indicators, reduced hospital admissions, and improved patient satisfaction scores. These outcomes reflect the value of specialized pharmaceutical expertise in primary care.</p>

      <h2>Chronic Disease Management Excellence</h2>
      <p>Pharmacists excel in chronic disease management, providing ongoing monitoring, medication optimization, and patient education for conditions such as diabetes, hypertension, and cardiovascular disease. Their involvement leads to better disease control and reduced complications.</p>

      <p>Regular pharmacist-led clinics for chronic conditions provide patients with consistent, specialized care while freeing up GP appointments for acute needs. This model improves both patient outcomes and practice efficiency.</p>

      <h2>Integration with Multidisciplinary Teams</h2>
      <p>Successful integration of pharmacists into general practice requires effective collaboration with existing healthcare teams. Pharmacists work alongside GPs, practice nurses, and other healthcare professionals to deliver coordinated, comprehensive patient care.</p>

      <p>This multidisciplinary approach ensures all aspects of patient care are addressed while leveraging each professional's unique expertise. The result is more holistic, effective healthcare delivery that benefits both patients and providers.</p>

      <h2>Conclusion</h2>
      <p>The essential role of pharmacists in general practice continues to expand as healthcare needs evolve and patient complexity increases. Their specialized expertise, clinical skills, and patient-focused approach make them invaluable members of primary care teams, contributing significantly to improved patient outcomes and sustainable healthcare delivery.</p>
    `,
    tags: ["General Practice", "Clinical Pharmacists", "Patient Safety", "Chronic Disease", "Multidisciplinary Care"],
  },
  {
    id: 6,
    title: "Transforming Primary Care Solutions for Modern Healthcare",
    date: "12th December 2024",
    author: "Virtual Pharmacist Team",
    excerpt: "Modern healthcare demands innovative primary care solutions that address evolving patient needs while supporting healthcare providers. Discover how Virtual Pharmacist is transforming primary care through comprehensive pharmaceutical services and expert clinical support.",
    category: "Healthcare Innovation",
    readTime: "7 min read",
    image: "https://virtualpharmacist.co.uk/wp-content/uploads/2025/03/1742400033154.jpg",
    detailImage: "https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    content: `
      <p>Primary care is undergoing a fundamental transformation as healthcare systems adapt to changing patient demographics, evolving disease patterns, and new technological capabilities. Virtual Pharmacist is at the forefront of this transformation, providing innovative solutions that enhance primary care delivery while supporting healthcare providers in meeting modern challenges.</p>

      <h2>Addressing Modern Healthcare Challenges</h2>
      <p>Today's primary care faces unprecedented challenges, including an aging population with complex health needs, increasing prevalence of chronic diseases, and growing pressure on healthcare resources. Traditional care models struggle to address these challenges effectively.</p>

      <p>Our primary care solutions address these challenges through innovative service delivery models that optimize resource utilization, improve patient access, and enhance care quality. We provide the specialized expertise needed to manage complex patient populations effectively.</p>

      <h2>Comprehensive Service Integration</h2>
      <p>Our approach to transforming primary care involves comprehensive service integration that seamlessly blends with existing healthcare delivery systems. We don't replace existing services – we enhance them through specialized pharmaceutical expertise and innovative care models.</p>

      <p>This integration includes medication management services, clinical consultations, chronic disease support, and prescribing optimization. Each service is designed to complement existing primary care capabilities while adding specialized value.</p>

      <h2>Technology-Enabled Care Delivery</h2>
      <p>Technology plays a crucial role in our primary care transformation solutions. We leverage digital platforms, electronic health records integration, and advanced communication systems to deliver efficient, effective pharmaceutical care.</p>

      <p>These technology solutions enable real-time collaboration, immediate access to patient information, and seamless coordination between healthcare providers. The result is more responsive, coordinated care that improves both patient experience and clinical outcomes.</p>

      <h2>Flexible Service Models</h2>
      <p>We recognize that different healthcare organizations have varying needs, resources, and objectives. Our primary care solutions include flexible service models that can be customized to meet specific requirements and circumstances.</p>

      <p>Whether you need ongoing clinical pharmacy support, project-based services, or specialized expertise for specific patient populations, we can design solutions that fit your needs and deliver maximum value.</p>

      <h2>Measuring Transformation Success</h2>
      <p>Our primary care transformation solutions include comprehensive measurement and evaluation frameworks to track progress and demonstrate value. We monitor clinical outcomes, patient satisfaction, service efficiency, and cost-effectiveness.</p>

      <p>Regular reporting and analysis ensure our solutions continue to meet objectives and deliver expected benefits. This data-driven approach enables continuous improvement and optimization of service delivery.</p>

      <h2>Conclusion</h2>
      <p>Transforming primary care requires innovative solutions that address modern healthcare challenges while supporting existing providers. Virtual Pharmacist's comprehensive approach to primary care transformation delivers measurable improvements in patient outcomes, service efficiency, and healthcare quality. Partner with us to transform your primary care delivery and achieve exceptional results.</p>
    `,
    tags: ["Primary Care Transformation", "Healthcare Innovation", "Service Integration", "Technology Solutions", "Care Optimization"],
  },
];

const categories = [
  "All Posts",
  "Clinical Services",
  "Healthcare Solutions",
  "ARRS Funding",
  "Company News",
  "Primary Care",
  "Healthcare Innovation",
  "Medication Management",
  "Patient Care",
  "PCN Support",
  "Quality Improvement",
  "Service Excellence",
]; 

  

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const showBlogDetail = (postId) => {
    setSelectedPostId(postId);
    setCurrentView("detail");
    window.scrollTo(0, 0);
  };

  const showBlogListing = () => {
    setCurrentView("listing");
    window.scrollTo(0, 0);
  };

  // Blog Listing Component
  const BlogListing = () => (
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
          .blog-card {
            background: linear-gradient(145deg, #ffffff, #f8fafc);
            border: 1px solid #e2e8f0;
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
      <section className="animate-section py-24 mt-[100px] md:mt-[150px] bg-gradient-to-br from-blue-600 via-gray-800 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <BookOpen className="w-20 h-20 mx-auto mb-8 text-blue-200 floating-icon" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
             Clinical Prescribing Services Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Insights, updates, and expert perspectives on primary care pharmacy services
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="animate-section py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 6).map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="animate-section py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Latest Post</h2>
          </div>

          <div
            className="blog-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => showBlogDetail(filteredPosts[0]?.id)}
          >
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img
                  src={filteredPosts[0]?.image}
                  alt={filteredPosts[0]?.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {filteredPosts[0]?.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {filteredPosts[0]?.date}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                  {filteredPosts[0]?.title}
                </h3>

                <div className="flex items-center gap-2 mb-6 text-gray-600">
                  <img
                    src="https://images.pexels.com/photos/1334945/pexels-photo-1334945.jpeg"
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-sm">{filteredPosts[0]?.author}</span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">{filteredPosts[0]?.excerpt}</p>

                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-gray-900 transition-all duration-300 group">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="animate-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Recent Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest insights in primary care pharmacy services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <article
                key={post.id}
                className="blog-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                onClick={() => showBlogDetail(post.id)}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    <Tag className="inline w-3 h-3 mr-1" />
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-gray-500 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>

                  <div className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold group-hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="animate-section py-20 bg-gradient-to-r from-blue-600 via-gray-800 to-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-8 text-blue-200" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Subscribe to our newsletter to receive the latest insights on primary care pharmacy services and NHS updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
              Subscribe
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-blue-200 text-sm mt-4">
            Join hundreds of healthcare professionals already subscribed
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Have Questions About Our Services?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our expert team is here to help you understand how our clinical pharmacy services can benefit your practice or PCN.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NavLink
              to="/contact"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-gray-800 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-gray-900 transition-all duration-300 inline-flex items-center gap-3 shadow-lg transform hover:scale-105"
            >
              Contact Our Team
              <ArrowRight className="w-6 h-6" />
            </NavLink>
            <div className="text-gray-600">
              <div className="text-lg font-semibold">Call us directly</div>
              <div className="text-2xl font-bold text-blue-600">01274 442076</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );

  // Blog Detail Component
  const BlogDetail = () => {
    const [currentPost, setCurrentPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const post = blogPosts.find((p) => p.id === selectedPostId) || blogPosts[0];

    const getRelatedPosts = () => {
      return blogPosts
        .filter((p) => p.id !== selectedPostId && p.category === post.category)
        .slice(0, 3)
        .concat(
          blogPosts
            .filter((p) => p.id !== selectedPostId && p.category !== post.category)
            .slice(0, 3 - blogPosts.filter((p) => p.id !== selectedPostId && p.category === post.category).length)
        );
    };

    useEffect(() => {
      setTimeout(() => {
        setCurrentPost(post);
        setRelatedPosts(getRelatedPosts());
        setLoading(false);
      }, 1000);
    }, [selectedPostId]);

    if (loading) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Loading article...</p>
          </div>
        </div>
      );
    }

    return (
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
            .content h2 {
              font-size: 1.875rem;
              font-weight: 700;
              color: #1f2937;
              margin: 2rem 0 1rem 0;
              border-bottom: 3px solid #3b82f6;
              padding-bottom: 0.5rem;
            }
            .content h3 {
              font-size: 1.5rem;
              font-weight: 600;
              color: #374151;
              margin: 1.5rem 0 0.75rem 0;
            }
            .content p {
              line-height: 1.8;
              margin-bottom: 1.5rem;
              color: #4b5563;
              font-size: 1.1rem;
            }
            .content ul {
              margin: 1.5rem 0;
              padding-left: 1.5rem;
            }
            .content li {
              margin-bottom: 0.75rem;
              line-height: 1.7;
              color: #4b5563;
              font-size: 1.1rem;
            }
            .content strong {
              color: #1f2937;
              font-weight: 600;
            }
          `}
        </style>

        {/* Back Navigation */}
        <div className="bg-white border-b border-gray-200 mt-[100px]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={showBlogListing}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Blog</span>
            </button>
          </div>
        </div>

        {/* Article Header */}
        <article className="animate-section">
          <div className="relative h-96 bg-gradient-to-br from-blue-600 via-gray-800 to-blue-500 overflow-hidden">
            <div className="absolute inset-0 bg-black/40"></div>
            <img
              src={currentPost?.detailImage || currentPost?.image}
              alt={currentPost?.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Tag className="inline w-4 h-4 mr-2" />
                    {currentPost?.category}
                  </span>
                  <div className="flex items-center gap-4 text-blue-200">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{currentPost?.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{currentPost?.readTime}</span>
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{currentPost?.title}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span className="font-medium">By {currentPost?.author}</span>
                  </div>
                  <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="animate-section py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="content prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: currentPost?.content }} />

              {/* Tags */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentPost?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {currentPost?.author?.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{currentPost?.author}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Liam Hart is a clinical pharmacy expert with extensive experience in primary care services. He specializes in remote pharmacy solutions, PCN support, and healthcare digital transformation. With a passion for improving patient outcomes through innovative pharmaceutical care delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="animate-section py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold gradient-text mb-4">Related Articles</h2>
              <p className="text-xl text-gray-600">Continue exploring our insights on primary care pharmacy services</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                  onClick={() => showBlogDetail(relatedPost.id)}
                >
                  <div className="relative">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {relatedPost.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-gray-500 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {relatedPost.date}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {relatedPost.author}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{relatedPost.excerpt?.substring(0, 150)}...</p>

                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 hover:text-blue-800 font-semibold group-hover:gap-3 transition-all duration-300 flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation to Previous/Next Posts */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <button
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group"
                onClick={() => {
                  const prevPost = blogPosts.find((p) => p.id === (currentPost?.id - 1)) || blogPosts[blogPosts.length - 1];
                  showBlogDetail(prevPost.id);
                }}
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-sm text-gray-500">Previous Article</div>
                  <div className="font-semibold">
                    {(blogPosts.find((p) => p.id === (currentPost?.id - 1)) || blogPosts[blogPosts.length - 1])?.title?.substring(0, 40)}...
                  </div>
                </div>
              </button>

              <button
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group text-right"
                onClick={() => {
                  const nextPost = blogPosts.find((p) => p.id === (currentPost?.id + 1)) || blogPosts[0];
                  showBlogDetail(nextPost.id);
                }}
              >
                <div>
                  <div className="text-sm text-gray-500">Next Article</div>
                  <div className="font-semibold">
                    {(blogPosts.find((p) => p.id === (currentPost?.id + 1)) || blogPosts[0])?.title?.substring(0, 40)}...
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="animate-section py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-8 text-blue-200" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Us at These Events</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Book a meeting with our team at any of these upcoming events to discuss how we can support your healthcare practice with our innovative prescribing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <NavLink
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl transform hover:scale-105"
              >
                Contact Us Today
                <ArrowRight className="w-6 h-6" />
              </NavLink>
              <div className="text-blue-100">
                <div className="text-lg font-semibold">Call us directly</div>
                <div className="text-2xl font-bold">0113 871 5065</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    );
  };

  return <div>{currentView === "listing" ? <BlogListing /> : <BlogDetail />}</div>;
};

export default Blog;