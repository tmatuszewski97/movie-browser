import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { HomeView } from "../pages";

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" component={HomeView} />
      <Route path="/watchlist" component={HomeView} />
    </Switch>
  );
};

export default Routes;
