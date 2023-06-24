import React from "react";
// import StyledHeader from "./components/styled/Header.style";
import { GlobalStyles } from "./components/styled/GlobalStyles.style";
import Header from "./components/new/Header";
import Projects from "./components/new/Projects";
import Tools from "./components/new/Tools";
import Contact from "./components/new/Contact";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Projects />
      <Tools />
      <Contact />
    
    </div>
  );
}

export default App;
