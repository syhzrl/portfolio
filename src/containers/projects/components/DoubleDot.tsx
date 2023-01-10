import React, { FunctionComponent, useState } from 'react';

import { Project } from 'entities/project';

import ProjectCard from './ProjectCard';
import DoubleDotProjectModal from './DoubleDotProjectModal';

const projectData: Project[] = [{
    name: 'VPC',
    desc: 'Duis aute irure dolor in velit esse cillum dolore.',
}, {
    name: 'Heets',
    desc: 'Duis aute irure dolor in velit esse cillum dolore.',
}, {
    name: 'Mango',
    desc: 'Duis aute irure dolor in velit esse cillum dolore.',
}, {
    name: 'Dormeo REA',
    desc: 'Duis aute irure dolor in velit esse cillum dolore.',
}, {
    name: 'FaqBot',
    desc: 'Duis aute irure dolor in velit esse cillum dolore.',
}, {
    name: 'Agebot',
    desc: 'Duis aute irure dolor in velit esse cillum dolore.',
}];

const DoubleDot: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState('');

    const projectCardClickHandler = (projName: string) => {
        setIsOpen(!isOpen);
        setSelectedProject(projName);
    };

    return (
        <div className='flex flex-col items-start justify-start flex-1 gap-6 p-6 overflow-auto'>
            <div className='flex flex-col gap-2'>
                <p className='text-secondary-grey'>
                    Here are the projects that I was involved in when I was a part of
                    {' '}
                    <span className='text-accent-green'>Double Dot PLT</span>
                </p>

                <p className='text-secondary-grey'>
                    I was the sole
                    {' '}
                    <span className='text-accent-green'>Front End Developer</span>
                    {' '}
                    for most of these projects
                </p>
            </div>

            <div className='w-full h-1 border-b border-b-line' />

            <div className='flex justify-center w-full'>
                <div className='grid content-center justify-center grid-cols-3 gap-10 p-4 w-fit place-items-center'>
                    {projectData.map(item => {
                        const { name, desc } = item;

                        return (
                            <ProjectCard
                                key={name}
                                name={name}
                                desc={desc}
                                onClick={projectCardClickHandler}
                            />
                        );
                    })}
                </div>
            </div>

            <DoubleDotProjectModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedProject={selectedProject}
            />
        </div>
    );
};

export default DoubleDot;
