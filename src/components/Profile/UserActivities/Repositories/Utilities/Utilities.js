import React, { Component } from 'react';
import _ from 'lodash';

import { Wrapper, Input } from './Style.js';

class Utilities extends Component{
	state = {
		repositoryNames: [],
		userRepositories: []
	}

	componentWillReceiveProps(newProps){
		this.setState({
			repositoryNames: newProps.userRepositories.map(elem => elem.name),
			userRepositories: newProps.userRepositories
		});
	}

	getFilteredRepositories = (filterParam, filterQuery) => {
		let filteredResults = [],
			data = filterParam === 'repoName' ? this.state.repositoryNames : this.state.userRepositories,
			key = filterParam === 'repoName' ? '' : 'language';

		data.forEach(elem => {
			let temp = typeof elem === 'string' ? elem : _.get(elem, key, '');
			if(temp && temp.toLowerCase().startsWith(filterQuery.toLowerCase())) {
				filteredResults.push(temp);
			}
		});
		
		return filteredResults;
	}

	handleSeachByRepoName = (e) => {
		let repoNamePrefix = e.target.value,
			matchedRepositories = this.getFilteredRepositories('repoName', repoNamePrefix);

		this.props.onRepoListUpdated(matchedRepositories, 'repoName');
	}

	handleSeachByLanguage = (e) => {
		let language = e.target.value,
			matchedRepositories = this.getFilteredRepositories('language', language);

		this.props.onRepoListUpdated(matchedRepositories, 'language');
	}

	render(){
		return (
			<Wrapper>
				<Input type="text" autoComplete="off" placeholder="Find a repository..." onChange={this.handleSeachByRepoName}/>
				<Input type="text" autoComplete="off" placeholder="Search repository by language..." onChange={this.handleSeachByLanguage}/>
			</Wrapper>
		);
	}
}

export default Utilities;