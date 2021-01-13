import React from 'react';
import { PlayerFieldLabel, PlayerFieldWrapper, PlayerFlexContainer, TitanContainer, TitanHealth, TitanName, TitanStats } from './SCPlayerField';

const PlayerField = ({ playerTeam, target, setTarget }) => {

	console.log(playerTeam)

	let activeTitans = playerTeam.slice(0, 2)

	const swap = () => {
		let swapped = activeTitans.splice(1, 1, playerTeam[4])

		console.log(swapped)
		// console.log(activeTitans)
	}

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
				<button onClick={swap}>swap</button>
			</PlayerFlexContainer>
				{playerTeam.slice(2).map((unit) => unit.name)}
		</PlayerFieldWrapper>
	);
};

export default PlayerField;