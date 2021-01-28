import styled from 'styled-components';

export const GameBoardWrapper = styled.div`
	/* display: flex;
    justify-content: space-around; */
	/* background-color: pink; */
	display: grid;
	grid-template-columns: minmax(150px, 25%) 1fr;
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

export const BoardContainer = styled.div`
	padding: 1rem;
	background-color: red;
	width: 90vh;
	height: 90vh;
`;

export const GameInfoContainer = styled.div``;

export const SessionLogContainer = styled.div`
`
export const ActionContainer = styled.div`
	display: ${({ action }) => (action.event ? 'block' : 'none')};
	background-color: ${({ action }) => (action ? action.bgColor : 'red')};
	color: ${({ action }) => (action ? action.color : 'red')};
	margin: 5px;
	padding: 5px;
	border-radius: 10px;
	border: ${({ action }) => (action ? 'solid black 4px' : '#000')};
`;