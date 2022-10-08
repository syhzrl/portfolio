import { push, replace } from 'redux-first-history';

import { store } from 'redux/store';

const navPush = (routeName: string, state?: any) => {
    store.dispatch(push(routeName, state));
};

const navReplace = (routeName: string) => {
    store.dispatch(replace(routeName));
};

const navToHome = (): void => navPush('/portfolio');
const navToProfile = (): void => navPush('/portfolio/profile');
const navToProjects = (): void => navPush('/portfolio/projects');
const navToContact = (): void => navPush('/portfolio/contact');

export default {
    navToHome,
    navToProfile,
    navToProjects,
    navToContact,
};
