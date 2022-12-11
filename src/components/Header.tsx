import React, { FunctionComponent } from 'react';

import { useRouter } from 'next/router';

interface HeaderButtonProps {
    label: string;
    selected: boolean;
    onClick: () => void;
}

const HeaderButton: FunctionComponent<HeaderButtonProps> = (props: HeaderButtonProps) => {
    const { label, selected, onClick } = props;

    return (
        <button
            type='button'
            onClick={onClick}
            className={`p-2 px-6 hover:bg-primary-light hover:text-secondary-white transition-colors duration-150 border-r w-fit border-r-line ${selected ? 'text-secondary-white border-b-2 border-b-accent-yellow ' : 'text-secondary-grey'} ${label === '_contact-me' && 'ml-auto border-l-line border-l'}`}
        >
            {label}
        </button>
    );
};

const Header: FunctionComponent = () => {
    const router = useRouter();

    const headerButtonClickHandler = (path: string) => {
        router.push(path);
    };

    return (
        <header className='flex w-full border-b border-b-line'>
            <div className='w-[15%] border-r border-r-line p-2 pl-4 text-secondary-grey'>
                <p>
                    aril
                </p>
            </div>

            <HeaderButton
                label='_hello'
                selected={router.pathname === '/'}
                onClick={() => headerButtonClickHandler('/')}
            />
            <HeaderButton
                label='_about-me'
                selected={router.pathname === '/about'}
                onClick={() => headerButtonClickHandler('/about')}
            />
            <HeaderButton
                label='_projects'
                selected={router.pathname === '/projects'}
                onClick={() => headerButtonClickHandler('/projects')}
            />
            <HeaderButton
                label='_contact-me'
                selected={router.pathname === '/contact'}
                onClick={() => headerButtonClickHandler('/contact')}
            />
        </header>
    );
};

export default Header;
