import React, { createContext, useState, FunctionComponent, useMemo } from 'react';

interface TabsContextInterface {
    selectedAboutTab: string;
    setSelectedAboutTab: React.Dispatch<React.SetStateAction<string>>

    openedAboutTabs: string[];
    setOpenedAboutTabs: React.Dispatch<React.SetStateAction<string[]>>;

    selectedProjectsTab: string;
    setSelectedProjectsTab: React.Dispatch<React.SetStateAction<string>>

    openedProjectsTabs: string[];
    setOpenedProjectsTabs: React.Dispatch<React.SetStateAction<string[]>>;
}

const initialState: TabsContextInterface = {
    selectedAboutTab: 'bio',
    setSelectedAboutTab: () => null,

    openedAboutTabs: ['bio'],
    setOpenedAboutTabs: () => null,

    selectedProjectsTab: 'summary',
    setSelectedProjectsTab: () => null,

    openedProjectsTabs: ['summary'],
    setOpenedProjectsTabs: () => null,
};

export const TabsContext = createContext<TabsContextInterface>(initialState);

interface TabsProviderProps {
    children: React.ReactNode;
}

const TabsProvider: FunctionComponent<TabsProviderProps> = (props: TabsProviderProps) => {
    const { children } = props;

    const [selectedAboutTab, setSelectedAboutTab] = useState('bio');
    const [openedAboutTabs, setOpenedAboutTabs] = useState<string[]>(['bio']);

    const [selectedProjectsTab, setSelectedProjectsTab] = useState('summary');
    const [openedProjectsTabs, setOpenedProjectsTabs] = useState<string[]>(['summary']);

    const memoValue: TabsContextInterface = useMemo(() => ({
        selectedAboutTab,
        setSelectedAboutTab,
        openedAboutTabs,
        setOpenedAboutTabs,
        selectedProjectsTab,
        setSelectedProjectsTab,
        openedProjectsTabs,
        setOpenedProjectsTabs,
    }), [selectedAboutTab, setSelectedAboutTab, openedAboutTabs, setOpenedAboutTabs, selectedProjectsTab, setSelectedProjectsTab, openedProjectsTabs, setOpenedProjectsTabs]);

    return (
        <TabsContext.Provider value={memoValue}>
            {children}
        </TabsContext.Provider>
    );
};

export default TabsProvider;
