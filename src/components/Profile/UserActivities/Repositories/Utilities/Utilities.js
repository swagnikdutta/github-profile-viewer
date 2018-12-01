import React, { Component } from 'react';
import _ from 'lodash';

import { Wrapper, Input } from './Style.js';

class Utilities extends Component{
	state = {
		repositoryNames: []
	}

	componentDidMount(){
		this.setState({
			repositoryNames: this.props.userRepositories.map(elem => elem.name)
		});
	}

	componentWillReceiveProps(newProps){
		this.setState({
			repositoryNames: newProps.userRepositories.map(elem => elem.name)
		});
	}

	getFilteredRepositories = (filterParam, filterQuery) => {
		let filteredResults = [];
		
		this.state.repositoryNames.forEach(elem => {
			if(elem.toLowerCase().startsWith(filterQuery.toLowerCase())){
				filteredResults.push(elem);
			}
		});
		
		return filteredResults;
	}

	handleChange = (e) => {
		let repoNamePrefix = e.target.value,
			matchedRepositories = this.getFilteredRepositories('prefix', repoNamePrefix);

		this.props.onRepoListUpdated(matchedRepositories);
	}

	render(){
		return (
			<Wrapper>
				<Input type="text" autoComplete="off" placeholder="Find a repository..." onChange={this.handleChange}/>
			</Wrapper>
		);
	}
}

export default Utilities;