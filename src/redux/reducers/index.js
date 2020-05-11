import { combineReducers } from "redux";

import navigationReducer from "./navigationReducers";
import weatherReducer from "./weatherReducers";
const reducers = combineReducers({
    navigation: navigationReducer,
    weather: weatherReducer
});

export default reducers;