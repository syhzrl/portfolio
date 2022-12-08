import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import TechIcon from './components/TechIcon';

const HomeScreen: FunctionComponent = () => {
    return (
        <div className='text-white h-screen w-full flex items-center text-4xl justify-center p-40 space-x-20'>
            <div className='flex justify-center items-center text-5xl'>
                <div className='w-fit flex flex-col space-y-3'>
                    <p>
                        {'Hello, I\'m'}
                        {' '}
                        <span className='text-turquiose'>
                            Aril
                        </span>
                    </p>

                    <p>
                        A
                        {' '}
                        <span className='text-turquiose'>
                            Front End
                        </span>
                        {' '}
                        Developer
                    </p>

                    <p className='font-bold'>
                        Techs I Enjoy
                    </p>

                    <div className='w-fit flex space-x-3 items-center'>
                        <TechIcon
                            tech='react'
                            animType='rotate'
                            tooltip='React'
                        />

                        <TechIcon
                            tech='ts'
                            animType='scale'
                            tooltip='Typescript'
                        />

                        <TechIcon
                            tech='redux'
                            animType='rotate'
                            tooltip='Redux'
                        />

                        <TechIcon
                            tech='tailwind'
                            animType='rotate'
                            tooltip='Tailwind'
                        />

                        <TechIcon
                            tech='next'
                            animType='rotate'
                            tooltip='NextJS'
                        />
                    </div>
                </div>
            </div>

            <div className='text-turquios h-60 flex flex-col items-center justify-center'>
                <Image
                    src='https://media.giphy.com/media/E6jscXfv3AkWQ/giphy.gif'
                    height={300}
                    width={300}
                    className='object-cover'
                />

                <p className='text-xl text-white/50'>
                    *me building this portfolio at 3am
                </p>
            </div>
        </div>
    );
};

export default HomeScreen;
