import styled from 'styled-components';

export const EnemyFieldWrapper = styled.div`
	text-align: center;
	background-color: gray;
	color: #fff;
`;

export const EnemyFlexContainer = styled.div`
	display: flex;
    justify-content: space-evenly;
`;

export const FaangContainer = styled.div`
	background-color: ${({ unit }) =>
		unit ? unit.showcase.speciesColor : 'black'};
	width: 20%;
	height: 80%;
	border: solid black 2px;
	border-radius: 5px;
	margin: 1rem;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const FaangHeader = styled.div`
	border: solid black 2px;
	border-radius: 5px;
	margin: 10px;
	padding: 2px;
`;

export const FaangContent = styled.div`
	background-color: ${({ unit }) =>
		unit ? unit.showcase.rankColor : 'black'};
	border: solid black 2px;
	border-radius: 5px;
	margin: 2px;
`;

export const EnemyRank = styled.p`
	color: #000;
`

export const EnemyFieldLabel = styled.h2``;

export const FaangName = styled.h3``;

export const FaangHealth = styled.div``;

export const FaangStats = styled.div``;
