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
	const [swapPlaces, setSwapPlaces] = useState({
		state: false,
		index: null
	})

	function swap(list, activeOne, activeTwo) {
		if (swapPlaces.state === true) {
			list[activeOne] = list.splice(activeTwo, 1, list[activeOne])[0];
			setActiveTitans(playerTeam.slice(0, 2));
		}
		setSwapPlaces({
			state: false,
			index: null
		})
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
							<button onClick={() => setSwapPlaces({
								state: true,
								index: playerTeam.indexOf(titan)
							})}>
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
									swap(playerTeam, swapPlaces.index,playerTeam.indexOf(titan));
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
