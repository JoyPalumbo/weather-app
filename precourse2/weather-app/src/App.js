import React from 'react';
import logo from './logo.svg';
import './App.css';

//input box for location
//api key/end point
//access image from json file at weather[0].icon


function App() {
  return (
    <div className="App">
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
        <form>
          <label>
            Location:
            <input type="text" location="location" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </body>
    </div>
  );
}

export default App;
