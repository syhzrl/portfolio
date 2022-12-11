import React, { FunctionComponent, useContext, useState } from 'react';

import { TabsContext } from 'contexts/Tabs';

import { Caret, Email, LinkedInFull, React as ReactIcon, Tailwind, Tick, NestJs } from 'assets/icons';

import FolderButton from 'components/FolderButton';
import FileButton from 'components/FileButton';
import TopBar from 'components/TopBar';
import NoFileOpened from 'components/NoFileOpened';

// interface TechStackButtonProps {
//     label: string;
//     selected: boolean;
//     icon: any;
//     onClick: (value: string) => void;
// }

// const TechStackButton: FunctionComponent<TechStackButtonProps> = (props: TechStackButtonProps) => {
//     const { label, selected, icon, onClick } = props;

//     const clickHandler = () => {
//         onClick(label);
//     };

//     return (
//         <div className='flex items-center gap-4 p-2 px-6'>
//             <button
//                 type='button'
//                 onClick={clickHandler}
//                 className={`flex items-center justify-center p-1 border rounded-md w-7 h-7 border-line ${selected ? 'bg-secondary-grey' : 'bg-transparent'}`}
//             >
//                 <Tick color={`${selected ? 'white' : 'transparent'}`} />
//             </button>

//             <div className='flex items-center gap-2'>
//                 {/* <ReactIcon
//                     height={25}
//                     width={25}
//                 /> */}

//                 {icon}

//                 <p>
//                     {label}
//                 </p>
//             </div>
//         </div>
//     );
// };

const ProjectsScreen: FunctionComponent = () => {
    const { openedProjectsTabs, setOpenedProjectsTabs, selectedProjectsTab, setSelectedProjectsTab } = useContext(TabsContext);

    const fileButtonClickHandler = (label: string) => {
        setSelectedProjectsTab(label);
        setOpenedProjectsTabs((prev: string[]) => {
            if (prev.find(item => item === label)) return prev;
            return [...prev, label];
        });
    };

    const topBarButtonClickHandler = (label: string) => {
        const filteredTabs = openedProjectsTabs.filter(item => item !== label);

        setOpenedProjectsTabs(filteredTabs);

        const indexOfClosedTab = openedProjectsTabs.indexOf(label);

        // // If you close a tab using the top bar while ure on a file, it will default to the first opened file just like in vscode
        if (filteredTabs.length > 0) {
            setSelectedProjectsTab(indexOfClosedTab > 0 ? openedProjectsTabs[0] : openedProjectsTabs[1]);
        } else {
            setSelectedProjectsTab('');
        }
    };

    const renderFile = () => {
        switch (selectedProjectsTab) {
            case 'summary': return <NoFileOpened />;
            default: return <NoFileOpened />;
        }
    };

    return (
        <div className='flex flex-1'>
            <div className='w-[15%] border-r border-r-line h-full flex flex-col gap-2'>
                <div className='flex items-center w-full gap-2 p-2 px-4 border-b border-b-line h-fit'>
                    <Caret
                        height={12}
                        width={12}
                    />

                    <p>
                        projects
                    </p>
                </div>

                <div className='mb-6'>
                    <FolderButton
                        folderLabel='work projects'
                        folderColour='#4D5BCE'
                        selectedTab={selectedProjectsTab}
                        files={['double-dot', 'sans-paper']}
                        onClick={fileButtonClickHandler}
                    />

                    <FolderButton
                        folderLabel='side projects'
                        folderColour='#3C9D93'
                        selectedTab={selectedProjectsTab}
                        files={['front-end', 'back-end', 'full-stack']}
                        onClick={fileButtonClickHandler}
                    />

                    <FileButton
                        label='summary'
                        selectedTab={selectedProjectsTab}
                        onClick={() => fileButtonClickHandler('summary')}
                    />
                </div>
            </div>

            <div className='w-[85%] flex flex-col'>
                <TopBar
                    tabs={openedProjectsTabs}
                    selectedTab={selectedProjectsTab}
                    setSelectedTab={setSelectedProjectsTab}
                    onClick={topBarButtonClickHandler}
                />

                {renderFile()}
            </div>
        </div>
    );
};

export default ProjectsScreen;
