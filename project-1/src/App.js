import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      err => console.log(err)
    );
    return (
      <div className="App" >
        <SeasonDisplay />
      </div>
    );
  }
}

export default App;
