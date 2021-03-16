import React, { useState } from 'react';
import {
	KingdomFieldWrapper,
	KingdomFieldLabel,
	KingdomName,
	KingdomStats,
	KingdomContainer,
	KingdomsFlexContainer,
	HealthBarContainer,
	HealthBar,
	StatBar
} from './SCKingdomField';


function KingdomField ({ playerKingdoms, functions }) {
	const [hidden, setHidden] = useState(true);

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
							<KingdomName kingdom={kingdom}>
								{kingdom.name}
							</KingdomName>
							<HealthBarContainer kingdom={kingdom}>
								<HealthBar
									kingdom={kingdom}
									percent={Math.ceil(
										(kingdom.currentHealth /
											kingdom.maxHealth) *
											100
									)}>
									{Math.ceil(
										(kingdom.currentHealth /
											kingdom.maxHealth) *
											100
									)}
									%
								</HealthBar>
							</HealthBarContainer>
							<KingdomStats hidden={hidden}>
								<StatBar
									kingdom={kingdom}
									stat={kingdom.showcase.health}>
									<p>{kingdom.showcase.health}/10</p>
								</StatBar>
								<p>Health</p>
								<StatBar
									kingdom={kingdom}
									stat={kingdom.showcase.attack}>
									<p>{kingdom.showcase.attack}/10</p>
								</StatBar>
								<p>Attack</p>
								<StatBar
									kingdom={kingdom}
									stat={kingdom.showcase.defense}>
									<p>{kingdom.showcase.defense}/10</p>
								</StatBar>
								<p>Defense</p>
								<StatBar
									kingdom={kingdom}
									stat={kingdom.showcase.energy}>
									<p>{kingdom.showcase.energy}/10</p>
								</StatBar>
								<p>Energy</p>
								<StatBar
									kingdom={kingdom}
									stat={kingdom.showcase.regeneration}>
									<p>{kingdom.showcase.regeneration}/10</p>
								</StatBar>
								<p>Regeneration</p>
								<StatBar
									kingdom={kingdom}
									stat={kingdom.showcase.speed}>
									<p>{kingdom.showcase.speed}/10</p>
								</StatBar>
								<p>Speed</p>
								<StatBar
									kingdom={kingdom}
									stat={kingdom.showcase.zen}>
									<p>{kingdom.showcase.zen}/10</p>
								</StatBar>
								<p>Zen</p>
							</KingdomStats>
						</KingdomContainer>
					);
				})}
			</KingdomsFlexContainer>
		</KingdomFieldWrapper>
	);
};

export default KingdomField;
