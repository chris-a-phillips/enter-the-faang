import React, { useState, useEffect } from 'react';
import { PlayerFieldLabel, PlayerFieldWrapper, PlayerFlexContainer, TitanContainer, TitanHealth, TitanName, TitanStats } from './SCPlayerField';

const PlayerField = ({ playerTeam, target, setTarget }) => {
	const [activeTitans, setActiveTitans] = useState(playerTeam.slice(0, 2))
	const [offender, setOffender] = useState(null)
	const [action, setAction] = useState(false)

	function swap(list, activeOne, activeTwo) {
		list[activeOne] = list.splice(activeTwo, 1, list[activeOne])[0]
		setActiveTitans([playerTeam[0], playerTeam[1]])
		return list;
	}

	function attack(attacker, target) {
		if (attacker !== target) {
			attacker.attackUnit(target)
		}
		setAction(false)
	}

	// select this action with the click
	function select(attacker) {
		setTarget('open')
		console.log(attacker)
		setOffender(attacker)
		setAction('attack')
	}

	// choose this action once select is opened
	function choose(clicked) {
		if (target === 'open') {
			console.log(clicked)
			setTarget(clicked)
			if (action === 'attack') {
				attack(offender, clicked)
			}
		}
	}

	useEffect(() => {
	}, [activeTitans])

    return (
		<PlayerFieldWrapper>
			<PlayerFieldLabel>Titans</PlayerFieldLabel>
			<PlayerFlexContainer>
				{activeTitans.map((unit) => {
					return (
						<TitanContainer
							key={unit.name}
							onClick={() => choose(unit)}>
							<TitanName>{unit.name}</TitanName>
							<TitanHealth>{unit.health}</TitanHealth>
							<TitanStats>
								<p>{unit.kingdom}</p>
							</TitanStats>
							<button onClick={() => select(unit)}>
								attack
							</button>
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