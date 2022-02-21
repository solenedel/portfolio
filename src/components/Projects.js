import React from "react";
import pintura from "../images/pintura.png";
import greengrocer from "../images/greengrocer.png";
import todaylist from "../images/todaylist.png";


const Projects = ({className}) => {
  return ( 
      <div className={className}>
        <h2>My projects</h2>
        <p>Click to view a project.</p>
        <div className="projects">
            <a href="https://pintura-mintbean.herokuapp.com/" target="_blank" rel="noreferrer" className="project" id="one"><img src={pintura} alt="Pintura"></img></a>
            <a href="https://solenedel.github.io/TodayList/" target="_blank" rel="noreferrer" className="project" ><img src={todaylist} alt="TodayList"></img></a>
            <a href="https://greengrocer-app.herokuapp.com/" target="_blank" rel="noreferrer" className="project" ><img src={greengrocer} alt="GreenGrocer"></img></a>
        </div>
      </div>
   );
}
 
export default Projects;