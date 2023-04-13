import React from "react";
import uncrypt from "../images/uncrypt.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faSquarespace } from '@fortawesome/free-brands-svg-icons';


const Tools = ({className}) => {
  return ( 
    <div className={className}>
        <img className="projectsTitle" src="https://see.fontimg.com/api/renderfont4/wy99/eyJyIjoiZnMiLCJoIjoxMDAsInciOjIwMDAsImZzIjo1MCwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRkZERkQiLCJ0IjoxfQ/bXkgdG9vbHM/ferrum.png" alt="Final Fantasy fonts" />
      <div className="myTools">
        <h4>Languages & Frameworks</h4>
        <span> React JS ✦ Next.js ✦ Tailwind CSS ✦ Postgres ✦ SQL ✦ HTML ✦ CSS ✦ JavaScript (ES6) ✦ Git </span>
       
        <h4 className="software">Software</h4>
        <span> GitHub ✦ VScode ✦ Squarespace ✦ Figma ✦ Aseprite </span>
          
        </div>
        <p>Feel free to reach out for freelancing and contracting opportunities!</p>
     
       
      </div>
   );
}
 
export default Tools;