import React from 'react';
import type { AppProps } from 'next/app';

import NavMenu from 'components/NavMenu';

import 'globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <div className='relative'>
            {/* <NavMenu /> */}
            <Component {...pageProps} />
        </div>
    );
};

export default App;
