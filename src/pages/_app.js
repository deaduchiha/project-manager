import Providers from "./_providers";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </SessionProvider>
  );
}
