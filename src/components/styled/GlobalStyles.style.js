import { createGlobalStyle } from 'styled-components';
import bgStars from "../../images/hero-4.png";
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
    background: rbga(0,0,0,0.7);
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
    
  }

  .aboutText {
    font-size: 22px;
    width: 2/3;
    padding-right: 40px;
  }

  .tagline {
    margin-bottom:100px;
  }

  img.photo {
    border-radius: 500px;
    width: 250px;
    filter: grayscale(50%);
  }

  div.frame {
    min-width: 250px;
  }

  .subheading {
    font-size: 50px;
    letter-spacing: 3px;
     opacity:90%;
     font-weight: 300;
  }

  .about-flex {
    display: flex;
    justify-items: between;
  }

  p.tagline {
    color: #ff9999;
    font-size: 25px;
  }

  .projects {
    border-style: solid;
    border-width: 2px;
    width: fit-content;
    padding: 14px;
    border-radius: 10px;
    border-color: #ff9999;
    
    
    :hover {
      transform: translateY(4px);
      cursor: pointer;
    }

    a {
      font-size: 24px;
      text-decoration: none;
    }
  }

  .projects-container {
    padding: 10px 0 10px 0;
  }

  a {
    color: #ff9999;
  }

  h1 {
    font-size: 80px;
    letter-spacing: 2px;
  }

  li {
      margin-bottom: 14px;
      line-height:28px;
      color: #ffb3b3;
  }

  .App {
    display: flex;
    flex-direction: column;
  }

 

`;