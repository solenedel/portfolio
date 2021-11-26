import styled from "styled-components";
import Projects from "../Projects";

const StyledProjects = styled(Projects)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  color: white;


  height: 500px;  
  border-top: solid white 3px;
  width: 85%;
  
  h2 {
    margin: 50px 0 50px 0;
    font-size: 35px;
    opacity: 0.9;
    font-family: 'PT Mono', monospace;
    font-weight: 700;
  }

  h4 {
    font-size: 30px;
    font-weight: 300;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   

    & .project {
      /* border: solid white 3px; */
      border-radius: 10px;
      margin: 0 50px 100px 50px;
      padding: 0 20px 0 20px;
    }

    img {
      width: 200px;
      border-radius: 10px;
    }
    
  }
`;

export default StyledProjects;