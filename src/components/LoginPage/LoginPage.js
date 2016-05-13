/**
 * Created by Novikov on 12/05/16.
 */

import React, { PropTypes, Component } from 'react';
import styles from './LoginPage.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class LoginPage extends Component {

	static contextTypes = {
		onSetTitle: PropTypes.func.isRequired
	};

	render() {
		const title = 'Log In';
		this.context.onSetTitle(title);
		return (
			<div className="LoginPage">
				<div className="LoginPage-container">
					<h1>{title}</h1>
					<p>...</p>
				</div>
			</div>
		);
	}

}

export default LoginPage;
