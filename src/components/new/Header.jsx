import React from 'react';
import dp from '../../images/me.png';

const Header = () => {
  return (
    <header className="">
      <span className="header">
        <div className="title">
          <h1>Solène Delumeau</h1>
        </div>

        <p className="tagline">Designer + Front-end developer </p>

        <div className="about-me">
          <h2 className="subheading">about me</h2>
          <div className="about-flex">
            <div className="frame">
              <img className="photo" src={dp} alt="me" />
            </div>
            <ul className="aboutText">
              <li>
                ✧ 1+ year of startup experience in product design and front-end
                development.
              </li>
              <li>
                ✧ I've lived in France, Japan, China, Singapore and Canada.
              </li>
              <li>
                ✧ My latest hobby is{' '}
                <a
                  className="igLink"
                  target="_blank"
                  href="https://www.artstation.com/mezanote"
                  rel="noreferrer">
                  pixel art
                </a>
                .
              </li>
              <li>✧ I'm open to freelancing opportunities!</li>
            </ul>
          </div>
        </div>
      </span>
    </header>
  );
};

export default Header;
