/**
 * Created by Novikov on 12/05/16.
 */

import React from 'react';
import Router from 'react-routing/src/Router';

import App from './components/App';
import IndexPage from './components/IndexPage';
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

const router = new Router(on => {
	on('*', async (state, next) => {
		const component = await next();
		return component && <App context={state.context}>{component}</App>;
	});

	on('/login', async () => <LoginPage />);

	on('*', async () => <IndexPage />);

	on('error', (state, error) => state.statusCode === 404 ?
		<App context={state.context} error={error}><NotFoundPage /></App> :
		<App context={state.context} error={error}><ErrorPage /></App>
	);
});

export default router;
