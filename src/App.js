import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Level1 from "./views/Level1";
import Level2 from "./views/Level2";
import Level3 from "./views/Level3";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/level1">
            <Level1 />
          </Route>
          <Route path="/level2">
            <Level2 />
          </Route>
          <Route path="/level3">
            <Level3 />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
