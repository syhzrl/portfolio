import { fork } from 'redux-saga/effects';

import api from 'api';

import auth from './auth';

import { SagaForkReturnType } from './types';

const apiInstance = api;

export default function* root(): SagaForkReturnType {
    yield fork(auth(apiInstance.auth).rootSaga);
}
