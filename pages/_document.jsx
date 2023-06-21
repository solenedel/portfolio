import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* og tags */}
        <meta name="og:description" content="Solene's website" />
        <meta property="og:title" content="Solene's website" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta name="og:description" content="Solene's website" />
        <meta
          property="og:url"
          content="https://solenedel.github.io/portfolio"
          key="ogurl"
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image"
          content="https://solenedel.github.io/portfolio/images/OG_image_final.png"
          key="ogimage"
        />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="100" />

        <title>Solène's portfolio</title>

        {/* google fonts  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=PT+Mono&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />

        {/* font awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
