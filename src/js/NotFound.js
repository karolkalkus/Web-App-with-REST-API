import React from "react";
import {
  NavLink
} from 'react-router-dom';

class NotFound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      joke: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const apiUrl = "https://api.chucknorris.io/jokes/random";

    fetch(apiUrl)
      .then(r => r.json())
      .then(data => this.setState({
          joke: data.value,
          isLoading:false,
        }))
      .catch(error => console.log("parsing faild", error));
  }

  render() {
    const {isLoading, joke} = this.state;

    if (isLoading) {
      return <h1> Wait a minute.. </h1>;
    }else{
    
    return (
        <div className='errorBackground'>
        <div className='jokebox'>
        <h1>{joke}</h1>
        <NavLink className='goHome' exact to='/' >Go Home</NavLink>
        </div>
        </div>
    );
  }
  }
}

export default NotFound;