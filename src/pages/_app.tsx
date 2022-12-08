import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';

import 'globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>{'Aril\'s Portfolio'}</title>
                <meta name='description' content={'Aril\'s Portfolio'} />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
};

export default App;
