import React, { useState, useEffect } from 'react';

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
	const [enemyInfo, setEnemyInfo] = useState('');

	useEffect(() => {}, [enemyUnits]);

	return (
		<EnemyFieldWrapper>
			<EnemyFieldLabel>
				Enemies
				{enemyUnits.length}
			</EnemyFieldLabel>
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
										<h4>{unit.pedigree}</h4>
										<h4>{unit.name}</h4>
									</FaangName>
								</FaangHeader>
								<FaangHealth>
									<p>health: {Math.floor(unit.health)}</p>
								</FaangHealth>
							</FaangContent>
							<EnemyRank>
								<h5>{unit.rank}</h5>
								<h5>{unit.species}</h5>
							</EnemyRank>
						</FaangContainer>
					);
				})}
			</EnemyFlexContainer>
		</EnemyFieldWrapper>
	);
};

export default EnemyField;
