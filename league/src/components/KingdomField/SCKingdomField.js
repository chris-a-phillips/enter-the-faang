import styled from 'styled-components';

export const KingdomFieldWrapper = styled.div`
    text-align: center;
    background-color: peachpuff;
    `;

export const KingdomsFlexContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const KingdomContainer = styled.div`
	display: ${({ kingdom }) => (kingdom.isAlive ? 'inline-block' : 'none')};
	background-color: ${({ kingdom }) =>
		kingdom.isAlive ? kingdom.showcase.colors.secondary : 'black'};
	border: solid black 2px;
	border-radius: 5px;
	margin: 0.25rem;
	padding: 5px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const KingdomFieldLabel = styled.h2`

`;

export const KingdomName = styled.h3`
	background-color: ${({ kingdom }) =>
		kingdom.isAlive ? kingdom.showcase.colors.primary : 'black'};
        border-radius: 3px;
        padding: 5px;
`;


export const KingdomHealth = styled.div``;

export const KingdomStats = styled.div`
    display: ${({ hidden }) => (hidden ? 'none' : 'inline-block')}
`;
