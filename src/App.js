import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import WeatherBoard from './WeatherBoard';
import { getWeather } from './axios';
import { connect } from "react-redux";
import { getWeatherAction } from "./redux/actions/weatherActions";
import Loader from "./Loader";
import Error from "./Error";
import './App.css';

class App extends React.Component {
	componentDidMount() {
	  this.props.getWeather("Brisbane");
	}
  
	renderMain() {
	  return this.props.error ? <Error /> : <WeatherBoard />;
	}
  
	render() {
	  return (
		<div className="weather-channel__container">
		  <Header />
		  <Nav />
		  {this.props.isLoading ? <Loader /> : this.renderMain()}
		  <Footer />
		</div>
	  );
	}
  }
  
  const mapStateToProps = state => ({
	isLoading: state.weather.isLoading,
	error: state.weather.error,
  });
  
  const mapDispatchToProps = dispatch => ({
	getWeather: city => dispatch(getWeatherAction(city))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);
  