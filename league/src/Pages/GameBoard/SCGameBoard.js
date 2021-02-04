import styled from 'styled-components';

export const GameBoardWrapper = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
	gap: 0px 0px;
	grid-template-areas:
		'game-info game-info enemy-field enemy-field enemy-field enemy-field enemy-field enemy-field enemy-field enemy-field'
		'game-info game-info enemy-field enemy-field enemy-field enemy-field enemy-field enemy-field enemy-field enemy-field'
		'game-info game-info player-field player-field player-field player-field player-field player-field player-field player-field'
		'game-info game-info player-field player-field player-field player-field player-field player-field player-field player-field'
		'game-info game-info player-field player-field player-field player-field player-field player-field player-field player-field'
		'game-info game-info kingdom-field kingdom-field kingdom-field kingdom-field kingdom-field kingdom-field kingdom-field kingdom-field';
	/* background: linear-gradient(
			217deg,
			rgba(255, 0, 0, 0.8),
			rgba(255, 0, 0, 0) 70.71%
		),
		linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
		linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%); */
`;

export const GameRulesModal = styled.div`
	display: ${({ showRules }) => (showRules ? 'block' : 'none')};
	width: 90vh;
	height: 90vh;
	z-index: 2;
	position: fixed;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const GameInfoContainer = styled.div`
	grid-area: game-info;
`;

export const EnemyFieldContainer = styled.div`
	grid-area: enemy-field;

`;

export const PlayerFieldContainer = styled.div`
	grid-area: player-field;

`;

export const KingdomFieldContainer = styled.div`
	grid-area: kingdom-field;

`;

export const SessionLogContainer = styled.div``;
export const ActionContainer = styled.div`
	display: ${({ action }) => (action.event ? 'block' : 'none')};
	background: ${({ action }) => (action.gradientOne ? `linear-gradient(${action.gradientOne}, ${action.gradientTwo})` : '#fff')};
	background-color: ${({ action }) => (action ? action.bgColor : 'red')};
	color: ${({ action }) => (action ? action.color : 'red')};
	margin: 5px;
	padding: 5px;
	border-radius: 10px;
	border: ${({ action }) => (action.border ? `solid ${action.border} 4px` : 'solid #000 4px')};
`;
// background: linear-gradient(#e66465, #9198e5);