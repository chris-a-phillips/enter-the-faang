import React from 'react';
import { GameRulesWrapper, RulesH3, RulesHeading, RulesLI, RulesOL, RulesP } from './SCGameRules';

const GameRules = () => {
	return (
		<GameRulesWrapper>
			<RulesHeading>Rules</RulesHeading>
			<RulesH3>Win</RulesH3>
			<RulesP>Defeat all the Faangs</RulesP>
			<RulesH3>Lose</RulesH3>
			<RulesP>Lose all of your titans</RulesP>
			<RulesP>Lose all of your kingdoms</RulesP>
            <RulesH3>Turns</RulesH3>
            <RulesOL>
                <RulesLI>New random cards are added to the players' hand from the deck</RulesLI>
                <RulesLI>Swap titans between active ones and reserves (optional)</RulesLI>
                <RulesLI>Select the card, the titan to use it, and the target</RulesLI>
                <RulesLI>After End Turn button is cRulesLIcked all of the units take their turns according to their speed</RulesLI>
                <RulesLI>If units are defeated, they are replaced after the damage step</RulesLI>
            </RulesOL>
		</GameRulesWrapper>
	);
};

export default GameRules;
