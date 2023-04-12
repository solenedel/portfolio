import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = ({className}) => {
  return ( 
    <footer className={className}>
     <a href="https://www.fontspace.com/category/final-fantasy"><img className="contactTitle" src="https://see.fontimg.com/api/renderfont4/wy99/eyJyIjoiZnMiLCJoIjoxMDAsInciOjIwMDAsImZzIjo1MCwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRkZERkQiLCJ0IjoxfQ/Y29udGFjdCBtZQ/ferrum.png" alt="Final Fantasy fonts"/></a>
      <div className="contact">
        <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faEnvelope} />

        {/* <div className="contact-method">
        <a href="https://www.linkedin.com/in/solene-delumeau" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" /></a>
        </div>
        <div className="contact-method">
          <a href="https://github.com/solenedel" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
        </div> */}
      </div>
      {/* <div className="email">
        <p>solenedelumeau@gmail.com</p>
      </div> */}

      {/* <div className="credits">
        <a href="https://icons8.com/icon/36440/postgresql">PostgreSQL icon by Icons8.</a> 
      </div> */}
    </footer>
   );
}
 
export default Footer;