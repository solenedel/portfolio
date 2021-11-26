import styled from "styled-components";
import Footer from "../Footer";

const StyledFooter = styled(Footer)`

  /* height: 500px; */
  width: 85%;
  align-self: center;
  padding-top: 30px;
  margin-bottom: 200px;
  border-top: solid black 3px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: 'PT Mono', monospace;
    font-size: 35px;
  }

  .contact {
    display: flex;

    & i {
      font-size: 50px;
      margin: 0 20px 0 20px;
    }
  }

`;

export default StyledFooter;