import React from "react";
import { Route, Switch } from "react-router-dom";
import Banner from "./components/Banner";
import EnterNumber from "./components/EnterNumber";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Banner />} />
      <Route path="/enternumber" render={() => <EnterNumber />} />
    </Switch>
  );
};

export default App;
