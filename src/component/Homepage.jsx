// import "../css/homepage.css";
import About from "./About";
import Education from "./Education";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Journey from "./Journey";
import Project from "./Project";
import Contact from "./Contact";
//  import { NavLink } from "react-router-dom";
// import resumePDF from "../images/resume.pdf";

import Front from "./Front";

function HomePage() {

  return (
    <>
    <div className="homepage ">
      <Navbar />
      <Front/>
      <div>
        <div>
          <About />
        </div>
        <div>
          <Education />
        </div>
        <div>
          <Project />
        </div>
        <div>
          <Journey />
        </div>
        </div>
      </div>
      <div>
          <Contact />
        </div>

        <Footer />
      
    </>
  );
}

export default HomePage;
