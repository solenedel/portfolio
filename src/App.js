import React from "react";
import StyledHeader from "./components/styled/Header.style";
import { GlobalStyles } from "./components/styled/GlobalStyles.style";
import StyledProjects from "./components/styled/Projects.style";
import StyledFooter from "./components/styled/Footer.style";
import StyledTools from "./components/styled/Tools.style";

function App() {
  return (
    <div className="App">
      
      <GlobalStyles />
    
        <StyledHeader />
      
      <StyledProjects />
        <div id="blackBg">
      <StyledTools />
      </div>
      
      <StyledFooter />
    </div>
  );
}

export default App;
