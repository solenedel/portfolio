import styled from "styled-components";
import Tools from "../Tools";

const StyledTools = styled(Tools)`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
   /* align-self: center;  */
  width: 100%;
  /* background: black; */
  padding-left: 5%;
  margin-top: 5%;

    img.projectsTitle {
    margin: 30px 0 30px 0;
    width:200px;

  }

  div.myTools {
    color: white;
    font-size: 24px;
    width: 80%;
    margin-top: 10px;
    /* margin-left: 1%; */
   line-height: 3rem;
   margin-bottom: 40px;
  }

  a.titleBox {
    /* background: black; */
    
  }
  
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
    color: white;
    line-height: 3rem;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    overflow-y: show;
    width: 80%;
    max-width: 800px;
    margin-bottom: 40px;
  }

  a {
    padding: 5px 15px 20px 15px;
    max-width: 50%;
  }


    img.project {
      border-radius: 10px;
      box-shadow: 5px 5px 5px rgba(0,0,0,0.6);
      max-width: 100%;

      &:hover {
        transform: translateY(5px);
        cursor: pointer;
        /* box-shadow: 5px 5px 5px white; */
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
     div.myTools, p { 
      font-size: 22px;
     }
   }


`;
export default StyledTools;