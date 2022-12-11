import React, { FunctionComponent, useContext } from 'react';

import { AboutTabsContext } from 'contexts/AboutTabs';

import { Caret, Email, LinkedInFull } from 'assets/icons';

import NoFileOpened from './NoFileOpened';
import Bio from './Bio';
import Experiences from './Experiences';
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';

import TopBar from './components/TopBar';
import FileButton from './components/FileButton';
import FolderButton from './components/FolderButton';

const AboutScreen: FunctionComponent = () => {
    const { openedTabs, setOpenedTabs, selectedTab, setSelectedTab } = useContext(AboutTabsContext);

    const fileButtonClickHandler = (label: string) => {
        setSelectedTab(label);
        setOpenedTabs((prev: string[]) => {
            if (prev.find(item => item === label)) return prev;
            return [...prev, label];
        });
    };

    const topBarButtonClickHandler = (label: string) => {
        const filteredTabs = openedTabs.filter(item => item !== label);

        setOpenedTabs(filteredTabs);

        const indexOfClosedTab = openedTabs.indexOf(label);

        // // If you close a tab using the top bar while ure on a file, it will default to the first opened file just like in vscode
        if (filteredTabs.length > 0) {
            setSelectedTab(indexOfClosedTab > 0 ? openedTabs[0] : openedTabs[1]);
        } else {
            setSelectedTab('');
        }
    };

    const renderFile = () => {
        switch (selectedTab) {
            case 'bio': return <Bio />;
            case 'exp-summary': return <Experiences />;
            case 'front-end': return <FrontEnd />;
            case 'back-end': return <BackEnd />;
            default: return <NoFileOpened />;
        }
    };

    return (
        <div className='flex justify-center flex-1 overflow-hidden'>
            <div className='w-[15%] border-r border-r-line'>
                <div className='flex items-center w-full gap-2 p-2 px-4 border-b border-b-line h-fit'>
                    <Caret
                        height={12}
                        width={12}
                    />

                    <p>
                        personal-info
                    </p>
                </div>

                <div className='mb-6'>
                    <FolderButton
                        folderLabel='experiences'
                        folderColour='#E99287'
                        files={['exp-summary', 'front-end', 'back-end']}
                        onClick={fileButtonClickHandler}
                    />

                    <FolderButton
                        folderLabel='education'
                        folderColour='#4D5BCE'
                        files={['university', 'college']}
                        onClick={fileButtonClickHandler}
                    />

                    <FolderButton
                        folderLabel='interests'
                        folderColour='#3C9D93'
                        files={['coding', 'games', 'music', 'art']}
                        onClick={fileButtonClickHandler}
                    />

                    <FileButton
                        label='bio'
                        onClick={() => fileButtonClickHandler('bio')}
                    />
                </div>

                <div className='flex items-center w-full gap-2 p-2 px-4 border-y border-y-line h-fit'>
                    <Caret
                        height={12}
                        width={12}
                    />

                    <p>
                        contacts
                    </p>
                </div>

                <div className='mb-6'>
                    <button
                        type='button'
                        // onClick={onClick}
                        className='flex items-center w-full gap-2 p-2 px-4 hover:bg-primary-light text-secondary-grey'
                    >
                        <Email
                            height={18}
                            width={18}
                        />

                        <p>
                            syhzrl@gmail.com
                        </p>
                    </button>

                    <button
                        type='button'
                        // onClick={onClick}
                        className='flex items-center w-full gap-2 p-2 px-4 overflow-hidden hover:bg-primary-light text-secondary-grey whitespace-nowrap text-ellipsis'
                    >
                        <LinkedInFull
                            height={18}
                            width={18}
                        />

                        <p>
                            syahzril-aiman
                        </p>
                    </button>
                </div>
            </div>

            <div className='w-[85%] flex flex-col'>
                <TopBar
                    tabs={openedTabs}
                    onClick={topBarButtonClickHandler}
                />

                {renderFile()}
            </div>
        </div>
    );
};

export default AboutScreen;
