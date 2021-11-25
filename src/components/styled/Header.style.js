import styled from 'styled-components'
import Header from '../Header'

const StyledHeader = styled(Header)`




  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 1000px; */

  h1 {
    margin: 80px 0 60px 0;
    height: fit-content;
    padding: 0;
    display: inline-block;
    font-weight: 700;
    font-size: 80px;
    font-family: 'PT Mono', monospace;
    
  }

  h3 {
    font-size: 27px;
    font-weight: 200;
    color: white;
    opacity: 0.8;
  }

  .skills {
    margin: 50px 0 0 0;
    width: 85%;
    border-top: solid black 3px;
    font-size: 24px;
    line-height: 40px;
    /* border: solid red 3px; */
  }

 

  @media screen and (max-width: 750px) {

    align-items: flex-start;

    h1, h2, h3, .skills {
      margin-left: 30px;
    }

    h3 {
      font-size: 25px;
    }
  }
`;

export default StyledHeader;