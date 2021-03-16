import React, { useState, useEffect } from 'react';
import {
	ArmySize,
	ButtonSection,
	Difficulty,
	OptionButton,
	StartButton,
	TitanSelection,
	TrueSkill,
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
		if (starters.length === 0) {
			setStarters([titan]);
		} else if (starters.length === 1 && starters[0] !== titan) {
			setStarters([...starters, titan]);
		} else {
			if (!starters.includes(titan)) {
				setStarters([starters[1], titan]);
			}
		}

		if (starters.length === 2) {
			const arr = playerTeam.filter((titan) => !starters.includes(titan));
			setPlayerTeam([starters[0], starters[1], ...arr]);
		}
	}

	function startGame() {
		setGameStarted(true);
		session.settings.gameStarted = true;
		makeStarter();
	}

	useEffect(() => {
		setStaticTitans(staticTitans);
	}, []);

	// console.log('starters:', starters[0]);
	// console.log('starters:', starters[1]);
	console.log('playerTeam:', playerTeam[0]);
	console.log('playerTeam:', playerTeam[1]);

	return (
		<WelcomeScreenWrapper>
			<Difficulty>
				<h2>Choose Difficulty(ratio of difficult and easy enemies)</h2>
				<ButtonSection>
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
				</ButtonSection>
			</Difficulty>
			<ArmySize>
				<h2>Choose Army Size</h2>
				<ButtonSection>
					<OptionButton onClick={() => setArmySize(10)}>
						10
					</OptionButton>
					<OptionButton onClick={() => setArmySize(20)}>
						20
					</OptionButton>
					<OptionButton onClick={() => setArmySize(50)}>
						50
					</OptionButton>
					<OptionButton onClick={() => setArmySize(100)}>
						100
					</OptionButton>
				</ButtonSection>
			</ArmySize>

			<TrueSkill>
				<h2>
					Choose True Skill (sliders for stats and how tough the
					combat is)
				</h2>
				<ButtonSection>
					<OptionButton onClick={() => setTrueSkill('normal')}>
						normal
					</OptionButton>
					<OptionButton onClick={() => setTrueSkill('heroic')}>
						heroic
					</OptionButton>
					<OptionButton onClick={() => setTrueSkill('unfair')}>
						unfair
					</OptionButton>
				</ButtonSection>
			</TrueSkill>

			<TitanSelection>
				<h2>Choose Your Starting Units</h2>
				{staticTitans.map((titan) => {
					return (
						<div key={staticTitans.indexOf(titan)}>
							{titan.name}
							<button
								onClick={() => {
									makeStarter(titan);
								}}>
								+
							</button>
						</div>
					);
				})}
			</TitanSelection>

			<StartButton>
				<button onClick={startGame}>Start Game</button>
			</StartButton>
		</WelcomeScreenWrapper>
	);
}

export default WelcomeScreen;
