import React from "react";
// import pintura from "../images/pintura.png";
// import greengrocer from "../images/greengrocer.png";
// import todaylist from "../images/todaylist.png";
import uncrypt from "../images/uncrypt.png";


const Projects = ({className}) => {
  return ( 
      <div className={className}>
    <a href="https://www.fontspace.com/category/final-fantasy"><img className="projectsTitle" src="https://see.fontimg.com/api/renderfont4/wy99/eyJyIjoiZnMiLCJoIjoxMDAsInciOjIwMDAsImZzIjo1MCwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRkZERkQiLCJ0IjoxfQ/cHJvamVjdHM/ferrum.png" alt="Final Fantasy fonts"/></a>
      
      <div className="projects">
        <a href="http://uncrypt.app" target="_blank" rel="noreferrer" className="project"><img className="project" src={uncrypt} alt="uncrypt"/></a>
            {/* <a href="https://pintura-mintbean.herokuapp.com/" target="_blank" rel="noreferrer" className="project" id="one"><img src={pintura} alt="Pintura"></img></a>
            <a href="https://solenedel.github.io/TodayList/" target="_blank" rel="noreferrer" className="project" ><img src={todaylist} alt="TodayList"></img></a>
            <a href="https://greengrocer-app.herokuapp.com/" target="_blank" rel="noreferrer" className="project" ><img src={greengrocer} alt="GreenGrocer"></img></a> */}
        </div>
      </div>
   );
}
 
export default Projects;