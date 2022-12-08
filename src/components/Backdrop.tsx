import React, { FunctionComponent, useState, useEffect, ReactNode } from 'react';

interface BackdropProps {
    children: ReactNode;
    onClick: () => void;
}

const Backdrop: FunctionComponent<BackdropProps> = (props: BackdropProps) => {
    const { children, onClick } = props;

    return (
        <div
            className='absolute top-0 left-0 h-screen w-screen bg-black/40'
        >
            {children}
        </div>
    );
};

export default Backdrop;
