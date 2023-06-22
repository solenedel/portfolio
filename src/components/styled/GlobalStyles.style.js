import { createGlobalStyle } from 'styled-components';
import bgStars from "../../images/new_hero.png";
import '@fontsource-variable/grenze-gotisch';
import '@fontsource/pt-mono';


export const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Grenze Gotisch Variable', sans-serif;
    overflow-x: hidden;
    color:  #d9ebfb;
  }

    body {
    background-image: url(${bgStars});
    background-attachment: fixed;
    background-size: cover;
    padding: 40px 50px 40px 50px;
    }


 h1, h2, h3, h4, h5 {
   font-family: 'Grenze Gotisch Variable', sans-serif;
    margin: 25px 0 25px 0;
   
  }

  p, a, li {
     font-family: 'PT Mono', sans-serif;
      color: #ff9999;
      margin-bottom: 8px;
  }

  .aboutText {
    font-size: 22px;
    padding: 0 60px 0  60px;
  }

  .tagline {
    margin-bottom:100px;
  }

  img.photo {
    border-radius: 500px;
    width: 300px;
    filter: grayscale(50%);
  }

  .subheading {
    font-size: 50px;
    letter-spacing: 3px;
     opacity:90%;
  }

  .about-flex {
    display: flex;
    justify-items: between;
  }

  p.tagline {
    color: #ff9999;
    font-size: 25px;
  }

  a {
    color: #ff9999;
  }

  h1 {
    font-size: 80px;
    letter-spacing: 2px;
  }

  .App {
    display: flex;
    flex-direction: column;
  }

 

`;