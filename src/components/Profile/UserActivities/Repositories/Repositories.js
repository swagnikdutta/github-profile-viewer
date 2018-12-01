import React from 'react';
import _ from 'lodash';

import Card from './Card/Card';
import { Wrapper } from './Style.js';

const repositories = ({ userRepositories }) => {
	const allCards = userRepositories.map(elem => {
		return <Card name={elem.name} description={elem.description} language={elem.language} />
	});

	return (
		<Wrapper>
			{allCards}
		</Wrapper>
	);
};

export default repositories;