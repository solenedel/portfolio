import React from "react";
import uncrypt from "../images/uncrypt.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faSquarespace } from '@fortawesome/free-brands-svg-icons';
import sample1 from "../images/art/sample1.png"
import sample2 from "../images/art/sample2.png"
import sample3 from "../images/art/sample3.png"
import sample4 from "../images/art/sample4.png"
import sample5 from "../images/art/sample5.png"


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
      {/* <p>Feel free to reach out for freelancing and contracting opportunities!</p> */}
      
      <h5>Art Gallery</h5>
      <div className="art-gallery">
        <img className="art-sample" src={sample1} alt="art sample 1" height="200" />
        <img className="art-sample" src={sample2} alt="art sample 2" height="200" />
        <img className="art-sample" src={sample3} alt="art sample 3" height="200" />
        <img className="art-sample" src={sample4} alt="art sample 4" height="200" />
         <img className="art-sample" src={sample5} alt="art sample 5" height="200" />
      </div>
     
       
      </div>
   );
}
 
export default Tools;