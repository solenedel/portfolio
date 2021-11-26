import React from "react";
import pinturaOne from "../../public/pinturaOne.png";

const Projects = ({className}) => {
  return ( 
      <div className={className}>
        <h2>My projects</h2>
        <div className="projects">
          <div className="project one">
            <h4>Pintura</h4>
            <img src={pinturaOne} alt="pintura" />
          </div>
          <div className="project two">
           <h4>GreenGrocer</h4>
          </div>
        </div>
      </div>
   );
}
 
export default Projects;