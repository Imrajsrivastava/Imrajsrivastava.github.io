import resume from "../resume/Raj_Srivastava_Resume.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Navbar({ handleClick, boolean }) {

  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/19axDwBDzy6h_iQxo82q_uquPjw_2Nbj8/view', '_blank');
  };

  const topwindows = () => {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <nav id="nav-menu" onClick={handleClick}>
      <div id="logo-nav">
        <h1 className="nav-link home">
          <a className="sauce name rubber" href="#home">
           Raj
          </a>
        </h1>
        <div className="ham-container">
          <a rel="noreferrer" href={resume} 
          onClick={handleDownload} 
          download={'Raj_Srivastava_Resume'} className="contact-button resume-button first-btn">
            Resume
          </a>
          <span className="ham">
            <FontAwesomeIcon icon={boolean ? faBars : faXmark} />
          </span>
        </div>
      </div>
      <ul className={boolean ? "hide" : ""}>
        <li >
          <a  href="#home" className="underline">
            Home
          </a>
        </li>
        <li className="nav-link about">
          <a href="#about" className="underline">
            About
          </a>
        </li>
        <li className="nav-link skills">
          <a href="#skills" className="underline">
            Skills
          </a>
        </li>
        <li className="nav-link projects">
          <a href="#projects" className="underline">
            Projects
          </a>
        </li>
        <li className="nav-link contact">
          <a href="#contact" className="underline">
            Contact
          </a>
        </li>
      </ul>
      {/* <button href={resume} 
      onClick={handleDownload} 
      rel="noreferrer" download={'Raj_Srivastava_Resume'} id="resume-button-1" className="contact-button nav-link resume resume-button second-btn">
        Resume</button> */}
        {/* <a  href={resume} download="../resume/Raj_Srivastava_Resume" id="resume-button-1" className="nav-link resume"><button onClick={handleDownload}
        id="resume-button-2" className="contact-button resume-button second-btn nav-link resume">Resume</button></a> */}

<a href={resume} 
      onClick={handleDownload} 
      rel="noreferrer" download={'Raj_Srivastava_Resume'} id="resume-button-1" className="contact-button nav-link resume resume-button second-btn">
        <button id="resume-button-1" className="contact-button resume-button second-btn"> Resume</button></a>
    </nav>
  );
}
