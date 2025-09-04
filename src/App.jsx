import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import ScrollTotop from "./ScrollTop/ScrollTotop.jsx"
import Header from "./Component/Header/Header.jsx"
import Home from "./Component/Home/Home.jsx"
import About from "./Component/About/AboutUs.jsx"
import MeetTheTeam from "./Component/Pages/MeetTheTeam/MeetTheTeam.jsx"
import ServicesSupport from "./Component/Pages/Services/ServicesSupport.jsx"
import ClinicalPharmacist from './Component/Pages/ClinicalPharmacist.jsx'
import PCNManagement from './Component/Pages/PCNManagement.jsx'
import MedicinesOptimisation from "./Component/Pages/MedicinesOptimisation.jsx"
import PharmacyTechnician from "./Component/Pages/GPPracticePharmacist.jsx"
import  GPPracticePharmacist from "./Component/Pages/GPPracticePharmacist.jsx"
import EnhancedAccess from "./Component/Pages/EnhancedAccess.jsx"
import ARRS from "./Component/Pages/ARRS.jsx"
import GPARRS from "./Component/Pages/GPARRS.jsx"
import RemotePrescribing from "./Component/Pages/RemotePrescribing.jsx"
import Tools from "./Component/Pages/Tools.jsx"
import Training from "./Component/Pages/Training.jsx"
import Careers from "./Component/Pages/Careers.jsx"
import Contact from "./Component/Pages/Contact/Contact.jsx"
import CustomCursor from "./Component/Cursor/CustomCursor.jsx"
import Testimonials from "./Component/Pages/Testimonials.jsx"
import TermsConditions from "./Component/Pages/TermsConditions.jsx"
import PrivacyPolicy from "./Component/Pages/PrivacyPolicy.jsx"
import Events from "./Component/Pages/Events.jsx"
import Awards from "./Component/Pages/Awards.jsx"
import Blog from "./Component/Pages/Blogs.jsx"
function App() {
  return (
    <Router>
      <ScrollTotop/>
      <div className="App">
        <CustomCursor/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/services" element={<ServicesSupport />} />
          <Route path="/services/clinical-pharmacist" element={<ClinicalPharmacist />} />
          <Route path="/services/pcn-management" element={<PCNManagement />} />
          <Route path="/services/medicines-optimisation" element={<MedicinesOptimisation />} />
          <Route path="/services/pharmacy-technician" element={<PharmacyTechnician />} />
          <Route path="/services/gp-practice-pharmacist" element={<GPPracticePharmacist />} />
          <Route path="/services/enhanced-access" element={<EnhancedAccess />} />
          <Route path="/services/arrs" element={<ARRS />} />
          <Route path="/services/gp-arrs" element={<GPARRS />} />
          <Route path="/services/remote-prescribing" element={<RemotePrescribing />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/training" element={<Training />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Testimonials" element={<Testimonials/>} />
          <Route path="/Term" element={<TermsConditions/>} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
          <Route path="/event" element={<Events/>} />
          <Route path="/award" element={<Awards/>} />
          <Route path="/blog" element={<Blog/>} />
          
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
