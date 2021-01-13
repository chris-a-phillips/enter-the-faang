import React, { useState, useEffect } from 'react';
import { PlayerFieldLabel, PlayerFieldWrapper, PlayerFlexContainer, TitanContainer, TitanHealth, TitanName, TitanStats } from './SCPlayerField';

const PlayerField = ({ playerTeam, target, setTarget }) => {
	const [activeTitans, setActiveTitans] = useState(playerTeam.slice(0, 2))

	// console.log(playerTeam)

	let counter = 0

	function swap(list, activeOne, activeTwo) {
		// console.log('original:', list[0])
		console.log(activeTitans)
		list[activeOne] = list.splice(activeTwo, 1, list[activeOne])[0]
		// console.log('swapped:', list[0])
		setActiveTitans([playerTeam[0], playerTeam[1]])
		// counter ++
		console.log(activeTitans)
		setTarget(counter)
		return list;
	}

	useEffect(() => {
	}, [activeTitans])

    return (
		<PlayerFieldWrapper>
			<PlayerFieldLabel>Titans</PlayerFieldLabel>
			<PlayerFlexContainer>
				{activeTitans.map((unit) => {
					return (
						<TitanContainer key={unit.name}>
							<TitanName>{unit.name}</TitanName>
							<TitanHealth>{unit.health}</TitanHealth>
							<TitanStats>
								<p>{unit.kingdom}</p>
							</TitanStats>
						</TitanContainer>
					)
				})}
				<button onClick={() => swap(playerTeam, 0, 4)}>swap</button>
			</PlayerFlexContainer>
			{playerTeam.slice(2).map((unit) => unit.name)}
		</PlayerFieldWrapper>
	);
};

export default PlayerField;