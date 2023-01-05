import "./App.css";
import React from "react";
import Home from "./components/Home";
import Details from "./components/Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import Nav from "./components/Nav";
import Edit from "./components/Edit";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/todo-user/:id'>
            <Details />
          </Route>
          <Route exact path='/create'>
            <Create />
          </Route>
          <Route exact path='/todo-user/:id/edit'>
            <Edit />
          </Route>
          {/* <Route path='/todo-user/**'>
            <NotFound />
          </Route> */}
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
