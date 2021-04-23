import React from 'react';

const SessionInfo = ({ session }) => {
	console.log(session);

	return (
		<div>
			{/* <h4>Player Name</h4>
			<p>{session.player}</p> */}
			<div>
				<h4>Zenscape</h4>
				<p>Type: {session.currentZenscape.name}</p>
				<p>Description: {session.currentZenscape.description}</p>
				<p>Intensity: {session.currentZenscape.intensity}</p>
			</div>
			<p>Turn Number: {session.turnNumber}</p>
			<p>Turn Phase: {session.phase}</p>
			<div>
				<h4>Settings</h4>
				<p>Enemy Army Size: {session.settings.armySize}</p>
				<p>Difficulty: {session.settings.difficulty}</p>
				<p>Trueskill: {session.settings.trueSkill}</p>
			</div>
		</div>
	);
}

export default SessionInfo;
