import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Weekly from './components/Weekly';
import WeeklyBattle from './components/Weekly-battle';
import Popular from './components/Popular';
import PopularBattle from './components/Popular-battle';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route eaxact path="/weekly" component={Weekly} />
          <Route exact path="/weekly-battle" component={WeeklyBattle} />
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/popular-battle" component={PopularBattle} />
          <Route excact path="/navbar" component={Navbar} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;