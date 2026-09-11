import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name = "title" content = "Nestar Demo" />
        <meta name = "robots"content = "index, follow" /> 
        <link rel="icon" type = "image/png" href="public/img/logo/favicon.svg"/>

        <meta name ="keyword" content = {"nestar,nestar.uz, devex mern, mern nestjs fullstack"} />
        <meta name ="description" content = {
          "Buy and Sell properties with Nestar. | " +
          "Nestar is a real estate platform that allows users to buy and sell properties online. " +
          "It is built using the MERN stack and NestJS."
        }
         />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
