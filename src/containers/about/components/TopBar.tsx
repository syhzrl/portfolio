import React, { FunctionComponent, useContext } from 'react';

import { AboutTabsContext } from 'contexts/AboutTabs';

import { Close, File } from 'assets/icons';

interface TopBarProps {
    tabs: string[];
    onClick: (label: string) => void;
}

const TopBar: FunctionComponent<TopBarProps> = (props: TopBarProps) => {
    const { tabs, onClick } = props;

    const { selectedTab, setSelectedTab } = useContext(AboutTabsContext);

    if (tabs.length < 1) return null;

    return (
        <div className='flex w-full overflow-auto overflow-y-hidden border-b h-fit border-b-line'>
            {tabs.map(item => {
                return (
                    <div
                        key={item}
                        onMouseDown={(event) => { if (event.button === 1) event.preventDefault(); }}
                        onAuxClick={(event) => { if (event.button === 1) event.preventDefault(); onClick(item); }}
                        className={`flex items-center whitespace-nowrap text-secondary-grey gap-2 border-r border-r-line w-fit hover:bg-primary-light ${selectedTab === item && 'text-white'}`}
                    >
                        <button
                            type='button'
                            className='flex w-full gap-2 p-2 px-4'
                            onClick={() => setSelectedTab(item)}
                        >
                            <File
                                height={18}
                                width={18}
                                color={selectedTab === item ? '#FEA55F' : '#607B96'}
                            />

                            <p>
                                {item}
                            </p>
                        </button>
                        <button
                            type='button'
                            className='p-2 px-4 transition-colors duration-150 text-secondary-grey hover:text-white'
                            onClick={() => onClick(item)}

                        >
                            <Close height={15} width={15} />
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default TopBar;
