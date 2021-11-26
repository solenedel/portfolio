import styled from "styled-components";
import Footer from "../Footer";

const StyledFooter = styled(Footer)`

  /* height: 500px; */
  width: 85%;
  align-self: center;
  padding-top: 30px;
  border-top: solid black 3px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: 'PT Mono', monospace;
    font-size: 35px;
    margin-bottom: 50px;
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
        color: #C9F799;
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
      height: 50px;
      padding: 18px 0 0 20px;
      background: rgba(0,0,0,0.7);
      width: 100vw;
      color: white;

      a, a:hover, a:visited {
        color: white;
        opacity: 0.75;
        text-decoration: none;
      }
    }
`;

export default StyledFooter;