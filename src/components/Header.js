import React from "react";


const Header = ({className}) => {
  return ( 
    <header className={className}>
        <h1>Solène Delumeau</h1>
        <h3>full stack developer.</h3>
        <h3>France <i class="fas fa-plane" /> Japan <i class="fas fa-plane" /> China <i class="fas fa-plane" /> Singapore <i class="fas fa-plane" /> Canada</h3>
        <h3><i class="fas fa-map-marker-alt" /> Currently: Greater Vancouver, BC</h3>

        <div className="skills">
          <p>I'm a junior developer with a strong sense of artistic design. I like to design not only the outside appearance of website, but also the logic on the inside. </p>
          <p>I have a degree in Environmental Science, and recently switched fields into web development. I'm now looking for my first job as a developer.</p>
        </div>
    </header>
    <main>
        
    </main>
   );
}
 
export default Header;