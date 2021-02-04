import React, { useState, useContext, useEffect, useCallback } from 'react';
import EnemyField from '../../components/EnemyField/EnemyField';
import KingdomField from '../../components/KingdomField/KingdomField';
import PlayerField from '../../components/PlayerField/PlayerField';
import { GameContext } from '../../components/GameContext';
import { allCards } from '../../Data/Cards';
import {
	ActionContainer,
	BoardContainer,
	EnemyFieldContainer,
	GameBoardWrapper,
	GameInfoContainer,
	GameRulesModal,
	KingdomFieldContainer,
	PlayerFieldContainer,
	SessionLogContainer,
} from './SCGameBoard';

const GameBoard = ({
	enemyUnits,
	playerTeam,
	setPlayerTeam,
	playerKingdoms,
	session,
	allUnitsOnField,
	setAllUnitsOnField,
}) => {
	const [showRules, setShowRules] = useState(false);

	const { involved, setInvolved } = useContext(GameContext);
	// console.log('PLAYER KINGDOMS', playerKingdoms);
	// console.log('PLAYER TEAM', playerTeam);
	console.log('ENEMY UNITS', enemyUnits);

	const functions = {
		// 1 setInvolved initiator to specific object (choose)
		// 2 setInvolved possibleTargets
		// 3 setInvolved selectedTarget (select)
		// reset setInvolved

		// CARD, SELECT, CHOOSE, ACTION

		// select this action with the click
		useCard: function useCard(a) {
			session.phase = 'Card Selection';
			// 1 SELECT
			console.log(a, 'was card used 1');
			// set initiator to where the button was clicked
			// set action to what was clicked
			setInvolved({ ...involved, card: a, action: a.type });
		},

		// initiate this action once select is opened
		initiate: function initiate(b) {
			// 2 initiate
			// do stuff only if button was clicked
			if (involved.action && !involved.initiator) {
				// set selected target to the next click
				setInvolved({ ...involved, initiator: b });
				// depending on the action do something
			}
			console.log(b, 'was object that initiated 2');
		},
		choose: function choose(c) {
			// 3 ACTION for cards
			// setInvolved({ ...involved, selectedTarget: c})
			// perform this action using the selected target
			if (involved.initiator && involved.card) {
				involved.initiator.method = function useCard() {
					return involved.card.effect(involved.initiator, c);
				};
				// console.log(involved.initiator)
				// set action to falsey so only this click is registered
				setInvolved(false);
			}
		},

		// actions to take
		// attacker is where the first button was clicked (involved.initiator)
		// target is the second click (involved.selectedTarget)
		attack: function attack(attacker, target) {
			// 3 ACTION for enemies
			setInvolved({
				...involved,
				possibleTargets: [
					playerTeam[0],
					playerTeam[1],
					playerKingdoms[0],
					playerKingdoms[1],
					playerKingdoms[2],
					playerKingdoms[3],
					playerKingdoms[4],
					playerKingdoms[5],
					playerKingdoms[6],
				],
			});
			if (attacker !== target) {
				if (attacker.isFaang === true) {
					// do something else
				} else {
					attacker.attackUnit(target);
					console.log('it works');
				}
			} else {
			}
		},

		check: function check(array) {
			for (let i = 0; i < array.length; i++) {
				if (array[i].isAlive === false || array[i].isUsed) {
					array.splice(i, 1);
					// console.log(`${array[i].name} was spliced at:`, i);
				}
			}
			return array;
		},
		standBy: function standBy() {
			session.enhanceZen(playerTeam[0], playerTeam[1]);
			switch (session.currentZenscape.name) {
				case 'Enhance':
					if (playerTeam[0]) {
						playerTeam[0].attack +=
							session.currentZenscape.intensity;
						playerTeam[0].defense +=
							session.currentZenscape.intensity;
						playerTeam[0].currentHealth +=
							session.currentZenscape.intensity;
						playerTeam[0].maxHealth +=
							session.currentZenscape.intensity;
						playerTeam[0].speed +=
							session.currentZenscape.intensity;
						playerTeam[0].zen += session.currentZenscape.intensity;
						playerTeam[0].regenerationRate +=
							session.currentZenscape.intensity;
					}
					if (playerTeam[1]) {
						playerTeam[1].attack +=
							session.currentZenscape.intensity;
						playerTeam[1].defense +=
							session.currentZenscape.intensity;
						playerTeam[1].currentHealth +=
							session.currentZenscape.intensity;
						playerTeam[1].maxHealth +=
							session.currentZenscape.intensity;
						playerTeam[1].speed +=
							session.currentZenscape.intensity;
						playerTeam[1].zen += session.currentZenscape.intensity;
						playerTeam[1].regenerationRate +=
							session.currentZenscape.intensity;
					}
					break;
				// case 'Spore':
				// 	// code block
				// 	break;
				case 'Swamp':
					if (enemyUnits[0]) {
						enemyUnits[0].speed -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[1]) {
						enemyUnits[1].speed -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[2]) {
						enemyUnits[2].speed -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[3]) {
						enemyUnits[3].speed -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[4]) {
						enemyUnits[4].speed -=
							session.currentZenscape.intensity;
					}
					break;
				case 'Ice':
					if (enemyUnits[0]) {
						enemyUnits[0].attack -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[1]) {
						enemyUnits[1].attack -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[2]) {
						enemyUnits[2].attack -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[3]) {
						enemyUnits[3].attack -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[4]) {
						enemyUnits[4].attack -=
							session.currentZenscape.intensity;
					}
					break;
				default:
					console.log('no standby effect');
			}
		},

		battle: function battle() {
			setAllUnitsOnField(listUnits());
			allUnitsOnField
				.sort((a, b) => (a.speed < b.speed ? 1 : -1))
				.forEach((u) => {
					// MAKE SURE TIME IS NOT WASTED ON KINGDOMS AS THEY DON'T USE CARDS
					if (!u.isKingdom) {
						// EACH TITAN ATTACKS FROM THE QUEUE
						setTimeout(() => {
							if (u.method) {
								session.eventLog.unshift(u.method());
								// CLEAR METHOD SO THERE ARE NO DUPLICATES
								u.method = null;
								// IF ZENSCAPE IS STORM, TITAN ATTACKS HAVE SPLASH DAMAGE
								if (
									session.currentZenscape.name ===
										'Storm' &&
									Math.random() * 100 <
										session.currentZenscape.intensity
								) {
									allUnitsOnField.forEach((u) => {
										if (u.isFaang) {
											u.currentHealth -= session.currentZenscape.intensity
										}
									})
								}
							}
							// EACH ENEMY ATTACKS A RANDOM UNIT
							if (u.isFaang) {
								let possibleTargets = allUnitsOnField.filter(
									(unit) => !unit.isFaang
								);
								// IF ZENSCAPE IS GLARE, ENEMIES MAY ATTACK EACH OTHER
								if (
									session.currentZenscape.name === 'Glare' &&
									Math.random() * 100 <
										session.currentZenscape.intensity
								) {
									possibleTargets = allUnitsOnField;
								}
								session.eventLog.unshift(
									u.attackUnit(
										possibleTargets[
											Math.floor(
												Math.random() *
													possibleTargets.length
											)
										]
									)
								);
								u.status.flash = false
							}
							this.check(playerTeam);
							this.check(playerKingdoms);
							this.check(enemyUnits);
							this.check(allCards);
							setAllUnitsOnField(listUnits());
						}, session.notificationTimer);
						session.notificationTimer += 1500;
					}
				});
		},
		postBattle: function postBattle() {
			setTimeout(() => {
				session.eventLog.unshift({
					event: `${session.currentZenscape.name} is now ${session.currentZenscape.intensity}`,
					gradientOne: playerTeam[0].showcase.colors.primary,
					gradientTwo: playerTeam[1].showcase.colors.primary,
				});
				session.eventLog.unshift({
					event: 'PLAYER TURN',
				});
				functions.afterEffects();
				session.phase = 'Selection';
				setAllUnitsOnField(listUnits());
				session.notificationTimer = 0;
			}, session.notificationTimer);
			console.log(session.eventLog);
		},
		afterEffects: function afterEffects() {
			switch (session.currentZenscape.name) {
				case 'Blaze':
					if (playerTeam[0]) {
						playerTeam[0].attack +=
							session.currentZenscape.intensity;
					}
					if (playerTeam[1]) {
						playerTeam[1].attack +=
							session.currentZenscape.intensity;
					}
					break;
				case 'Lava':
					if (enemyUnits[0]) {
						enemyUnits[0].currentHealth -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[1]) {
						enemyUnits[1].currentHealth -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[2]) {
						enemyUnits[2].currentHealth -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[3]) {
						enemyUnits[3].currentHealth -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[4]) {
						enemyUnits[4].currentHealth -=
							session.currentZenscape.intensity;
					}
					break;
				case 'Sandstorm':
					if (enemyUnits[0]) {
						enemyUnits[0].regenerationRate -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[1]) {
						enemyUnits[1].regenerationRate -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[2]) {
						enemyUnits[2].regenerationRate -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[3]) {
						enemyUnits[3].regenerationRate -=
							session.currentZenscape.intensity;
					}
					if (enemyUnits[4]) {
						enemyUnits[4].regenerationRate -=
							session.currentZenscape.intensity;
					}
					break;
				case 'Spring':
					if (playerTeam[0]) {
						playerTeam[0].energy +=
							session.currentZenscape.intensity;
					}
					if (playerTeam[1]) {
						playerTeam[1].energy +=
							session.currentZenscape.intensity;
					}
					break;
				case 'Steam':
					if (playerTeam[0]) {
						playerTeam[0].regenerationRate +=
							session.currentZenscape.intensity;
					}
					if (playerTeam[1]) {
						playerTeam[1].regenerationRate +=
							session.currentZenscape.intensity;
					}
					break;
				default:
					console.log('no after effect');
			}
			allUnitsOnField.forEach((u) => {
				u.regenerateHealth();
			});
		},
	};

	console.log(session.eventLog);

	function endTurn() {
		functions.standBy();
		functions.battle();
		functions.postBattle();
	}

	const listUnits = useCallback(() => {
		let res = [];
		for (let i = 0; i < playerTeam.slice(0, 2).length; i++) {
			res.push(playerTeam[i]);
		}
		for (let i = 0; i < playerKingdoms.length; i++) {
			res.push(playerKingdoms[i]);
		}
		for (let i = 0; i < enemyUnits.slice(0, 5).length; i++) {
			res.push(enemyUnits[i]);
		}
		return res;
	}, [enemyUnits, playerTeam, playerKingdoms]);

	useEffect(() => {
		if (playerTeam) {
			setAllUnitsOnField(listUnits());
		}
	}, [enemyUnits, playerTeam, playerKingdoms, session, session.eventLog]);

	return (
		<GameBoardWrapper>
			<GameInfoContainer>
				<button onClick={() => setShowRules(!showRules)}>
					Game Rules
				</button>
				<button onClick={endTurn}>End Turn</button>
				<GameRulesModal showRules={showRules}></GameRulesModal>
				<SessionLogContainer allUnitsOnField={allUnitsOnField}>
					<h1>Event Log</h1>
					{session.eventLog.slice(0, 9).map((action) => {
						return (
							<ActionContainer
								action={action}
								key={session.eventLog.indexOf(action)}>
								<p>{action.event}</p>
							</ActionContainer>
						);
					})}
				</SessionLogContainer>
			</GameInfoContainer>
			{enemyUnits && playerTeam && playerKingdoms ? (
				<>
					<EnemyFieldContainer>
						<EnemyField
							enemyUnits={enemyUnits}
							functions={functions}
						/>
					</EnemyFieldContainer>
					<PlayerFieldContainer>
						<PlayerField
							playerTeam={playerTeam}
							setPlayerTeam={setPlayerTeam}
							functions={functions}
							allCards={allCards}
							session={session}
							setAllUnitsOnField={setAllUnitsOnField}
							listUnits={listUnits}
						/>
					</PlayerFieldContainer>
					<KingdomFieldContainer>
						<KingdomField
							playerKingdoms={playerKingdoms}
							functions={functions}
						/>
					</KingdomFieldContainer>
				</>
			) : null}
		</GameBoardWrapper>
	);
};

export default GameBoard;
