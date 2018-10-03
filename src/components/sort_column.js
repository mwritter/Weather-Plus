import React, { Component } from "react";
import { sortWeather } from "../actions";

class SortColumn extends Component {
  render() {
    let cn = "oi oi-chevron-top";
    return (
      <thead>
        <tr>
          <th>
            <span>
              City
              <span />
            </span>
          </th>
          <th>
            <span onClick={() => {}}>Temperature (Kelvin)</span>
          </th>
          <th>
            <span onClick={() => console.log("Pressure")}>Pressure (hPa)</span>
          </th>
          <th>
            <span onClick={() => console.log("Humidity")}>Humidity (%)</span>
          </th>
        </tr>
      </thead>
    );
  }
}

export default SortColumn;
