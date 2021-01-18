import React from 'react';

import { EnemyFieldWrapper, EnemyFieldLabel, EnemyFlexContainer, FaangContainer, FaangName, FaangHealth, FaangStats } from './SCEnemyField'

const EnemyField = ({ enemyUnits, functions }) => {

    console.log(enemyUnits.slice(0, 5))

    return (
		<EnemyFieldWrapper>
			<EnemyFieldLabel>Enemies</EnemyFieldLabel>
			<EnemyFlexContainer>
				{enemyUnits.slice(0, 5).map((unit) => {
					return (
						<FaangContainer
							unit={unit}
							key={`${unit.rank} ${unit.species} : ${unit.pedigree} ${unit.name}`}
							onClick={() => functions.choose(unit)}>
							<FaangName>{unit.name}</FaangName>
							<p>rank: {unit.rank}</p>
							<p>pedigree: {unit.pedigree}</p>
							<p>species: {unit.species}</p>
							<FaangHealth>health: {unit.health}</FaangHealth>
							<FaangStats>
								<p>attack: {unit.attack}</p>
								<p>defense: {unit.defense}</p>
								<p>regeneration: {unit.regeneration}</p>
								<p>speed: {unit.speed}</p>
							</FaangStats>
						</FaangContainer>
					);
				})}
			</EnemyFlexContainer>
		</EnemyFieldWrapper>
	);
};


export default EnemyField;