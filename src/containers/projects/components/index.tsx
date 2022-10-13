import React from 'react';
import styled from 'styled-components';

import Colours from 'assets/themes/Colours';

const MainContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const TopSectionContainer = styled.div`
    font-size: 22px;
    color: ${Colours.white};
    margin-top: 20px;
    display: flex;
    gap: 10px;

    @media (max-width: 550px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 40px;

        font-size: 18px;
    }
`;

const TopInnerTextContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    #header {
        font-size: 48px;
        color: ${Colours.pink};
    }

    @media (max-width: 550px) {
        width: 100%;

        #header {
            font-size: 32px;
            color: ${Colours.pink};
        }
    }
`;

const TopInnerImageContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: ${Colours.grey};
    gap: 10px;

    img {
        width: 50%;
        border-radius: 10px;
    }

    p {
        width: 50%;
    }

    @media (max-width: 550px) {
        width: 100%;
    }
`;

const DividerLine = styled.div`
    border-bottom: 1px solid white;
`;

export { MainContainer, TopSectionContainer, TopInnerTextContainer, TopInnerImageContainer, DividerLine };
