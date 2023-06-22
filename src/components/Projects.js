import React from "react";
import uncrypt from "../images/uncrypt.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faSquarespace } from '@fortawesome/free-brands-svg-icons';


const Projects = ({className}) => {
  return ( 
    <div className={className}>
      <div>
        
<h2>Projects</h2>       
        <div className="projects">
            <a href="http://uncrypt.app" target="_blank" rel="noreferrer" className="project"><img className="project" src={uncrypt} alt="uncrypt" /></a>   
        </div>
          
     
      </div>
       {/* More coming soon! */}
      </div>
   );
}
 
export default Projects;