import React, { FunctionComponent, useEffect, useState } from 'react';

import images from 'assets/images';

import {
    heetsDetails,
    vpcDetails,
    mangoDetails,
    reaDetails,

    faqBotDetails,
    ageBotDetails,
} from 'assets/copies/ProjectDetails';

import { IProject, IProjectTypeEnum } from 'entities/Projects';

import ProjectRow from './components/ProjectRow';

import {
    MainContainer,
    TopSectionContainer,
    TopInnerTextContainer,
    TopInnerImageContainer,
    DividerLine,
} from './components';

const ProjectsScreen: FunctionComponent = () => {
    const [mainProjectData, setMainProjectData] = useState<IProject[]>([]);
    const [otherProjectData, setOtherProjectData] = useState<IProject[]>([]);

    useEffect(() => {
        setMainProjectData([vpcDetails, heetsDetails, mangoDetails, reaDetails]);
        setOtherProjectData([faqBotDetails, ageBotDetails]);
    }, []);

    return (
        <MainContainer>
            <TopSectionContainer>
                <TopInnerTextContainer>
                    <div id='header'>
                        {'Some Things I\'ve Built'}
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}
                    >
                        <p>
                            These are some of the projects that
                            {' '}
                            {'I\'ve'}
                            {' '}
                            worked on. My projects include:
                        </p>
                        <p>
                            Main Projects (Web Apps)
                        </p>

                        <p>
                            Projects built with other technologies
                        </p>

                        <p>
                            Side projects (Open Source Component Library, Personal Web Apps)
                        </p>
                    </div>
                </TopInnerTextContainer>

                <TopInnerImageContainer>
                    <img
                        src={images.peterGriffin}
                        alt='Peter Griffin'
                    />

                    <p>
                        *the struggle is real
                    </p>
                </TopInnerImageContainer>
            </TopSectionContainer>

            <DividerLine />

            <ProjectRow
                data={mainProjectData}
                projectType={IProjectTypeEnum.mainProject}
            />

            <DividerLine />

            <ProjectRow
                data={otherProjectData}
                projectType={IProjectTypeEnum.otherProject}
            />

            <DividerLine />

            <div style={{ paddingBottom: '20px' }} />

        </MainContainer>
    );
};

export default ProjectsScreen;
