import styled from 'styled-components';

export const WelcomeScreenWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 0.6fr 0.7fr 1.7fr 1fr;
	gap: 5px 5px;
	grid-template-areas:
		'DifficultyHeader DifficultyHeader ArmySizeHeader ArmySizeHeader ArmySizeHeader TrueSkillHeader TrueSkillHeader'
		'DifficultyButtons DifficultyButtons ArmySizeButtons ArmySizeButtons ArmySizeButtons TrueSkillButtons TrueSkillButtons'
		'TitanSelectionDiv TitanSelectionDiv TitanSelectionDiv TitanSelectionDiv TitanSelectionDiv TitanSelectionDiv TitanSelectionDiv'
		'. . StartButtonDiv StartButtonDiv StartButtonDiv . .';
`;

export const PageDiv = styled.div`
	text-align: center;
	padding: 10px;
	/* margin: 0; */
`;

export const TitanSelectionDiv = styled(PageDiv)`
	grid-area: TitanSelectionDiv;
`;
export const StartButtonDiv = styled(PageDiv)`
	grid-area: StartButtonDiv;
`;
export const DifficultyHeader = styled(PageDiv)`
	grid-area: DifficultyHeader;
`;
export const ArmySizeHeader = styled(PageDiv)`
	grid-area: ArmySizeHeader;
`;
export const TrueSkillHeader = styled.div`
	grid-area: TrueSkillHeader;
`;

export const ButtonSection = styled.div`
	display: grid;
	row-gap: 1rem;
	text-align: center;
`;

export const DifficultyButtons = styled(ButtonSection)`
	grid-area: DifficultyButtons;
`;

export const ArmySizeButtons = styled(ButtonSection)`
	grid-area: ArmySizeButtons;
`;

export const TrueSkillButtons = styled(ButtonSection)`
	grid-area: TrueSkillButtons;
`;

export const OptionButton = styled.button`
	margin: auto;
`;
