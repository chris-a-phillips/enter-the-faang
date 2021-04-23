import React, { useState, useEffect } from 'react';
import {
	ArmySizeButtons,
	ArmySizeHeader,
	DifficultyButtons,
	DifficultyHeader,
	OptionButton,
	StartButtonDiv,
	StatBar,
	TitanButton,
	TitanCard,
	TitanName,
	TitanSelectionDiv,
	TitanSelectionHeader,
	TrueSkillButtons,
	TrueSkillHeader,
	WelcomeScreenWrapper,
} from './SCWelcomeScreen';

const WelcomeScreen = ({
	setGameStarted,
	enemyUnits,
	session,
	playerTeam,
	setPlayerTeam,
}) => {
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

	const changeDifficulty = (option) => {
		session.settings.difficulty = option
	}

	const changeArmySize = (option) => {
		session.settings.armySize = option
	}

	const changeTrueSkill = (option) => {
		session.settings.trueSkill = option
	}

	function startGame() {
		setGameStarted(true);
		makeStarter(starters[1]);
		session.enhanceZen(starters[0], starters[1])
	}

	useEffect(() => {
		setStaticTitans(staticTitans);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log(session)

	return (
		<WelcomeScreenWrapper>
			<DifficultyHeader>
				<h2>Choose Difficulty(ratio of difficult and easy enemies)</h2>
			</DifficultyHeader>
			<DifficultyButtons>
				<OptionButton onClick={() => changeDifficulty('easy')}>
					Easy
				</OptionButton>
				<OptionButton onClick={() => changeDifficulty('normal')}>
					Normal
				</OptionButton>
				<OptionButton onClick={() => changeDifficulty('veteran')}>
					Veteran
				</OptionButton>
				<OptionButton onClick={() => changeDifficulty('insane')}>
					Insane
				</OptionButton>
			</DifficultyButtons>
			<ArmySizeHeader>
				<h2>Choose Enemy Army Size</h2>
			</ArmySizeHeader>
			<ArmySizeButtons>
				<OptionButton onClick={() => changeArmySize(10)}>10</OptionButton>
				<OptionButton onClick={() => changeArmySize(20)}>20</OptionButton>
				<OptionButton onClick={() => changeArmySize(50)}>50</OptionButton>
				<OptionButton onClick={() => changeArmySize(100)}>
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
				<OptionButton onClick={() => changeTrueSkill('normal')}>
					normal
				</OptionButton>
				<OptionButton onClick={() => changeTrueSkill('heroic')}>
					heroic
				</OptionButton>
				<OptionButton onClick={() => changeTrueSkill('unfair')}>
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
								<TitanButton
									onClick={() => {
										makeStarter(titan);
									}}
									titan={titan}>
									Make Starter
								</TitanButton>
							)}
						</TitanCard>
					);
				})}
			</TitanSelectionDiv>

			<StartButtonDiv>
				{starters.length === 2 ? (
					<OptionButton onClick={startGame}>Start Game</OptionButton>
				) : null}
			</StartButtonDiv>
		</WelcomeScreenWrapper>
	);
}

export default WelcomeScreen;
