import styled from 'styled-components'

export const AppWrapper = styled.div`
    /* background-color: #000; */
`

export const AppH1 = styled.h1`
    font-size: 3rem;
`

export const TestBox = styled.div`
	height: 100px;
	background-color: ${({ primaryColor }) =>
		primaryColor ? primaryColor : '#e9c46a'};
`;