import React, { FunctionComponent, useContext } from 'react';

import { AboutTabsContext } from 'contexts/AboutTabs';

import { Caret } from 'assets/icons';

import NoFileOpened from './components/NoFileOpened';
import TopBar from './components/TopBar';
import Bio from './components/Bio';
import FileButton from './components/FileButton';
import FolderButton from './components/FolderButton';
import Experiences from './components/Experiences';
import FrontEnd from './components/FrontEnd';
import BackEnd from './components/BackEnd';

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
        <div className='flex items-stretch justify-center flex-1'>
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

                <div>
                    <FolderButton
                        folderLabel='experiences'
                        folderColour='#E99287'
                        files={['exp-summary', 'front-end', 'back-end']}
                        onClick={fileButtonClickHandler}
                    />

                    <FileButton
                        label='bio'
                        onClick={() => fileButtonClickHandler('bio')}
                    />
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
