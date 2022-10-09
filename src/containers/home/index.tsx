import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from 'components/NavBar';

const HomeScreen: FunctionComponent = () => {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
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
