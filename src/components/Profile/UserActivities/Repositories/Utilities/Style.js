import styled from 'styled-components';

export const Wrapper = styled.div`
	border-bottom: 1px solid lightgrey;
	padding: 14px 0;
`;

export const Input = styled.input`
	border: 1px solid lightgrey;
	display: block;	
	font-size: 13px;
	padding: 8px;
	border-radius: 4px;
	width: 40%;
	&:focus{
		outline: none;
	}
`;