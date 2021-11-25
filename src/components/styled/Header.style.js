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
    font-size: 30px;
    font-weight: 200;
  }

  @media screen and (max-width: 750px) {

    align-items: flex-start;

    h1, h2, h3 {
      margin-left: 30px;
    }

    h3 {
      font-size: 25px;
    }
  }
`;

export default StyledHeader;