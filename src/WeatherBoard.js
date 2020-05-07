import React from 'react';

import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

function WeatherBoard(props) {
	return (
		<main>
			<WeatherCondition
				cityName={props.cityName}
				current={props.current}
				unit={props.unit}
			/>
			<WeatherForecast
				forecasts={props.forecasts}
				handleChangeLimit={props.handleChangeLimit}
				limit={props.limit}
				unit={props.unit}
			/>
		</main>
	);
}

export default WeatherBoard;
