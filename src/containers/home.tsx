import React, { FunctionComponent } from 'react';

import CodeBlock from 'components/CodeBlock';

const code = `interface ProjectStack {
    language: string;
    framework: string;
    styling: string;
}

const builtWith: ProjectStack = {
    language: 'Typescript',
    framework: 'NextJs',
    styling: 'Tailwindcss',
}`;

const HomeScreen: FunctionComponent = () => {
    const youCanCallMe = '// you can call me Aril 🤓';
    const findMyProfile = '// find my profile on Github:';
    const githubLink = '"https://github.com/syhzrl"';

    return (
        <div className='flex items-center justify-center flex-1 gap-24'>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <p className='text-xl'>Hi all. I am</p>
                    <p className='text-6xl'>Syahzril Aiman</p>
                    <p className='text-4xl text-secondary-purple'>{'> Full-stack developer'}</p>
                </div>

                <div>
                    <p className='text-secondary-grey'>{youCanCallMe}</p>
                    <p className='text-secondary-grey'>{findMyProfile}</p>
                    <p>
                        <span className='text-secondary-purple'>const</span>
                        {' '}
                        <span className='text-accent-green'>githubLink</span>
                        {' '}
                        <span>=</span>
                        {' '}
                        <span className='text-accent-orange hover:underline'><a href={githubLink}>{githubLink}</a></span>
                    </p>
                </div>
            </div>

            <div className='p-2 px-4 border rounded-lg border-line'>
                <CodeBlock
                    code={code}
                />
            </div>
        </div>
    );
};

export default HomeScreen;
