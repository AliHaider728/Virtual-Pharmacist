import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  DollarSign, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowLeft,
  Mail,
  Phone,
  Globe,
  Calendar,
  Building,
  Target,
  Heart,
  Star,
  Linkedin
} from 'lucide-react';

const JobDetailPage = () => {
  const [showApplyForm, setShowApplyForm] = useState(false);

  const handleApplyNow = () => {
    const subject = `Application for Clinical Pharmacist – Remote GP Practice Support - Reference VP-101-04`;
    const body = `Dear Virtual Pharmacist Ltd Team,

I am writing to apply for the Clinical Pharmacist – Remote GP Practice Support position (Reference: VP-101-04).

Please find my CV attached for your consideration.

I am particularly interested in this role because:
- [Add your reasons here]

I look forward to hearing from you.

Best regards,
[Your Name]
[Your Phone Number]
[Your Email Address]`;
    
    window.open(`mailto:apply@virtualpharmacist.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const jobData = {
    title: "Clinical Pharmacist – Remote GP Practice Support",
    company: "Virtual Pharmacist Ltd",
    reference: "VP-101-04",
    postedDate: "Recently Posted",
    location: "Fully remote – work from home anywhere within the United Kingdom",
    jobType: ["Full-Time", "Part-Time"],
    salary: "Up to £30/hour (negotiable based on clinical experience)",
    contract: "Self-employed, ongoing contracts available"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#0496FF] to-[#2A3172] text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <button className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Jobs
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {jobData.jobType.map((type, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {type}
                  </span>
                ))}
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                  Ref: {jobData.reference}
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                {jobData.title}
              </h1>
              
              <div className="flex items-center gap-2 text-white/90 mb-6">
                <Building className="w-5 h-5" />
                <span className="text-xl font-medium">{jobData.company}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Remote (UK-wide)</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm">{jobData.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Flexible Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{jobData.postedDate}</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-80">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">Quick Apply</h3>
                <button 
                  onClick={handleApplyNow}
                  className="w-full bg-white text-[#2A3172] py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 mb-3"
                >
                  <Mail className="w-4 h-4" />
                  Email Your CV
                </button>
                <p className="text-xs text-white/70 text-center">
                  Reference: {jobData.reference}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Virtual Pharmacist */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0496FF] bg-opacity-10 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-[#0496FF]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2A3172]">About Virtual Pharmacist</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Virtual Pharmacist Ltd provides <strong>bespoke clinical pharmacist services</strong> across the NHS, general practice, primary care networks (PCNs), and the wider pharmacy sector. With over <strong>20 years of combined healthcare experience</strong>, we specialise in medication management, structured medication reviews, and pharmacist-led clinical support.
                </p>
                
                <p>
                  We are actively seeking experienced <strong>Clinical Pharmacists</strong> and <strong>Independent Prescribers</strong> with GP practice experience. Opportunities are available for <strong>remote working</strong> from anywhere in the UK, offering both <strong>full-time and part-time</strong>, self-employed roles.
                </p>
                
                <p>
                  At Virtual Pharmacist Ltd, we are committed to easing workload pressures on general practice teams, enabling clinicians and practice staff to focus on patient care, clinical outcomes, and practice development.
                </p>
                
                <p>
                  This is an excellent opportunity to join our rapidly expanding organisation, supported by an established UK-wide network of <strong>over 100 qualified pharmacists</strong>. We provide structured career development, continuous professional growth, and regular clinical training sessions to ensure your ongoing success.
                </p>

                <div className="mt-6 p-4 bg-[#0496FF] bg-opacity-5 rounded-lg border-l-4 border-[#0496FF]">
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#0496FF]" />
                    <span className="text-sm font-medium text-[#2A3172]">Connect with us on LinkedIn</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0496FF] bg-opacity-10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#0496FF]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2A3172]">Key Responsibilities Include</h2>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Conducting structured medication reviews (SMRs) to optimise patient medications.",
                  "Managing acute medicine requests and prescription queries.",
                  "Processing hospital discharge summaries and outpatient clinic letters.",
                  "Providing clinical pharmacist advice and support for patients presenting with minor ailments and self-limiting conditions.",
                  "Supporting GP practices to achieve Quality and Outcomes Framework (QOF) targets.",
                  "Collaborating with multidisciplinary primary care teams to enhance patient health outcomes, particularly for chronic and long-term conditions.",
                  "Other clinical pharmacist tasks and duties as required by practices."
                ].map((responsibility, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0496FF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Essential Skills & Experience */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#2A3172] bg-opacity-10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#2A3172]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2A3172]">Essential Skills & Experience Required</h2>
              </div>
              
              <ul className="space-y-4">
                {[
                  { text: "GPhC Registered Pharmacist", essential: true },
                  { text: "Minimum 2 years post-graduate pharmacist experience", essential: true },
                  { text: "Prior GP practice pharmacist experience", essential: true },
                  { text: "Independent Prescriber qualification", essential: false, note: "preferred but not essential" },
                  { text: "Clinical Pharmacy Diploma or equivalent clinical qualification", essential: false, note: "advantageous" },
                  { text: "Strong computer literacy, especially within clinical systems (EMIS Web and SystmOne experience preferred)", essential: true },
                  { text: "Excellent clinical leadership, communication, and interpersonal skills", essential: true },
                  { text: "Committed to continuous professional development (CPD)", essential: true }
                ].map((requirement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center ${
                      requirement.essential ? 'bg-red-100' : 'bg-green-100'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        requirement.essential ? 'bg-red-500' : 'bg-green-500'
                      }`}></div>
                    </div>
                    <div>
                      <span className="text-gray-700 leading-relaxed">{requirement.text}</span>
                      {requirement.note && (
                        <span className="text-sm text-gray-500 italic"> ({requirement.note})</span>
                      )}
                      {requirement.essential && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full ml-2">essential</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Join Us */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-[#2A3172]">Why Join Virtual Pharmacist Ltd?</h2>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Extremely competitive hourly rates – up to £30/hour, negotiable based on clinical experience.",
                  "Fully remote/home-based working across the UK – flexible work-life balance.",
                  "All IT equipment provided, including laptops and software tools for remote consultations.",
                  "Dedicated support from Senior Clinical Pharmacists and experienced Head Office teams.",
                  "Extensive pharmacist network, peer-to-peer support, and mentoring opportunities.",
                  "Weekly training sessions, clinical updates, and professional growth opportunities.",
                  "Opportunities to specialise and train on primary care systems including SystmOne and EMIS Web."
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Job Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 sticky top-6">
              <h3 className="text-lg font-bold text-[#2A3172] mb-4">Job Summary</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">Contract Type</span>
                  </div>
                  <span className="text-[#2A3172] font-medium">Self-employed, ongoing contracts</span>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">Job Types</span>
                  </div>
                  <span className="text-[#2A3172] font-medium">Full-time (30+ hrs/week) & Part-time (18+ hrs/week)</span>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">Working Hours</span>
                  </div>
                  <span className="text-[#2A3172] font-medium">Flexible weekday shifts (8-10 hour), Monday-Friday</span>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">Weekend Work</span>
                  </div>
                  <span className="text-green-600 font-medium">No weekend work required</span>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">Reference ID</span>
                  </div>
                  <span className="text-[#0496FF] font-bold">{jobData.reference}</span>
                </div>
              </div>
              
              <hr className="my-6" />
              
              <button 
                onClick={handleApplyNow}
                className="w-full bg-gradient-to-r from-[#0496FF] to-[#2A3172] text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Apply Now
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-3">
                Email: apply@virtualpharmacist.co.uk
              </p>
            </div>

            {/* Company Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#2A3172] mb-4">Company at a Glance</h3>
              
              <div className="space-y-4">
                <div className="text-center p-4 bg-[#0496FF] bg-opacity-5 rounded-lg">
                  <div className="text-2xl font-bold text-[#0496FF]">100+</div>
                  <div className="text-sm text-gray-600">Qualified Pharmacists</div>
                </div>
                
                <div className="text-center p-4 bg-[#2A3172] bg-opacity-5 rounded-lg">
                  <div className="text-2xl font-bold text-[#2A3172]">20+</div>
                  <div className="text-sm text-gray-600">Years Combined Experience</div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">NHS</div>
                  <div className="text-sm text-gray-600">Trusted Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Apply Section */}
        <div className="mt-12 bg-gradient-to-r from-[#0496FF] to-[#2A3172] rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">How to Apply</h2>
          <p className="text-lg mb-8 opacity-90 leading-relaxed max-w-4xl mx-auto">
            To apply for this <strong>Clinical Pharmacist Remote Role</strong> or for further details, please submit your CV to{' '}
            <strong>apply@virtualpharmacist.co.uk</strong>, quoting reference{' '}
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full font-bold">{jobData.reference}</span>
          </p>
          
          <button 
            onClick={handleApplyNow}
            className="bg-white text-[#2A3172] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-3 mx-auto"
          >
            <Mail className="w-5 h-5" />
            Submit Your CV Now
          </button>
          
          <p className="mt-8 text-sm opacity-75 leading-relaxed max-w-3xl mx-auto">
            Virtual Pharmacist Ltd is committed to delivering pharmacist-led clinical excellence and improving patient care across primary care and general practice in the UK. <strong>Join our dedicated and dynamic team today.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;