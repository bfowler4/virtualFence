import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default (props) => {

  const alerts = props.list;

  return (
    <ul>
      {alerts.length && alerts.map((element, idx) => {
        return (
          // <Link to={`/alert/${ element.id }`} key={idx} >
            <li>
              <div className="alert-container">
                <header>
                  <h3>Sensor # { element.device_id }</h3>
                  {
                    element.image ? 
                      <i className="fas fa-image"></i> : 
                      null
                  }
                </header>
                <footer>
                  <p>LAT: { element.latitude } LNG: { element.longitude }</p>
                  <p>{ moment.unix(element.time).format("M/D/YYYY h:mm:ss a") }</p>
                </footer>
              </div>
            </li>
          // </Link>
        )
      })}

    </ul>
  )
}