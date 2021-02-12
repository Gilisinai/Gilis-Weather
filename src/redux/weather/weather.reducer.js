import { WeatherActionTypes } from './weather.types'

const initialState = {
    currentWeather: null,
    fiveDayForecast: null
}

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case WeatherActionTypes.SET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.payload
            }
        case WeatherActionTypes.SET_FIVE_DAY_FORECAST:
            return {
                ...state,
                fiveDayForecast: action.payload
            }
        
        default:
            return state;
    }
}

export default weatherReducer