import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import fivver from '../../images/fivver.png';

function Contact() {
  return (
    <footer className="contact-section">
      <h2 className="subheading">contact</h2>
      <div className="contactIcons">
        <a
          href="https://www.linkedin.com/in/solene-delumeau"
          target="_blank"
          rel="noreferrer">
          {' '}
          <FontAwesomeIcon className="contactIcon" icon={faLinkedin} />
        </a>
        <a
          href="https://www.github.com/solenedel"
          target="_blank"
          rel="noreferrer">
          {' '}
          <FontAwesomeIcon className="contactIcon" icon={faGithub} />
        </a>
        <a
          href="mailto:solene.delumeau@gmail.com"
          target="_blank"
          rel="noreferrer">
          {' '}
          <FontAwesomeIcon className="contactIcon" icon={faEnvelope} />
        </a>

        {/* <a href="https://www.instagram.com/mezanote.png" target="_blank" rel="noreferrer">  <FontAwesomeIcon icon={faInstagram} /></a>  */}
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

export default Contact;
