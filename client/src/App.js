import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
          <Switch>
            <Route exact path="/" component={Search}></Route>
            <Route exact path="/search" component={Search}></Route>
            <Route path="/saved" component={Saved}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
