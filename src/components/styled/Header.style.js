import styled from 'styled-components'
import Header from '../Header'

const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2130FF;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2345abff'/%3E%3Cstop offset='1' stop-color='%2345abff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23aa2aff'/%3E%3Cstop offset='1' stop-color='%23aa2aff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23b4a9ff'/%3E%3Cstop offset='1' stop-color='%23b4a9ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%232130FF'/%3E%3Cstop offset='1' stop-color='%232130FF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%235CEDFF'/%3E%3Cstop offset='1' stop-color='%235CEDFF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23EE23FF'/%3E%3Cstop offset='1' stop-color='%23EE23FF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  height: 500px;

  h1 {
    height: fit-content;
    margin-top: 80px;
    padding: 0;
    display: inline-block;
    font-family: 'Josefin Slab', serif;
    font-weight: 700;
    font-size: 80px;
    font-family: 'PT Mono', monospace;
    /* font-family: 'Ubuntu Mono', monospace; */
  }

  @media screen and (max-width: 750px) {

    h1 {
       margin-left: 30px;
    }
  }
`;

export default StyledHeader;