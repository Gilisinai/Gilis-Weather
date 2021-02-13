import { WeatherActionTypes } from './weather.types'

const initialState = {
    cityKey: null,
    currentWeather: null,
    fiveDayForecast: null,
    isFetching: false,
    errorMessage: undefined
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
        case WeatherActionTypes.SET_CURRENT_CITY_KEY:
            return {
                ...state,
                cityKey: action.payload
            }
        case WeatherActionTypes.FETCH_CURRENT_WEATHER_START:
            return {
                ...state,
                isFetching: true
            }

        case WeatherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentWeather: [...action.payload]
            }

        case WeatherActionTypes.FETCH_CURRENT_WEATHER_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export default weatherReducer