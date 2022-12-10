import React, { FunctionComponent, useContext } from 'react';

import { AboutTabsContext } from 'contexts/AboutTabs';

import { File } from 'assets/icons';

interface FileButtonProps {
    label: string;
    onClick: () => void;
}

const FileButton: FunctionComponent<FileButtonProps> = (props: FileButtonProps) => {
    const { label, onClick } = props;
    const { selectedTab } = useContext(AboutTabsContext);

    return (
        <button
            type='button'
            onClick={onClick}
            className={`flex items-center w-full gap-2 p-2 px-4 hover:bg-primary-light ${selectedTab === label && 'bg-line'}`}
        >
            <File
                height={18}
                width={18}
                color='#607B96'
            />

            <p>
                {label}
            </p>
        </button>
    );
};

export default FileButton;
