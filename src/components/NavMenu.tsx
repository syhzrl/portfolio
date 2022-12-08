import React, { FunctionComponent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDetectClickOutside } from 'react-detect-click-outside';
import Link from 'next/link';

import MenuIcon from 'assets/icons/menu-icon.svg';
import HomeIcon from 'assets/icons/home-outline.svg';
import PhoneIcon from 'assets/icons/phone-portrait-outline.svg';
import LaptopIcon from 'assets/icons/laptop-outline.svg';

interface NavMenuItems {
    label: string;
    link: string;
    icon: any;
    onClick: () => void;
}

const NavMenuItems: FunctionComponent<NavMenuItems> = (props: NavMenuItems) => {
    const { label, icon, link, onClick } = props;

    return (
        <button
            type='button'
            className='bg-transparent p-3 rounded-md text-lg hover:bg-slate-100/10 text-center transition-all ease-in-out duration-500'
            onClick={onClick}
        >
            <Link href={link}>
                <div className='flex items-center justify-start space-x-5'>
                    {icon}

                    <p>
                        {label}
                    </p>
                </div>
            </Link>
        </button>
    );
};

const NavMenu: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useDetectClickOutside({ onTriggered: () => setIsOpen(false) });

    const variants = {
        rotate: {
            rotate: 90,
            transition: {
                duration: 0.05,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            },
        },
        stop: {
            rotate: 0,
            transition: {
                duration: 0.05,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            },
        },
    };

    const slideIn = {
        hidden: {
            x: '-110%',
            opacity: 0,
        },
        visible: {
            x: '0',
            opacity: 1,
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            },
        },
        exit: {
            x: '-110%',
            opacity: 0,
        },
    };

    return (
        <div
            className='
                absolute
                top-0
                left-0
                p-5
                flex
                flex-col
                space-y-3
                items-start
                overflow-hidden
            '
            ref={ref}
        >
            <div className='text-turquiose flex space-x-2 items-center'>
                <motion.button
                    type='button'
                    variants={variants}
                    animate={isOpen ? 'rotate' : 'stop'}
                    onClick={() => setIsOpen(prev => !prev)}
                    whileHover={{
                        backgroundColor: '#1F2833',
                    }}
                    className='p-1 rounded-md bg-transparent flex space-x-2 items-center'
                >
                    <MenuIcon
                        height={30}
                        width={30}
                    />
                </motion.button>

                <p>Menu</p>
            </div>

            <AnimatePresence
                initial={false}
                mode='wait'
                onExitComplete={() => null}
            >
                {isOpen && (
                    <motion.div
                        variants={slideIn}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        className='w-60 bg-bgSecondary text-turquiose p-4 rounded-md flex flex-col space-y-2'
                    >
                        <p className='text-xl'>Pages</p>

                        <NavMenuItems
                            label='Home'
                            link='/'
                            icon={<HomeIcon height={25} width={25} />}
                            onClick={() => setIsOpen(false)}
                        />

                        <NavMenuItems
                            label='Projects'
                            link='/projects'
                            icon={<LaptopIcon height={25} width={25} />}
                            onClick={() => setIsOpen(false)}
                        />

                        <NavMenuItems
                            label='Contact'
                            link='/contact'
                            icon={<PhoneIcon height={25} width={25} />}
                            onClick={() => setIsOpen(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavMenu;
