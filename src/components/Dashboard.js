import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';

import Nav from './Nav';
import MapContainer from '../containers/MapContainer';
import Alerts from './Alerts';

const BrandonIP = 'http://138.68.237.212:8080';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alerts: [],
      highlightSensor: ''
    }
    this.loadAlerts = this.loadAlerts.bind(this);
  }

  componentWillMount() {
    this.loadAlerts();
    
  }

  loadAlerts() {
    return axios({
      method: 'get',
      url: `${ BrandonIP }/api/users/1/incidents`
    })
    .then(alerts => {
      console.log(alerts);
      this.setState({ alerts: alerts.data });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="dashboard">
        <Nav />
        <main>
          <MapContainer google={ this.props.google } sensors={ this.state.alerts } />
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