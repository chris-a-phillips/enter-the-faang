import { createContext } from 'react';

export const GameContext = createContext({
    initiator: '',
    possibleTargets: [],
    selectedTarget: '',
    card: '',
    action: false
})