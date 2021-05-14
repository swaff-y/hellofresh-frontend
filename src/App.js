import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import './App.css';

const App = () => {
  return (
    <div className="App" data-test="component-app">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipes/show/:id" exact component={Recipe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
