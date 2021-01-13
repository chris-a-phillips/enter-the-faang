import React from 'react';
import EnemyField from '../../components/EnemyField/EnemyField';
import KingdomField from '../../components/KingdomField/KingdomField';
import PlayerField from '../../components/PlayerField/PlayerField';

const GameBoard = ({ enemyUnits, playerTeam, playerKingdoms, target, setTarget }) => {

    // console.log(enemyUnits)
    // console.log(playerTeam)
    // console.log(playerKingdoms)
    // console.log(setTarget)

	return (
        <div>
            { enemyUnits && playerTeam && playerKingdoms ? (
                <>
            <EnemyField enemyUnits={enemyUnits} target={target} setTarget={setTarget}/>
            <PlayerField playerTeam={playerTeam} target={target} setTarget={setTarget}/>
            <KingdomField playerKingdoms={playerKingdoms} target={target} setTarget={setTarget}/>
                </>
            ) : null }
        </div>
    );
};

export default GameBoard;