import React from "react";
import dp from "../images/dp.jpg";


const Header = ({className}) => {
  return ( 
    <header className={className}>
      <span className="header">
        {/* <div className="title">
          <img id="firstname" src="https://see.fontimg.com/api/renderfont4/wvM6/eyJyIjoiZnMiLCJoIjoxNDgsInciOjIwMDAsImZzIjo3NCwiZmdjIjoiI0ZFRkFGQSIsImJnYyI6IiNCMDkzOTMiLCJ0IjoxfQ/U29sZW5lIA/derrida.png" alt="firstname" />
          <img  id="lastname" src="https://see.fontimg.com/api/renderfont4/wvM6/eyJyIjoiZnMiLCJoIjoxNDgsInciOjIwMDAsImZzIjo3NCwiZmdjIjoiI0ZFRkFGQSIsImJnYyI6IiNCMDkzOTMiLCJ0IjoxfQ/RGVsdW1lYXU/derrida.png" alt="lastname" />
        </div> */}
        <div className="title">
          <img className="firstName" src="https://see.fontimg.com/api/renderfont4/wy99/eyJyIjoiZnMiLCJoIjoxMDAsInciOjIwMDAsImZzIjo1MCwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRkZERkQiLCJ0IjoxfQ/c29sZW5l/ferrum.png" alt="Final Fantasy fonts" />
       <img className="lastName" src="https://see.fontimg.com/api/renderfont4/wy99/eyJyIjoiZnMiLCJoIjoxMDAsInciOjIwMDAsImZzIjo1MCwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRkZERkQiLCJ0IjoxfQ/ZGVsdW1lYXU/ferrum.png" alt="Final Fantasy fonts"/></div>
      
        {/* <img id="name" src="https://see.fontimg.com/api/renderfont4/wvM6/eyJyIjoiZnMiLCJoIjoxNDgsInciOjIwMDAsImZzIjo3NCwiZmdjIjoiI0ZFRkFGQSIsImJnYyI6IiNCMDkzOTMiLCJ0IjoxfQ/U29sZW5lIERlbHVtZWF1/derrida.png" alt="Transparent fonts"/> */}
        <h3> ✦ software developer ✦ open to work opportunities ✦ </h3>
        
        
      
        <div className="skills">
        
          {/* <h2>About me</h2> */}
          <img className="aboutMe" src="https://see.fontimg.com/api/renderfont4/wy99/eyJyIjoiZnMiLCJoIjoxMTgsInciOjIwMDAsImZzIjo1OSwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRkZERkQiLCJ0IjoxfQ/YWJvdXQgbWU/ferrum.png" alt="Final Fantasy fonts"/>
         
          
          
          <span className="flexBox"><img className="photo" src={dp} alt="me" />
            <span className="flexText">
              <p>Developer with an eye for aesthetics. I have one year of professional experience in full-stack web development.  </p>
              <p>I was born in Paris in 1998, moved to Asia in 2000, and to Canada in 2016. </p>
            <p>Art has always been my hobby. Lately, I've been getting into pixel art. Follow my art instagram <a className="igLink" target="_blank" href="https://instagram.com/mezanote.png" rel="noreferrer">here!</a>    </p></span>
            
          <span></span></span>
         
        </div>
{/* 
        <div className="tools">
          <i className="fab fa-react" /> 
          <i className="fab fa-js-square" />
          <i className="fab fa-node" /> 
          <i className="fab fa-html5" />  
          <i className="fab fa-css3-alt" />
          <img src="https://img.icons8.com/ios-filled/150/000000/postgreesql.png" alt="psql"/>
          <i className="fab fa-git-square" />
        </div> */}
        </span>
    </header>
   );
}
 
export default Header;