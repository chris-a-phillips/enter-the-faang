import React, { useState, useContext, useEffect } from 'react';
import EnemyField from '../../components/EnemyField/EnemyField';
import KingdomField from '../../components/KingdomField/KingdomField';
import PlayerField from '../../components/PlayerField/PlayerField';
import { GameContext } from '../../components/GameContext';
import { allCards } from '../../Data/Cards'

const GameBoard = ({
	enemyUnits,
	playerTeam,
    playerKingdoms,
    session,
    allUnitsOnField,
    setAllUnitsOnField
}) => {
	const [count, setCount] = useState(0)

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

		choose: function choose(c) {
            // 3 ACTION for cards
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
            setInvolved({ ...involved, possibleTargets: [
                playerTeam[0], playerTeam[1],
                playerKingdoms[0],
                playerKingdoms[1],
                playerKingdoms[2],
                playerKingdoms[3],
                playerKingdoms[4],
                playerKingdoms[5],
                playerKingdoms[6]
            ]})
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

    // if (playerKingdoms) {
    //     console.log(enemyUnits[0].attackUnit(playerKingdoms[Math.floor(Math.random() * playerKingdoms.length)]))
    // }

    if (enemyUnits) {
        // SORT ARRAY BY SPEED
        let enemySortBySpeed = enemyUnits.slice(0,5).sort((a, b) => (a.speed < b.speed) ? 1 : -1)

        // FOR EACH ELEMENT IN ARRAY HAVE IT CARRY OUT ITS ATTACK
        enemySortBySpeed.forEach(e => {


            // EACH ENEMY ATTACKS A RANDOM UNIT
            // if (e.isFaang) {
            //     e.attackUnit(playerKingdoms[Math.floor(Math.random() * playerKingdoms.length)])
            // }
        });
        session.takeTurn()
        // console.log(session)
    }

    function listUnits() {
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
    }

    useEffect(() => {
        if (playerTeam) {
            setAllUnitsOnField(listUnits())
            console.log('allUnitsOnField:', allUnitsOnField)
            console.log(
				'allUnitsSortedBySpeed',
				allUnitsOnField.sort((a, b) => (a.speed > b.speed ? 1 : -1))
			);
        }
    }, [count])

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>count{count}</button>
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
