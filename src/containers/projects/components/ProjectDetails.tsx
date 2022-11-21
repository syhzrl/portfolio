import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

import Colours from 'assets/themes/Colours';

import { ILogo } from 'entities/Logos';

import LogosRow from 'components/LogosRow';

import icons from 'assets/icons';
import Carousel from './Carousel';

interface ProjectDetailsProps {
    title: string;
    description: string;
    techs: ILogo[];
    images: string[];
}

const ProjectDetails: FunctionComponent<ProjectDetailsProps> = (props: ProjectDetailsProps) => {
    const { title, description, techs, images } = props;

    return (
        <MainContainer>
            {/* <InnerContainer>
                <TitleDescContainer>
                    <p id='title'>
                        {title}
                    </p>

                    <p id='description'>
                        {description}
                    </p>
                </TitleDescContainer>

                <TechsContainer>
                    <p>
                        Techs Used
                    </p>

                    <LogosRow
                        data={techs}
                    />
                </TechsContainer>
            </InnerContainer>

            <InnerContainer>
                <Carousel
                    projectImages={images}
                />
            </InnerContainer> */}

            <Card>
                <p>
                    Mango
                </p>

                <SVG
                    src={icons.fire}
                    id='icon'
                />
            </Card>

        </MainContainer>
    );
};

const Card = styled.div`
    background-color: transparent;

    height: 200px;
    width: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;

    border-radius: 10px;
    border: 1px solid white;

    color: white;

    p {
        font-size: 28px;
    }

    #icon {
        height: 50px;
        width: 50px;
    }
`;

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;

    gap: 40px;

    @media (max-width: 550px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const InnerContainer = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    /* background-color: pink; */

    color: ${Colours.white};

    @media (max-width: 550px) {
        width: 100%;

        gap: 20px;
    }
`;

const TitleDescContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;

    #title {
        font-size: 32px;
    }

    #description {
        text-align: justify;

        line-height: 24px;

        font-size: 20px;
    }
`;

const TechsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    /* background-color: pink; */

    @media (max-width: 550px) {
        justify-content: center;
        align-items: center;
    }
`;

export default ProjectDetails;
