import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Home from './Home';

const createRoutes = () =>
  <Route path="/" component={({ children }) => children}>
    <IndexRedirect to="home" />
    <Route path="home" component={Home} />
    {/* <Route path="*" component={NotFound} /> */}
  </Route>;

export default createRoutes;
