import React, { FunctionComponent } from 'react';

import { File } from 'assets/icons';

interface FileButtonProps {
    label: string;
    selectedTab: string;
    onClick: () => void;
}

const FileButton: FunctionComponent<FileButtonProps> = (props: FileButtonProps) => {
    const { label, selectedTab, onClick } = props;

    return (
        <button
            type='button'
            onClick={onClick}
            className={`flex items-center text-secondary-grey w-full gap-2 p-1 px-4 hover:bg-primary-light ${selectedTab === label && 'text-white'}`}
        >
            <File
                height={18}
                width={18}
                color={selectedTab === label ? '#FEA55F' : '#607B96'}
            />

            <p>
                {label}
            </p>
        </button>
    );
};

export default FileButton;
