import styled from 'styled-components';

export const PlayerFieldWrapper = styled.div`
	text-align: center;
	/* background-color: yellow; */
`;

export const PlayerFlexContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	/* background-color: teal; */
`;


export const TitanContainer = styled.div`
	height: 100%;
	display: ${({ titan }) => (titan.isAlive ? 'inline-block' : 'none')};
	background-color: ${({ titan }) =>
		titan.isAlive ? titan.showcase.colors.secondary : 'black'};
	border: solid black 5px;
	border-radius: 5px;
	margin: 1rem;
	padding: 10px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const TitanReserveContainer = styled.div`
	width: 25%;

	/* display: grid; */
	/* grid-gap: 1rem; */
	/* grid-template-columns: repeat(auto-fit, minmax(auto, 1fr)); */
	
`;

export const TitanReserve = styled(TitanContainer)`
	height: auto;
	border: solid black 3px;
	border-radius: 10px;
	padding: 5px;
	margin: 0.25rem;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
	rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
	rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
	font-size: .25rem;
	transition: all .2s ease-in-out;
	:hover {
		transform: scale(2.5);
	}
`;

export const PlayerFieldLabel = styled.h2``;

export const TitanName = styled.h3`
	background-color: ${({ titan }) =>
		titan.isAlive ? titan.showcase.colors.primary : 'black'};
	border-radius: 3px;
	padding: 5px;
`;

export const TitanStats = styled.div``;

export const CardFlexContainer = styled(PlayerFlexContainer)`
	/* background-color: orchid; */
`;

export const CardContainer = styled.div`
	background-color: ${({ card }) => (card ? card.colors.secondary : 'black')};
	border: solid black 2px;
	border-radius: 5px;
	margin: 0.5rem;
	padding: 5px;
	width: 20%;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
		rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
	font-size: 0.25rem;
	transition: all 0.2s ease-in-out;
	:hover {
		transform: scale(2.5);
	};
	:active {
		transform: 0;
		opacity: 0.75;
	};
`;

export const CardHeading = styled.div`
	background-color: ${({ card }) => (card ? card.colors.primary : 'black')};
	border-radius: 3px;
	padding: 5px;
`;

export const CardButton = styled.button`
	font-size: 1rem;
`;

export const HealthBarContainer = styled.div`
	background-color: ${({ titan }) => (titan ? 'gray' : '#2b2d2f')};
	border-radius: 25px;
	margin: 5px;
	padding: 3px;
`;

export const HealthBar = styled.div`
	background-color: ${
		({ percent }) =>
			percent === 100
				? '#32E058'
				: percent > 75
				? '#2ABD49' // if
				: percent > 50
				? '#CBD448' // else if
				: percent > 25
				? '#D48F3D' // else if
				: '#C94A3A' // else
	};
	width: ${({ titan, percent }) =>
		titan ? `${percent}%` : 'inline-block'};
	border-radius: 25px;
`;