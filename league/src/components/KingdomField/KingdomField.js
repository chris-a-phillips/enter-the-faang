import React, { useState } from 'react';
import { KingdomFieldWrapper, KingdomFieldLabel, KingdomName, KingdomStats, KingdomContainer, KingdomsFlexContainer, KingdomHealth } from './SCKingdomField';

const KingdomField = ({ playerKingdoms, functions }) => {
	const [hidden, setHidden] = useState(true)

    return (
        <KingdomFieldWrapper>
            <KingdomFieldLabel>Player Kingdoms</KingdomFieldLabel>
            <KingdomsFlexContainer>
            {playerKingdoms.map((kingdom) => {
                return (
					<KingdomContainer
						kingdom={kingdom}
						onMouseEnter={() => setHidden(false)}
						onMouseLeave={() => setHidden(true)}
						key={kingdom.name}
						onClick={() => functions.choose(kingdom)}>
						<KingdomName kingdom={kingdom}>{kingdom.name}</KingdomName>
						<KingdomHealth>{kingdom.health}</KingdomHealth>
						<KingdomStats hidden={hidden}>
							<p>Health: {kingdom.showcase.health}/10</p>
							<p>Attack: {kingdom.showcase.attack}/10</p>
							<p>Defense: {kingdom.showcase.defense}/10</p>
							<p>Energy: {kingdom.showcase.energy}/10</p>
							<p>
								Regeneration: {kingdom.showcase.regeneration}/10
							</p>
							<p>Speed: {kingdom.showcase.speed}/10</p>
							<p>Zen: {kingdom.showcase.zen}/10</p>
						</KingdomStats>
					</KingdomContainer>
				);
            })}
            </KingdomsFlexContainer>
        </KingdomFieldWrapper>
    );
};

export default KingdomField;
