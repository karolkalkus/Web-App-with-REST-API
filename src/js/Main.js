import React from "react";
import Sport from "./Sport";
import Home from "./Home";
import BBCNews from "./BBCNews";
import Business from "./Business";
import NotFound from "./NotFound";
import ScienceNews from "./ScienceNews";
import Entertainment from "./Entertainment";
import { HashRouter, Switch, Route } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sport" component={Sport} />
          <Route path="/bbc_news" component={BBCNews} />
          <Route path="/business" component={Business} />
          <Route path="/science_news" component={ScienceNews} />
          <Route path="/entertainment" component={Entertainment} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Main;
