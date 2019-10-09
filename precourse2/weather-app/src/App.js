import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
// import { geolocated, geoPropTypes } from "react-geolocated";

// var api = https://fcc-weather-api.glitch.me/

//input box for location
//api key/end point
//access image from json file at weather[0].icon
//convert city into lat and long


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      description: 'cloudy',
      temp: 75
    };
  }

  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  async componentDidMount() {
    let API = "https://cors-anywhere.herokuapp.com/fcc-weather-api.glitch.me/api/current?lon=118.2437&lat=34.0522";
    const response = await fetch(API);
    const data = await response.json();
    this.setState({ description: data.weather[0].description, temp: data.main.temp });
    console.log(data);
  };


  render() {
    return (
      <div className="App" >
        <body className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Joy's Weather App</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </body>
      </div>
    );
  }
}

export default App;
