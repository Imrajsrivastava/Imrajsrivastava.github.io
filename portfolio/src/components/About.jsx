import React, { useEffect } from "react";
import resume from "../resume/Raj_Srivastava_Resume.pdf"
import AOS from "aos";

export default function About() {

  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/19axDwBDzy6h_iQxo82q_uquPjw_2Nbj8/view", '_blank');
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="about section sections" id="about">
      <h1 data-aos="fade-up" className="heading">
        <span className="sauce">About Me</span>
      </h1>
      <div>
        <div data-aos="fade-up" className=" first">
          <p id="user-detail-intro">
          Welcome to my coding realm, where I transform coffee into lines of code! <p style={{ display: 'inline-block' }} className="sauce">I'm Raj Srivastava</p>
          , a proficient full stack web developer. 
          My expertise spans across HTML5, CSS3, JavaScript, ReactJs, NodeJs, Express, and I'm well-versed in working with database 
          technologies like MongoDB. My true passion lies in crafting websites that not only boast impressive aesthetics but also elicit 
          exclamations of delight from users. I strive for excellence and pay meticulous attention to detail, enabling me to conquer even the most intricate coding challenges. 
          
            <br />
          </p>
          <br />
        </div>
        {/* <button onClick={handleDownload} rel="noreferrer" href={resume} download={"Raj_Srivastava_Resume"} id="resume-button-2" className="contact-button resume-button second-btn">
          Resume</button> */}

{/* <a  href={resume} download="../resume/Raj_Srivastava_Resume"><button onClick={handleDownload}
        id="resume-button-1" className="contact-button resume-button second-btn">Resume</button></a> 
        */}

<a onClick={handleDownload} rel="noreferrer" href={resume} download={"Raj_Srivastava_Resume"} id="resume-button-2" className="contact-button resume-button second-btn"><button id="resume-button-1" className="contact-button resume-button second-btn"> Resume</button>
          </a>
      </div>
    </section>
  );
}
