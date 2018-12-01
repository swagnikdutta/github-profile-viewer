import React from 'react';
import _ from 'lodash';

import { Wrapper, ImageWrapper, Name, Username, Bio, DefaultText } from './Style.js';

const collections = ({ userDetails }) => {
	
	let name 		= _.get(userDetails, 'name', ''),
		imageUrl 	= _.get(userDetails, 'avatar_url', ''),
		bio 		= _.get(userDetails, 'bio', ''),
		company 	= _.get(userDetails, 'company', ''),
		login 		= _.get(userDetails, 'login', ''),
		email		= _.get(userDetails, 'email', ''),
		location 	= _.get(userDetails, 'location', '');
		
	return (
		<Wrapper>
			<ImageWrapper imageUrl={imageUrl} />
			<Name>{name}</Name>
			<Username>{login}</Username>
			<Bio>{bio}</Bio>
			<DefaultText>{company}</DefaultText>
			<DefaultText>{location}</DefaultText>
			<DefaultText>{email}</DefaultText>
		</Wrapper>
	);	
};

export default collections;