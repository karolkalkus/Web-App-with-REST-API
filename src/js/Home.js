import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

class Home extends React.Component {
    render() {
      return <div className='container'>
      <div className='mainBox'>
      <div className='linkBoxes'> 
        <div 
        className='box'><NavLink className='navLink' to='/sport' >Sport</NavLink>
        </div>
        <div 
        className='box'><NavLink className='navLink' to='/news' activeClassName='activeStyle'>News</NavLink>
        </div>
        <div 
        className='box'><NavLink className='navLink' to='/news' activeClassName='activeStyle'>News</NavLink>
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
        className='box'><NavLink className='navLink' to='/news' activeClassName='activeStyle'>News</NavLink>
        </div>
      </div>
      </div>
      </div>
    }
  }

  export default Home;