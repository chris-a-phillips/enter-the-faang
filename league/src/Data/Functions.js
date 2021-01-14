import React, { useContext } from 'react';
import { GameContext } from '../components/GameContext';

const Functions = () => {
    const { involved, setInvolved } = useContext(GameContext);
	// select this action with the click
	const select = (a) => {
		// 1 SELECT
		console.log(a);
		// set initiator to where the button was clicked
		// set action to what was clicked
		setInvolved({ ...involved, initiator: a, action: 'attack' });
	}

	// choose this action once select is opened
	const choose = (b) => {
		// 2 CHOOSE
		// do stuff only if button was clicked
		if (involved.action) {
			// set selected target to the next click
			setInvolved({ ...involved, selectedTarget: b });
			// depending on the action do something
			if (involved.action === 'attack') {
				console.log(involved);
				// perform this action using the selected target
				attack(involved.initiator, b);
			}
		}
	}

	// actions to take
	// attacker is where the first button was clicked (involved.initiator)
	// target is the second click (involved.selectedTarget)
	const attack = (attacker, target) => {
		// 3 ACTION
		if (attacker !== target) {
			attacker.attackUnit(target);
		} else {
			console.log('CHOOSE NEW TARGET');
		}
		// set action in involved to false so only this click is registered
		setInvolved({ ...involved, action: false });
	};

    return <div></div>;
};

export default Functions;