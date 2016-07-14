import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import AppContainer from './containers/AppContainer';
import TeamsContainer from './containers/TeamsContainer';
import TeamContainer from './containers/TeamContainer';

const routes = {
  path: '/',
  component: AppContainer,
  childRoutes: [
  	{ path: '/teams', component: TeamsContainer },
    { path: '/teams/:team', component: TeamContainer }
  ]
};

ReactDOM.render((
	<Provider store={store}>
	  <Router routes={routes} history={browserHistory} />
 	</Provider>
), document.getElementsByClassName('root')[0]);
