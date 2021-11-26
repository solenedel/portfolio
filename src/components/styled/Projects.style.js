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
    font-family: 'PT Mono', monospace;
    font-weight: 700;
  }

  h4 {
    font-size: 30px;
    font-weight: 300;
  }

  p {
    font-size: 22px;
    opacity: 0.9;
    margin-bottom: 60px;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   

    & .project {
      border-radius: 10px;
      margin: 0 50px 100px 50px;
      padding: 0 20px 0 20px;
    }

    & .two {
        & img {
          height: 62px;
        }
      }

    img {
      width: 200px;
      border-radius: 10px;
      box-shadow: 5px 10px 10px #3046B9;

      &:hover {
        transform: translateY(5px);
        cursor: pointer;
      }
    }
    
  @media screen and (max-width: 750px) {

    .project {
      margin-bottom: 60px;
    }

  }
`;

export default StyledProjects;