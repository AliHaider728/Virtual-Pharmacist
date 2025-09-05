import React from "react";
import {
  ClipboardCheck,
  Search,
  RefreshCw,
  Zap,
  FileText,
  Users,
  Target,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import  "../../Header/Header.css";

const services = [
  {
    title: "Prescription Management",
    description: "Accurate, patient-focused prescription management.",
    icon: ClipboardCheck,
  },
  {
    title: "Medication Reviews",
    description: "Comprehensive, patient-centered medication reviews",
    icon: Search,
  },
  {
    title: "Medication Management",
    description: "Streamlined, effective medication management.",
    icon: RefreshCw,
  },
  {
    title: "Backlog Support",
    description: "Eliminate backlog and keep your practice running.",
    icon: Zap,
  },
  {
    title: "QOF Support",
    description: "Expert support for Quality and Outcomes Framework (QOF).",
    icon: FileText,
  },
  {
    title: "Medication Reconciliation",
    description: "Accurate, timely medication reconciliation.",
    icon: Users,
  },
  {
    title: "Clinical Supervision",
    description: "Professional, quality-driven clinical supervision.",
    icon: Target,
  },
  {
    title: "And more",
    description: "Additional tailored services for primary care excellence.",
    icon: ShieldCheck,
  },
];

const DefaultIcon = () => (
  <div className="w-6 h-6 bg-gray-200 rounded"></div>
);

const PharmacyServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Support Tailored to{" "}
            <span className="text-blue-600">Your Needs</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
            We offer a comprehensive suite of clinical pharmacy services, all
            delivered remotely. Build a customised programme to meet your
            specific needs and empower your practice to deliver exceptional care.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon || DefaultIcon;

            return (
              <div
                key={index}
                className="slides-in group relative flex flex-col items-center text-center bg-white rounded-2xl p-6 hover:shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-500 overflow-hidden"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-xl shadow-md mb-4 group-hover:bg-blue-200 group-hover:text-blue-700 transition-all duration-300">
                  <IconComponent className="w-6 h-6" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Arrow on hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-12">
          <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 rounded-3xl p-8 border border-blue-100 overflow-hidden group hover:shadow-lg transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Fully Managed Service
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                Bespoke Clinical Pharmacy Solutions
              </h3>

              <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto mb-6 group-hover:text-gray-700 transition-colors duration-300">
                We pride ourselves on delivering flexible and tailored clinical
                pharmacist support that meets the unique needs of every practice.
                We work closely with you to identify the specific services you
                require and create a bespoke workflow that optimises patient
                outcomes, reduces workload, and enhances the overall efficiency of
                your practice.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {[
                  { name: "EMIS Integration", color: "green" },
                  { name: "SystmOne Compatible", color: "blue" },
                  { name: "Remote Operation", color: "purple" },
                  { name: "Fully Managed", color: "orange" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className=" flex items-center gap-2 bg-white px-3 py rounded-lg shadow-lg hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
                  >
                    <div
                      className={`w-2 h-2 ${
                        item.color === "green"
                          ? "bg-green-500"
                          : item.color === "blue"
                          ? "bg-blue-500"
                          : item.color === "purple"
                          ? "bg-purple-500"
                          : "bg-orange-500"
                      } rounded-full group-hover:scale-125 transition-transform duration-300`}
                    ></div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            <Link
              to="/contact"
              role="button"
              aria-label="Discuss your pharmacy service requirements"
              className="relative inline-flex items-center gap-3 bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Discuss Your Requirements</span>
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <svg
                  className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
            <span>Trusted by over 170 Primary Care Practices across the UK</span>
            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmacyServices;
