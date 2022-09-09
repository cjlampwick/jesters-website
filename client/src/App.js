import React from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/home.css";
import "./styles/generic.css";
import "./styles/footer.css";

import Home from "./components/Pages/Home";

class App extends React.Component {
  render() {
    return (
      <Switch>
      <Route exact path="/" component={Account} />
      <Route exact path="/free" component={FreeComponent} />
      <Route exact path="/auth" component={AuthComponent} />
    </Switch>
    );
  }
}

export default App;
