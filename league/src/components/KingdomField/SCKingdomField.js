import styled from 'styled-components';

export const KingdomFieldWrapper = styled.div`
    text-align: center;
    background-color: peachpuff;
    `;

export const KingdomFlexContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

export const KingdomContainer = styled.div`
    display: ${({ kingdom }) => (kingdom.isAlive ? 'inline-block' : 'none')};
    background-color: ${({ kingdom }) => (kingdom.isAlive ? kingdom.showcase.colors.primary : 'black')};
`;

export const KingdomFieldLabel = styled.h2`

`;

export const KingdomName = styled.h3``;


export const KingdomHealth = styled.div``;

export const KingdomStats = styled.div`
    display: ${({ hidden }) => (hidden ? 'none' : 'inline-block')}
`;
