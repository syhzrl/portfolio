import React, { FunctionComponent } from 'react';

import { profileLogosRow } from 'assets/copies/LogosRow';
import images from 'assets/images';

import LogosRow from 'components/LogosRow';

import {
    MainContainer,
    ProfileContentContainer,
    IntroTextContainer,
    TechsContainer,
} from './components';

const ProfileScreen: FunctionComponent = () => {
    return (
        <MainContainer>
            <ProfileContentContainer>
                <IntroTextContainer
                    fontSize={60}
                >
                    {'Hello, I\'m'}
                    {' '}
                    <span>Aril</span>
                </IntroTextContainer>

                <IntroTextContainer
                    fontSize={48}
                >
                    A
                    {' '}
                    <span>Front-End</span>
                    {' '}
                    Developer
                </IntroTextContainer>

                <TechsContainer>
                    <p>Techs I Enjoy</p>

                    <LogosRow
                        data={profileLogosRow}
                    />
                </TechsContainer>
            </ProfileContentContainer>

            <ProfileContentContainer
                isRight
            >
                <img
                    src={images.bongoCat}
                    alt='bongo cat'
                    id='bongo'
                />

                <p>
                    *me coding this portfolio at 3am
                </p>
            </ProfileContentContainer>
        </MainContainer>
    );
};

export default ProfileScreen;
