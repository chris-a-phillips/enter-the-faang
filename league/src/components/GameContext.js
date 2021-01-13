import { createContext } from 'react';

export const GameContext = createContext({
    initiator: '',
    possibleTargets: '',
    selectedTarget: '',
    action: false
})