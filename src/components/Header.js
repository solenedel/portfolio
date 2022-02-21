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
        <h3><span className="emoji">👾</span> full stack developer</h3>
        <h3><span className="pin-icon">📍</span> Greater Vancouver, BC</h3>
        <h3>France <span className="plane">✈️</span> Japan <span className="plane">✈️</span> China <span className="plane">✈️</span> Singapore <span className="plane">✈️</span> Canada</h3>
      </span>
        

        <div className="skills">
          <h2>About me</h2>
          <p>I'm a full-stack developer with a keen sense of visual design. I started coding during my last term of university. In October 2021, I graduated from the full stack web development bootcamp at Lighthouse Labs.</p>
          <p>I come from France, and spent 18 years in Asia before moving to Canada. Coding is my newest hobby, but in my spare time I also like drawing and running.</p>
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