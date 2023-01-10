import React, { FunctionComponent, useEffect, useRef } from 'react';

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
            <div ref={ref} className='w-[50%] h-[50%] p-4 rounded-md flex flex-col gap-2 bg-primary-med'>
                <div className='w-full text-2xl text-left text-secondary-purple'>
                    {selectedProject}
                </div>

                <div className='w-full h-1 border-b border-b-line' />

            </div>
        </div>
    );
};

export default DoubleDotProjectModal;
