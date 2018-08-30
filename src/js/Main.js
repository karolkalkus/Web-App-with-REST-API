import React from 'react';
import Sport from './Sport';
import Home from './Home';
import News from './News';
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
            <Route path='/news' component={News}/> 
          </Switch> 
      </HashRouter>
    }
  }

export default Main;