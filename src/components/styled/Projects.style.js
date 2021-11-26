import styled from "styled-components";
import Projects from "../Projects";

const StyledProjects = styled(Projects)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;


  height: 200px;  
  border-top: solid white 3px;
  width: 85%;
  border: solid red 3px;
`;

export default StyledProjects;