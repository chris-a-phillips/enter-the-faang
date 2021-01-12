import React from 'react';
import { KingdomFieldWrapper, KingdomFieldLabel, KingdomName, KingdomStats, KingdomContainer, FlexContainer, KingdomHealth } from './SCKingdomField';

const KingdomField = ({ playerKingdoms }) => {

    console.log(playerKingdoms)


    // showcase: attack: 7;
	// defense: 8;
	// energy: 6;
	// health: 5;
	// regeneration: 5;
	// speed: 4;
	// zen: 9;
    return (
        <KingdomFieldWrapper>
            <KingdomFieldLabel>Player Kingdoms</KingdomFieldLabel>
            <FlexContainer>
            {playerKingdoms.map((kingdom) => {
                return (
                    <KingdomContainer key={kingdom.name}>
                        <KingdomName>{kingdom.name}</KingdomName>
                        <KingdomHealth>{kingdom.health}</KingdomHealth>
                        <KingdomStats>
                            <p>Health: {kingdom.showcase.health}/10</p>
                            <p>Attack: {kingdom.showcase.attack}/10</p>
                            <p>Defense: {kingdom.showcase.defense}/10</p>
                            <p>Energy: {kingdom.showcase.energy}/10</p>
                            <p>Regeneration: {kingdom.showcase.regeneration}/10</p>
                            <p>Speed: {kingdom.showcase.speed}/10</p>
                            <p>Zen: {kingdom.showcase.zen}/10</p>
                        </KingdomStats>
                    </KingdomContainer>
                )
            })}
            </FlexContainer>
        </KingdomFieldWrapper>
    );
};

export default KingdomField;
