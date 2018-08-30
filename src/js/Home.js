import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

class Home extends React.Component {
    render() {
      return <div className='container'>
      <div className='homeBackground'>
      <h1>Select category</h1>
      <div className='linkBoxes'> 
        <div 
        className='box'><NavLink className='navLink' to='/sport' >Sport</NavLink>
        </div>
        <div 
        className='box'><NavLink className='navLink' to='/bbc_news' activeClassName='activeStyle'>BBC News</NavLink>
        </div>
        <div 
        className='box'><NavLink className='navLink' to='/google_news' activeClassName='activeStyle'>Google News</NavLink>
        </div>
      </div>
      <div className='linkBoxes'> 
        <div 
        className='box'><NavLink className='navLink' to='/sport' activeClassName='activeStyle'>Sport</NavLink>
        </div>
        <div 
        className='box'><NavLink className='navLink' to='/news' activeClassName='activeStyle'>News</NavLink>
        </div>
        <div 
        className='box'><NavLink className='navLink' to='/news' activeClassName='activeStyle'>Nothing is here</NavLink>
        </div>
      </div>
      </div>
      </div>
    }
  }

  export default Home;