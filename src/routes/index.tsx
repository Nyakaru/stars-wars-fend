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
      <Route path={`${routMatch.url}about/all`} component={AboutPage} />
      <Route path={`${routMatch.url}people/all`} component={PeoplePage} />
    </Switch>
  </div>
);

export default App;
