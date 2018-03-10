import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

import Nav from './Nav';
import MapContainer from '../containers/MapContainer';
import Alerts from './Alerts';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alerts: [],
      highlightSensor: ''
    }
  }

  componentDidMount() {

  }


  
  render() {
    return (
      <div className="dashboard">
        <Nav />
        <main>
          <MapContainer google={this.props.google} />
          <Alerts list={ this.state.alerts } />
        </main>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  version: '3.31',
  apiKey: 'AIzaSyDMg1_-uK-krL0Yt01gtjrjkSHamT6yQzY'
})(Dashboard);