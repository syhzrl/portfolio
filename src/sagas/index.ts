import { fork } from 'redux-saga/effects';

import { SagaForkReturnType } from './types';

export default function* root(): SagaForkReturnType {
    // yield fork(auth(apiInstance.auth).rootSaga);
}
