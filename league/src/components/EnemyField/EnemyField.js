import React from 'react';

const EnemyField = ({ enemyUnits }) => {

    console.log(enemyUnits)

    // if (!enemyUnits) {
    //     return null
    // }

    return (
        <div>
            <h1>Enemy Units</h1>
            {enemyUnits.slice(0, 5).map((unit) => {
                return (
                    <div key={unit.name}>
                        {unit.name}
                    </div>
                )
            })}
        </div>
    );
};

export default EnemyField;