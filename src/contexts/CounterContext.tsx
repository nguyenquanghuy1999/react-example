import React, { createContext, useState } from "react";


type CounterContextProps = {
    counter: number,
    increment: () => void,
    decrement: () => void,
    incrementByAmount: (value: number) => void
}

export const CounterContext = createContext<CounterContextProps | undefined>(undefined);

function CounterProvider({ children }: { children: React.ReactNode }) {
    
    const [state, setState] = useState({
        value: 0,
    });

    const counter = state.value;

    const increment = () => {
        setState(prev => ({ value: prev.value + 1 }));
    }

    const decrement = () => {
        setState(prev => ({ value: prev.value - 1 }));
    }

    const incrementByAmount = (value: number) => {
        setState((prev: { value: number }) => ({ value: prev.value + value }));
    }


    return (
        <CounterContext value={{ counter, increment, decrement, incrementByAmount }}>
            {children}
        </CounterContext>
    )

}
export default CounterProvider;