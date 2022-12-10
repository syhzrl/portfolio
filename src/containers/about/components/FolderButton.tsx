import React, { FunctionComponent, useState, useContext } from 'react';

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

    return (
        <div>
            <button
                type='button'
                onClick={() => setShowFiles(!showFiles)}
                className='flex items-center w-full gap-2 p-2 px-4 hover:bg-primary-light'
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

            <div>
                {showFiles && (
                    <>
                        {files.map(item => {
                            return (
                                <div className={`px-6 ${selectedTab === item && 'bg-line'} hover:bg-primary-light`}>
                                    <FileButton
                                        key={item}
                                        label={item}
                                        onClick={() => onClick(item)}
                                    />
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};

export default FolderButton;
