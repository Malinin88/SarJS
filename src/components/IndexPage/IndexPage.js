/**
 * Created by Novikov on 12/05/16.
 */

import React, { PropTypes, Component } from 'react';
import styles from './IndexPage.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class IndexPage extends Component {

	static contextTypes = {
		onSetTitle: PropTypes.func.isRequired
	};

	render() {
		const title = 'Index PAge Title';
		this.context.onSetTitle(title);
		return (
			<div className="IndexPage">
				<div className="IndexPage-container">
					Index page
				</div>
			</div>
		);
	}

}

export default IndexPage;
