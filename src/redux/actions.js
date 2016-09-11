import axios from 'axios';

export const REQUEST_ISSUES = 'REQUEST_ISSUES';
export const SUCCES_ISSUES = 'SUCCES_ISSUES';
export const FAILURE_ISSUES  = 'FAILURE_ISSUES';

export const requestIssues = (username, repo_title) => {
	return {
		type: REQUEST_ISSUES,
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
		axios.get(url).then((response) => {
				dispatch(recieveIssues(response))
			}).catch((error) => {
				dispatch(handleError(error))
			});
	}
}



