import { createContext, useContext, ReactNode, useState } from 'react';

interface YouZState {
    Task: number;
    Info: string;
}

interface YouZContextType {
    youZState: YouZState;
    setYouZState: (state: YouZState) => void;
}

const YouZContext = createContext<YouZContextType | undefined>(undefined);

export function YouZProvider({ children }: { children: ReactNode }) {
    const [youZState, setYouZState] = useState<YouZState>({
        Task: 0,
        Info: ""
    });

    return (
        <YouZContext.Provider value={{ youZState, setYouZState }}>
            {children}
        </YouZContext.Provider>
    );
}

export function useYouZ() {
    const context = useContext(YouZContext);
    if (context === undefined) {
        throw new Error('useYouZ must be used within a YouZProvider');
    }
    return context;
}