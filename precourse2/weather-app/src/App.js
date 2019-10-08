import React from 'react';
// import axios from 'axios';
import logo from './logo.svg';
import './App.css';
// import { geolocated, geoPropTypes } from "react-geolocated";

// var api = https://fcc-weather-api.glitch.me/

//input box for location
//api key/end point
//access image from json file at weather[0].icon
//convert city into lat and long


class App extends React.Component {
  constructor() {
    super();
    this.state = { location: '' };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ location: event.target.value });
  // }
  // // function App() {
  // handleSubmit(event) {
  //   //This prevents page from re-loading when clicked
  //   event.preventDefault();
  //   const data = new FormData();
  //   data.append('location', event.target);
  // Access FormData fields with `data.get(fieldName)`

  // function handleClick(e) {
  //   this.setState({ input: e.target.value })
  // axios.post('/api/location')
  //   .then(response => console.log('response words'))
  //   .catch(err => console.error(err));

  // fetch('/api/location', {
  //   type: 'POST',
  //   body: data
  // })
  //   console.log("clicked successfully");
  // }





  // async componentDidMount() {
  //   let weather = API.get('/', {
  //     main description: "",
  //     temp: 0,
  //     img: ''
  //   })
  // }

  //     // Parse the results for ease of use.
  // userData = userData.data.results[0];

  //   this.setState({
  //     ...this.state, ...{
  //       isLoading: false,
  //       name,
  //       avatar,
  //       email
  //     }
  //   });
  // }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Joy's Weather App</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
        </header>
        <body>
          <form onSubmit={this.handleSubmit}>
            <label>
              Location:
            <input type="text" location={this.state.location} onChange={this.handleChange} />
            </label>
            {/* //When I do it this way it rerenders after every click */}
            {/* <input type="submit" value="Submit" onClick={handleSubmit} /> */}
          </form>
          {/* When I do the button on click it does not re-render */}
          <button onClick={this.handleSubmit}>
            Click me!
    </button>
        </body>
      </div>
    );
  }
}

export default App;
