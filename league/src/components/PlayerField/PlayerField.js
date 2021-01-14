import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../GameContext';
import { PlayerFieldLabel, PlayerFieldWrapper, PlayerFlexContainer, TitanContainer, TitanHealth, TitanName, TitanStats } from './SCPlayerField';

const PlayerField = ({ playerTeam, functions }) => {
	const { involved, setInvolved } = useContext(GameContext);
	const [activeTitans, setActiveTitans] = useState(playerTeam.slice(0, 2));

	function swap(list, activeOne, activeTwo) {
		list[activeOne] = list.splice(activeTwo, 1, list[activeOne])[0];
		setActiveTitans(playerTeam.slice(0, 2));
	}

	useEffect(() => {
		console.log(involved)
	}, [ activeTitans, functions, playerTeam])

	return (
		<PlayerFieldWrapper>
			<PlayerFieldLabel>Titans</PlayerFieldLabel>
			<PlayerFlexContainer>
				{playerTeam.slice(0, 2).map((unit) => {
					return (
						<TitanContainer
							key={unit.name}
							onClick={() => functions.choose(unit)}
							>
							<TitanName>{unit.name}</TitanName>
							<TitanHealth>{unit.health}</TitanHealth>
							<TitanStats>
								<p>{unit.kingdom}</p>
							</TitanStats>
							<button onClick={() => functions.select(unit)}>attack</button>
						</TitanContainer>
					);
				})}
				<button onClick={() => swap(playerTeam, 0, 4)}>swap</button>
				{/* <button onClick={test}>console log next click</button> */}
			</PlayerFlexContainer>
			{playerTeam.slice(2).map((unit) => unit.name)}
		</PlayerFieldWrapper>
	);
};

export default PlayerField;