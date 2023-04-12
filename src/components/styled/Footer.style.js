import styled from "styled-components";
import Footer from "../Footer";

const StyledFooter = styled(Footer)`

  width: 100%;
  /* align-self: center; */
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  /* align-items: center; */

  div.flexBox {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-left: 5%;
    align-items: center;
    justify-content: start;
  }
  div.contactIcons {
    margin: 30px 0 30px 100px;
   

    a {
      color:white;
      font-size: 60px;
      text-decoration: none;
      margin-right: 50px;

      &:hover {
        color: #ffbf80;
      }
    }
  }

  h2 {
    font-family: 'Share Tech Mono', monospace;
    font-size: 35px;
    margin-bottom: 40px;
    color: white;
  }

  img.contactTitle {
    width: 300px; 

  }
  .contact {
    display: flex;
    align-items: baseline;
  }

  i {
      font-size: 55px;
      margin: 0 30px 20px 30px;
    }

    a, a:visited {
      color: black;
      transition: color 0.5s;

      &:hover {
        color: white;
        transition: color 0.5s;
      }
    }

    .email {
      margin-bottom: 30px;

      & p {
        font-size: 30px;
      }
    }

    .credits {
      height: 20px;
      color: white;
      opacity: 0.6;

      a, a:hover, a:visited {
        color: white;
        opacity: 0.75;
        text-decoration: none;
      }
    }

    @media screen and (max-width: 750px) {
      /* .email p {
        font-size: 25px;
      } */

      div.flexBox {
          flex-direction: column;
          width: 100%;
        
        padding-left: 0;
          align-items: center;
          /* justify-content: center; */


          div.contactIcons {
            display: flex;
            width: 80vw;
            justify-content: space-around;
            align-items: center;
            
          }
          div.contactIcons a {
            font-size: 40px;
             margin: 20px 0 30px 0;
             width: 100vw;
             
             /* background: black; */

          }
      }
    
    }

    @media screen and (max-width: 350px) {

      .email p {
        font-size: 18px;
      }
    }
`;

export default StyledFooter;