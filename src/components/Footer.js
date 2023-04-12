import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';


const Footer = ({className}) => {
  return ( 
    <footer className={className}>
      <div className="flexBox">
        <a href="https://www.fontspace.com/category/final-fantasy"><img className="contactTitle" src="https://see.fontimg.com/api/renderfont4/wy99/eyJyIjoiZnMiLCJoIjoxMDAsInciOjIwMDAsImZzIjo1MCwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRkZERkQiLCJ0IjoxfQ/Y29udGFjdCBtZQ/ferrum.png" alt="Final Fantasy fonts" /></a>
        <div className="contactIcons">
      <a href="https://www.linkedin.com/in/solene-delumeau" target="_blank" rel="noreferrer">  <FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="https://www.github.com/solenedel" target="_blank" rel="noreferrer">  <FontAwesomeIcon icon={faGithub} /></a> 
          <a href="mailto:solene.delumeau@gmail.com" target="_blank" rel="noreferrer">    <FontAwesomeIcon icon={faEnvelope} /></a>
          {/* <a href="https://www.instagram.com/mezanote.png" target="_blank" rel="noreferrer">  <FontAwesomeIcon icon={faInstagram} /></a>  */}
     
        </div>
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