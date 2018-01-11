import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  renderWeather(item) {
     return <li>{item}</li>
  }

  render() {
    let weatherItems = this.props.weathers;
    let renderedList = weatherItems.map(this.renderWeather);

    return (
      <ul>{renderedList}</ul>
    );
  }
}

export default WeatherList;
