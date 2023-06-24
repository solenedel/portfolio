import React from 'react';
import dp from '../../images/me.png';
import 'tailwindcss/tailwind.css';

const Header = () => {
  return (
    <header className="">
      <span className="header">
        <div className="title">
          <h1>Solène Delumeau</h1>
        </div>

        <p className="tagline"> software developer </p>

        <div className="about-me">
          <h2 className="subheading">About me</h2>
          <div className="about-flex">
            <ul className="aboutText">
              <li>
                ⭐ 1+ year of startup experience, mainly in front-end
                development.
              </li>
              <li>
                ⭐ I've lived in France, Japan, China, Singapore and Canada.
              </li>
              <li>
                ⭐ Lately, I'm trying pixel art. Check out my stuff{' '}
                <a
                  className="igLink"
                  target="_blank"
                  href="https://www.artstation.com/mezanote"
                  rel="noreferrer">
                  here
                </a>
                .
              </li>
              <li>
                ⭐ I'm open to freelancing opportunities, so feel free to reach
                out by email or on LinkedIn.
              </li>
            </ul>
            <div className="frame">
              <img className="photo" src={dp} alt="me" />
            </div>
          </div>
        </div>
      </span>
    </header>
  );
};

export default Header;
