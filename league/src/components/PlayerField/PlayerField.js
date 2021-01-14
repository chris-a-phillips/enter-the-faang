import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../GameContext';
import { PlayerFieldLabel, PlayerFieldWrapper, PlayerFlexContainer, TitanContainer, TitanHealth, TitanName, TitanStats } from './SCPlayerField';

const PlayerField = ({ playerTeam, functions, allCards }) => {
	const { involved, setInvolved } = useContext(GameContext);
	const [activeTitans, setActiveTitans] = useState(playerTeam.slice(0, 2));
	const [cardHand, setCardHand] = useState(allCards.slice(0, 5))

	function swap(list, activeOne, activeTwo) {
		list[activeOne] = list.splice(activeTwo, 1, list[activeOne])[0];
		setActiveTitans(playerTeam.slice(0, 2));
	}

	console.log(allCards)

	useEffect(() => {
		console.log(involved)
		setCardHand(allCards.slice(0, 5))
	}, [ activeTitans, functions, playerTeam, allCards])

	return (
		<PlayerFieldWrapper>
			<PlayerFieldLabel>Titans</PlayerFieldLabel>
			<PlayerFlexContainer>
				{playerTeam.slice(0, 2).map((unit) => {
					return (
						<TitanContainer
							key={unit.name}
							onClick={() => {
								functions.initiate(unit);
								functions.choose(unit);
							}
							}
							>
							<TitanName>{unit.name}</TitanName>
							<TitanHealth>{unit.health}</TitanHealth>
							<TitanStats>
								<p>{unit.kingdom}</p>
							</TitanStats>
							<button onClick={() => swap(playerTeam, 0, 4)}>
								swap
							</button>
						</TitanContainer>
					);
				})}
			</PlayerFlexContainer>
				<PlayerFlexContainer>
				{cardHand.map((card) => {
					return (
						<div key={card.name}>
							<p>{card.name}</p>
							<p>{card.type}</p>
							<button onClick={() => functions.useCard(card)}>
								attack
							</button>
						</div>
					);
				})}
			</PlayerFlexContainer>
			{playerTeam.slice(2).map((unit) => unit.name)}
		</PlayerFieldWrapper>
	);
};

export default PlayerField;