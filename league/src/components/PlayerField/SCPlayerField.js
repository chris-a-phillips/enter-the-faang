import styled from 'styled-components';

export const PlayerFieldWrapper = styled.div`
	text-align: center;
	background-color: yellow;
`;

export const PlayerFlexContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	background-color: teal;
`;

export const TitanContainer = styled.div`
	display: ${({ titan }) => (titan.isAlive ? 'inline-block' : 'none')};
	background-color: ${({ titan }) =>
		titan.isAlive ? titan.showcase.colors.secondary : 'black'};
	border: solid black 2px;
	border-radius: 5px;
	margin: 0.25rem;
	padding: 5px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const PlayerFieldLabel = styled.h2``;

export const TitanName = styled.h3`
	background-color: ${({ titan }) =>
		titan.isAlive ? titan.showcase.colors.primary : 'black'};
	border-radius: 3px;
	padding: 5px;
`;

export const TitanHealth = styled.div``;

export const TitanStats = styled.div``;

export const CardFlexContainer = styled(PlayerFlexContainer)`
	background-color: orchid;
`;

export const CardContainer = styled.div`
	background-color: ${({ card }) => (card ? card.colors.secondary : 'black')};
	border: solid black 2px;
	border-radius: 5px;
	margin: 0.25rem;
	padding: 5px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const CardHeading = styled.div`
	background-color: ${({ card }) => (card ? card.colors.primary : 'black')};
	border-radius: 3px;
	padding: 5px;
`;

export const CardButton = styled.button`
	font-size: 1.5rem;
`