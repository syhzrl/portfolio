import { push, replace } from 'redux-first-history';

import { store } from 'redux/store';

const navPush = (routeName: string) => {
    store.dispatch(push(routeName));
};

const navReplace = (routeName: string) => {
    store.dispatch(replace(routeName));
};

const navResetToLogin = (): void => navReplace('/login');

const navToHome = (): void => navPush('/');

export default {
    navResetToLogin,

    navToHome,
};
