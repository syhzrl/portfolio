import React, { createContext, useState, FunctionComponent, useMemo } from 'react';

interface AboutTabsContextInterface {
    selectedTab: string;
    setSelectedTab: React.Dispatch<React.SetStateAction<string>>

    openedTabs: string[];
    setOpenedTabs: React.Dispatch<React.SetStateAction<string[]>>;
}

const initialState: AboutTabsContextInterface = {
    selectedTab: '',
    setSelectedTab: () => null,

    openedTabs: [],
    setOpenedTabs: () => null,
};

export const AboutTabsContext = createContext<AboutTabsContextInterface>(initialState);

interface AboutTabsProviderProps {
    children: React.ReactNode;
}

const AboutTabsProvider: FunctionComponent<AboutTabsProviderProps> = (props: AboutTabsProviderProps) => {
    const { children } = props;

    const [selectedTab, setSelectedTab] = useState('');
    const [openedTabs, setOpenedTabs] = useState<string[]>([]);

    const memoValue: AboutTabsContextInterface = useMemo(() => ({
        selectedTab,
        setSelectedTab,
        openedTabs,
        setOpenedTabs,
    }), [selectedTab, setSelectedTab, openedTabs, setOpenedTabs]);

    return (
        <AboutTabsContext.Provider value={memoValue}>
            {children}
        </AboutTabsContext.Provider>
    );
};

export default AboutTabsProvider;
