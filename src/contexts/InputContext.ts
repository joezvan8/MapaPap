import {createContext} from "react";

export interface InputContextType {
    input: string;
    setInput: (value: string) => void;
}

export const InputContext = createContext<InputContextType>({
    input: '',
    setInput: () => {},
});