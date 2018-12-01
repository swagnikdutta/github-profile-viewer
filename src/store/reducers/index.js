import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	userDetails: {},
	userRepositories: [],
	loaderVisibility: false,
};

const showLoader 			= (state) => updateObject(state, { loaderVisibility: true });
const hideLoader 			= (state) => updateObject(state, { loaderVisibility: false });
const getUserDetails 		= (state, { userDetails }) => updateObject(state, { userDetails });
const getUserRepositories 	= (state, { userRepositories }) => updateObject(state, { userRepositories });

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.FETCH_USER_DETAILS: {
			return getUserDetails(state, action);
		}
		case actionTypes.FETCH_USER_REPOSITORIES: {
			return getUserRepositories(state, action);
		}
		default: return state;
	}
};

export default reducer;