import { Html, Head, Main, NextScript } from "next/document";
import { GoogleFonts } from "next-google-fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" />
      </Head>
      <body style={{ fontFamily: "Tilt Neon" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
