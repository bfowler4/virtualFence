import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: []
    }
    this.loadMap = this.loadMap.bind(this);
  }

  componentDidUpdate() {
    let hasInt = true; 
    let int = setInterval(() => {
      if (hasInt) { hasInt = this.loadMap(); }
      else { clearInterval(int); }
    }, 100);
  }

  componentWillReceiveProps() {
    const sensors = [ ...this.props.sensors ];
    console.log(this.props.sensors);

    if (this.props.sensors) {
      let filteredSensors = sensors.filter((element, index, array) => {
        return array.findIndex((el) => {
          return el.device_id === element.device_id;
        }) === index;
      });
      console.log('filter', filteredSensors);

      this.setState({ locations: [...filteredSensors] });
    }
    
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

      const sensorLocations = this.state.locations;
      console.log('asds', sensorLocations);
      if (sensorLocations.length === 0) {
        return;
      }
      
      sensorLocations.forEach((element, idx) => {
        console.log('creating marker');
        const marker = new google.maps.Marker({
          position: {lat: parseFloat(element.latitude), lng: parseFloat(element.longitude)},
          map: this.map,
          title: `Sensor ${element.device_id}`
        });
      });
    }
  }

  render() {
    const style = {
      width: '50vw',
      height: '75vh'
    };

    console.log('render', this.state);

    return (
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}

export default MapContainer;