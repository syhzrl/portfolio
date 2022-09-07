import auth from 'redux/slices/auth/Selectors';

import { RootState } from './store';

const authGetLoginAttempting = (state: RootState): boolean => auth.getLoginAttempting(state.auth);
const authGetLoginError = (state: RootState): string => auth.getLoginError(state.auth);

const getAuthAuthToken = (state: RootState): string => auth.getAuthToken(state.auth);

export default {
    authGetLoginAttempting,
    authGetLoginError,

    getAuthAuthToken,
};
