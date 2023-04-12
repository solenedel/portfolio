import React from "react";


const Header = ({className}) => {
  return ( 
    <header className={className}>
      <span className="header">
        <div className="title">
          <img id="firstname" src="https://see.fontimg.com/api/renderfont4/wvM6/eyJyIjoiZnMiLCJoIjoxNDgsInciOjIwMDAsImZzIjo3NCwiZmdjIjoiI0ZFRkFGQSIsImJnYyI6IiNCMDkzOTMiLCJ0IjoxfQ/U29sZW5lIA/derrida.png" alt="firstname" />
          <img  id="lastname" src="https://see.fontimg.com/api/renderfont4/wvM6/eyJyIjoiZnMiLCJoIjoxNDgsInciOjIwMDAsImZzIjo3NCwiZmdjIjoiI0ZFRkFGQSIsImJnYyI6IiNCMDkzOTMiLCJ0IjoxfQ/RGVsdW1lYXU/derrida.png" alt="lastname" />
        </div>

        {/* <img id="name" src="https://see.fontimg.com/api/renderfont4/wvM6/eyJyIjoiZnMiLCJoIjoxNDgsInciOjIwMDAsImZzIjo3NCwiZmdjIjoiI0ZFRkFGQSIsImJnYyI6IiNCMDkzOTMiLCJ0IjoxfQ/U29sZW5lIERlbHVtZWF1/derrida.png" alt="Transparent fonts"/> */}
        <h3><span className="emoji">👾</span> Software developer</h3>
        <h3><span className="pin-icon">📍</span> Vancouver</h3>
        <h3>France <span className="plane">✈️</span> Japan <span className="plane">✈️</span> China <span className="plane">✈️</span> Singapore <span className="plane">✈️</span> Canada</h3>
      </span>
        

        <div className="skills">
          <h2>About me</h2>
          <p>Developer with a sharp eye for visuals. I have one year of professional experience in full-stack web development. I started coding in 2021, during my last term of university.  </p>
          <p>I was born in Paris in 1998. My family then moved to Asia, where we lived for 18 years. In 2016 I moved to Vancouver, Canada for my university studies.  </p>
        </div>

        <div className="tools">
          <i className="fab fa-react" /> 
          <i className="fab fa-js-square" />
          <i className="fab fa-node" /> 
          <i className="fab fa-html5" />  
          <i className="fab fa-css3-alt" />
          <img src="https://img.icons8.com/ios-filled/150/000000/postgreesql.png" alt="psql"/>
          <i className="fab fa-git-square" />
        </div>
    </header>
   );
}
 
export default Header;