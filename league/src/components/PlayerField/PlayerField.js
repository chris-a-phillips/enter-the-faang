import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../GameContext';
import { PlayerFieldLabel, PlayerFieldWrapper, PlayerFlexContainer, TitanContainer, TitanHealth, TitanName, TitanStats } from './SCPlayerField';

const PlayerField = ({ playerTeam, target, setTarget, functions }) => {
	const { involved, setInvolved } = useContext(GameContext);
	const [activeTitans, setActiveTitans] = useState(playerTeam.slice(0, 2));
	// const { involved, setInvolved } = useContext(GameContext);

	// console.log(involved);

	// console.log(Functions.choose())

	function swap(list, activeOne, activeTwo) {
		list[activeOne] = list.splice(activeTwo, 1, list[activeOne])[0];
		setActiveTitans([playerTeam[0], playerTeam[1]]);
		return list;
	}

	console.log(functions)

	// 1 setInvolved initiator to specific object (choose)
	// 2 setInvolved possibleTargets
	// 3 setInvolved selectedTarget (select)
	// reset setInvolved

	// SELECT, CHOOSE, ACTION

	// select this action with the click
	function select(a) {
		// 1 SELECT
		console.log(a)
		// set initiator to where the button was clicked
		// set action to what was clicked
		setInvolved({ ...involved, initiator: a, action: 'attack'});
	}

	// choose this action once select is opened
	function choose(b) {
		// 2 CHOOSE
		// do stuff only if button was clicked
		if (involved.action) {
			// set selected target to the next click
			setInvolved({ ...involved, selectedTarget: b})
			// depending on the action do something
			if (involved.action === 'attack') {
				console.log(involved)
				// perform this action using the selected target
				attack(involved.initiator, b);
			}
		}
	}

	// actions to take
	// attacker is where the first button was clicked (involved.initiator)
	// target is the second click (involved.selectedTarget)
	const attack = (attacker, target) => {
		// 3 ACTION
		if (attacker !== target) {
			attacker.attackUnit(target);
		} else {
			console.log('CHOOSE NEW TARGET')
		}
		// set action in involved to false so only this click is registered
		setInvolved({ ...involved, action: false});
	}

	useEffect(() => {}, [activeTitans]);

	return (
		<PlayerFieldWrapper>
			<PlayerFieldLabel>Titans</PlayerFieldLabel>
			<PlayerFlexContainer>
				{activeTitans.map((unit) => {
					return (
						<TitanContainer
							key={unit.name}
							onClick={() => functions.choose(unit)}
							>
							<TitanName>{unit.name}</TitanName>
							<TitanHealth>{unit.health}</TitanHealth>
							<TitanStats>
								<p>{unit.kingdom}</p>
							</TitanStats>
							<button onClick={() => functions.select(unit)}>attack</button>
						</TitanContainer>
					);
				})}
				<button onClick={() => swap(playerTeam, 0, 4)}>swap</button>
				{/* <button onClick={test}>console log next click</button> */}
			</PlayerFlexContainer>
			{playerTeam.slice(2).map((unit) => unit.name)}
		</PlayerFieldWrapper>
	);
};

export default PlayerField;