import React, { FunctionComponent, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';

import icons from 'assets/icons';
import images from 'assets/images';
import Colours from 'assets/themes/Colours';

interface CarouselProps {
    projectImages: string[];
}

const Carousel: FunctionComponent<CarouselProps> = (props: CarouselProps) => {
    const { projectImages } = props;

    const [imageNum, setImageNum] = useState(0);

    const arrayOfImages = [images.heetsLogin, images.heets1, images.heets2];

    const chevronClickHandler = (direction: string) => {
        if (direction === 'left') {
            if (imageNum === 0) {
                setImageNum(2);
                return;
            }

            setImageNum(prev => prev - 1);
        }

        if (direction === 'right') {
            if (imageNum === 2) {
                setImageNum(0);
                return;
            }

            setImageNum(prev => prev + 1);
        }
    };

    return (
        <MainContainer>
            <ChevronsContainer>
                <ChevronButton
                    onClick={() => chevronClickHandler('left')}
                >
                    <SVG
                        src={icons.chevronL}
                        id='chevron'
                    />
                </ChevronButton>

                <ChevronButton
                    right
                    onClick={() => chevronClickHandler('right')}
                >
                    <SVG
                        src={icons.chevronR}
                        id='chevron'
                    />
                </ChevronButton>
            </ChevronsContainer>

            <LineMarkerContainer>
                {projectImages.map((item, index) => {
                    return (
                        <LineMarker
                            key={Math.random()}
                            selected={index === imageNum}
                        />
                    );
                })}
            </LineMarkerContainer>

            <img
                src={projectImages[imageNum]}
                alt='Project Images'
            />
        </MainContainer>
    );
};

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 10px;
    position: relative;

    img {
        width: 100%;
        object-fit: contain;
    }
`;

const ChevronsContainer = styled.div`
    height: 100%;
    width: 100%;

    background-color: transparent;

    position: absolute;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ChevronButton = styled.button<{ right?: boolean }>`
    background-color: transparent;

    height: fit-content;

    color: ${Colours.grey};

    border: none;

    cursor: pointer;

    transition: all 0.3s ease;

    #chevron {
        height: 40px;
        width: 40px;
    }

    &:hover {
        color: ${Colours.pink};
    }
`;

const LineMarkerContainer = styled.div`
    height: 10%;
    width: 100%;

    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 20px;
`;

const LineMarker = styled.div<{ selected: boolean }>`
    width: 20%;
    height: 2px;

    background-color: ${Colours.grey};

    ${props => props.selected && css`
        height: 2px;
        background-color: ${Colours.pink};
    `}
`;

export default Carousel;
