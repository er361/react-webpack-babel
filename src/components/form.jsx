import React from 'react';
import {loadIssues, requestIssues} from '../redux/actions';
import {connect} from 'react-redux';

class Form extends React.Component {

	constructor(props) {
		super(props)
		this.state = {username: '', repo_title: ''}
	}

	handlLoad(){
		const { username, repo_title } = this.state;
		this.props.request(username, repo_title);
		this.props.load();
	}

	render(){
		
		return(
			<div>
				<label htmlFor="username">Имя пользователя:</label><br/>
				<input name='username' type="text" onChange={(e) => {
					this.setState({username: e.target.value.trim()})
				}}/>
				<br/>
				<label htmlFor="repo_title">Название репозитория:</label><br/>
				<input name='repo_title' type="text" onChange={(e) => {
					this.setState({repo_title: e.target.value.trim()})
				}}/>
				<br/>
				<button onClick = {this.handlLoad.bind(this)}>Загрузить issues </button>
			</div>
		)
	}
}

Form.propTypes = {
	load: React.PropTypes.func,
	request: React.PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
	return {
		load: () => {
			dispatch(loadIssues())
		},
		request: (username, repo_title) => {
			dispatch(requestIssues(username, repo_title))
		}
	}
};

const formContainer = connect(
	null,
	mapDispatchToProps
)(Form);

export default formContainer;
