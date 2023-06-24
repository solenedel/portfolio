import React from "react";
import uncrypt from "../images/uncrypt.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faSquarespace } from '@fortawesome/free-brands-svg-icons';



const Tools = ({className}) => {
  return ( 
    <div className={className}>

      {/*  */}
      
      <h2>Tools & Skills</h2>
      <div className="myTools">
        <h4>Languages & Frameworks</h4>
        <p> React JS ✦ Next.js ✦ Tailwind CSS ✦ Postgres ✦ SQL ✦ HTML ✦ CSS ✦ JavaScript (ES6) ✦ Git </p>
       
        <h4 className="software">Software</h4>
        <p> GitHub ✦ VScode ✦ Squarespace ✦ Figma ✦ Aseprite </p>
          
        </div>
      
      </div>
   );
}
 
export default Tools;