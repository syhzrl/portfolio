import React, { FunctionComponent, useContext } from 'react';

import { TabsContext } from 'contexts/Tabs';

import { Caret, Email, LinkedInFull } from 'assets/icons';

import TopBar from 'components/TopBar';
import FileButton from 'components/FileButton';
import FolderButton from 'components/FolderButton';
import NoFileOpened from 'components/NoFileOpened';

import Bio from './components/Bio';
import Experiences from './components/Experiences';
import FrontEnd from './components/FrontEnd';
import BackEnd from './components/BackEnd';

const AboutScreen: FunctionComponent = () => {
    const { openedAboutTabs, setOpenedAboutTabs, selectedAboutTab, setSelectedAboutTab } = useContext(TabsContext);

    const fileButtonClickHandler = (label: string) => {
        setSelectedAboutTab(label);
        setOpenedAboutTabs((prev: string[]) => {
            if (prev.find(item => item === label)) return prev;
            return [...prev, label];
        });
    };

    const topBarButtonClickHandler = (label: string) => {
        const filteredTabs = openedAboutTabs.filter(item => item !== label);

        setOpenedAboutTabs(filteredTabs);

        const indexOfClosedTab = openedAboutTabs.indexOf(label);

        // // If you close a tab using the top bar while ure on a file, it will default to the first opened file just like in vscode
        if (filteredTabs.length > 0) {
            setSelectedAboutTab(indexOfClosedTab > 0 ? openedAboutTabs[0] : openedAboutTabs[1]);
        } else {
            setSelectedAboutTab('');
        }
    };

    const renderFile = () => {
        switch (selectedAboutTab) {
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
                        selectedTab={selectedAboutTab}
                        files={['exp-summary', 'front-end', 'back-end']}
                        onClick={fileButtonClickHandler}
                    />

                    <FolderButton
                        folderLabel='education'
                        folderColour='#4D5BCE'
                        selectedTab={selectedAboutTab}
                        files={['university', 'college']}
                        onClick={fileButtonClickHandler}
                    />

                    <FolderButton
                        folderLabel='interests'
                        folderColour='#3C9D93'
                        selectedTab={selectedAboutTab}
                        files={['coding', 'games', 'music', 'art']}
                        onClick={fileButtonClickHandler}
                    />

                    <FileButton
                        label='bio'
                        selectedTab={selectedAboutTab}
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
                    tabs={openedAboutTabs}
                    selectedTab={selectedAboutTab}
                    setSelectedTab={setSelectedAboutTab}
                    onClick={topBarButtonClickHandler}
                />

                {renderFile()}
            </div>
        </div>
    );
};

export default AboutScreen;
