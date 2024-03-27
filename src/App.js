import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResultPage from "./ResultPage";
import CategorySelection from "./CategorySelection";
import InformationLiteracySkill from "./Information_Literacy_Skill/InformationLiteracySkill";
import BasicComputerMobileSkill from "./Basic_Computer_and_Mobile_Skill/BasicComputerMobileSkill";
import CommunicationSkill from "./Communication_Skill/CommunicationSkill";
import InternetSkill from "./Internet_Skill/InternetSkill";
import LoginForm from "./LoginForm";
import AboutSection from "./About_Help_Contact/AboutSection";
import HelpSection from "./About_Help_Contact/HelpSection";
import ContactSection from "./About_Help_Contact/ContactSection";
import SplashScreen from "./SplashScreen";
import Practice from "./practiice";
import NotFoundComponent from "./NotFoundComponent";
import StatisticComponent from "./StatisticComponent";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/practice/:userId" element={<Practice />} />
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/help" element={<HelpSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route
          path="/category-selection/:userId"
          element={<CategorySelection />}
        />
        <Route
          path="/information-literacy-skill/:userId/"
          element={<InformationLiteracySkill />}
        />
        <Route
          path="/basic-computer-and-mobile-skill/:userId"
          element={<BasicComputerMobileSkill />}
        />
        <Route
          path="/communication-skill/:userId"
          element={<CommunicationSkill />}
        />
        <Route path="/internet-skill/:userId" element={<InternetSkill />} />
        <Route path="/result/:userId/" element={<ResultPage />} />
        <Route path="*" element={<NotFoundComponent />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/statistic/:userId" element={<StatisticComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
