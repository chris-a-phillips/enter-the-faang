import styled from 'styled-components';

export const EnemyFieldWrapper = styled.div`
	text-align: center;
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
	height: 150px;
	border: solid black 2px;
	border-radius: 5px;
	margin: 0.25rem;
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

export const EnemyRank = styled.span`
	color: #000;
`

export const EnemyFieldLabel = styled.span`
	color: #000;
`;

export const FaangName = styled.span``;

export const FaangStats = styled.div``;

export const HealthBarContainer = styled.div`
	background-color: ${({ unit }) => (unit ? 'gray' : '#2b2d2f')};
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
	width: ${({ unit, percent }) => (unit ? `${percent}%` : 'inline-block')};
	border-radius: 25px;
`;