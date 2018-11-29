import GithubService from '../../Services/GithubService';
import * as actionTypes from './actionTypes';

const _ = require('lodash');

const fetchRestaurantCategories = () => async (dispatch) => {
	showLoader(dispatch);

	let restaurantCategories = await ZomatoService.fetchRestaurantCategories().catch((e) => {
		console.log('There was an error fetching categories or restaurant types.')
	});

	dispatch({
		type: actionTypes.FETCH_CATEGORIES,
		restaurantCategories: _.get(restaurantCategories, 'data.categories')
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
	fetchRestaurantCategories
}