import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  Send,
  Building,
  Users,
  Heart,
  Shield,
  Upload,
} from "lucide-react";
import Footer from "../../Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: "",
    cv: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [fileError, setFileError] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("opacity-100", "translate-y-0");
      }, index * 100);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      const file = files[0];
      // Validate file type and size
      if (file) {
        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (!allowedTypes.includes(file.type)) {
          setFileError("Please upload a PDF or Word document.");
          return;
        }
        if (file.size > maxSize) {
          setFileError("File size exceeds 5MB limit.");
          return;
        }
        setFileError("");
        setFormData({ ...formData, cv: file });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (including CV upload)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        service: "",
        message: "",
        cv: null,
      });
      setFileError("");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  return (
    <>
      <div className="min-h-screen  bg-gradient-to-br from-gray-100 via-white to-gray-200">
        {/* Hero Section */}
        <div
          className="fade-in opacity-0   relative mt-[100px] md:mt-[50px] translate-y-24 p-3 transition-all duration-1000  bg-fixed bg-center bg-cover text-white"
          style={{
            backgroundImage:
              "url('https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/hero-5.png')",
           }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-800 opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 py-20 ">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Contact Virtual Pharmacist
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Your Professional & Trusted Partner in Primary Care Healthcare
                Solutions
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:translate-y-[-5px] duration-300 transition-all">
                  <Heart className="h-4 w-4" />
                  Award-Winning Healthcare Organization
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:translate-y-[-5px] duration-300 transition-all">
                  <Shield className="h-4 w-4" />
                  25+ Years Combined Experience
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:translate-y-[-5px] duration-300 transition-all">
                  <Users className="h-4 w-4" />
                  NHS & Primary Care Specialists
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-full mx-auto text-center mt-[200px] py-20" >
          <h1 className="text-blue-950 text-4xl md:text-5xl mb-7 font-bold" >Ready to Enhance Your Practice?</h1>
          <p className="text-gray-500 text-[19px] max-w-4xl mx-auto font-semibold">Partner with <span className="text-red-700 text-center">Virtual Pharmacist</span> to take full advantage of these services, driving improved patient outcomes,
             operational efficiency, and regulatory compliance. Our fully managed services are ready to deliver the expertise and support 
             your practice needs to thrive</p>
          </div>

        <div className="container mx-auto px-0  max-w-full py-16">
          {/* Main Contact Information */}
          <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 px-6 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
  </div>

  <div className="max-w-6xl mx-auto relative z-10">
    <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
      {/* Contact Info */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-4 border border-blue-400/30">
            Get In Touch
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Ready to transform your pharmacy experience? We're here to help with any questions about our innovative virtual services.
          </p>
        </div>

        <div className="space-y-6">
          <div className="group flex items-center justify-center lg:justify-start p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg mr-4 group-hover:shadow-lg group-hover:shadow-blue-400/25 transition-all duration-300">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-blue-200 mb-1">Email us at</p>
              <span className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">
                hello@virtualpharmacist.co.uk
              </span>
            </div>
          </div>

          <div className="group flex items-center justify-center lg:justify-start p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg mr-4 group-hover:shadow-lg group-hover:shadow-blue-400/25 transition-all duration-300">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-blue-200 mb-1">Call us on</p>
              <span className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">
                0113 871 5065
              </span>
            </div>
          </div>

          <div className="group flex items-start justify-center lg:justify-start p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg mr-4 mt-1 group-hover:shadow-lg group-hover:shadow-blue-400/25 transition-all duration-300">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-blue-200 mb-2">Visit us at</p>
              <address className="not-italic text-white leading-relaxed group-hover:text-blue-200 transition-colors">
                <span className="font-semibold">Virtual Pharmacist LTD</span><br />
                Bramwell Rd, Allerton Bywater<br />
                Castleford, WF10 2GQ
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Image Section */}
      <div className="w-full lg:w-1/2">
        <div className="relative group">
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          
          {/* Image container */}
          <div className="relative">
            <img
              src="https://virtualpharmacist.co.uk/wp-content/uploads/2024/12/790708ca5f9ffe39291b368787ffb8d9.jpg.webp"
              alt="Virtual Pharmacist team providing innovative healthcare solutions"
              className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500 border border-white/10"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Floating badge */}
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              Your Healthcare Partners
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to action */}
    <div className="text-center mt-10 lg:mt-12">
      <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer">
        Ready to get started?
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  </div>
</section>

          {/* Rest of your page in a container */}
          <div className="container mx-auto px-4 py-16">
            {/* Your contact form and other sections go here */}
          </div>
          {/* Contact Form Section */}
          <section className="fade-in opacity-0 translate-y-8 transition-all duration-1000 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-300">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Ready to discuss your healthcare service needs? We're here
                    to help.
                  </p>
                </div>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-gray-100 border border-gray-300 rounded-lg flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Send className="h-5 w-5 text-blue-900" />
                    </div>
                    <div>
                      <p className="text-blue-900 font-semibold">
                        Message Sent Successfully!
                      </p>
                      <p className="text-gray-600 text-sm">
                        We'll be in touch with you shortly.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <p className="text-red-800">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}

                {fileError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <p className="text-red-800">{fileError}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                        placeholder="GP Practice, PCN, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                    >
                      <option value="">Please select a service</option>
                      <option value="clinical-pharmacist">
                        Clinical Pharmacist Support
                      </option>
                      <option value="pcn-management">
                        PCN Management & Support
                      </option>
                      <option value="medicines-optimisation">
                        Medicines Optimisation
                      </option>
                      <option value="pharmacy-technician">
                        Pharmacy Technician Support
                      </option>
                      <option value="gp-practice">
                        GP Practice Pharmacist
                      </option>
                      <option value="enhanced-access">
                        Enhanced Access Service
                      </option>
                      <option value="remote-prescribing">
                        Remote Prescribing
                      </option>
                      <option value="primary-care">
                        Primary Care Pharmacy Services
                      </option>
                      <option value="health-informatics">
                        Health Informatics
                      </option>
                      <option value="training">Training & Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="cv"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Upload CV (PDF or Word, max 5MB)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="cv"
                        name="cv"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-blue-900 file:text-white file:font-semibold hover:file:bg-blue-800"
                      />
                      {formData.cv && (
                        <p className="mt-2 text-sm text-gray-600">
                          Selected file: {formData.cv.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                      placeholder="Please tell us about your requirements, current challenges, or how we can support your healthcare organization..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-800 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Additional Info Sections */}
          <section className="fade-in opacity-0 translate-y-8 transition-all duration-1000 mb-16">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-900 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Who We Serve
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    Clinical Directors & PCN Managers
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    GP Practices & Business Managers
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    Healthcare Professionals seeking opportunities
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    Pharmacists & Pharmacy Technicians
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-900 p-3 rounded-xl">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Our Expertise
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    Primary Care Pharmacy Services
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    Medicine Optimisation Programs
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    NHS & Health Informatics
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    Tailor-made Healthcare Solutions
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Partnership Section */}
          <section className="fade-in opacity-0 translate-y-8 transition-all duration-1000">
            <div className="bg-gradient-to-r from-blue-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Join the growing number of healthcare organizations who trust
                Virtual Pharmacist to deliver exceptional primary care pharmacy
                services and reduce workload pressures.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                  <strong>Award-Winning Service</strong>
                </div>
                <div className="bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                  <strong>Fully Managed Solutions</strong>
                </div>
                <div className="bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                  <strong>Data-Driven Results</strong>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Visit Us Section with Google Map */}
        <section className="relative py-8 sm:py-12 md:py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-blue-900 via-blue-800 to-gray-800 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tl from-[#3b97d0] to-blue-600 translate-x-1/3 translate-y-1/3 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-blue-400 to-blue-800 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
              <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-50 rounded-full border border-blue-100">
                <span className="text-sm font-medium bg-gradient-to-r from-blue-900 via-blue-800 to-gray-800 bg-clip-text text-transparent">
                  Our Location
                </span>
              </div>

              <h2 className="gsap-slide-up text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                Visit Us
                <span className="block bg-gradient-to-r from-blue-900 via-blue-800 to-gray-800 bg-clip-text text-transparent">
                  We're Here to Help
                </span>
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-900 mx-auto mb-4 rounded-full"></div>

              <p className="gsap-slide-up text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Find us at 9201 N 25th Ave Suite 185, Phoenix, AZ 85021.
                Walk-ins are welcome!
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl">
                {/* Floating elements around the map */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b97d0] to-blue-600 rounded-full opacity-20 animate-pulse delay-700"></div>
                <div className="absolute -bottom-4 -left-6 w-14 h-14 bg-gradient-to-br from-blue-400 to-[#3b97d0] rounded-full opacity-20 animate-pulse delay-300"></div>
                <div className="absolute -bottom-6 -right-4 w-18 h-18 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-20 animate-pulse delay-1000"></div>

                <div className="relative h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl shadow-2xl overflow-hidden group bg-white/70 backdrop-blur-sm border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-[#8b97d0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2359.377223225723!2d-1.3621351234205008!3d53.74716584465785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45f66d5e9a4a7653%3A0x782a0bd3235cb740!2sVirtual%20Pharmacist!5e0!3m2!1sen!2s!4v1756728459273!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Cholla Behavioral Health Location"
                    className="rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                  ></iframe>
                  <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 rounded-2xl"></div>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <a
                href="https://www.google.com/maps/place/9201+N+25th+Ave+suite+185,+Phoenix,+AZ+85021/@33.57195,-112.113998,17z/data=!4m6!3m5!1s0x872b6c5960eaaaab:0x2ca55ed74e10edaa!8m2!3d33.5696723!4d-112.1116307!16s%2Fg%2F11v67pck0n?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative font-semibold text-sm sm:text-base md:text-lg bg-white/70 backdrop-blur-sm hover:bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border-2 border-gray-200 hover:border-red-300 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden transform hover:-translate-y-1 inline-flex items-center"
                aria-label="Get directions to Cholla Behavioral Health"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-red-600/10 to-[#3b97d0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 inline-flex items-center">
                  <MapPin className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-blue-600 group-hover:text-[#3b97d0] transition-all duration-300" />
                  <span className="bg-gradient-to-r from-blue-600 to-[#3b97d0] bg-clip-text text-transparent font-bold">
                    Get Directions
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>

        <style jsx>{`
          .fade-in {
            transition: all 1s ease-out;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
