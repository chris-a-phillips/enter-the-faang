import styled from 'styled-components';

export const WelcomeScreenWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	gap: 0px 0px;
	grid-template-areas:
		'. Difficulty ArmySize ArmySize TrueSkill .'
		'. Difficulty ArmySize ArmySize TrueSkill .'
		'. Difficulty ArmySize ArmySize TrueSkill .'
		'. TitanSelection TitanSelection TitanSelection TitanSelection .'
		'. TitanSelection TitanSelection TitanSelection TitanSelection .'
		'. . . . . .'
		'. . StartButton StartButton . .';
`;

export const TitanSelection = styled.div`
	grid-area: TitanSelection;
`;
export const StartButton = styled.div`
	grid-area: StartButton;
`;
export const Difficulty = styled.div`
	grid-area: Difficulty;
`;
export const ArmySize = styled.div`
	grid-area: ArmySize;
`;
export const TrueSkill = styled.div`
	grid-area: TrueSkill;
`;
