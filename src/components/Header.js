import React from "react";


const Header = ({className}) => {
  return ( 
    <header className={className}>
        <h1>Solène Delumeau</h1>
        <h3>full stack developer.</h3>
        <h3>France <i className="fas fa-plane" /> Japan <i className="fas fa-plane" /> China <i className="fas fa-plane" /> Singapore <i className="fas fa-plane" /> Canada</h3>
        <h3><i className="fas fa-map-marker-alt" /> Currently: Greater Vancouver, BC</h3>

        <div className="skills">
          <p>I'm a junior developer with a keen sense of visual design. I like to build not only the outside appearance of website, but also the logic on the inside. </p>
          <p>I recently switched fields into web development, completing a full stack web development bootcamp (Lighthouse Labs) in October 2021. I'm now looking for a job as a developer.</p>
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