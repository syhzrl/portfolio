import { push, replace } from 'redux-first-history';

import { store } from 'redux/store';

const navPush = (routeName: string, state?: any) => {
    store.dispatch(push(routeName, state));
};

const navReplace = (routeName: string) => {
    store.dispatch(replace(routeName));
};

const navToHome = (): void => navPush('/');
const navToProfile = (): void => navPush('/profile');
const navToProjects = (): void => navPush('/projects');
const navToContact = (): void => navPush('/contact');

export default {
    navToHome,
    navToProfile,
    navToProjects,
    navToContact,
};
