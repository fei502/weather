import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import WeatherBoard from './WeatherBoard';
import {getWeather} from './axios'
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      input: "",
			cityName: '',
			current: {},
			forecasts: [],
      limit: 5,
      unit: "C",
		};
	}

	componentDidMount() {
			getWeather("Brisbane").then(this.updateWeather);
  }

  updateWeather = (data) => {
    const cityName = data.city.name;
    const current = data.current;
    const forecasts = data.forecast.slice(0, 10);
    this.setState({ cityName, current, forecasts });
  };
  
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ input: value });
  };

	handleChangeLimit = limit => {
		this.setState({ limit });
  }
  
  handleSearch = () => {
    getWeather(this.state.input).then(this.updateWeather);
  }

  toggleUnit = () => {
    this.setState((state) => ({ unit: state.unit === "C" ? "F" : "C" }));
  };

	render() {
		return (
			<div className="weather-channel__container">
				<Header />
        <Nav 
          input={this.state.input} 
          handleInputChange = {this.handleInputChange}
          handleSearch = {this.handleSearch}  
          unit = {this.state.unit}
          toggleUnit={this.toggleUnit}
        />
				<WeatherBoard
					cityName={this.state.cityName}
					current={this.state.current}
					forecasts={this.state.forecasts}
					handleChangeLimit={this.handleChangeLimit}
          limit={this.state.limit}
          unit = {this.state.unit}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
