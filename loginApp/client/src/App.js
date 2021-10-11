import React from "react";
// import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {useState} from "react";
import Login from "./Login"
import Home from "./Home"
import ProtectedRoute from "./ProtectedRoute"


function App() {

  return (
    <div>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute exact path="/home" component={Home}/>
        <Route exact path="/" component={Login} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
