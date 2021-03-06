import styled from "styled-components";
import Projects from "../Projects";

const StyledProjects = styled(Projects)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  color:  #ffffff98;
  width: 100%;
  background: black;

  
  h2 {
    margin: 50px 0 30px 0;
    font-size: 35px;
    font-family: 'Share Tech Mono', monospace;
    font-weight: 700;
    color: white;
  }

  h4 {
    font-size: 30px;
    font-weight: 300;
  }

  p {
    font-size: 24px;
    opacity: 0.9;
    margin-bottom: 60px;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: show;
    width: 80%;
    max-width: 500px;
    margin-bottom: 40px;
  }

  a {
    padding: 5px 15px 20px 15px;
    max-width: 50%;
  }


    img {
      border-radius: 10px;
      box-shadow: 5px 10px 10px #3046B9;
      max-width: 100%;

      &:hover {
        transform: translateY(5px);
        cursor: pointer;
        box-shadow: 5px 5px 5px #3046B9;
      }
    }
    
  @media screen and (max-width: 750px) {
    width: 100%;

   .projects {
     flex-direction: column;
     justify-content: center;
     align-items: center;
     max-width: 60vw;
  
     & img {
       margin-bottom: 25px;
     }
   }

    a {
      max-width: 80%;
    }

  }

   @media screen and (max-width: 430px) {

    .projects {
       max-width: 80vw;
    }
   }


`;

export default StyledProjects;