import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import LeagueDetails from './components/LeagueDetails/LeagueDetails'
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>
      <Route  path="/home">
      <Home></Home>
      </Route>
      <Route path="/team/:idTeam">
       <LeagueDetails></LeagueDetails>
      </Route>
      <Route path="*">
       <NotFound></NotFound>
      </Route>
    </Switch>
  </Router>

  );
}

export default App;
