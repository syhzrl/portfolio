import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface HeaderButtonProps {
    label: string;
    selected: boolean;
    path: string;
}

const HeaderButton: FunctionComponent<HeaderButtonProps> = (props: HeaderButtonProps) => {
    const { label, selected, path } = props;

    return (
        <button
            type='button'
            className={`p-2 px-6 hover:bg-primary-light hover:text-secondary-white transition-colors duration-150 border-r w-fit border-r-line ${selected ? 'text-secondary-white border-b-2 border-b-accent-yellow ' : 'text-secondary-grey'} ${label === '_contact-me' && 'ml-auto border-l-line border-l'}`}
        >
            <Link href={path}>
                {label}
            </Link>
        </button>
    );
};

const Header: FunctionComponent = () => {
    const router = useRouter();
    return (
        <header className='flex w-full border-b border-b-line'>
            <div className='w-[15%] border-r border-r-line p-2 pl-4 text-secondary-grey'>
                <p>
                    aril
                </p>
            </div>

            <HeaderButton
                label='_hello'
                path='/'
                selected={router.pathname === '/'}
            />
            <HeaderButton
                label='_about-me'
                path='/about'
                selected={router.pathname === '/about'}
            />
            <HeaderButton
                label='_projects'
                path='/projects'
                selected={router.pathname === '/projects'}
            />
            <HeaderButton
                label='_contact-me'
                path='/contact'
                selected={router.pathname === '/contact'}
            />
        </header>
    );
};

export default Header;
