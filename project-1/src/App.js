import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null
    }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      },
      err => console.log(err)
    );
  }

  render() {
    return (
      <div className="App" >
        <SeasonDisplay />
        Latitude: {this.state.lat}
      </div>
    );
  }
}

export default App;
