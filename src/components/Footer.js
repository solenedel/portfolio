import React from "react";

const Footer = ({className}) => {
  return ( 
    <footer className={className}>
      <h2>Contact me</h2>
      <div className="contact">
        <div className="contact-method">
        <a href="https://www.linkedin.com/in/solene-delumeau" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" /></a>
        </div>
        <div className="contact-method">
          <a href="https://github.com/solenedel" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
        </div>
      </div>
      <div className="email">
        <p>solenedelumeau@gmail.com</p>
      </div>

      <div className="credits">
        {/* <a href="https://fontawesome.com/">Icons by Font Awesome. </a> */}
        <a href="https://icons8.com/icon/36440/postgresql">PostgreSQL icon by Icons8.</a> 
      </div>
    </footer>
   );
}
 
export default Footer;