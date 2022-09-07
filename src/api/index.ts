import config from 'config';

import AuthGateway from './Auth';

const baseUrl = config.baseUrl as string;

const auth = new AuthGateway(baseUrl);

export default {
    auth,
};
