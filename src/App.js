import React from "react";
import StyledHeader from "./components/styled/Header.style";
import { GlobalStyles } from "./components/styled/GlobalStyles.style";
import StyledProjects from "./components/styled/Projects.style";
import StyledFooter from "./components/styled/Footer.style";
import StyledTools from "./components/styled/Tools.style";

function App() {
  return (
    <div className="App">
      <head>
        {/* <meta
            property="og:title"
            content={'UnCrypt – Navigate the Crypto Market'}
            key="ogtitle"
          />
          <meta property="og:type" content="website" key="ogtype" />
          <meta
            property="og:description"
            content={
              'Track crypto wallet holdings, learn about coins, and more.'
            }
            key="ogdesc"
          /> */}
          <meta
            property="og:image"
            content={'https://github.io/solenedel/portfolio/images/OG_image.png'}
            key="ogimage"
          />
          <meta property="og:image:width" content="200" />
          <meta property="og:image:height" content="100" /></head>
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
