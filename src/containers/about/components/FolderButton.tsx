import React, { FunctionComponent, useContext, useState, useEffect } from 'react';

import { AboutTabsContext } from 'contexts/AboutTabs';

import { Chevron, Folder } from 'assets/icons';

import FileButton from './FileButton';

interface FolderButtonProps {
    folderLabel: string;
    folderColour: string;
    files: string[];
    onClick: (label: string) => void;
}

const FolderButton: FunctionComponent<FolderButtonProps> = (props: FolderButtonProps) => {
    const { folderLabel, folderColour, onClick, files } = props;

    const { selectedTab } = useContext(AboutTabsContext);

    const [showFiles, setShowFiles] = useState(false);
    const [isFileOpened, setIsFileOpened] = useState(false);

    useEffect(() => {
        if (
            (folderLabel === 'experiences' && selectedTab === 'exp-summary')
            || (folderLabel === 'experiences' && selectedTab === 'front-end')
            || (folderLabel === 'experiences' && selectedTab === 'back-end')
        ) {
            setIsFileOpened(true);
            return;
        }

        if (
            (folderLabel === 'education' && selectedTab === 'university')
            || (folderLabel === 'education' && selectedTab === 'college')
        ) {
            setIsFileOpened(true);
            return;
        }

        if (
            (folderLabel === 'interests' && selectedTab === 'coding')
            || (folderLabel === 'interests' && selectedTab === 'games')
            || (folderLabel === 'interests' && selectedTab === 'music')
            || (folderLabel === 'interests' && selectedTab === 'art')
        ) {
            setIsFileOpened(true);
            return;
        }

        setIsFileOpened(false);
    }, [selectedTab, folderLabel]);

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
