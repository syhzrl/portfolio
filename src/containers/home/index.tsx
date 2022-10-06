import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from 'components/NavBar';
import Colours from 'assets/themes/Colours';

const HomeScreen: FunctionComponent = () => {
    return (
        <div
            style={{
                backgroundColor: Colours.backgroundPrimary,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
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
                    height: '100vh',
                    width: '90%',
                }}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default HomeScreen;
