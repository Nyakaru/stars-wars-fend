import React from "react";
import { memo } from "react";
import { Route, Switch, BrowserRouter, useRouteMatch } from "react-router-dom";

import { AppProvider } from "../../store";
import MainApp from "./mainApp";

const App = () => {
  const routMatch = useRouteMatch();
  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <Route path={`${routMatch.url}`} component={MainApp} />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
};

export default memo(App);
