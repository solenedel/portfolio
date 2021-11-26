import React from "react";

const Footer = ({className}) => {
  return ( 
    <footer className={className}>
      <h2>Contact me</h2>
      <div className="contact">
        {/* <div className="contact-method">
          <i class="far fa-envelope" />
          <p>solenedelumeau@gmail.com</p>
        </div> */}
        <div className="contact-method">
          <i class="fab fa-linkedin" />
        </div>
        <div className="contact-method">
          <i class="fab fa-github" />
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;