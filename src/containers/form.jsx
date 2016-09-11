import React from 'react';
import {loadIssues, loadState} from '../redux/actions';
import {connect} from 'react-redux';

class Form extends React.Component {

	constructor(props) {
		super(props)
		this.state = {username: '', repo_title: ''}
	}

	handelLoad(){
		const { username, repo_title } = this.state;
		this.props.loadState(username, repo_title);
		this.props.load();
	}

	render(){
		
		return(
			<div>
				<label htmlFor="username">Имя пользователя:</label><br/>
				<input name='username' value={this.state.username} type="text" onChange={(e) => {
					this.setState({username: e.target.value.trim()})
				}}/>
				<br/>
				<label htmlFor="repo_title">Название репозитория:</label><br/>
				<input name='repo_title' value={this.state.repo_title} type="text" onChange={(e) => {
					this.setState({repo_title: e.target.value.trim()})
				}}/>
				<br/>
				<button disabled={!this.state.username || !this.state.repo_title} onClick = {this.handelLoad.bind(this)}>Загрузить issues </button>
			</div>
		)
	}
}

Form.propTypes = {
	load: React.PropTypes.func,
	loadState: React.PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
	return {
		load: () => {
			dispatch(loadIssues())
		},
		loadState: (username, repo_title) => {
			dispatch(loadState(username, repo_title))
		}
	}
};

const formContainer = connect(
	null,
	mapDispatchToProps
)(Form);

export default formContainer;
