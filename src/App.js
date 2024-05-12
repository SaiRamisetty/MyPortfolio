import React from "react";
// import NavbarComponent from "./MyComponents/Navbar";
import MyNavbar from "./MyComponents/MyNavbar";
import AboutMe from "./MyComponents/AboutMe";
import Projects from "./MyComponents/Projects";
import Interships from "./MyComponents/Internships";
import ContactMe from "./MyComponents/ContactMe";
import Footer from "./MyComponents/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
  


function App() {
  return (
    <Router>
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/MyPortfolio" element={<Home />} />
        <Route path="/About" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/internships" element={<Interships />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

function Home() {
  return (
    <div>
      <AboutMe />
      <Projects />
      <Interships />
      <ContactMe />
    </div>
  );
}
export default App;
