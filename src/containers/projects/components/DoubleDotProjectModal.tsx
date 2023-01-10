import React, { FunctionComponent, useEffect, useRef } from 'react';
import Image from 'next/image';

interface DoubleDotProjectModalProps {
    isOpen: boolean;
    selectedProject: string;
    setIsOpen: (state: boolean) => void;
}

const DoubleDotProjectModal: FunctionComponent<DoubleDotProjectModalProps> = (props: DoubleDotProjectModalProps) => {
    const { isOpen, selectedProject, setIsOpen } = props;

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const hideDropdownKeyboardHandler = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClick, true);
        document.addEventListener('keydown', hideDropdownKeyboardHandler, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
            document.addEventListener('keydown', hideDropdownKeyboardHandler, true);
        };
    }, [ref, setIsOpen]);

    if (!isOpen) return null;

    return (
        <div className='absolute top-0 left-0 flex items-center justify-center w-full h-screen bg-black/40'>
            <div ref={ref} className='w-[50%] p-4 rounded-md flex flex-col gap-2 bg-primary-light'>
                <div className='w-full text-2xl text-left text-secondary-purple'>
                    {selectedProject}
                </div>

                <div className='w-full h-1 border-b border-b-line mb-2' />

                <div className='relative flex w-full h-[100px] mb-4'>
                    <Image
                        src='https://www.kreedon.com/wp-content/uploads/2022/10/high-gaming-pc.jpg'
                        height='100%'
                        width='100%'
                        objectFit='cover'
                        layout='fill'
                        style={{
                            borderRadius: '0.5rem',
                        }}
                    />
                </div>

                <div className='text-secondary-grey text-justify'>
                    VPC was a web app targeted for Managers and Auditors to manage and run Audits.
                    The module that I worked on in this project was the
                    {' '}
                    <span className='text-accent-green'>
                        Customer
                    </span>
                    {' '}
                    module which includes CRUD features for customers.
                    I also worked on the
                    {' '}
                    <span className='text-accent-green'>
                        Compentency Test
                    </span>
                    {' '}
                    and
                    {' '}
                    <span className='text-accent-green'>
                        Competency Assessment
                    </span>
                    {' '}
                    module which is an exam module to verify registered Auditors before assigning them to do any Audits.
                </div>
            </div>
        </div>
    );
};

export default DoubleDotProjectModal;
