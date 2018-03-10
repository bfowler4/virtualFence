import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MapContainer extends Component {

  componentDidUpdate() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign({}, {
        center: {lat: 20.219350, lng: -155.796974},
        zoom: 19,
        mapTypeId: 'hybrid',
      });

      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    const style = {
      width: '50vw',
      height: '75vh'
    };

    return (
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}