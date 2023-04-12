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
        
          
        {/* <img className="projectsTitle" src="https://see.fontimg.com/api/renderfont4/wy99/eyJyIjoiZnMiLCJoIjoxMDAsInciOjIwMDAsImZzIjo1MCwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRkZERkQiLCJ0IjoxfQ/bXkgdG9vbHM/ferrum.png" alt="Final Fantasy fonts" />
        <div className="myTools">
          React JS ✦ Next.js ✦ Tailwind CSS ✦ Postgres ✦ SQL ✦ HTML ✦ CSS ✦ JavaScript (ES6) ✦ Git ✦ GitHub ✦ Squarespace ✦ Figma ✦ Aseprite 
        </div>
        <p>I'm open to freelance web development and contracting opportunities. Feel free to reach out!</p> */}
      </div>
       
      </div>
   );
}
 
export default Projects;