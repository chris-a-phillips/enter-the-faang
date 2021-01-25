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
	/* background-color: white; */
	position: fixed;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const BoardContainer = styled.div`
	padding: 1rem;
`;

export const GameInfoContainer = styled.div``;
