import React from "react";
import uncrypt from "../images/uncrypt.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faSquarespace } from '@fortawesome/free-brands-svg-icons';


const Projects = ({className}) => {
  return ( 
    <div className={className}>
      <div>
        
          <a href="https://www.fontspace.com/category/final-fantasy" className="titleBox"><img className="projectsTitle" src="https://see.fontimg.com/api/renderfont4/wy99/eyJyIjoiZnMiLCJoIjoxMDAsInciOjIwMDAsImZzIjo1MCwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRkZERkQiLCJ0IjoxfQ/cHJvamVjdHM/ferrum.png" alt="Final Fantasy fonts" /></a>
       
        <div className="projects">
            <a href="http://uncrypt.app" target="_blank" rel="noreferrer" className="project"><img className="project" src={uncrypt} alt="uncrypt" /></a>   
        </div>
          
     
      </div>
       
      </div>
   );
}
 
export default Projects;