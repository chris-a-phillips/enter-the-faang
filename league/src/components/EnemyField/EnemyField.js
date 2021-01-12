import React from 'react';

import { EnemyFieldWrapper, EnemyFieldLabel, FlexContainer, FaangContainer, FaangName, FaangHealth, FaangStats } from './SCEnemyField'

const EnemyField = ({ enemyUnits }) => {

    console.log(enemyUnits)

// attack: 40;
// defense: 70;
// health: 40;
// isAlive: true;
// name: 'Grosnur';
// pedigree: 'Corporal';
// rank: 'Basic';
// regeneration: 16.25;
// species: 'Met';
// speed: 30;

    return (
		<EnemyFieldWrapper>
			<EnemyFieldLabel>Titans</EnemyFieldLabel>
			<FlexContainer>
				{enemyUnits.slice(0, 5).map((unit) => {
					return (
						<FaangContainer key={unit.name}>
							<FaangName>{unit.name}</FaangName>
								<p>rank: {unit.rank}</p>
								<p>species: {unit.species}</p>
							<FaangHealth>{unit.health}</FaangHealth>
							<FaangStats>
								<p>attack: {unit.attack}</p>
								<p>defense: {unit.defense}</p>
								<p>regeneration: {unit.regeneration}</p>
								<p>speed: {unit.speed}</p>
							</FaangStats>
						</FaangContainer>
					);
				})}
			</FlexContainer>
		</EnemyFieldWrapper>
	);
};


export default EnemyField;