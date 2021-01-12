import React from 'react';
import { FlexContainer } from '../KingdomField/SCKingdomField';
import { PlayerFieldLabel, PlayerFieldWrapper, TitanContainer, TitanHealth, TitanName, TitanStats } from './SCPlayerField';

const PlayerField = ({ playerTeam }) => {

    return (
		<PlayerFieldWrapper>
			<PlayerFieldLabel>Titans</PlayerFieldLabel>
			<FlexContainer>
				{playerTeam.slice(0,2).map((unit) => {
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
			</FlexContainer>
		</PlayerFieldWrapper>
	);
};

export default PlayerField;