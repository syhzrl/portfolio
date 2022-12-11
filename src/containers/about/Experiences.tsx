import React, { FunctionComponent } from 'react';

import CodeBlock from 'components/CodeBlock';

const code = `// My Work Experiences
// I have 2 years (as of 2023) of еxperience in web development
// Building custom web apps with React and Typescript as my main weapon of choice

enum RoleEnum {
    FrontEnd,
    FullStack,
}

interface WorkExperienceDetails {
    companyName: string;
    startAndEndDate: string;
    role: RoleEnum;
    techStack: string[];
}`;

const firstJobCode = `const firstJob: WorkExperienceDetails = {
    companyName: 'Double Dot PLT',
    startAndEndDate: '2021 - 2022',
    role: RoleEnum.FrontEnd,
    techStack: [
        'React', 
        'Typescript', 
        'Redux', 
        'Redux Toolkit', 
        'Redux Saga', 
        'Reactstrap', 
        'Styled Components',
        'Sass'
    ];
}`;

const secondJobCode = `const secondJob: WorkExperienceDetails = {
    companyName: 'Sans Paper',
    startAndEndDate: '2022 - 2023',
    role: RoleEnum.FullStack,
    techStack: [
        // FE Tech
        'React', 
        'Typescript', 
        'NextJs',
        'Tanstack Query'
        'Tailwindcss',

        // BE Tech
        'NestJs',
        'GraphQL',
        'Prisma',

        // CICD
        'CircleCI',
    ];
}`;

const Experiences: FunctionComponent = () => {
    const summary = '// Here are my work experiences summarised!';

    return (
        <div className='flex flex-1 w-full overflow-auto'>
            <div className='flex w-[40%] border-r border-r-line'>
                <CodeBlock
                    code={code}
                />
            </div>

            <div className='flex flex-col w-[60%] p-4 overflow-auto gap-4'>
                <p className='text-secondary-grey'>{summary}</p>

                <div className='border-b border-b-line h-[1px] w-full' />

                <div className='flex flex-col items-center justify-center w-full gap-4 h-fit'>
                    <div className='flex flex-col w-full gap-4 text-secondary-grey'>
                        <p className='text-accent-green'>
                            Double Dot PLT (2021-2022)
                        </p>

                        <p>
                            Primarily a Front End Developer.
                        </p>

                        <p>
                            Worked on a few different projects that also includes projects utilising other technologies like
                            {' '}
                            <span className='text-accent-green'>Telegram Bots</span>
                            {' '}
                            and
                            {' '}
                            <span className='text-accent-green'>Arcgis Map</span>
                            .
                        </p>

                        <p>
                            Involved in teaching new employees front end development concepts
                            such as
                            {' '}
                            <span className='text-accent-green'>React</span>
                            ,
                            {' '}
                            <span className='text-accent-green'>Typescript</span>
                            ,
                            {' '}
                            <span className='text-accent-green'>State Managements</span>
                            {' '}
                            and
                            {' '}
                            <span className='text-accent-green'>Stylings</span>
                            {' '}
                            including other software development practices like
                            {' '}
                            <span className='text-accent-green'>Version Control</span>
                            {' '}
                            and
                            {' '}
                            <span className='text-accent-green'>Best Practices</span>
                            .
                        </p>

                        <p>
                            I also took part of giving a web dev talk where I talked about best practices in web development.
                        </p>
                    </div>

                    <div className='w-[80%] border rounded-md border-line h-fit'>
                        <CodeBlock
                            code={firstJobCode}
                        />
                    </div>
                </div>

                <div className='border-b border-b-line h-[1px] w-full' />

                <div className='flex flex-col items-center justify-center w-full gap-4 h-fit'>
                    <div className='flex flex-col w-full gap-4 text-secondary-grey'>
                        <p className='text-accent-green'>
                            Sans Paper (2022-2023)
                        </p>

                        <p>
                            Full Stack Developer.
                        </p>

                        <p>
                            Worked on a few different projects covering every section from the
                            {' '}
                            <span className='text-accent-green'>Database</span>
                            ,
                            {' '}
                            <span className='text-accent-green'>Back End</span>
                            {' '}
                            and
                            {' '}
                            <span className='text-accent-green'>Front End</span>
                            .
                        </p>

                        <p>
                            Involved in project management processes such as
                            {' '}
                            <span className='text-accent-green'>Writing Tickets</span>
                            ,
                            {' '}
                            <span className='text-accent-green'>Sprint Planing</span>
                            {' '}
                            and
                            {' '}
                            <span className='text-accent-green'>Research & Development</span>
                            .
                        </p>

                        <p>
                            For the most part, I had to do a lot of things
                            {' '}
                            <span className='text-accent-green'>on my own</span>
                            , all the way from planning out tickets to every inch of development even deployments.
                        </p>
                    </div>

                    <div className='w-[80%] border rounded-md border-line h-fit'>
                        <CodeBlock
                            code={secondJobCode}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Experiences;
