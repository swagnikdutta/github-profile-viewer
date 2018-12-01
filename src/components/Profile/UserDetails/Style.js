import styled from 'styled-components';

export const Wrapper = styled.div`
	float: left;
	width: 25%;
	padding: 0 20px 0 20px;

	@media (min-width: 320px) and (max-width: 480px) {
    	width: 100%;
    	margin-bottom: 5%;
	}
`;

export const ImageWrapper = styled.div`
	height: 230px;
	width: 230px;
	background: url( ${props => props.imageUrl} ) no-repeat center;
	background-size: cover;
	border-radius: 50%;
	@media (min-width: 320px) and (max-width: 480px) {
    	margin: 0 auto;
	}
`;

export const Name = styled.p`
	font-weight: bold;
	font-size: 22px;
	font-family: 'Arimo', serif;
	margin-bottom: 0;
`;

export const Username = styled.p`
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
