import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { MoviesPage } from "../pages";

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" component={MoviesPage} />
      <Route path="/watchlist" component={MoviesPage} />
    </Switch>
  );
};

export default Routes;
