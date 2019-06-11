import React, { Component } from 'react';
import Auth from '../Auth/Auth';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Panel from '../Panel/Panel';

class Main extends Component {
  render() {
    return(
      <div>
        {/* <Switch>
          <Route exact path="/" component={Auth} />
          <Route  exact path="/app" component={Panel} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch> */}
        <Auth/>
      </div>
    )
  }
}

export default Main;
