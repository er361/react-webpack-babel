import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/app.scss';
import React from 'react';
import Form from '../containers/form';
import List from '../containers/list';

export default class App extends React.Component {
  render() {
    return (
      <div className = {styles.container}>
				<Form />
        <List />
      </div>
    )
  }
}
