import React from 'react';
import axios from 'axios';

import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import WeatherBoard from './WeatherBoard';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cityName: '',
			current: {},
			forecasts: [],
			limit: 5,
		};
	}

	componentDidMount() {
		axios('https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane')
			.then(res => {
				const data = res.data.data;
				const cityName = data.city.name;
				const current = data.current;
				const forecasts = data.forecast.slice(0, 10);
				this.setState({ cityName, current, forecasts });
			});
	}

	handleChangeLimit = limit => {
		this.setState({ limit });
	}

	render() {
		return (
			<div className="weather-channel__container">
				<Header />
				<Nav />
				<WeatherBoard
					cityName={this.state.cityName}
					current={this.state.current}
					forecasts={this.state.forecasts}
					handleChangeLimit={this.handleChangeLimit}
					limit={this.state.limit}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
