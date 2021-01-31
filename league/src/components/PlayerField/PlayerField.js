import React, { useState, useEffect } from 'react';
import {
	CardButton,
	CardContainer,
	CardFlexContainer,
	CardHeading,
	HealthBar,
	HealthBarContainer,
	PlayerFieldLabel,
	PlayerFieldWrapper,
	PlayerFlexContainer,
	TitanContainer,
	TitanName,
	TitanReserve,
	TitanReserveContainer,
	TitanStats,
} from './SCPlayerField';

const PlayerField = ({ playerTeam, functions, allCards, session }) => {
	const [activeTitans, setActiveTitans] = useState(playerTeam.slice(0, 2));
	const [cardHand, setCardHand] = useState(allCards.slice(0, 5));

	function swap(list, activeOne, activeTwo) {
		list[activeOne] = list.splice(activeTwo, 1, list[activeOne])[0];
		setActiveTitans(playerTeam.slice(0, 2));
	}

	function shuffle(array) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	useEffect(() => {
		setCardHand(allCards.slice(0, 5));
	}, [activeTitans, functions, playerTeam, allCards, session]);

	return (
		<PlayerFieldWrapper>
				<PlayerFieldLabel>Active Titans</PlayerFieldLabel>
			<PlayerFlexContainer>
				{playerTeam.slice(0, 2).map((titan) => {
					return (
						<TitanContainer
							titan={titan}
							key={titan.name}
							onClick={() => {
								functions.initiate(titan);
								functions.choose(titan);
							}}>
							<TitanName titan={titan}>{titan.name}</TitanName>
							<HealthBarContainer titan={titan}>
								<HealthBar
									titan={titan}
									percent={Math.ceil(
										(titan.currentHealth /
											titan.maxHealth) *
											100
									)}>
									{Math.ceil(
										(titan.currentHealth /
											titan.maxHealth) *
											100
									)}
									%
								</HealthBar>
							</HealthBarContainer>{' '}
							<TitanStats>
								<p>{titan.kingdom}</p>
							</TitanStats>
							<button onClick={() => swap(playerTeam, 0, 4)}>
								swap
							</button>
						</TitanContainer>
					);
				})}
				<TitanReserveContainer>
					<PlayerFieldLabel>Reserves</PlayerFieldLabel>
					{playerTeam.slice(2).map((titan) => {
						return (
							<TitanReserve
								titan={titan}
								key={titan.name}
								onClick={() => {
									functions.initiate(titan);
									functions.choose(titan);
								}}>
								<TitanName titan={titan}>
									{titan.name}
								</TitanName>
								<TitanStats>
									<p>{titan.kingdom}</p>
								</TitanStats>
							</TitanReserve>
						);
					})}
				</TitanReserveContainer>
			</PlayerFlexContainer>
			<PlayerFieldLabel>Cards</PlayerFieldLabel>
			<CardFlexContainer>
				{cardHand.map((card) => {
					return (
						<CardContainer card={card} key={card.name}>
							<CardHeading card={card}>
								<p>{card.name}</p>
								<p>{card.type}</p>
								<p>{card.strength}</p>
							</CardHeading>
							<p>{card.description}</p>
							<CardButton onClick={() => functions.useCard(card)}>
								{card.type}
							</CardButton>
						</CardContainer>
					);
				})}
			</CardFlexContainer>
		</PlayerFieldWrapper>
	);
};

export default PlayerField;
