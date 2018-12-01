import GithubService from '../../Services/GithubService';
import * as actionTypes from './actionTypes';

const _ = require('lodash');

const getUserDetails = (userName) => async (dispatch) => {
	showLoader(dispatch);

	let userDetails = await GithubService.getUserDetails(userName).catch((e) => {
		console.log(`There was an error fetching user details for: ${userName}`);
	});
	
	dispatch({
		type: actionTypes.FETCH_USER_DETAILS,
		userDetails: _.get(userDetails, 'data')
	});

	hideLoader(dispatch);
}

const getUserRepositories = (userName) => async (dispatch) => {
	showLoader(dispatch);

	let userRepositories = await GithubService.getUserRepositories(userName).catch((e) => {
		console.log(`There was an error fetching repositories for: ${userName}`);
	});
	
	dispatch({
		type: actionTypes.FETCH_USER_REPOSITORIES,
		userRepositories: _.get(userRepositories, 'data')
	});

	hideLoader(dispatch);
}

const showLoader = (dispatch) => {
	dispatch({ type: actionTypes.SHOW_LOADER });
}

const hideLoader = (dispatch) => {
	dispatch({ type: actionTypes.HIDE_LOADER });
}

export default {
	getUserDetails,
	getUserRepositories
}