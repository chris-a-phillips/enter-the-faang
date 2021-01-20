import React from 'react';

import {
	EnemyFieldWrapper,
	EnemyFieldLabel,
	EnemyFlexContainer,
	FaangContainer,
	FaangName,
	FaangHealth,
	FaangHeader,
	FaangContent,
	EnemyRank,
} from './SCEnemyField';

const EnemyField = ({ enemyUnits, functions }) => {

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
									<FaangName>
										{unit.pedigree} {unit.name}
									</FaangName>
								</FaangHeader>
								<FaangHealth>
									health: {Math.floor(unit.health)}
								</FaangHealth>
							</FaangContent>
							<EnemyRank>
								{unit.rank} {unit.species}
							</EnemyRank>
						</FaangContainer>
					);
				})}
			</EnemyFlexContainer>
		</EnemyFieldWrapper>
	);
};

export default EnemyField;
