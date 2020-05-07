import React from 'react';

import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

function WeatherBoard(props) {
	return (
		<main>
			<WeatherCondition
				cityName={props.cityName}
				current={props.current}
			/>
			<WeatherForecast
				forecasts={props.forecasts}
				handleChangeLimit={props.handleChangeLimit}
				limit={props.limit}
			/>
		</main>
	);
}

export default WeatherBoard;
