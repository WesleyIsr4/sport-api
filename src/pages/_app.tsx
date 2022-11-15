import { GlobalStyle } from '@/styles/global';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import { SessionProvider } from 'next-auth/react';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Fragment>
      <SessionProvider session={session}>
        <Head>
          <title>Sports</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </SessionProvider>
    </Fragment>
  );
}
