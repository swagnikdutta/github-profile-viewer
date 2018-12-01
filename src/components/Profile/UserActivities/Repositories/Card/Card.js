import React from 'react';
import _ from 'lodash';

import { Wrapper, RepoName, Description, DefaultText } from './Style.js';

const card = ({ name, language, description }) => {

	return (
		<Wrapper>
			<RepoName>{name}</RepoName>
			<Description>{description}</Description>
			<DefaultText>{language}</DefaultText>
		</Wrapper>
	);
};

export default card;