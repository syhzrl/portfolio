import React from 'react';
import type { AppProps } from 'next/app';

import 'globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <Component {...pageProps} />
    );
};

export default App;
