import React, { FunctionComponent, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import NavBar from 'components/NavBar';
import Colours from 'assets/themes/Colours';
import NavActions from 'lib/NavActions';

const HomeScreen: FunctionComponent = () => {
    const location = useLocation();

    // useEffect(() => {
    //     if (location.pathname === '/') NavActions.navToProfile();
    // }, []);

    useEffect(() => {
        console.log(location);
    }, []);

    return (
        <div
            style={{
                backgroundColor: Colours.backgroundPrimary,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    width: '90%',
                }}
            >
                <NavBar />
            </div>
            <div
                style={{
                    height: '100%',
                    width: '90%',
                }}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default HomeScreen;
