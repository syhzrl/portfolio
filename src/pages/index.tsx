import React, { FunctionComponent, useContext } from 'react';
import Head from 'next/head';
import HomeScreen from 'containers/home';
import ProjectsScreen from 'containers/projects';

const Home: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name='description' content='Portfolio' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <HomeScreen />

            <ProjectsScreen />
        </>
    );
};

export default Home;
