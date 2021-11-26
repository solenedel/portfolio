import React from "react";
import pinturaOne from "../images/pinturaOne.png";
import greengrocer from "../images/greengrocer.png";

const Projects = ({className}) => {
  return ( 
      <div className={className}>
        <h2>My projects</h2>
        <div className="projects">
          <div className="project one">
            <img src={pinturaOne} alt="Pintura" />
          </div>
          <div className="project two">
          <img src={greengrocer} alt="GreenGrocer" />
          </div>
        </div>
      </div>
   );
}
 
export default Projects;