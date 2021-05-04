import React from "react";
import { Route, Switch, match } from "react-router-dom";
import PeoplePage from "../pages/people";
import AboutPage from "../pages/about";

export interface AppProps {
  routMatch: match;
}

const App: React.FC<AppProps> = ({ routMatch }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route
        exact
        path={`${routMatch.url}people/:name`}
        component={AboutPage}
      />
      <Route exact path={`${routMatch.url}`} component={PeoplePage} />
    </Switch>
  </div>
);

export default App;
