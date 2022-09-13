import { CacheProvider, EmotionCache } from '@emotion/react';
import { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement, ReactNode } from 'react';

import createEmotionCache from '@/createEmotionCache';
import DefaultLayout from '@/layout/DefaultLayout';

import 'animate.css';

import Provider from '@/providers/Provider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

const MyApp = (props: AppPropsWithLayout) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Use the layout defined at the page level if available, else use default layout
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider>{getLayout(<Component {...pageProps} />)}</Provider>
    </CacheProvider>
  );
};

export default appWithTranslation(MyApp);
