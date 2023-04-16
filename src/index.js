import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <head>
        {/* <meta
            property="og:title"
            content={'UnCrypt – Navigate the Crypto Market'}
            key="ogtitle"
          />
          <meta property="og:type" content="website" key="ogtype" />
          <meta
            property="og:description"
            content={
              'Track crypto wallet holdings, learn about coins, and more.'
            }
            key="ogdesc"
          /> */}
          <meta
            property="og:image"
            content={'https://github.io/solenedel/portfolio/images/OG_image.png'}
            key="ogimage"
          />
          <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="100" />
      </head>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

