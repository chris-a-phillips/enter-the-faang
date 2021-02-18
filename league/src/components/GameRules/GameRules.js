import React, { useEffect, useRef } from 'react';
import { GameRulesWrapper, RulesDiv, RulesH3, RulesHeading, RulesLI, RulesOL, RulesP } from './SCGameRules';

const GameRules = ({ showRules, setShowRules}) => {
	const panel = useRef()

	const handleClick = (e) => {
		if (!panel.current.contains(e.target)) {
			setShowRules(!showRules)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClick)

		return() => {
			document.removeEventListener('mousedown', handleClick)
		}
	}, [])

	return (
		<GameRulesWrapper ref={panel}>
			<RulesHeading>Rules</RulesHeading>
			<RulesDiv>

			<RulesH3>Win</RulesH3>
			<RulesP>Defeat all the Faangs</RulesP>
			</RulesDiv>
			<RulesDiv>

			<RulesH3>Lose</RulesH3>
			<RulesP>Lose all of your titans</RulesP>
			<RulesP>Lose all of your kingdoms</RulesP>
			</RulesDiv>

			<RulesDiv>

            <RulesH3>Turns</RulesH3>
            <RulesOL>
                <RulesLI>New random cards are added to the players' hand from the deck</RulesLI>
                <RulesLI>Swap titans between active ones and reserves (optional)</RulesLI>
                <RulesLI>Select the card, the titan to use it, and the target</RulesLI>
                <RulesLI>After <button>End Turn</button> button is clicked all of the units take their turns according to their speed</RulesLI>
                <RulesLI>If units are defeated, they are replaced after the damage step</RulesLI>
            </RulesOL>
			</RulesDiv>
		</GameRulesWrapper>
	);
};

export default GameRules;
