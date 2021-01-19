import React from 'react';

import {
	EnemyFieldWrapper,
	EnemyFieldLabel,
	EnemyFlexContainer,
	FaangContainer,
	FaangName,
	FaangHealth,
	FaangStats,
	FaangHeader,
	FaangContent,
} from './SCEnemyField';

const EnemyField = ({ enemyUnits, functions }) => {
	console.log(enemyUnits.slice(0, 5));

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
							<FaangContent unit={unit}>
							<FaangHeader unit={unit}>
							<FaangName>{unit.pedigree} {unit.name}</FaangName>
							</FaangHeader>
							<FaangHealth>health: {unit.health}</FaangHealth>
							</FaangContent>
							<p>{unit.rank} {unit.species}</p>
						</FaangContainer>
					);
				})}
			</EnemyFlexContainer>
		</EnemyFieldWrapper>
	);
};

export default EnemyField;
