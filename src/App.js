import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import NewRecipe from "./components/NewRecipe";
import NewWeek from "./components/NewWeek";
import Weeks from "./components/Weeks";
import Week from "./components/Week";
import './App.css';

const App = () => {
  return (
    <div className="App" data-test="component-app">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes/:page" exact component={Recipes} />
          <Route path="/weeks/:page" exact component={Weeks} />
          <Route path="/recipe/:id/:page" exact component={Recipe} />
          <Route path="/week/:id/:page" exact component={Week} />
          <Route path="/recipe/:page" exact component={NewRecipe} />
          <Route path="/week/:page" exact component={NewWeek} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
