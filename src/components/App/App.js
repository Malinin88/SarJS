/**
 * Created by Novikov on 12/05/16.
 */

import React, { PropTypes, Component } from 'react';
import styles from './App.scss';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';

@withContext
@withStyles(styles)
class App extends Component {

	static propTypes = {
		children: PropTypes.element.isRequired,
		error: PropTypes.object
	};

	render() {
		return !this.props.error ? (
			<div>
				{this.props.children}
			</div>
		) : this.props.children;
	}

}

export default App;
