import React from "react";


const Header = ({className}) => {
  return ( 
    <header className={className}>
        <h1>Solène Delumeau</h1>
        <h3>full stack developer.</h3>
        <h3>France <i class="fas fa-plane" /> Japan <i class="fas fa-plane" /> China <i class="fas fa-plane" /> Singapore <i class="fas fa-plane" /> Canada</h3>
        <h3><i class="fas fa-map-marker-alt" /> Currently: Greater Vancouver, BC</h3>
    </header>
   );
}
 
export default Header;