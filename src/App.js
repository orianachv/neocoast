import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignIn from "./components/SinIn";
import Home from './components/Home'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
    </Router>
  );
}


