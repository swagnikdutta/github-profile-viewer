import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	restaurantCategories: [],
	loaderVisibility: false,
};

const showLoader 					= (state) => updateObject(state, { loaderVisibility: true });
const hideLoader 					= (state) => updateObject(state, { loaderVisibility: false });
const fetchRestaurantCategories 	= (state, { restaurantCategories }) => updateObject(state, { restaurantCategories });

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.FETCH_CATEGORIES: {
			return fetchRestaurantCategories(state, action);
		}
		default: return state;
	}
};

export default reducer;