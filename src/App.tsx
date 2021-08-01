import React from "react";
import { Route, Switch } from "react-router-dom";
import FinalPage from "./components/FinalPage";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <FirstPage />} />
      <Route path="/secondpage" render={() => <SecondPage />} />
      <Route path="/finalpage" render={() => <FinalPage />} />
    </Switch>
  );
};

export default App;
