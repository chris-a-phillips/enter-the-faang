import styled from 'styled-components';

export const GameRulesWrapper = styled.div`
	position: relative;
	top: 25%;
	left: 25%;
	background-color: white;
	padding: 30px;
	z-index: 2;
	position: fixed;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const CloseButton = styled.h1`
	position: absolute;
	top: 8px;
	right: 24px;
	:hover {
		cursor: pointer;
	}
`

export const RulesFlexContainer = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 5px;
	margin: 10px;
`;

export const RulesDiv = styled.div`
	padding: 10px;
	margin: 10px;
	border-radius: 10px;
`;

export const WinDiv = styled(RulesDiv)`
	background-color: #66ff66;
`;

export const LoseDiv = styled(RulesDiv)`
	background-color: #ff4d4d;
`;

export const RulesHeading = styled.h1`
	text-align: center;
`;

export const RulesH3 = styled.h3`
	text-align: center;
	margin: 5px;
`;

export const RulesP = styled.p``;

export const RulesOL = styled.ol``;

export const RulesLI = styled.li``;
