import React, { Component } from 'react';

import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from '../containers/MapContainer';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <MapContainer google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  version: '3.31',
  apiKey: 'AIzaSyDMg1_-uK-krL0Yt01gtjrjkSHamT6yQzY'
})(Dashboard);