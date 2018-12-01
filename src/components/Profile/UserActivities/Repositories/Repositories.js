import React, { Component } from 'react';
import _ from 'lodash';

import Card from './Card/Card';
import Utilities from './Utilities/Utilities';
import { Wrapper } from './Style.js';

class Repositories extends Component{
	state = {
		userRepositories: []
	}

	componentDidMount(){
		this.setState({
			userRepositories: this.props.userRepositories
		});
	}

	componentWillReceiveProps({ userRepositories }){
		if(this.state.userRepositories !== userRepositories){
			this.setState({ userRepositories });
		}
	}
	
	doSomething = (matchedRepositories) => {
		let temp = [];
		this.state.userRepositories.forEach((elem) => {
			if(matchedRepositories.includes(elem.name)){
				temp.push(elem);
			}
		})
		
		this.setState({
			userRepositories: temp
		});
	}

	render(){
		let allCards = this.state.userRepositories.map((elem, idx) => {
			return <Card name={elem.name} description={elem.description} language={elem.language} key={elem.name+" "+idx} />
		});

		return (
			<Wrapper>
				<Utilities userRepositories={this.state.userRepositories} onRepoListUpdated={this.doSomething} />
				{allCards}
			</Wrapper>
		)
	}
}

export default Repositories;