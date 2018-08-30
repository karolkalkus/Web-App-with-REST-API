import React from 'react';
import Sport from './Sport';
import Home from './Home';
import BBCNews from './BBCNews';
import GoogleNews from './GoogleNews';
import NotFound from './NotFound';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';


  class Main extends React.Component {
    render() {

      return <HashRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/sport' component={Sport}/> 
            <Route path='/bbc_news' component={BBCNews}/> 
            <Route path='/google_news' component={GoogleNews}/> 
            <Route component={NotFound}/>
          </Switch> 
      </HashRouter>
    }
  }

export default Main;