import React, { FunctionComponent } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import { history } from 'redux/store';

import HomeScreen from 'containers/home';
import ProfileScreen from 'containers/profile';
import ProjectsScreen from 'containers/projects';
import ContactScreen from 'containers/contact';

const NestedBucket: FunctionComponent = () => {
    return (
        <Route path='/' element={<HomeScreen />}>
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/projects' element={<ProjectsScreen />} />
            <Route path='/contact' element={<ContactScreen />} />
        </Route>
    );
};

const NavRoutes: FunctionComponent = (props) => {
    return (
        <Router history={history}>
            <Routes>
                {/* <Route path='*' element={<Navigate replace to='/profile' />} /> */}

                {NestedBucket(props)}
            </Routes>
        </Router>
    );
};

export default NavRoutes;
