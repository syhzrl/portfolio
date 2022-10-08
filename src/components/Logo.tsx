import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

import icons from 'assets/icons';
import Colours from 'assets/themes/Colours';

import NavActions from 'lib/NavActions';

const Logo: FunctionComponent = () => {
    return (
        <LogoContainer
            onClick={() => NavActions.navToProfile()}
        >
            <SVG
                src={icons.chevronL}
                id='icon'
            />
            <SVG
                src={icons.monkey}
                id='icon'
            />
            <SVG
                src={icons.chevronR}
                id='icon'
            />
        </LogoContainer>
    );
};

const LogoContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colours.pink};
    background-color: transparent;

    cursor: pointer;

    padding: 0;
    margin: 0;

    border: none;
    outline: none;
    box-shadow: none;

    transition: all 0.3s ease;

    #icon {
        height: 35px;
        width: 35px;
    }

    &:hover {
        color: ${Colours.white};
    }
`;

export default Logo;
