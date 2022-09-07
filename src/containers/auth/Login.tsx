import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';

import Actions from 'redux/Actions';
import Selectors from 'redux/Selectors';
import { AppDispatch, RootState } from 'redux/store';

interface LoginProps {
    login(username: string, password: string): void;
}

const Login: FunctionComponent<LoginProps> = (props: LoginProps) => {
    const { login } = props;

    useEffect(() => {
        login('test', 'test');
    }, []);

    return (
        <div>
            <p>Login screen</p>
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    loading: Selectors.authGetLoginAttempting(state),
    error: Selectors.authGetLoginError(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    login: (username: string, password: string) =>
        dispatch(Actions.authLoginAttempt({ username, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
