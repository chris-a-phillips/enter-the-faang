import React from 'react';

const KingdomField = ({ playerKingdoms }) => {

    console.log(playerKingdoms)

    return (
        <div>
            <h1>Player Kingdoms</h1>
            {playerKingdoms.map((kingdom) => {
                return (
                    <div key={kingdom.name}>
                        {kingdom.name}
                    </div>
                )
            })}
        </div>
    );
};

export default KingdomField;