import { createGlobalStyle } from 'styled-components';
import bgStars from "../../images/hero-6.png";
import '@fontsource-variable/grenze-gotisch';
import '@fontsource/pt-mono';
// Supports weights 200-900
import '@fontsource-variable/mulish';



export const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Grenze Gotisch Variable', sans-serif;
    overflow-x: hidden;
    /* color:  #56D3B3; */
    /* color: #45C0A0; */
  }

    body {
    background-image: url(${bgStars});
    background: rbga(0,0,0,0.7);
    background-attachment: fixed;
    background-size: cover;
    color: #45C0A0; 
   
    }


 h1, h2, h3, h4, h5 {
   font-family: 'Grenze Gotisch Variable', sans-serif;
    margin: 25px 0 25px 0;
     /* padding: 40px 50px 40px 50px; */
   
  }

  h1 {
    padding-left: 50px;
    padding-top: 40px;
  }

  p, a, li {
      font-family: 'Mulish Variable', sans-serif;
      color: #E8AEFF;
   
    
  }

  .aboutText {
    font-size: 22px;
    width: 2/3;
    padding-left: 40px;
  }

  .tagline {
    margin-bottom:100px;
     padding-left: 50px;
     letter-spacing: 2px;
  }

  img.photo {
    border-radius: 500px;
    width: 220px;
    filter: grayscale(100%);
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

  .about-me {
    background: rgba(0,0,0, 0.7);
    padding: 20px 50px 20px 50px;
  }

  p.tagline {
    color: #E8AEFF;
    font-size: 25px;
  }

  .projects {
    border-style: solid;
    border-width: 2px;
    width: fit-content;
    padding: 14px;
    border-radius: 10px;
    font-weight: 600;
    border-color: #E8AEFF;
    background: rgba(232,174, 255, 0.1); 
    
    
    :hover {
      transform: translateY(4px);
      cursor: pointer;
    }

    a {
      font-size: 24px;
      text-decoration: none;
    }
  }

  .contact-section {
    display: flex;
    justify-items: start;
    align-items: baseline;
    margin-top: 60px;
    padding-left: 50px;
    
    h2 {
      color: black;
    }
   


    .contactIcons {
        margin-left: 40px;
        font-size: 40px;

        img {
          margin-left: 22px;
        }
         
      a {
        text-decoration: none;

        .contactIcon {
          color: black;

             :hover {
          color: #45C0A0;
        }
        }
      }
    
    }
  }

  .projects-container {
    padding: 10px 0px 10px 50px;

  }

  .tools-section {
    margin-top: 60px;
    margin-bottom: 20px;
    background: rgba(0,0,0,0.7);
    padding-left: 50px;
    padding-bottom: 40px;

  h4 {
      font-size: 24px;
       font-family: 'Mulish Variable', sans-serif;
      font-weight: 700;
    }
    p {
      font-size: 20px;
    }
  }

  a {
    color: #E8AEFF;
  }

  h1 {
    font-size: 80px;
    letter-spacing: 2px;
  }

  li {
      margin-bottom: 14px;
      line-height:28px;
      color: #E8AEFF;
  }

  .App {
    display: flex;
    flex-direction: column;
  }

  @media screen and (width < 700px) {

    h1 {
      font-size: 60px;
      line-height: 60px;
    }

    .tagline {
      margin-top: 14px;
      line-height: 30px;
      width: 70%;
    }

    .projects {
      width: 80%;
    }

    .tools-section {
      padding: 0;
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 40px;

      p {
        line-height: 2;
      }

      h4.software {
        margin-top: 40px;
      }
    }

    .contact-section {
      padding: 0;
      padding-left:18px;
      padding-right: 18px;
      margin-top: 10px;

      .subheading {
        width: 50%;
        margin-bottom: 15px;
        margin-top: 0px;
        letter-spacing: 3px;
      }


    .contactIcons {
        margin-left: 0;
        font-size: 40px;

    }
  }

    .about-me {
      padding: 0;
      padding-bottom: 32px;
     
      .subheading {
        text-align: center;
      }
      
      /* .aboutText {
    padding-left: 0px;
    margin-left: 0;
    width: 100%;
    background: white;
  } */

      .about-flex {
        flex-direction: column;
        width: 100%;
      }

      li {
        margin-bottom: 32px;
        width: 90%;
         /* padding-left: 50px; */
         /* padding-left: 10px;
         padding-right: 10px; */
      }

      .frame {
        margin-bottom: 30px;
        
        text-align: center;
    
      }
    }
  }

 

`;