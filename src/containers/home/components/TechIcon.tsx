import React, { FunctionComponent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ReactIcon from 'assets/icons/react.svg';
import TypescriptIcon from 'assets/icons/typescript.svg';
import ReduxIcon from 'assets/icons/redux.svg';
import TailwindIcon from 'assets/icons/tailwind.svg';
import NextIcon from 'assets/icons/next.svg';

interface TechIconProps {
    tooltip: string;
    animType: string;
    tech: string;
}

const TechIcon: FunctionComponent<TechIconProps> = (props: TechIconProps) => {
    const { tooltip, animType, tech } = props;

    const [showTooltip, setShowTooltip] = useState(false);

    const dropIn = {
        hidden: {
            y: '-100%',
            opacity: 0,
        },
        visible: {
            y: '0',
            opacity: 1,
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            },
        },
        exit: {
            opacity: 0,
        },
    };

    const renderIcon = () => {
        switch (tech) {
            case 'react': return <ReactIcon height={50} width={50} />;
            case 'ts': return <TypescriptIcon height={50} width={50} />;
            case 'redux': return <ReduxIcon height={50} width={50} />;
            case 'tailwind': return <TailwindIcon height={50} width={50} />;
            case 'next': return <NextIcon height={50} width={50} />;
            default: return <ReactIcon height={50} width={50} />;
        }
    };

    return (
        <div className='relative flex flex-col items-center'>
            <motion.div
                whileHover={{
                    rotate: animType === 'rotate' ? 180 : 0,
                    scale: animType === 'scale' ? 1.2 : 1,
                    transition: {
                        duration: 0.3,
                    },
                }}
                onHoverStart={() => setShowTooltip(true)}
                onHoverEnd={() => setShowTooltip(false)}
            >
                {renderIcon()}
            </motion.div>

            <AnimatePresence
                initial={false}
                mode='wait'
                onExitComplete={() => null}
            >
                {showTooltip && (
                    <motion.div
                        variants={dropIn}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        className='absolute text-xl top-full mt-1'
                    >
                        {tooltip}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TechIcon;
