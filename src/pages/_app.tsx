import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import AboutTabsProvider from 'contexts/AboutTabs';

import Header from 'components/Header';
import Footer from 'components/Footer';

import 'globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>{'Aril\'s Portfolio'}</title>
                <meta name='description' content={'Aril\'s Portfolio'} />
                <link rel='icon' href='/port-icon.ico' />
            </Head>
            <Header />
            <AboutTabsProvider>
                <Component {...pageProps} />
            </AboutTabsProvider>
            <Footer />
        </>
    );
};

export default App;
