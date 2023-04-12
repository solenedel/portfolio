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
<a href="https://www.fontspace.com/category/final-fantasy"><img className="titleImg" src="https://see.fontimg.com/api/renderfont4/wy99/eyJyIjoiZnMiLCJoIjoxMTgsInciOjIwMDAsImZzIjo1OSwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRkZERkQiLCJ0IjoxfQ/c29sZW5lIGRlbHVtZWF1/ferrum.png" alt="Final Fantasy fonts"/></a>
        {/* <img id="name" src="https://see.fontimg.com/api/renderfont4/wvM6/eyJyIjoiZnMiLCJoIjoxNDgsInciOjIwMDAsImZzIjo3NCwiZmdjIjoiI0ZFRkFGQSIsImJnYyI6IiNCMDkzOTMiLCJ0IjoxfQ/U29sZW5lIERlbHVtZWF1/derrida.png" alt="Transparent fonts"/> */}
        <h3> ✦ software developer ✦ amateur artist ✦ </h3>
        
        
      
        <div className="skills">
        
          {/* <h2>About me</h2> */}
          <a href="https://www.fontspace.com/category/final-fantasy"><img className="aboutMe" src="https://see.fontimg.com/api/renderfont4/wy99/eyJyIjoiZnMiLCJoIjoxMTgsInciOjIwMDAsImZzIjo1OSwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRkZERkQiLCJ0IjoxfQ/YWJvdXQgbWU/ferrum.png" alt="Final Fantasy fonts"/></a>
         
          
          
          <span className="flexBox"><img className="photo" src={dp} alt="me" />
            <span className="flexText">
              <p>Developer with a sharp eye for aesthetics, bilingual (English – French). I have one year of professional experience in full-stack web development.  </p>
              <p>I was born in Paris in 1998. My family then moved to Asia, where we lived for 18 years. In 2016 I moved to Vancouver for university (UBC class of 2021, B.Sc. Environmental Science).  </p>
            <p>Art has always been my hobby. Lately, I've started getting into pixel art. Follow my art instagram <a className="igLink" target="_blank" href="https://instagram.com/mezanote.png" rel="noreferrer">here!</a>    </p></span>
            
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