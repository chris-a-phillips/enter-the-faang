import styled from 'styled-components';

export const WelcomeScreenWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	gap: 7px 7px;
	grid-template-areas:
		'. Difficulty ArmySize ArmySize TrueSkill .'
		'. Difficulty ArmySize ArmySize TrueSkill .'
		'. Difficulty ArmySize ArmySize TrueSkill .'
		'. TitanSelection TitanSelection TitanSelection TitanSelection .'
		'. TitanSelection TitanSelection TitanSelection TitanSelection .'
		'. . . . . .'
		'. . StartButton StartButton . .';
`;

export const PageDiv = styled.div`
	text-align: center;
    /* margin: 0; */
`;

export const TitanSelection = styled(PageDiv)`
	grid-area: TitanSelection;
`;
export const StartButton = styled(PageDiv)`
	grid-area: StartButton;
`;
export const Difficulty = styled(PageDiv)`
	grid-area: Difficulty;
`;
export const ArmySize = styled(PageDiv)`
	grid-area: ArmySize;
`;
export const TrueSkill = styled.div`
	grid-area: TrueSkill;
`;

export const ButtonSection = styled.div`
	display: grid;
    row-gap: 1rem;
	text-align: center;

`;

export const OptionButton = styled.button`
    margin: auto;
`