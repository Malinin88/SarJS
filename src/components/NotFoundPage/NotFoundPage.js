/**
 * Created by Novikov on 12/05/16.
 */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './NotFoundPage.scss';

@withStyles(styles)
class NotFoundPage extends Component {

	static contextTypes = {
		onSetTitle: PropTypes.func.isRequired,
		onPageNotFound: PropTypes.func.isRequired
	};

	render() {
		const title = 'Page Not Found';
		this.context.onSetTitle(title);
		this.context.onPageNotFound();
		return (
			<div>
				<h1>{title}</h1>
				<p>Sorry, but the page you were trying to view does not exist.</p>
			</div>
		);
	}

}

export default NotFoundPage;
