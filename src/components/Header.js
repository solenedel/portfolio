import React from "react";


const Header = ({className}) => {
  return ( 
    <header className={className}>
        <h1>Solène Delumeau</h1>
        <h3>full stack developer.</h3>
        <h3>France <i className="fas fa-plane" /> Japan <i className="fas fa-plane" /> China <i className="fas fa-plane" /> Singapore <i className="fas fa-plane" /> Canada</h3>
        <h3><i className="fas fa-map-marker-alt" /> Currently: Greater Vancouver, BC</h3>

        <div className="skills">
          <h2>About me</h2>
          <p>I'm a junior developer with a keen sense of visual design. Being naturally artistic, I tend towards the front end, but I am highly motivated in developing the full stack.</p>
          <p>I studied Environmental Science at university, and decided to switch fields shortly after completing my degree.</p>
          <p>In October 2021, I graduated from the full stack web development bootcamp at Lighthouse Labs. I'm now working on my own projects and looking for a job as a developer.</p>
          <p>My favourite tools: <strong>JavaScript, Node.JS, ReactJS, HTML, CSS, Postgres, SQL and Git.</strong></p>
        </div>

        <div className="tools">
          <i className="fab fa-js-square" />
          <i className="fab fa-node" /> 
          <i className="fab fa-react" /> 
          <i className="fab fa-html5" />  
          <i className="fab fa-css3-alt" />
          <img src="https://img.icons8.com/ios-filled/150/000000/postgreesql.png" alt="psql"/>
          <i className="fab fa-git-square" />
        </div>
    </header>
   );
}
 
export default Header;