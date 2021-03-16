import React, { useState, useEffect } from 'react';
import {
	ArmySizeButtons,
	ArmySizeHeader,
	DifficultyButtons,
	DifficultyHeader,
	OptionButton,
	StartButtonDiv,
	StatBar,
	TitanCard,
	TitanName,
	TitanSelectionDiv,
	TitanSelectionHeader,
	TrueSkillButtons,
	TrueSkillHeader,
	WelcomeScreenWrapper,
} from './SCWelcomeScreen';

function WelcomeScreen({
	setDifficulty,
	setArmySize,
	setGameStarted,
	enemyUnits,
	setTrueSkill,
	session,
	playerTeam,
	setPlayerTeam,
}) {
	const [starters, setStarters] = useState([]);
	const [staticTitans, setStaticTitans] = useState([...playerTeam]);

	function makeStarter(titan) {
		const arr = playerTeam.filter((titan) => !starters.includes(titan));

		titan.starter = true;

		if (starters.length === 0) {
			setStarters([titan]);
		} else if (starters.length === 1 && starters[0] !== titan) {
			setStarters([...starters, titan]);
		} else {
			if (!starters.includes(titan)) {
				starters[0].starter = false;
				setStarters([starters[1], titan]);
			}
		}

		if (starters.length === 2) {
			setPlayerTeam([starters[0], starters[1], ...arr]);
		}
	}

	function startGame() {
		setGameStarted(true);
		session.settings.gameStarted = true;
		makeStarter(starters[1]);
	}

	useEffect(() => {
		setStaticTitans(staticTitans);
	}, []);

	console.log(playerTeam[0]);

	return (
		<WelcomeScreenWrapper>
			<DifficultyHeader>
				<h2>Choose Difficulty(ratio of difficult and easy enemies)</h2>
			</DifficultyHeader>
			<DifficultyButtons>
				<OptionButton onClick={() => setDifficulty('easy')}>
					Easy
				</OptionButton>
				<OptionButton onClick={() => setDifficulty('normal')}>
					Normal
				</OptionButton>
				<OptionButton onClick={() => setDifficulty('veteran')}>
					Veteran
				</OptionButton>
				<OptionButton onClick={() => setDifficulty('insane')}>
					Insane
				</OptionButton>
			</DifficultyButtons>
			<ArmySizeHeader>
				<h2>Choose Army Size</h2>
			</ArmySizeHeader>
			<ArmySizeButtons>
				<OptionButton onClick={() => setArmySize(10)}>10</OptionButton>
				<OptionButton onClick={() => setArmySize(20)}>20</OptionButton>
				<OptionButton onClick={() => setArmySize(50)}>50</OptionButton>
				<OptionButton onClick={() => setArmySize(100)}>
					100
				</OptionButton>
			</ArmySizeButtons>
			<TrueSkillHeader>
				<h2>
					Choose True Skill (sliders for stats and how tough the
					combat is)
				</h2>
			</TrueSkillHeader>
			<TrueSkillButtons>
				<OptionButton onClick={() => setTrueSkill('normal')}>
					normal
				</OptionButton>
				<OptionButton onClick={() => setTrueSkill('heroic')}>
					heroic
				</OptionButton>
				<OptionButton onClick={() => setTrueSkill('unfair')}>
					unfair
				</OptionButton>
			</TrueSkillButtons>
			<TitanSelectionHeader>
				<h2>Choose Your Starting Units</h2>
			</TitanSelectionHeader>
			<TitanSelectionDiv>
				{staticTitans.map((titan) => {
					return (
						<TitanCard key={titan.name} titan={titan}>
							<TitanName titan={titan}>{titan.name}</TitanName>

							<StatBar titan={titan} stat={titan.showcase.health}>
								<p>{titan.showcase.health}/10</p>
							</StatBar>
							<p>Health</p>
							<StatBar titan={titan} stat={titan.showcase.attack}>
								<p>{titan.showcase.attack}/10</p>
							</StatBar>
							<p>Attack</p>
							<StatBar
								titan={titan}
								stat={titan.showcase.defense}>
								<p>{titan.showcase.defense}/10</p>
							</StatBar>
							<p>Defense</p>
							<StatBar titan={titan} stat={titan.showcase.energy}>
								<p>{titan.showcase.energy}/10</p>
							</StatBar>
							<p>Energy</p>
							<StatBar
								titan={titan}
								stat={titan.showcase.regeneration}>
								<p>{titan.showcase.regeneration}/10</p>
							</StatBar>
							<p>Regeneration</p>
							<StatBar titan={titan} stat={titan.showcase.speed}>
								<p>{titan.showcase.speed}/10</p>
							</StatBar>
							<p>Speed</p>
							<StatBar titan={titan} stat={titan.showcase.zen}>
								<p>{titan.showcase.zen}/10</p>
							</StatBar>
							<p>Zen</p>

							{titan.starter ? (
								<h4>Starter {starters.indexOf(titan) + 1}</h4>
							) : (
								<button
									onClick={() => {
										makeStarter(titan);
									}}>
									Add To Team
								</button>
							)}
						</TitanCard>
					);
				})}
			</TitanSelectionDiv>

			<StartButtonDiv>
				{starters.length === 2 ? (
					<button onClick={startGame}>Start Game</button>
				) : null}
			</StartButtonDiv>
		</WelcomeScreenWrapper>
	);
}

export default WelcomeScreen;
