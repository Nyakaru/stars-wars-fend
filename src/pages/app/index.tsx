import React from "react";
import { memo } from "react";
import { Route, Switch, BrowserRouter, useRouteMatch } from "react-router-dom";

import MainApp from "./mainApp";

const App = () => {
  const routMatch = useRouteMatch();
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${routMatch.url}`} component={MainApp} />
      </Switch>
    </BrowserRouter>
  );
};

export default memo(App);
