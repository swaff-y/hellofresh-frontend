import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import NewRecipe from "./components/NewRecipe";
import './App.css';

const App = () => {
  return (
    <div className="App" data-test="component-app">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes/:page" exact component={Recipes} />
          <Route path="/recipe/:id" exact component={Recipe} />
          <Route path="/recipe" exact component={NewRecipe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
