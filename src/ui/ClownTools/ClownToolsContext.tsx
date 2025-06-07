import { createContext, useContext, ReactNode, useState } from 'react';

interface ClownToolsState {
    Task: any;
    Info: any;
}

interface ClownToolsContextType {
    clownToolsState: ClownToolsState;
    setClownToolsState: (state: ClownToolsState) => void;
}

const ClownToolsContext = createContext<ClownToolsContextType | undefined>(undefined);

export function ClownToolsProvider({ children }: { children: ReactNode }) {
    const [clownToolsState, setClownToolsState] = useState<ClownToolsState>({
        Task: {},
        Info: {}
    });

    return (
        <ClownToolsContext.Provider value={{ clownToolsState, setClownToolsState }}>
            {children}
        </ClownToolsContext.Provider>
    );
}

export function useClownTools() {
    const context = useContext(ClownToolsContext);
    if (context === undefined) {
        throw new Error('useYouZ must be used within a YouZProvider');
    }
    return context;
}