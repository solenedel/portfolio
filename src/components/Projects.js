import React from "react";

const Projects = ({className}) => {
  return ( 
      <div className={className}>
        <h2>My projects</h2>
        <div className="projects">
          <div className="project one">
            <h4>Pintura</h4>
            <img src="http://solenedel.github.io/portfolio/blob/main/public/images/pintura-thumbnail-2.png" alt="pintura" />
          </div>
          <div className="project two">
           <h4>GreenGrocer</h4>
          </div>
        </div>
      </div>
   );
}
 
export default Projects;