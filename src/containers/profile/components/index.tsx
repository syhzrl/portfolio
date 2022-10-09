import React from 'react';
import styled, { css } from 'styled-components';

import Colours from 'assets/themes/Colours';

export const MainContainer = styled.div`
    height: 100%;
    display: flex;

    @media (max-width: 550px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 20px;

        padding-bottom: 20px;
    }
`;

export const ProfileContentContainer = styled.div<{ isRight?: boolean }>`
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: ${Colours.white};

    gap: 10px;

    ${props => props.isRight && css`
        align-items: flex-end;

        & img {
            width: 90%;
            border-radius: 5px;
        }

        & p {
            width: 90%;
            color: ${Colours.grey};
        }

        @media (max-width: 550px) {
            width: 90%;

            align-items: center;

            & img {
                width: 100%;
                border-radius: 5px;
            }
    
            & p {
                width: 100%;
                color: ${Colours.grey};

                text-align: center;
            }
        }
    `}

    @media (max-width: 550px) {
        width: 90%;
    }
`;

export const IntroTextContainer = styled.div<{ fontSize: number }>`
    ${props => css`
        font-size: ${props.fontSize}px;
    `}

    width: 100%;

    & span {
        color: ${Colours.pink};
    }

    @media (max-width: 550px) {
        ${props => css`
            font-size: ${props.fontSize - 20}px;
        `}

        text-align: center;
    }
`;

export const TechsContainer = styled.div`
    font-size: 32px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;

    @media (max-width: 550px) {
        font-size: 20px;

        text-align: center;

        align-items: center;
    }
`;
