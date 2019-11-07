import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/index';
import Respository from './pages/Repository/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Respository} />
      </Switch>
    </BrowserRouter>
  );
}
