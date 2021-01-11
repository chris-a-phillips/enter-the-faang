import React from 'react';
import EnemyField from '../../components/EnemyField/EnemyField';
import KingdomField from '../../components/KingdomField/KingdomField';
import PlayerField from '../../components/PlayerField/PlayerField';

const GameBoard = ({ enemyUnits, playerTeam, playerKingdoms }) => {

    console.log(enemyUnits)
    console.log(playerTeam)
    console.log(playerKingdoms)

    

	return (
        <div>
            <EnemyField enemyUnits={enemyUnits}/>
            <PlayerField playerTeam={playerTeam}/>
            <KingdomField playerKingdoms={playerKingdoms}/>
        </div>
    );
};

export default GameBoard;