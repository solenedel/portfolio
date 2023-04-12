import styled from 'styled-components'
import Header from '../Header'

const StyledHeader = styled(Header)`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img.titleImg {
    margin:10% 0 10% 0;
    width:700px;
    opacity: 0.9;
  }
    img.aboutMe {
    margin: 30px 0 0 0;
    width:200px;
  }

  span.header {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
  }

  p {
    color: white;
    opacity: 0.8;
    font-size: 24px;
   
  }

  div.title {
    margin: 70px 0 30px 10%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    
    & img.firstName {
      margin-right: 7vw;
      max-width: 300px;
      margin-bottom: 50px;
    }
    & img.lastName {
      max-width: 442px;
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
   margin-bottom:80px;
    background: rgba(0,0,0,0.6);
    padding: 10px 0 10px 40px;
   width: 100vw;
  }

  .skills, .tools {
    margin: 50px 0 0 0;
    width: 100%;
    padding: 5% 5% 5% 5%;
    font-size: 24px;
    line-height: 40px;
    align-self: center;
    background: rgba(0,0,0,0.6);
  }

  a.igLink {
    color: white;
  }

 img.photo {
border-radius: 10px;
max-width: 300px;
min-width: 300px;
margin-bottom: 40px;
margin-top: 40px;
  }

  span.flexBox {
    display: flex;
    width: 100%;
  }
    span.flexText {
    width: 80%;
    padding-left: 10%;
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

    span.flexBox {
      flex-direction: column-reverse;
    }

     span.flexText {
    width: 100%;
    padding-left: 0%;
    padding-top: 0%;
  }

 img.photo{
  position: center;
 }


 div.title {
  display: flex;
  flex-direction: column;
  width: 100vw;
  }
     
img.firstName {
  max-width: 40vw;
  margin-bottom: 30px;
}
 
/* img.lastName {
  max-width: 20vw;
} */

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

    div.title {
    margin: 70px 0 30px 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    
    & img.firstName {
      margin-right: 7vw;
      max-width: 200px;
    }
    & img.lastName {
      max-width: 302px;
    }
  }

   }
`;

export default StyledHeader;