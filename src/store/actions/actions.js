import GithubService from '../../Services/GithubService';
import * as actionTypes from './actionTypes';

const _ = require('lodash');

const getUserDetails = (userName) => async (dispatch) => {
	let userDetails = await GithubService.getUserDetails(userName).catch((e) => {
		console.log(`There was an error fetching user details for: ${userName}`);
	});
	
	dispatch({
		type: actionTypes.FETCH_USER_DETAILS,
		userDetails: _.get(userDetails, 'data')
	});
}

const getUserRepositories = (userName) => async (dispatch) => {
	let userRepositories = await GithubService.getUserRepositories(userName).catch((e) => {
		console.log(`There was an error fetching repositories for: ${userName}`);
	});
	
	dispatch({
		type: actionTypes.FETCH_USER_REPOSITORIES,
		userRepositories: _.get(userRepositories, 'data')
	});
}

export default {
	getUserDetails,
	getUserRepositories
}