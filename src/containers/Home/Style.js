import styled from 'styled-components';

export const Wrapper = styled.div`	
`;

export const Form = styled.form`
	width: 60%;
	margin: 15% auto auto auto;
`;

export const Input = styled.input`
	border: 1px solid grey;
	display: block;	
	margin-top: 10px;
	font-size: 15px;
	padding: 8px;
	border-radius: 4px;
	width: 100%;
	&:focus{
		outline: none;
	}
`;

export const Button = styled.button`
	margin-top: 10px;
	background-color: #4caf50;
	border: none;
	color: #fff;
	padding: 8px 15px;
	border-radius: 4px;
	font-size: 15px;
	cursor: pointer;
	&:focus{
		outline: none;
	}
	&:active{
		background-color: #2e7d32;

	}
`;