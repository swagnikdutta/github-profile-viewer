import styled from 'styled-components';

export const Wrapper = styled.div`
	// border: 1px solid lightgrey;
	float: left;
	width: 25%;
	padding: 0 20px 0 20px;

	height: 100vh;
`;

export const ImageWrapper = styled.div`
	// border: 1px solid lightgrey;
	height: 230px;
	width: 230px;
	background: url( ${props => props.imageUrl} ) no-repeat center;
	background-size: cover;
	border-radius: 50%;
`;

export const Name = styled.p`
	// border: 1px solid lightgrey;
	font-weight: bold;
	font-size: 22px;
	font-family: 'Arimo', serif;
	margin-bottom: 0;
`;

export const Username = styled.p`
	// border: 1px solid lightgrey;
	color: grey;
	font-size: 20px;
	margin: 0;
`;

export const Bio = styled.p`
	border-bottom: 1px solid lightgrey;
	color: grey;
	font-size: 13px;
	padding-bottom: 30px;
`;

export const DefaultText = styled.p`
	color: #525252;
	font-size: 15px;
`;
