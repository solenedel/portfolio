import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu Mono', monospace;
    overflow-x: hidden;
  }

    body {
      background-color: #35B6FF;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2335B6FF'/%3E%3Cstop offset='1' stop-color='%236E48FF'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23C7A1FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23C7A1FF' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23C7A1FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23C7A1FF' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.59'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
      background-attachment: fixed;
      background-size: cover;
    }


  p, h1, h2, h3, h4, h5 {
    font-family: 'Ubuntu Mono', monospace;
    margin: 25px 0 25px 0;
  }

  .App {
    display: flex;
    flex-direction: column;
  }

`;