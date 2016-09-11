import axios from 'axios';


export const LOAD_STATE = 'LOAD_STATE';
export const SUCCES_ISSUES = 'SUCCES_ISSUES';
export const FAILURE_ISSUES  = 'FAILURE_ISSUES';
export const IS_LOADING = 'IS_LOADING';

export const loadingStatus = (isLoading) => {
	return {
		type: IS_LOADING,
		isLoading
	}
}

export const loadState = (username, repo_title) => {
	return {
		type: LOAD_STATE,
		username,
		repo_title
	}
}

export const recieveIssues = (issues) => {
	return {
		type: SUCCES_ISSUES,
		issues
	}
}


export const handleError = (error) => {
	return {
		type: FAILURE_ISSUES,
		error
	}
}

export function loadIssues(){
	return (dispatch, getState) => {
		const { issues: {username, repo_title } } = getState();
		const url = `https://api.github.com/repos/${username}/${repo_title}/issues`;

		//показать что загружаються данные с сервера 
		dispatch(loadingStatus(true))

		axios.get(url).then((response) => {
				//закончить отображение так как данные загружены
				dispatch(loadingStatus(false))
				dispatch(recieveIssues(response))
			}).catch((error) => {
				//также убрать отображение загрузки 
				dispatch(loadingStatus(false))
				dispatch(handleError(error))
			});
	}
}



