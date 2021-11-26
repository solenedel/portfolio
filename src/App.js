import React from "react";
import StyledHeader from "./components/styled/Header.style";
import { GlobalStyles } from "./components/styled/GlobalStyles.style";
import StyledProjects from "./components/styled/Projects.style";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <StyledHeader />
      <StyledProjects />
    </div>
  );
}

export default App;
