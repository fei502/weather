import React from 'react';

import { changeInputAction, toggleUnitAction } from "./redux/actions/navigationActions";
import { connect } from "react-redux";
import { getWeatherAction } from "./redux/actions/weatherActions";


function Nav(props) {
	return (
		<nav>
		<div>
		  <input
			name="input"
			className="search-input"
			value={props.input}
			onChange={event => props.changeInput(event.target.value)}
		  />
		  <button className="search-btn" onClick={() => props.handleSearch(props.input)}>
			<i className="fa fa-search" />
		  </button>
		  <button className="temp-switch" onClick={props.toggleUnit}>
			<i
			  className="fa fa-thermometer-empty temp-switch__icon"
			  aria-hidden="true"
			/>
			<sup>&deg;</sup>
			{props.unit}
		  </button>
		</div>
	  </nav>
	);
}


const mapStateToProps = state => ({
	input: state.navigation.input,
	unit: state.navigation.unit,
  });
  
  const mapDispatchToProps = dispatch => ({
	changeInput: input => dispatch(changeInputAction(input)),
	toggleUnit: () => dispatch(toggleUnitAction()),
	handleSearch: city => dispatch(getWeatherAction(city)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Nav);
