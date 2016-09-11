import {LOAD_STATE, IS_LOADING, SUCCES_ISSUES, FAILURE_ISSUES } from './actions';

let initialState = {
	username: '',
	repo_title: '',
	isLoading: false,
	items: []
};


export default function (state = initialState, action ) {
	switch (action.type){
		case IS_LOADING:
			return Object.assign({}, state, {isLoading: action.isLoading})
		case LOAD_STATE:
			return Object.assign({}, state, {username: action.username, repo_title: action.repo_title})
		case SUCCES_ISSUES:
			return Object.assign({}, state, {items: action.issues.data})
		case FAILURE_ISSUES:
			alert(action.error.message);
			return state
		default:
			return initialState
	}
}
