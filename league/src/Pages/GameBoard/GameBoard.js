import React, { useContext } from 'react';
import EnemyField from '../../components/EnemyField/EnemyField';
import KingdomField from '../../components/KingdomField/KingdomField';
import PlayerField from '../../components/PlayerField/PlayerField';
import { GameContext } from '../../components/GameContext';

const GameBoard = ({
	enemyUnits,
	playerTeam,
	playerKingdoms
}) => {
	const { involved, setInvolved } = useContext(GameContext);

	const functions = {
		// 1 setInvolved initiator to specific object (choose)
		// 2 setInvolved possibleTargets
		// 3 setInvolved selectedTarget (select)
		// reset setInvolved

		// SELECT, CHOOSE, ACTION

		// select this action with the click
		select: function select(a) {
			// 1 SELECT
			console.log(a);
			// set initiator to where the button was clicked
			// set action to what was clicked
			setInvolved({ ...involved, initiator: a, action: 'attack' });
		},

		// choose this action once select is opened
		choose: function choose(b) {
			// 2 CHOOSE
			// do stuff only if button was clicked
			if (involved.action) {
				// set selected target to the next click
				setInvolved({ ...involved, selectedTarget: b });
				// depending on the action do something
				if (involved.action === 'attack') {
					console.log(involved);
					// perform this action using the selected target
					this.attack(involved.initiator, b);
				}
			}
		},

		// actions to take
		// attacker is where the first button was clicked (involved.initiator)
		// target is the second click (involved.selectedTarget)
		attack: function attack(attacker, target) {
			// 3 ACTION
			if (attacker !== target) {
				attacker.attackUnit(target);
			} else {
				console.log('CHOOSE NEW TARGET');
			}
			// set action in involved to false so only this click is registered
			setInvolved({ ...involved, action: false });
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
