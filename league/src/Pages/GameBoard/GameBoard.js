import React, { useContext } from 'react';
import EnemyField from '../../components/EnemyField/EnemyField';
import KingdomField from '../../components/KingdomField/KingdomField';
import PlayerField from '../../components/PlayerField/PlayerField';
import { GameContext } from '../../components/GameContext';
import { allCards } from '../../Data/Cards'

const GameBoard = ({
	enemyUnits,
	playerTeam,
    playerKingdoms,
    session
}) => {
	const { involved, setInvolved } = useContext(GameContext);

	const functions = {
		// 1 setInvolved initiator to specific object (choose)
		// 2 setInvolved possibleTargets
		// 3 setInvolved selectedTarget (select)
		// reset setInvolved

		// CARD, SELECT, CHOOSE, ACTION

		// select this action with the click
		useCard: function useCard(a) {
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

		// 3 ACTION for cards
		choose: function choose(c) {
			// setInvolved({ ...involved, selectedTarget: c})
			// perform this action using the selected target
			if (involved.initiator && involved.card) {
				if (involved.card.type === 'attack') {
					involved.card.effect(involved.initiator, c)
                }
				this.check(playerTeam);
				this.check(playerKingdoms);
				this.check(enemyUnits);
                this.check(allCards)
				// set action to falsey so only this click is registered
				setInvolved(false);
			}
		},

		// actions to take
		// attacker is where the first button was clicked (involved.initiator)
		// target is the second click (involved.selectedTarget)
		attack: function attack(attacker, target) {
			// 3 ACTION for enemies
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
					console.log(`${array[i].name} was spliced at:`, i);
				}
			}
		},
	};

	return (
		<div>
			{enemyUnits && playerTeam && playerKingdoms ? (
				<>
					<EnemyField
						enemyUnits={enemyUnits}
                        functions={functions}
					/>
					<PlayerField
						playerTeam={playerTeam}
                        functions={functions}
                        allCards={allCards}
					/>
					<KingdomField
						playerKingdoms={playerKingdoms}
                        functions={functions}
					/>
				</>
			) : null}
		</div>
	);
};

export default GameBoard;
