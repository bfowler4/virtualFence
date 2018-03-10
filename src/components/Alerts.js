import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  const alerts = props.list;

  return (
    <ul>
      {alerts.map((element, idx) => {
        return (
          <Link to={`/alert/${ element.id }`} key={idx} >
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
                  <p>LAT: { element.lat } LONG: { element.long }</p>
                  <p>{ element.time }</p>
                </footer>
              </div>
            </li>
          </Link>
        )
      })}

    </ul>
  )
}