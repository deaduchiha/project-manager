import { Html, Head, Main, NextScript } from "next/document";
import { GoogleFonts } from "next-google-fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
