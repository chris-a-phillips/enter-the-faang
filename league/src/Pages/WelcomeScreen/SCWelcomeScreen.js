import styled from 'styled-components';

export const WelcomeScreenWrapper = styled.div`
	padding: 10px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 0.6fr 0.7fr 0.6fr 2.1fr 1fr;
	gap: 5px 5px;
	grid-template-areas:
		'DifficultyHeader DifficultyHeader ArmySizeHeader ArmySizeHeader ArmySizeHeader TrueSkillHeader TrueSkillHeader'
		'DifficultyButtons DifficultyButtons ArmySizeButtons ArmySizeButtons ArmySizeButtons TrueSkillButtons TrueSkillButtons'
		'TitanSelectionHeader TitanSelectionHeader TitanSelectionHeader TitanSelectionHeader TitanSelectionHeader TitanSelectionHeader TitanSelectionHeader'
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
	display: flex;
	justify-content: space-evenly;
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

export const TrueSkillHeader = styled(PageDiv)`
	grid-area: TrueSkillHeader;
`;

export const TitanSelectionHeader = styled(PageDiv)`
	grid-area: TitanSelectionHeader;
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

export const TitanCard = styled.div`
	filter: ${({ titan }) => (titan.starter ? 'brightness(150%)' : 0)};
	display: ${({ titan }) => (titan.isAlive ? 'inline-block' : 'none')};
	background-color: ${({ titan }) =>
		titan.starter
			? titan.showcase.colors.primary
			: titan.showcase.colors.secondary};
	border: solid black 2px;
	border-radius: 5px;
	margin: 0.25rem;
	padding: 5px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const TitanName = styled.h3`
	background-color: ${({ titan }) =>
		titan.starter
			? titan.showcase.colors.secondary
			: titan.showcase.colors.primary};
	border-radius: 3px;
	padding: 5px;
`;

export const TitanButton = styled.button`

`;

export const StatBar = styled.div`
	background-color: ${
		({ stat }) =>
			stat === 9
				? '#32E058'
				: stat === 8
				? '#2ABD49' // if
				: stat === 7
				? '#CBD448' // else if
				: stat === 6
				? '#D48F3D' // else if
				: stat === 5
				? '#C94A3A' // else if
				: '#7F3128' // else
	};
	width: ${({ titan, stat }) => (titan ? `${stat}0%` : 'inline-block')};
	border-radius: 25px;
`;
