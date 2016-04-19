import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '/imports/ui/layouts/App.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);
