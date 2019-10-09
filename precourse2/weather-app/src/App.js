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
      lat: undefined,
      lon: undefined,
      city: undefined,
      tempC: undefined,
      tempF: undefined,
      icon: undefined,
      description: 'cloudy',
      errorMessage: undefined,
    };
  }

  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  getWeather = async (latitude, longitude) => {
    const API = await
      fetch(`"https://cors-anywhere.herokuapp.com/fcc-weather-api.glitch.me/api/current?lon=${longitude}&lat=${latitude}`);
    const data = await API.json();
    console.log('data is: ', data);
    this.setState({
      // lat and long may be data.coord.lat/lon
      lat: latitude,
      lon: longitude,
      //will need to change city, tempC, tempF data
      city: data.name,
      tempC: Math.round(data.main.temp),
      tempF: Math.round(data.main.temp * 1.8 + 32),
      icon: data.weather[0].icon,
      description: data.weather.description,
    })
  }

  componentDidMount() {
    this.getPosition()
      .then((position) => {
        this.getWeather(position.coords.latitude, position.coords.longitude)
      })
      .catch((err) => {
        this.setState({ errorMessage: err.messsage });
      });


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
