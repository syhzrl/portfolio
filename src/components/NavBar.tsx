import React, { FunctionComponent, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';

import Colours from 'assets/themes/Colours';
import Fonts from 'assets/themes/Fonts';

import NavActions from 'lib/NavActions';

import Logo from './Logo';

const NavBar: FunctionComponent = () => {
    const location = useLocation();

    const [selectedPage, setSelectedPage] = useState('');

    useEffect(() => {
        const { pathname = '' } = location;

        switch (pathname) {
            case '/projects': setSelectedPage('projects'); break;
            case '/contact': setSelectedPage('contact'); break;
            default: setSelectedPage('profile'); break;
        }
    }, [location]);

    return (
        <MainContainer>
            <Logo />

            <ButtonsContainer>
                <NavButton
                    onClick={() => NavActions.navToProfile()}
                    selected={selectedPage === 'profile'}
                >
                    Profile
                </NavButton>

                <NavButton
                    onClick={() => NavActions.navToProjects()}
                    selected={selectedPage === 'projects'}
                >
                    Projects
                </NavButton>

                <NavButton
                    onClick={() => NavActions.navToContact()}
                    selected={selectedPage === 'contact'}
                >
                    Contact
                </NavButton>
            </ButtonsContainer>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    @media (max-width: 550px) {
        flex-direction: column;
        gap: 10px;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 400px) {
        flex-direction: column;
        gap: 10px;
    }
`;

const NavButton = styled.button<{ selected?: boolean }>`
    background-color: transparent;
    border: none;
    outline: none;

    cursor: pointer;

    color: ${Colours.white};

    font-size: 24px;
    font-family: ${Fonts.primary};

    transition: all 0.3s ease;

    ${props => (props.selected) && css`
        color: ${Colours.pink};
    `}

    &:hover {
        color: ${Colours.lightPink};
    }

    &:active {
        color: ${Colours.pink};
    }
`;

export default NavBar;
