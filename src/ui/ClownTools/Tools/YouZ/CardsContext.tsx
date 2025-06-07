import { createContext, useContext, ReactNode, useState } from 'react';

interface CardsState {
    Task: any;
}

interface CardsContextType {
    cardsState: CardsState;
    setCardsState: (state: CardsState) => void;
}

const CardsContext = createContext<CardsContextType | undefined>(undefined);

export function CardsProvider({ children }: { children: ReactNode }) {
    const [cardsState, setCardsState] = useState<CardsState>({
        Task: {}
    });

    return (
        <CardsContext.Provider value={{ cardsState, setCardsState }}>
            {children}
        </CardsContext.Provider>
    );
}

export function useCardsState() {
    const context = useContext(CardsContext);
    if (context === undefined) {
        throw new Error('useCards must be used within a CardsContext');
    }
    return context;
}