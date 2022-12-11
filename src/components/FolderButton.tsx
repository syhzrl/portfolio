import React, { FunctionComponent, useState, useEffect } from 'react';

import { Chevron, Folder } from 'assets/icons';

import FileButton from './FileButton';

interface FolderButtonProps {
    folderLabel: string;
    folderColour: string;
    selectedTab: string;
    files: string[];
    onClick: (label: string) => void;
}

const FolderButton: FunctionComponent<FolderButtonProps> = (props: FolderButtonProps) => {
    const { folderLabel, folderColour, selectedTab, onClick, files } = props;

    const [showFiles, setShowFiles] = useState(false);
    const [isFileOpened, setIsFileOpened] = useState(false);

    useEffect(() => {
        if (files.includes(selectedTab)) {
            setIsFileOpened(true);
            setShowFiles(true);
            return;
        }

        setIsFileOpened(false);
    }, [selectedTab, files]);

    return (
        <>
            <button
                type='button'
                onClick={() => setShowFiles(!showFiles)}
                className={`flex items-center w-full gap-2 p-2 px-4 hover:bg-primary-light ${isFileOpened ? 'text-white' : 'text-secondary-grey'}`}
            >
                <div className={`${showFiles && 'rotate-90'} transition-transform duration-150`}>
                    <Chevron
                        height={16}
                        width={16}
                        color='#607B96'
                    />
                </div>

                <Folder
                    height={18}
                    width={18}
                    color={folderColour}
                />

                <p>
                    {folderLabel}
                </p>
            </button>

            {showFiles && (
                <>
                    {files.map(item => {
                        return (
                            <div
                                key={item}
                                className='px-6 hover:bg-primary-light'
                            >
                                <FileButton
                                    label={item}
                                    selectedTab={selectedTab}
                                    onClick={() => onClick(item)}
                                />
                            </div>
                        );
                    })}
                </>
            )}
        </>
    );
};

export default FolderButton;
