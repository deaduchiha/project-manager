import Providers from "./_providers";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Providers>
  );
}
