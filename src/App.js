import React from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./components/index.js";
import PageNotFound from "./components/404.js";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;