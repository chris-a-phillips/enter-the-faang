import React from 'react';
import { GameRulesWrapper } from './SCGameRules';

const GameRules = () => {
	return (
		<GameRulesWrapper>
			<h1>Rules</h1>
			<h3>Win</h3>
			<p>Defeat all the Faangs</p>
			<h3>Lose</h3>
			<p>Lose all of your titans</p>
			<p>Lose all of your kingdoms</p>
            <h3>Turns</h3>
            <ol>
                <li>New random cards are added to the players' hand from the deck</li>
                <li>Swap titans between active ones and reserves (optional)</li>
                <li>Select the card, the titan to use it, and the target</li>
                <li>After End Turn button is clicked all of the units take their turns according to their speed</li>
                <li>If units are defeated, they are replaced after the damage step</li>
            </ol>
		</GameRulesWrapper>
	);
};

export default GameRules;
