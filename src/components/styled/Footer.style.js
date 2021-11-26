import styled from "styled-components";
import Footer from "../Footer";

const StyledFooter = styled(Footer)`

  width: 85%;
  align-self: center;
  padding-top: 20px;
  border-top: solid black 3px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: 'PT Mono', monospace;
    font-size: 35px;
    margin-bottom: 40px;
    color: white;
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
        color: #FF90FD;
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
      /* padding-left: 40px; */
      /* padding: 18px 0 0 20px; */
      /* background: rgba(0,0,0,0.7); */
      width: 100vw;
      color: white;

      a, a:hover, a:visited {
        color: white;
        opacity: 0.75;
        text-decoration: none;
      }
    }

    @media screen and (max-width: 750px) {
      margin-top: 100px;

      .email p {
        font-size: 25px;
      }
    }

    @media screen and (max-width: 450px) {

      .email p {
        font-size: 18px;
      }
    }
`;

export default StyledFooter;