import styled from 'styled-components';

export const EnemyFieldWrapper = styled.div`
	text-align: center;
	background-color: gray;
`;

export const EnemyFlexContainer = styled.div`
	display: flex;
    justify-content: space-evenly;
`;

export const FaangContainer = styled.div`
	background-color: ${({ unit }) => (unit ? unit.showcase.rankColor : 'black')};
`;

export const EnemyFieldLabel = styled.h2``;

export const FaangName = styled.h3``;

export const FaangHealth = styled.div``;

export const FaangStats = styled.div``;
