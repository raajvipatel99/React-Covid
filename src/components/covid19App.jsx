import React, { Component } from "react";
import Covid19News from "./covid19News";
import Covid19 from "./covid19";
import Covid19Wiki from "./covid19Wiki";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MapApp from "../MapApp";
import Covid19Videos from "./covid19Videos";
import Covid19TotalStats from "./covid19TotalStats";
class Covid19App extends Component {
  render() {
    return (
      <Router>
        <div id="root">
          <Switch>
            <Route path="/wiki" component={Covid19Wiki} />
            <Route path="/map" component={MapApp} />
            <Route path="/news" component={Covid19News} />
            <Route path="/videos" component={Covid19Videos} />
            <Route path="/totalCases" component={Covid19TotalStats} />
            <Route path="/" component={Covid19} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Covid19App;
