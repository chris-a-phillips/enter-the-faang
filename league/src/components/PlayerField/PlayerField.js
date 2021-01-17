import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../GameContext';
import { CardContainer, CardFlexContainer, PlayerFieldLabel, PlayerFieldWrapper, PlayerFlexContainer, TitanContainer, TitanHealth, TitanName, TitanStats } from './SCPlayerField';

const PlayerField = ({ playerTeam, functions, allCards }) => {
	const { involved, setInvolved } = useContext(GameContext);
	const [activeTitans, setActiveTitans] = useState(playerTeam.slice(0, 2));
	const [cardHand, setCardHand] = useState(allCards.slice(0, 5))

	function swap(list, activeOne, activeTwo) {
		list[activeOne] = list.splice(activeTwo, 1, list[activeOne])[0];
		setActiveTitans(playerTeam.slice(0, 2));
	}

	useEffect(() => {
		// console.log(involved)
		console.log(playerTeam)
		setCardHand(allCards.slice(0, 5))
	}, [activeTitans, functions, playerTeam, allCards])

	return (
		<PlayerFieldWrapper>
			<PlayerFieldLabel>Titans</PlayerFieldLabel>
			<PlayerFlexContainer>
				{playerTeam.slice(0, 2).map((titan) => {
					return (
						<TitanContainer
							titan={titan}
							key={titan.name}
							onClick={() => {
								functions.initiate(titan);
								functions.choose(titan);
							}
							}
							>
							<TitanName titan={titan}>{titan.name}</TitanName>
							<TitanHealth>{titan.health}</TitanHealth>
							<TitanStats>
								<p>{titan.kingdom}</p>
							</TitanStats>
							<button onClick={() => swap(playerTeam, 0, 4)}>
								swap
							</button>
						</TitanContainer>
					);
				})}
			</PlayerFlexContainer>
				<CardFlexContainer>
				{cardHand.map((card) => {
					return (
						<CardContainer key={card.name}>
							<p>{card.name}</p>
							<p>{card.type}</p>
							<p>{card.strength}</p>
							<p>{card.description}</p>
							<button onClick={() => functions.useCard(card)}>
								attack
							</button>
						</CardContainer>
					);
				})}
			</CardFlexContainer>
			{playerTeam.slice(2).map((titan) => titan.name)}
		</PlayerFieldWrapper>
	);
};

export default PlayerField;