import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	userDetails: {},
	userRepositories: []
};

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