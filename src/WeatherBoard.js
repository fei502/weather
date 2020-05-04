import React from "react";
import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

class WeatherBoard extends React.Component {

  render() {
    return (
      <main>
			<WeatherCondition />
			<WeatherForecast />
		</main>
    );
  }
}

export default WeatherBoard;
