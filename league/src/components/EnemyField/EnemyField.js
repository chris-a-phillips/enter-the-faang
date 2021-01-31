import React, { useState, useEffect } from 'react';

import {
	EnemyFieldWrapper,
	EnemyFieldLabel,
	EnemyFlexContainer,
	FaangContainer,
	FaangName,
	HealthBar,
	HealthBarContainer,
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
							key={enemyUnits.indexOf(unit)}
							onClick={() => functions.choose(unit)}>
							<FaangContent unit={unit}>
								<FaangHeader unit={unit}>
									<FaangName>
										<h4>{unit.pedigree}</h4>
										<h4>{unit.name}</h4>
									</FaangName>
								</FaangHeader>
								<HealthBarContainer unit={unit}>
									<HealthBar
										unit={unit}
										percent={Math.round(
											(unit.currentHealth /
												unit.maxHealth) *
												100
										)}>
										{Math.round(
											(unit.currentHealth /
												unit.maxHealth) *
												100
										)}
										%
									</HealthBar>
								</HealthBarContainer>
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
