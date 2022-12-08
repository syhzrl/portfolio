import React, { FunctionComponent, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Playground: FunctionComponent = () => {
    const [show, setShow] = useState(false);
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
        <div className='bg-black text-white h-screen w-screen flex justify-center items-center text-4xl'>
            <motion.button
                layout
                className='p-2 w-auto rounded-md flex space-x-2 items-center bg-pink-300'
                whileHover={{
                    scaleX: 3,
                }}
                transition={{ duration: 1 }}
            >
                <p className='text-sm'>Hover</p>

                {/* <AnimatePresence
                    initial={false}
                    mode='wait'
                    onExitComplete={() => null}
                >
                    {show && (
                        <motion.div
                            variants={slideIn}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                            className='w-60 bg-white p-4 rounded-md flex flex-col space-y-2'
                        >
                            <p className='text-black text-xl'>Pages</p>
                        </motion.div>
                    )}
                </AnimatePresence> */}
            </motion.button>
        </div>
    );
};

export default Playground;
