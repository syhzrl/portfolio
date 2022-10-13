import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';

import Colours from 'assets/themes/Colours';

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
            const { title, description, techs } = projectData;

            setProjectTitle(title);
            setProjectDescription(description);
            setProjectTechs(techs);
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

            <ProjectDetails
                title={projectTitle}
                description={projectDescription}
                techs={projectTechs}
            />

            <Paginator
                maxPage={maxPage}
                pageNum={pageNum}
                onPageChangeHandler={onPageChangeHandler}
                numberClickHandler={setPageNum}
            />
        </MainContainer>
    );
};

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    #pageTitle {
        font-size: 32px;
        color: ${Colours.pink};
    }
`;

export default ProjectRow;
