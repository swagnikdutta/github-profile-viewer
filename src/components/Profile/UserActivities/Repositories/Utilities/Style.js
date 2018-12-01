import styled from 'styled-components';

export const Wrapper = styled.div`
	border-bottom: 1px solid lightgrey;
	padding: 14px 0;
	overflow: hidden;
`;

export const Input = styled.input`
	border: 1px solid lightgrey;
	display: block;	
	font-size: 13px;
	padding: 8px;
	border-radius: 4px;
	width: 48%;
	float: left;
	margin-right: 2%;
	&:focus{
		outline: none;
	}
	@media (min-width: 320px) and (max-width: 480px) {
    	width: 100%;
    	margin-right: 0;
	}
`;