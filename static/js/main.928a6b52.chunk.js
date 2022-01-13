(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(n,e,t){"use strict";t.r(e);var a,i,o,s,r=t(1),c=t.n(r),l=t(8),p=t.n(l),d=t(2),x=t(3),m=t(0),h=function(n){var e=n.className;return Object(m.jsxs)("header",{className:e,children:[Object(m.jsx)("h1",{children:"Sol\xe8ne Delumeau"}),Object(m.jsx)("h3",{children:"full stack developer."}),Object(m.jsxs)("h3",{children:["France ",Object(m.jsx)("i",{className:"fas fa-plane"})," Japan ",Object(m.jsx)("i",{className:"fas fa-plane"})," China ",Object(m.jsx)("i",{className:"fas fa-plane"})," Singapore ",Object(m.jsx)("i",{className:"fas fa-plane"})," Canada"]}),Object(m.jsxs)("h3",{children:[Object(m.jsx)("i",{className:"fas fa-map-marker-alt"})," Currently: Greater Vancouver, BC"]}),Object(m.jsxs)("div",{className:"skills",children:[Object(m.jsx)("h2",{children:"About me"}),Object(m.jsx)("p",{children:"I'm a junior developer with a keen sense of visual design. I tend towards the front end, but am highly motivated in developing the full stack."}),Object(m.jsx)("p",{children:"I majored in Environmental Science at the University of British Columbia, and discovered web development during my last term. Shortly after graduating, I decided to focus on learning web development."}),Object(m.jsx)("p",{children:"In October 2021, I graduated from the full stack web development bootcamp at Lighthouse Labs. Now, I'm working on my own projects and looking for work as a developer."}),Object(m.jsxs)("p",{children:["My favourite tools: ",Object(m.jsx)("strong",{children:" ReactJS, Node.JS, JavaScript, HTML, CSS, Postgres, SQL and Git."})]})]}),Object(m.jsxs)("div",{className:"tools",children:[Object(m.jsx)("i",{className:"fab fa-react"}),Object(m.jsx)("i",{className:"fab fa-js-square"}),Object(m.jsx)("i",{className:"fab fa-node"}),Object(m.jsx)("i",{className:"fab fa-html5"}),Object(m.jsx)("i",{className:"fab fa-css3-alt"}),Object(m.jsx)("img",{src:"https://img.icons8.com/ios-filled/150/000000/postgreesql.png",alt:"psql"}),Object(m.jsx)("i",{className:"fab fa-git-square"})]})]})},f=Object(x.b)(h)(a||(a=Object(d.a)(["\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  h1 {\n    margin: 80px 0 60px 0;\n    height: fit-content;\n    padding: 0;\n    display: inline-block;\n    font-weight: 700;\n    font-size: 80px;\n    font-family: 'PT Mono', monospace;\n  }\n\n  h2 {\n    position: center;\n    text-align: center;\n    font-family: 'PT Mono', monospace;\n    color: white;\n  }\n\n  h3 {\n    font-size: 27px;\n    font-weight: 200;\n    color: white;\n    opacity: 0.8;\n  }\n\n  .skills, .tools {\n    margin: 50px 0 0 0;\n    width: 85%;\n    font-size: 24px;\n    line-height: 40px;\n    align-self: center;\n  }\n\n  .skills {\n     border-top: solid black 3px;\n  }\n\n  .tools {\n    margin-top: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    margin-bottom: 50px;\n\n    & i, img {\n      font-size: 50px;\n      margin: 10px 15px 10px 15px;\n    }\n\n    & img {\n      height: 50px;\n      width: auto;\n    }\n\n  }\n \n\n  @media screen and (max-width: 750px) {\n\n    align-items: flex-start;\n\n    h1 {\n      font-size: 55px;\n    }\n\n    h1, h2, h3 {\n      margin-left: 30px;\n    }\n\n\n    h3 {\n      font-size: 22px;\n      line-height: 30px;\n    }\n\n    p {\n      font-size: 20px;\n    }\n\n    .tools i {\n      font-size: 40px;\n    }\n\n    .tools img {\n      height: 40px;\n    }\n  }\n"]))),j=Object(x.a)(i||(i=Object(d.a)(["\n    * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Ubuntu Mono', monospace;\n    /* max-width: 100%; */\n    overflow-x: hidden;\n  }\n\n    body {\n      background-color: #35B6FF;\n      background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2335B6FF'/%3E%3Cstop offset='1' stop-color='%236E48FF'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23C7A1FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23C7A1FF' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23C7A1FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23C7A1FF' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.59'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E\");\n      background-attachment: fixed;\n      background-size: cover;\n    }\n\n\n  p, h1, h2, h3, h4, h5 {\n    font-family: 'Ubuntu Mono', monospace;\n    margin: 25px 0 25px 0;\n  }\n\n  .App {\n    display: flex;\n    flex-direction: column;\n  }\n\n"]))),b=t.p+"static/media/pintura.892b8eae.png",g=t.p+"static/media/greengrocer.1eaf3fa4.png",u=t.p+"static/media/todaylist.90172086.png",O=function(n){var e=n.className;return Object(m.jsxs)("div",{className:e,children:[Object(m.jsx)("h2",{children:"My projects"}),Object(m.jsx)("p",{children:"Click to view the deployed project."}),Object(m.jsxs)("div",{className:"projects",children:[Object(m.jsx)("a",{href:"https://pintura-mintbean.herokuapp.com/",target:"_blank",rel:"noreferrer",className:"project",id:"one",children:Object(m.jsx)("img",{src:b,alt:"Pintura"})}),Object(m.jsx)("a",{href:"https://solenedel.github.io/TodayList/",target:"_blank",rel:"noreferrer",className:"project",children:Object(m.jsx)("img",{src:u,alt:"TodayList"})}),Object(m.jsx)("a",{href:"https://greengrocer-app.herokuapp.com/",target:"_blank",rel:"noreferrer",className:"project",children:Object(m.jsx)("img",{src:g,alt:"GreenGrocer"})})]})]})},w=Object(x.b)(O)(o||(o=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-self: center;\n  color: black;\n  border-top: solid black 3px;\n  width: 85%;\n  \n  h2 {\n    margin: 50px 0 30px 0;\n    font-size: 35px;\n    font-family: 'PT Mono', monospace;\n    font-weight: 700;\n    color: white;\n  }\n\n  h4 {\n    font-size: 30px;\n    font-weight: 300;\n  }\n\n  p {\n    font-size: 24px;\n    opacity: 0.9;\n    margin-bottom: 60px;\n  }\n\n  .projects {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    overflow-y: show;\n    width: 80%;\n    max-width: 500px;\n    margin-bottom: 80px;\n  }\n\n  a {\n    padding: 5px 15px 20px 15px;\n    max-width: 50%;\n  }\n/*    \n  #one {\n      margin-bottom: 40px;\n    } */\n\n    img {\n      border-radius: 10px;\n      box-shadow: 5px 10px 10px #3046B9;\n      max-width: 100%;\n\n      &:hover {\n        transform: translateY(5px);\n        cursor: pointer;\n        box-shadow: 5px 5px 5px #3046B9;\n      }\n    }\n    \n  @media screen and (max-width: 750px) {\n\n   .projects {\n     margin-bottom: 100px;\n     flex-direction: column;\n     justify-content: center;\n     align-items: center;\n     max-width: 100%; \n   }\n\n    a {\n      max-width: 80%;\n    }\n\n  }\n\n"]))),y=function(n){var e=n.className;return Object(m.jsxs)("footer",{className:e,children:[Object(m.jsx)("h2",{children:"Contact me"}),Object(m.jsxs)("div",{className:"contact",children:[Object(m.jsx)("div",{className:"contact-method",children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/solene-delumeau",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("i",{className:"fab fa-linkedin"})})}),Object(m.jsx)("div",{className:"contact-method",children:Object(m.jsx)("a",{href:"https://github.com/solenedel",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("i",{className:"fab fa-github"})})})]}),Object(m.jsx)("div",{className:"email",children:Object(m.jsx)("p",{children:"solenedelumeau@gmail.com"})}),Object(m.jsx)("div",{className:"credits",children:Object(m.jsx)("a",{href:"https://icons8.com/icon/36440/postgresql",children:"PostgreSQL icon by Icons8."})})]})},v=Object(x.b)(y)(s||(s=Object(d.a)(["\n\n  width: 85%;\n  align-self: center;\n  /* padding-top: 20px; */\n  border-top: solid black 3px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h2 {\n    font-family: 'PT Mono', monospace;\n    font-size: 35px;\n    margin-bottom: 40px;\n    color: white;\n  }\n\n  .contact {\n    display: flex;\n    align-items: baseline;\n  }\n\n  i {\n      font-size: 55px;\n      margin: 0 30px 20px 30px;\n    }\n\n    a, a:visited {\n      color: black;\n      transition: color 0.5s;\n\n      &:hover {\n        color: #B1FFE0;\n        transition: color 0.5s;\n      }\n    }\n\n    .email {\n      margin-bottom: 30px;\n\n      & p {\n        font-size: 30px;\n      }\n    }\n\n    .credits {\n      height: 20px;\n      color: white;\n      opacity: 0.6;\n\n      a, a:hover, a:visited {\n        color: white;\n        opacity: 0.75;\n        text-decoration: none;\n      }\n    }\n\n    @media screen and (max-width: 750px) {\n      .email p {\n        font-size: 25px;\n      }\n    }\n\n    @media screen and (max-width: 350px) {\n\n      .email p {\n        font-size: 18px;\n      }\n    }\n"])));var k=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j,{}),Object(m.jsx)(f,{}),Object(m.jsx)(w,{}),Object(m.jsx)(v,{})]})};p.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.928a6b52.chunk.js.map