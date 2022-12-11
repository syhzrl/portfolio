import React, { FunctionComponent } from 'react';

import CodeBlock from 'components/CodeBlock';

const code = `// About me
// I have 2 years (as of 2023) of еxperience in web development
// Building custom web apps with React and Typescript as my weapon of choice

// Front End Development 
// I have experience with libraries such as Redux, Redux Toolkit, Redux Saga and React Query (Tanstack Query)
// I also am familiar with a few styling libraries such as Styled Components, Sass and Tailwindcss

// Back End Development 
// I have experience with Express, NestJs, Prisma and GraphQL
// I am also familiar with MongoDB and PostgreSQL in the database department

// So far I've been in 2 different companies:

// #1 - Double Dot PLT (Malaysia) (2021-2022)
// #2 - Sans Paper (Australia) (2022-2023)

// I'm passionate about Programming 💻, Games 🎮, Music 🎸 and Art 🎨`;

const Bio: FunctionComponent = () => {
    return (
        <div className='flex flex-1 w-full overflow-auto'>
            <CodeBlock
                code={code}
            />
        </div>
    );
};

export default Bio;
