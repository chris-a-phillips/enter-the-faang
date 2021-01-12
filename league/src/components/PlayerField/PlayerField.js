import React from 'react';
import { FlexContainer } from '../KingdomField/SCKingdomField';
import { PlayerFieldLabel, PlayerFieldWrapper, TitanContainer, TitanName, TitanStats } from './SCPlayerField';

const PlayerField = ({ playerTeam }) => {

	console.log(playerTeam)

// 	attack: 100.9
// defense: 48.47222222222222
// element: "Fire"
// energy: 8
// health: 54.60000000000001
// isAlive: true
// kingdom: "Fire Kingdom"
// name: "Ajna"
// regeneration: 8.033333333333333
// showcase: {health: 6, attack: 9, defense: 5, energy: 8, regeneration: 4, …}
// speed: 64.4
// zen: 5

    return (
		<PlayerFieldWrapper>
			<PlayerFieldLabel>Player Titans</PlayerFieldLabel>
			<FlexContainer>
			{playerTeam.slice(0, 2).map((unit) => {
				return (
					<TitanContainer key={unit.name}>
						<TitanName>{unit.name}</TitanName>
						<TitanStats>
							<p>{unit.kingdom}</p>
						</TitanStats>
					</TitanContainer>
				)
			})}
			</FlexContainer>
		</PlayerFieldWrapper>
	);
};

export default PlayerField;