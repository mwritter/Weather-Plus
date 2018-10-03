import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//import { Sparklines, SparklinesLine } from "react-sparklines";
import Chart from "../components/charts";
import GoogleMaps from "../components/google_maps";
import SortColumn from "../components/sort_column";
import { sortWeather } from "../actions/index";
class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const { lon, lat } = cityData.city.coord;
    const sampleNumber = cityData.list.length - 1;
    const temps = [];
    const pressure = [];
    const humidity = [];
    for (let i = 0; i <= sampleNumber; i++) {
      temps[i] = cityData.list[i].main.temp;
      pressure[i] = cityData.list[i].main.pressure;
      humidity[i] = cityData.list[i].main.humidity;
    }

    return (
      <tr key={name}>
        <td>
          <GoogleMaps lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="red" units="Kelvin" />
        </td>
        <td>
          <div>
            <Chart data={pressure} color="blue" units="hPa" />
          </div>
        </td>
        <td>
          <div>
            <Chart data={humidity} color="green" units="%" />
          </div>
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <SortColumn />
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather, sort }) {
  return { weather, sort };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      sortWeather
    },
    dispatch
  );
}

export default connect(mapStateToProps)(WeatherList);
