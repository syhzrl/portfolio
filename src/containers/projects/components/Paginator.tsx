import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';

import icons from 'assets/icons';
import Colours from 'assets/themes/Colours';

interface PaginatorProps {
    maxPage: number;
    pageNum: number;
    onPageChangeHandler: (direction: string) => void;
    numberClickHandler: (pageNum: number) => void;
}

const Paginator: FunctionComponent<PaginatorProps> = (props: PaginatorProps) => {
    const { maxPage, pageNum, onPageChangeHandler, numberClickHandler } = props;

    const arrayToMap = Array(maxPage).fill(0);

    return (
        <PaginatorContainer>
            <PaginatorButton
                onClick={() => onPageChangeHandler('left')}
            >
                <SVG
                    src={icons.chevronL}
                    id='chevron'
                />
            </PaginatorButton>

            {arrayToMap.map((item, index) => {
                return (
                    <PaginatorButton
                        key={Math.random()}
                        selected={index === pageNum}
                        onClick={() => numberClickHandler(index)}
                    >
                        <SVG
                            src={icons.dot}
                            id='dot'
                        />
                    </PaginatorButton>
                );
            })}

            <PaginatorButton
                onClick={() => onPageChangeHandler('right')}
            >
                <SVG
                    src={icons.chevronR}
                    id='chevron'
                />
            </PaginatorButton>
        </PaginatorContainer>
    );
};

const PaginatorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 5px;
`;

const PaginatorButton = styled.button<{ selected?: boolean }>`
    background-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    outline: none;
    box-shadows: none;

    color: ${Colours.grey};

    cursor: pointer;

    transition: all 0.5s ease;

    #chevron {
        height: 20px;
        width: 20px;
    }

    #dot {
        height: 40px;
        width: 40px;
    }

    &:hover {
        color: ${Colours.white};
    }

    ${props => props.selected && css`
        #dot {
            color: ${Colours.pink};
        }
    `}
`;

export default Paginator;
