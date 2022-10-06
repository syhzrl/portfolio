import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import SVG from 'react-inlinesvg';

import icons from 'assets/icons';
import Colours from 'assets/themes/Colours';

const Logo: FunctionComponent = () => {
    return (
        <LogoContainer>
            <SVG
                src={icons.chevronL}
                style={{
                    height: '40px',
                    width: '40px',
                }}
            />
            <SVG
                src={icons.monkey}
                style={{
                    height: '50px',
                    width: '50px',
                }}
            />
            <SVG
                src={icons.chevronR}
                style={{
                    height: '40px',
                    width: '40px',
                }}
            />
        </LogoContainer>
    );
};

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colours.pink};
    // background-color: ${Colours.white};
`;

export default Logo;
