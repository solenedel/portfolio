import React from "react";
import dp from "../images/me.png";


const Header = ({className}) => {
  return ( 
    <header className={className}>
      <span className="header">
        {/* <div className="title">
          <img id="firstname" src="https://see.fontimg.com/api/renderfont4/wvM6/eyJyIjoiZnMiLCJoIjoxNDgsInciOjIwMDAsImZzIjo3NCwiZmdjIjoiI0ZFRkFGQSIsImJnYyI6IiNCMDkzOTMiLCJ0IjoxfQ/U29sZW5lIA/derrida.png" alt="firstname" />
          <img  id="lastname" src="https://see.fontimg.com/api/renderfont4/wvM6/eyJyIjoiZnMiLCJoIjoxNDgsInciOjIwMDAsImZzIjo3NCwiZmdjIjoiI0ZFRkFGQSIsImJnYyI6IiNCMDkzOTMiLCJ0IjoxfQ/RGVsdW1lYXU/derrida.png" alt="lastname" />
        </div> */}
        <div className="title">
      <h1>Solène Delumeau</h1>
        </div>
      
        {/* <img id="name" src="https://see.fontimg.com/api/renderfont4/wvM6/eyJyIjoiZnMiLCJoIjoxNDgsInciOjIwMDAsImZzIjo3NCwiZmdjIjoiI0ZFRkFGQSIsImJnYyI6IiNCMDkzOTMiLCJ0IjoxfQ/U29sZW5lIERlbHVtZWF1/derrida.png" alt="Transparent fonts"/> */}
        <h3> ✦ software developer ✦  </h3>
        
        
      
        <div className="skills">
        
          <h2>About me</h2>
         
          
          
          <span className="flexBox"><img className="photo" src={dp} alt="me" />
            <span className="flexText">
              <p>Developer with a sharp eye for design. I have one year of professional experience in full-stack web development.  </p>
              <p>I was born in Paris in 1998, moved to Asia in 2000, and then to Canada in 2016. </p>
            <p>Art has always been my hobby. Lately, I've been getting into pixel art. Check out my portfolio <a className="igLink" target="_blank" href="https://www.artstation.com/mezanote" rel="noreferrer">here!</a>    </p></span>
            
          <span></span></span>
         
        </div>

        </span>
    </header>
   );
}
 
export default Header;