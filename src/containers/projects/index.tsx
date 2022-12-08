import React, { FunctionComponent, useState, useEffect } from 'react';
import Image from 'next/image';

const ProjectsScreen: FunctionComponent = () => {
    return (
        <div className='bg-pink-300 flex items-center justify-center p-40'>
            <p className='text-5xl'>
                {'Some Things I\'ve Built'}
            </p>

            <Image
                src='https://media.giphy.com/media/E6jscXfv3AkWQ/giphy.gif'
                height={100}
                width={100}
            />
        </div>
    );
};

export default ProjectsScreen;
