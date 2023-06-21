import { createGlobalStyle } from 'styled-components';
import '@fontsource/mononoki';
// Supports weights 100-900
import bgStars from "../../images/stars2.png";
import bgImg from "../../images/bg-img.png";
// Supports weights 100-900
import '@fontsource-variable/grenze-gotisch';


export const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Mononoki', sans-serif;
    /* max-width: 100%; */
    overflow-x: hidden;
  }

    body {
   
background-image: url(${bgStars});
background-attachment: fixed;
background-size: cover;
      
    }


 h1, h2, h3, h4, h5 {
    
   font-family: 'Grenze Gotisch Variable', sans-serif;
    margin: 25px 0 25px 0;
  }

  p {
   font-family: 'Mononoki', sans-serif;
  }

  .App {
    display: flex;
    flex-direction: column;
  }

  /* #blackBg {
    background: rgba(0,0,0,0.6);
  } */

`;