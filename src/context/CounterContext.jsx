import { createContext, useState } from "react";

export const CounterContext = createContext();

function CounterProvider({ children }) {
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

    const incrementByAmount = (value) => {
        setState(prev => ({ value: prev.value + value }));
    }


    return (
        <CounterContext value={{ counter, increment, decrement, incrementByAmount }}>
            {children}
        </CounterContext>
    )

}
export default CounterProvider;