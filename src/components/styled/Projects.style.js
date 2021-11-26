import styled from "styled-components";
import Projects from "../Projects";

const StyledProjects = styled(Projects)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  color: black;


  /* height: 400px;   */
  border-top: solid black 3px;
  width: 85%;
  
  h2 {
    margin: 50px 0 30px 0;
    font-size: 35px;
    font-family: 'PT Mono', monospace;
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
    /* border: solid red 3px; */
    overflow-y: show;
    width: 100%;
  }

  .project img {
    box-shadow: 5px 10px 10px #3046B9;
  }

  a {
    padding: 5px 15px 20px 15px;
  }
   
  #one {
      margin-bottom: 40px;
    }

    img {
      width: 60vw;
      border-radius: 10px;

      &:hover {
        transform: translateY(5px);
        cursor: pointer;
      }
    }
    
  @media screen and (max-width: 750px) {

   .projects {
     margin-bottom: 100px;
   }
  }
`;

export default StyledProjects;