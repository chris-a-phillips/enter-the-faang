import React, { useState } from 'react';
import { KingdomFieldWrapper, KingdomFieldLabel, KingdomName, KingdomStats, KingdomContainer, FlexContainer, KingdomHealth } from './SCKingdomField';

const KingdomField = ({ playerKingdoms }) => {
    const [hidden, setHidden] = useState(true)


    return (
        <KingdomFieldWrapper>
            <KingdomFieldLabel>Player Kingdoms</KingdomFieldLabel>
            <FlexContainer>
            {playerKingdoms.map((kingdom) => {
                return (
					<KingdomContainer
						onMouseEnter={() => setHidden(false)}
						onMouseLeave={() => setHidden(true)}
						key={kingdom.name}>
						<KingdomName>{kingdom.name}</KingdomName>
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
            </FlexContainer>
        </KingdomFieldWrapper>
    );
};

export default KingdomField;
