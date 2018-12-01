import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import _ from 'lodash';

import Actions from '../../store/actions/actions';

// Components
import Loader from '../../hoc/Loader/Loader';
import UserDetails from '../../components/Profile/UserDetails/UserDetails';
import UserActivities from '../../components/Profile/UserActivities/UserActivities';
import { Wrapper } from './Style.js';

class Home extends Component{

	async componentDidMount(){
		const userName = this.props.match.params.username;
		this.props.getUserDetails(userName);
		this.props.getUserRepositories(userName);
	}
	
	render(){
		return (
			<Wrapper>
				<UserDetails userDetails={this.props.userDetails} />
				<UserActivities userRepositories={this.props.userRepositories} />
			</Wrapper>
		)
	}
}

const mapStateToProps = state => {
    return {
    	userDetails: _.get(state, 'mainReducer.userDetails', {}),
    	userRepositories: _.get(state, 'mainReducer.userRepositories', [])
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getUserDetails: (userName) => dispatch(Actions.getUserDetails(userName)),
        getUserRepositories: (userName) => dispatch(Actions.getUserRepositories(userName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));