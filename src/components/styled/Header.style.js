import styled from 'styled-components'
import Header from '../Header'

const StyledHeader = styled(Header)`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span.header {
    background: black;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
  }

  div.title {
    margin: 70px 0 30px 0;
    width: 90vw;
    display: flex;
    flex-direction: row;
    
    & img#firstname {
      margin-right: 7vw;
    }
  }
 
  h1 {
    margin: 80px 0 60px 0;
    height: fit-content;
    padding: 0;
    display: inline-block;
    font-weight: 700;
    font-size: 70px;
    font-family: 'Share Tech Mono', monospace;
    color: white;
  }

  h2 {
    position: center;
    text-align: center;
    font-family: 'Share Tech Mono', monospace;
    color: white;
  }

  h3 {
    font-size: 27px;
    font-weight: 200;
    color: white;
    opacity: 0.8;
  }

  .skills, .tools {
    margin: 50px 0 0 0;
    width: 85%;
    font-size: 24px;
    line-height: 40px;
    align-self: center;
  }

  span.plane {
    transform: rotate(45deg);
  }

  span.pin-icon, span.emoji {
    font-size: 40px;
  }

  .tools {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 50px;

    & i, img {
      font-size: 50px;
      margin: 10px 15px 10px 15px;
    }

    & img {
      height: 50px;
      width: auto;
    }

  }
 

  @media screen and (max-width: 750px) {

 div.title {
    flex-direction: column;
  }
     
img#firstname {
  width: 60vw;
  margin-bottom: 30px;
}
 
img#lastname {
  width: 80vw;
}

    span.header {
       align-items: flex-start;
    }
    align-items: flex-start;

    h1 {
      font-size: 60px;
    }

    h1, h2, h3 {
      margin-left: 30px;
    }

    div.title img {
    margin-left: 30px;
    width: 80vw;
  }


    h3 {
      font-size: 22px;
      line-height: 50px;
      width: 70vw;
    }

    p {
      font-size: 20px;
    }

    .tools {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      /* grid-gap: 15px; */
    }
    .tools i {
      font-size: 40px;
    }

    .tools img {
      height: 40px;
    }
  }

   @media screen and (max-width: 415px) {

    span.pin-icon, span.emoji {
      font-size: 30px;
    }

    h3 {
      width: 90vw;
      margin-left: 5vw;
    }

     div.title img {
      margin-left: 5vw;
      width: 100vw;
    }

   }
`;

export default StyledHeader;