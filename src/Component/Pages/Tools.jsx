import React, { useEffect, useState } from "react";
import { Calculator, FileText, Activity, Heart, Pill, TrendingUp, Users, CheckCircle } from "lucide-react";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

// BMI Calculator Component
const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(1));
      
      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue < 25) setCategory('Normal weight');
      else if (bmiValue < 30) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">BMI Calculator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter height in cm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter weight in kg"
          />
        </div>
        <button
          onClick={calculateBMI}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Calculate BMI
        </button>
        {bmi && (
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <p className="font-semibold">BMI: {bmi}</p>
            <p className="text-sm text-gray-600">Category: {category}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Dosage Calculator Component
const DosageCalculator = () => {
  const [weight, setWeight] = useState('');
  const [dose, setDose] = useState('');
  const [frequency, setFrequency] = useState('');
  const [result, setResult] = useState(null);

  const calculateDosage = () => {
    if (weight && dose && frequency) {
      const totalDaily = parseFloat(weight) * parseFloat(dose) * parseFloat(frequency);
      setResult({
        perDose: (parseFloat(weight) * parseFloat(dose)).toFixed(1),
        dailyTotal: totalDaily.toFixed(1)
      });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Dosage Calculator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Patient Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter patient weight"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Dose (mg/kg)</label>
          <input
            type="number"
            value={dose}
            onChange={(e) => setDose(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter dose per kg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Frequency (times/day)</label>
          <input
            type="number"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Times per day"
          />
        </div>
        <button
          onClick={calculateDosage}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Calculate Dosage
        </button>
        {result && (
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <p className="font-semibold">Per Dose: {result.perDose} mg</p>
            <p className="text-sm text-gray-600">Daily Total: {result.dailyTotal} mg</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Creatinine Clearance Calculator
const CreatinineCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [creatinine, setCreatinine] = useState('');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);

  const calculateCrCl = () => {
    if (age && weight && creatinine) {
      // Cockcroft-Gault equation
      const genderFactor = gender === 'male' ? 1 : 0.85;
      const crCl = ((140 - parseFloat(age)) * parseFloat(weight) * genderFactor) / (72 * parseFloat(creatinine));
      setResult(crCl.toFixed(1));
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Creatinine Clearance (Cockcroft-Gault)</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Age (years)</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Serum Creatinine (mg/dL)</label>
          <input
            type="number"
            step="0.1"
            value={creatinine}
            onChange={(e) => setCreatinine(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button
          onClick={calculateCrCl}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Calculate CrCl
        </button>
        {result && (
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <p className="font-semibold">Creatinine Clearance: {result} mL/min</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Blood Pressure Risk Calculator
const BloodPressureCalculator = () => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [category, setCategory] = useState('');
  const [risk, setRisk] = useState('');

  const calculateBP = () => {
    const sys = parseFloat(systolic);
    const dia = parseFloat(diastolic);
    
    if (sys < 120 && dia < 80) {
      setCategory('Normal');
      setRisk('Low cardiovascular risk');
    } else if ((sys >= 120 && sys <= 129) && dia < 80) {
      setCategory('Elevated');
      setRisk('Increased risk - lifestyle changes recommended');
    } else if ((sys >= 130 && sys <= 139) || (dia >= 80 && dia <= 89)) {
      setCategory('Stage 1 Hypertension');
      setRisk('High risk - medication may be needed');
    } else if (sys >= 140 || dia >= 90) {
      setCategory('Stage 2 Hypertension');
      setRisk('Very high risk - medication recommended');
    } else if (sys > 180 || dia > 120) {
      setCategory('Hypertensive Crisis');
      setRisk('Emergency - immediate medical attention required');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Blood Pressure Assessment</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Systolic (mmHg)</label>
          <input
            type="number"
            value={systolic}
            onChange={(e) => setSystolic(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Diastolic (mmHg)</label>
          <input
            type="number"
            value={diastolic}
            onChange={(e) => setDiastolic(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          onClick={calculateBP}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Assess Blood Pressure
        </button>
        {category && (
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <p className="font-semibold text-lg">{category}</p>
            <p className="text-sm text-gray-600 mt-1">{risk}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Drug Interaction Checker
const DrugInteractionChecker = () => {
  const [drug1, setDrug1] = useState('');
  const [drug2, setDrug2] = useState('');
  const [result, setResult] = useState('');

  // Simplified interaction database
  const interactions = {
    'warfarin_aspirin': 'Major: Increased bleeding risk',
    'digoxin_furosemide': 'Moderate: Monitor potassium levels',
    'metformin_contrast': 'Major: Risk of lactic acidosis',
    'ace_inhibitor_potassium': 'Moderate: Monitor potassium levels',
    'simvastatin_amlodipine': 'Minor: Monitor for muscle symptoms'
  };

  const checkInteraction = () => {
    const key1 = `${drug1.toLowerCase()}_${drug2.toLowerCase()}`;
    const key2 = `${drug2.toLowerCase()}_${drug1.toLowerCase()}`;
    
    if (interactions[key1]) {
      setResult(interactions[key1]);
    } else if (interactions[key2]) {
      setResult(interactions[key2]);
    } else {
      setResult('No known major interactions found. Always consult comprehensive drug interaction resources.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Drug Interaction Checker</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Drug 1</label>
          <input
            type="text"
            value={drug1}
            onChange={(e) => setDrug1(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter first drug"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Drug 2</label>
          <input
            type="text"
            value={drug2}
            onChange={(e) => setDrug2(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter second drug"
          />
        </div>
        <button
          onClick={checkInteraction}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Check Interactions
        </button>
        {result && (
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <p className="text-sm">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Tools Component
const Tools = () => {
  const [activeTab, setActiveTab] = useState('overview');

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

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 200);
    });

    return () => observer.disconnect();
  }, []);

  const renderCalculators = () => {
    switch(activeTab) {
      case 'bmi':
        return <BMICalculator />;
      case 'dosage':
        return <DosageCalculator />;
      case 'creatinine':
        return <CreatinineCalculator />;
      case 'bp':
        return <BloodPressureCalculator />;
      case 'interactions':
        return <DrugInteractionChecker />;
      default:
        return null;
    }
  };

  return (
    <>
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
          .fade-in {
            opacity: 0;
            transition: opacity 0.6s ease-out;
          }
          .fade-in.visible {
            opacity: 1;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="animate-section py-20 mt-[150px] bg-gradient-to-r from-blue-900 via-blue-800 to-gray-800  text-white fade-in">
        <div className="absolute top-20 left-4 sm:left-10 w-10 sm:w-16 h-10 sm:h-16 bg-white/10 rounded-full animate-pulse"></div>

        <div
          className="absolute bottom-20 right-4 sm:right-10 w-12 sm:w-20 h-12 sm:h-20 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
         <div
          className="absolute top-1/2 left-1/6 sm:left-1/4 w-6 sm:w-8 h-6 sm:h-8 bg-white/30 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Clinical Tools & Calculators
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Evidence-based clinical decision support tools for healthcare professionals
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="animate-section py-8 bg-white shadow-sm fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'overview' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('bp')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'bp' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Blood Pressure
            </button>
            <button
              onClick={() => setActiveTab('bmi')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'bmi' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              BMI Calculator
            </button>
            <button
              onClick={() => setActiveTab('dosage')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'dosage' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Dosage Calculator
            </button>
            <button
              onClick={() => setActiveTab('creatinine')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'creatinine' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Creatinine Clearance
            </button>
            <button
              onClick={() => setActiveTab('interactions')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'interactions' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Drug Interactions
            </button>
          </div>
        </div>
      </section>

      {/* Tools Content */}
      <section className="animate-section py-12 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'overview' ? (
            <>
              {/* Tools Overview */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Professional Healthcare Tools
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Access our comprehensive suite of clinical tools designed to support healthcare professionals in delivering optimal patient care and making evidence-based decisions.
                </p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div 
                  onClick={() => setActiveTab('bp')}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] cursor-pointer"
                >
                  <Heart className="w-12 h-12 text-red-600 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Blood Pressure Assessment</h3>
                  <p className="text-gray-600 mb-6">
                    Assess blood pressure readings and cardiovascular risk based on current guidelines
                  </p>
                </div>

                <div 
                  onClick={() => setActiveTab('bmi')}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] cursor-pointer"
                >
                  <Activity className="w-12 h-12 text-green-600 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">BMI Calculator</h3>
                  <p className="text-gray-600 mb-6">
                    Calculate Body Mass Index and assess weight categories for patient counseling
                  </p>
                </div>

                <div 
                  onClick={() => setActiveTab('dosage')}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] cursor-pointer"
                >
                  <Calculator className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Dosage Calculator</h3>
                  <p className="text-gray-600 mb-6">
                    Accurate dosage calculations for various patient populations and weight-based dosing
                  </p>
                </div>

                <div 
                  onClick={() => setActiveTab('creatinine')}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] cursor-pointer"
                >
                  <TrendingUp className="w-12 h-12 text-orange-600 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Creatinine Clearance</h3>
                  <p className="text-gray-600 mb-6">
                    Calculate renal function using Cockcroft-Gault equation for drug dosing adjustments
                  </p>
                </div>

                <div 
                  onClick={() => setActiveTab('interactions')}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] cursor-pointer"
                >
                  <Pill className="w-12 h-12 text-purple-600 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Drug Interaction Checker</h3>
                  <p className="text-gray-600 mb-6">
                    Check for potential drug interactions and contraindications in medication therapy
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                  <FileText className="w-12 h-12 text-indigo-600 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Clinical Guidelines</h3>
                  <p className="text-gray-600 mb-6">
                    Up-to-date clinical guidelines and protocols for evidence-based practice
                  </p>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="mt-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Additional Resources</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Clinical Protocols</h4>
                    <p className="text-gray-600">Evidence-based protocols for common clinical scenarios and medication management</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Training Materials</h4>
                    <p className="text-gray-600">Educational resources for continuous professional development and clinical skills</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Reference Guides</h4>
                    <p className="text-gray-600">Quick reference guides for clinical decision making and medication optimization</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="max-w-2xl mx-auto">
              {renderCalculators()}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="animate-section py-20 bg-blue-600 text-white fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Tools?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We can develop bespoke clinical tools and calculators tailored to your specific healthcare requirements and workflows.
          </p>
          <NavLink to={"/contact"}  
          className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </NavLink>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Tools;