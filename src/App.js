import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';

class App extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div className="App">
        <MapContainer google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  version: '3.31',
  apiKey: 'AIzaSyDMg1_-uK-krL0Yt01gtjrjkSHamT6yQzY'
})(App);
