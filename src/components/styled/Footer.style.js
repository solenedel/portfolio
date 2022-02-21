import styled from "styled-components";
import Footer from "../Footer";

const StyledFooter = styled(Footer)`

  width: 85%;
  align-self: center;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: 'Share Tech Mono', monospace;
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
        color: #B1FFE0;
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
      .email p {
        font-size: 25px;
      }
    }

    @media screen and (max-width: 350px) {

      .email p {
        font-size: 18px;
      }
    }
`;

export default StyledFooter;