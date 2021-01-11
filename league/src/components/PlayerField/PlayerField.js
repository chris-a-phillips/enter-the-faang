import React from 'react';

const PlayerField = ({ playerTeam }) => {


    return (
		<div>
			<h1>Player Titans</h1>
			{playerTeam.slice(0, 5).map((unit) => {
				return <div key={unit.name}>{unit.name}</div>;
			})}
		</div>
	);
};

export default PlayerField;