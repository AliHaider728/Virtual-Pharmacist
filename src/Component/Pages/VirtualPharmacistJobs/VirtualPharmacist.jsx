import React, { useState } from 'react';
import { MapPin, Clock, Briefcase, DollarSign, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

const JobListings = () => {
  const [activeTab, setActiveTab] = useState("All Category");
  const [expandedJob, setExpandedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Clinical Pharmacist – Remote GP Practice Support",
      type: ["Full-Time"],
      location: "Remote (UK-wide)",
      salary: "Up to £30/hour",
      contract: "Self-employed, Permanent",
      hours: "Minimum 30 hours/week",
      reference: "VP-101-04",
      link: "https://virtualpharmacist.co.uk/careers/clinical-pharmacist-for-gp-practice-pcn-2/",
      description: "Join our rapidly expanding organisation with over 100 qualified pharmacists providing bespoke clinical services across the NHS and general practice.",
      keyResponsibilities: [
        "Conducting structured medication reviews (SMRs) to optimise patient medications",
        "Managing acute medicine requests and prescription queries",
        "Processing hospital discharge summaries and outpatient clinic letters",
        "Providing clinical advice for minor ailments and self-limiting conditions",
        "Supporting GP practices to achieve Quality and Outcomes Framework (QOF) targets",
        "Collaborating with multidisciplinary primary care teams"
      ],
      requirements: [
        "GPhC Registered Pharmacist (essential)",
        "Minimum 2 years post-graduate pharmacist experience",
        "Prior GP practice pharmacist experience (essential)",
        "Independent Prescriber qualification (preferred)",
        "Clinical Pharmacy Diploma or equivalent (advantageous)",
        "Strong computer literacy (EMIS Web and SystmOne preferred)"
      ],
      benefits: [
        "Extremely competitive rates up to £30/hour",
        "Fully remote working across the UK",
        "All IT equipment provided",
        "Dedicated support from Senior Clinical Pharmacists",
        "Weekly training sessions and CPD opportunities",
        "Flexible weekday shifts, no weekend work"
      ]
    },
    {
      id: 2,
      title: "Clinical Pharmacist for GP Practice & PCN – Remote",
      type: ["Contractual", "Part-Time"],
      location: "Remote (UK-wide)",
      salary: "Competitive rates",
      contract: "Self-employed, Contractual",
      hours: "Minimum 18 hours/week",
      reference: "VP-102-04",
      link: "https://virtualpharmacist.co.uk/careers_job/remote-clinical-pharmacist-job-pcn",
      description: "Flexible part-time role providing clinical pharmacist services to GP Practices and Primary Care Networks with work-life balance focus.",
      keyResponsibilities: [
        "Structured medication reviews for chronic conditions",
        "Clinical support for GP practice teams",
        "Medication optimisation consultations",
        "Supporting PCN clinical priorities",
        "Patient safety medication reviews",
        "Clinical governance activities"
      ],
      requirements: [
        "GPhC Registered Pharmacist",
        "GP practice or PCN experience preferred",
        "Independent Prescriber qualification advantageous",
        "Experience with clinical systems",
        "Strong communication skills",
        "Commitment to CPD"
      ],
      benefits: [
        "Flexible part-time hours",
        "Remote working opportunity",
        "Professional development support",
        "Access to pharmacist network",
        "Clinical training provided",
        "Equipment and software included"
      ],
      additionalInfo: {
        contractType: "Self-employed, Contractual",
        jobTypes: "Part-time roles available (minimum 18 hours/week)",
        workingHours: "Flexible weekday shifts, Monday to Friday; no weekend work required",
        location: "Remote (UK-wide)"
      }
    }
  ];

  const filteredJobs = jobs.filter(job => 
    activeTab === "All Category" || job.type.includes(activeTab)
  );

  const toggleExpanded = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A3172] mb-6">
            Discover Your Dream Career
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
            Join <strong className="text-[#0496FF]">Virtual Pharmacist LTD</strong> and become part of our growing network of over 100 qualified pharmacists providing exceptional clinical services across the NHS and primary care.
          </p>
          <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
            <p className="text-gray-700 mb-2">Ready to apply?</p>
            <a
              href="mailto:apply@virtualpharmacist.co.uk"
              className="text-[#0496FF] font-semibold hover:text-[#2A3172] transition-colors text-lg"
            >
              apply@virtualpharmacist.co.uk
            </a>
          </div>
        </div>

        {/* Job Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All Category", "Contractual", "Full-Time", "Part-Time"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-6 py-3 rounded-full border-2 transition-all font-medium ${
                activeTab === type
                  ? "bg-[#0496FF] text-white border-[#0496FF] shadow-lg transform scale-105"
                  : "bg-white text-[#2A3172] border-gray-300 hover:border-[#0496FF] hover:text-[#0496FF] hover:shadow-md"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Job Header */}
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {job.type.map((type, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#0496FF] bg-opacity-10 text-[#0496FF] text-sm font-medium rounded-full"
                          >
                            {type}
                          </span>
                        ))}
                        <span className="px-3 py-1 bg-[#2A3172] bg-opacity-10 text-[#2A3172] text-sm font-medium rounded-full">
                          Ref: {job.reference}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#2A3172] mb-4 leading-tight">
                        {job.title}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-[#0496FF]" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <DollarSign className="w-4 h-4 text-[#0496FF]" />
                          <span className="text-sm">{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4 text-[#0496FF]" />
                          <span className="text-sm">{job.hours}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Briefcase className="w-4 h-4 text-[#0496FF]" />
                          <span className="text-sm">{job.contract}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {job.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => toggleExpanded(job.id)}
                        className="px-6 py-3 bg-[#2A3172] text-white rounded-full hover:bg-[#1f2459] transition-colors font-medium flex items-center gap-2"
                      >
                        {expandedJob === job.id ? 'Show Less' : 'View Details'}
                        <ArrowRight className={`w-4 h-4 transition-transform ${expandedJob === job.id ? 'rotate-90' : ''}`} />
                      </button>
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-[#0496FF] text-white rounded-full hover:bg-[#0377cc] transition-colors font-medium text-center"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedJob === job.id && (
                  <div className="border-t border-gray-200 bg-gray-50">
                    <div className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Key Responsibilities */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <CheckCircle className="w-5 h-5 text-[#0496FF]" />
                            <h4 className="text-xl font-bold text-[#2A3172]">Key Responsibilities</h4>
                          </div>
                          <ul className="space-y-3">
                            {job.keyResponsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <div className="w-2 h-2 bg-[#0496FF] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm leading-relaxed">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Award className="w-5 h-5 text-[#0496FF]" />
                            <h4 className="text-xl font-bold text-[#2A3172]">Requirements</h4>
                          </div>
                          <ul className="space-y-3">
                            {job.requirements.map((requirement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <div className="w-2 h-2 bg-[#2A3172] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm leading-relaxed">{requirement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Users className="w-5 h-5 text-[#0496FF]" />
                            <h4 className="text-xl font-bold text-[#2A3172]">Benefits</h4>
                          </div>
                          <ul className="space-y-3">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm leading-relaxed">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div className="mb-8 p-6 bg-white rounded-xl">
                        <h4 className="text-xl font-bold text-[#2A3172] mb-4">Additional Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="font-medium text-gray-600">Contract Type:</span>
                            <span className="text-[#2A3172]">{job.additionalInfo.contractType}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="font-medium text-gray-600">Job Types:</span>
                            <span className="text-[#2A3172] text-right">{job.additionalInfo.jobTypes}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="font-medium text-gray-600">Working Hours:</span>
                            <span className="text-[#2A3172] text-right">{job.additionalInfo.workingHours}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="font-medium text-gray-600">Location:</span>
                            <span className="text-[#2A3172] text-right">{job.additionalInfo.location}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="font-medium text-gray-600">Reference ID:</span>
                            <span className="text-[#0496FF] font-bold">{job.reference}</span>
                          </div>
                        </div>
                      </div>

                      {/* How to Apply */}
                      <div className="p-6 bg-gradient-to-r from-[#0496FF] to-[#2A3172] rounded-xl text-white text-center">
                        <h5 className="text-2xl font-bold mb-4">How to Apply</h5>
                        <p className="mb-6 opacity-90 leading-relaxed">
                          To apply for this {job.title} or for further details, please submit your CV to{' '}
                          <span className="font-bold">apply@virtualpharmacist.co.uk</span>, quoting reference{' '}
                          <span className="font-bold bg-white bg-opacity-20 px-2 py-1 rounded">{job.reference}</span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                          <button
                            onClick={() => handleApplyNow(job.reference, job.title)}
                            className="bg-white text-[#2A3172] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Submit Your CV Now
                          </button>
                        </div>
                        <p className="text-sm opacity-75 leading-relaxed">
                          Virtual Pharmacist Ltd is committed to delivering pharmacist-led clinical excellence and improving patient care across primary care and general practice in the UK. Join our dedicated and dynamic team today.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#2A3172] mb-2">No Jobs Found</h3>
              <p className="text-gray-500">No positions available in the selected category.</p>
            </div>
          )}
        </div>

        {/* Company Info Footer */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#2A3172] mb-4">Why Choose Virtual Pharmacist Ltd?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0496FF] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#0496FF]" />
                </div>
                <h4 className="font-semibold text-[#2A3172] mb-2">100+ Pharmacists</h4>
                <p className="text-gray-600 text-sm">Join our established UK-wide network</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0496FF] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#0496FF]" />
                </div>
                <h4 className="font-semibold text-[#2A3172] mb-2">20+ Years Experience</h4>
                <p className="text-gray-600 text-sm">Combined healthcare expertise</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0496FF] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#0496FF]" />
                </div>
                <h4 className="font-semibold text-[#2A3172] mb-2">Clinical Excellence</h4>
                <p className="text-gray-600 text-sm">Delivering quality patient care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;