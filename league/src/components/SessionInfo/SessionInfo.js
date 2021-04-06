import React from 'react';

function SessionInfo({ session }) {
	console.log(session);

	return (
		<div>
			<p>{session.player}</p>
			<div>
				<p>{session.currentZenscape.name}</p>
				<p>{session.currentZenscape.description}</p>
				<p>{session.currentZenscape.intensity}</p>
			</div>
			<p>{session.turnNumber}</p>
			<p>{session.phase}</p>
			<div>
				<p>settings</p>
				<p>{session.settings.armySize}</p>
				<p>{session.settings.difficulty}</p>
				<p>{session.settings.trueSkill}</p>
				<p></p>
			</div>
		</div>
	);
}

export default SessionInfo;
