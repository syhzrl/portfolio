import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

import Colours from 'assets/themes/Colours';
import icons from 'assets/icons';

import { IProject, IProjectTypeEnum } from 'entities/Projects';
import { ILogo } from 'entities/Logos';

import Paginator from './Paginator';
import ProjectDetails from './ProjectDetails';

interface ProjectRowProps {
    data: IProject[];
    projectType: IProjectTypeEnum;
}

const ProjectRow: FunctionComponent<ProjectRowProps> = (props: ProjectRowProps) => {
    const { data, projectType } = props;

    const [pageNum, setPageNum] = useState(0);
    const [maxPage, setMaxPage] = useState(0);

    const [pageTitle, setPageTitle] = useState('');

    const [projectData, setProjectData] = useState<IProject | null>(null);
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectTechs, setProjectTechs] = useState<ILogo[]>([]);
    const [projectImages, setProjectImages] = useState<string[]>([]);

    useEffect(() => {
        switch (projectType) {
            case IProjectTypeEnum.mainProject: setPageTitle('Main Projects'); break;
            case IProjectTypeEnum.otherProject: setPageTitle('Projects built with other technologies'); break;
            case IProjectTypeEnum.sideProject: setPageTitle('Side Projects'); break;
            default:
        }
    }, []);

    useEffect(() => {
        setProjectData(data[pageNum]);
        setMaxPage(data.length);
    }, [data, pageNum]);

    useEffect(() => {
        if (projectData) {
            const { title, description, techs, images } = projectData;

            setProjectTitle(title);
            setProjectDescription(description);
            setProjectTechs(techs);
            setProjectImages(images);
        }
    }, [projectData]);

    const onPageChangeHandler = (direction: string) => {
        if (direction === 'left') {
            if (pageNum === 0) {
                setPageNum(maxPage - 1);
                return;
            }

            setPageNum(prev => prev - 1);
        }

        if (direction === 'right') {
            if (pageNum === maxPage - 1) {
                setPageNum(0);
                return;
            }

            setPageNum(prev => prev + 1);
        }
    };

    return (
        <MainContainer>
            <p id='pageTitle'>
                {pageTitle}
            </p>

            {/* <ProjectDetails
                title={projectTitle}
                description={projectDescription}
                techs={projectTechs}
                images={projectImages}
            /> */}

            <div
                style={{
                    display: 'flex',
                    gap: '20px',
                }}
            >
                {data.map(item => {
                    const { title, icon } = item;
                    return (
                        <Card>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                }}
                            >
                                <p>
                                    {title}
                                </p>

                                <SVG
                                    src={icon}
                                    id='icon'
                                />
                            </div>

                            <p id='test'>
                                Learn More
                            </p>
                        </Card>

                    );
                })}
            </div>

            {/* <Paginator
                maxPage={maxPage}
                pageNum={pageNum}
                onPageChangeHandler={onPageChangeHandler}
                numberClickHandler={setPageNum}
            /> */}
        </MainContainer>
    );
};

const Card = styled.div`
    background-color: transparent;

    height: 200px;
    width: 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    border-radius: 10px;
    border: 1px solid white;

    color: white;

    cursor: pointer;

    p {
        font-size: 28px;
    }

    #icon {
        height: 50px;
        width: 50px;
    }

    #test {
        opacity: 0;
    transition: all 0.5s ease;

    }

    /* transition: all 0.5s ease; */

    &:hover {
        #test {
            opacity: 100;
        }
    }
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    #pageTitle {
        font-size: 32px;
        color: ${Colours.pink};
    }
`;

export default ProjectRow;
