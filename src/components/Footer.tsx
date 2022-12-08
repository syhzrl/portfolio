import React, { FunctionComponent, ReactNode } from 'react';
import { LinkedIn, Email, Github } from 'assets/icons';

interface FooterButtonProps {
    children: ReactNode;
}

const FooterButton: FunctionComponent<FooterButtonProps> = (props: FooterButtonProps) => {
    const { children } = props;
    return (
        <button type='button' className='flex items-center justify-center p-2 transition-colors duration-150 border-r border-r-line hover:text-secondary-white hover:bg-primary-light'>
            {children}
        </button>
    );
};

const Footer: FunctionComponent = () => {
    return (
        <footer className='flex w-full border-t border-t-line text-secondary-grey'>
            <div className='p-2 px-4 border-r border-r-line'>
                <p>find me in:</p>
            </div>

            <FooterButton>
                <LinkedIn
                    height={20}
                    width={20}
                />
            </FooterButton>

            <FooterButton>
                <Email
                    height={20}
                    width={20}
                />
            </FooterButton>

            <button
                type='button'
                className='flex items-center gap-2 p-2 px-4 ml-auto transition-colors duration-150 border-l border-l-line hover:text-secondary-white hover:bg-primary-light'
            >
                <p>@syhzrl</p>
                <Github
                    height={20}
                    width={20}
                />
            </button>
        </footer>
    );
};

export default Footer;
