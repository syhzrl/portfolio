import React, { FunctionComponent } from 'react';
import Head from 'next/head';

const Home: FunctionComponent = () => {
    return (
        <Head>
            <title>Portfolio</title>
            <meta name='description' content='Portfolio' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
    );
};

export default Home;
