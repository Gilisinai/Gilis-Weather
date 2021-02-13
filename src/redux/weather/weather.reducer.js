import { WeatherActionTypes } from './weather.types'

const initialState = {
    cityKey: null,
    currentWeather: null,
    fiveDayForecast: null,
    isFetchingCurrent: false,
    isFetchingForecast: false,
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
                isFetchingCurrent: true
            }

        case WeatherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS:
            return {
                ...state,
                isFetchingCurrent: false,
                cityKey: action.payload.Key,
                currentWeather: action.payload
            }

        case WeatherActionTypes.FETCH_CURRENT_WEATHER_FAILURE:
            return {
                ...state,
                isFetchingCurrent: false,
                errorMessage: action.payload
            }
        case WeatherActionTypes.FETCH_FORECAST_START:
            return {
                ...state,
                isFetchingForecast: true
            }

        case WeatherActionTypes.FETCH_FORECAST_SUCCESS:
            return {
                ...state,
                isFetchingForecast: false,
                fiveDayForecast: action.payload
            }

        case WeatherActionTypes.FETCH_FORECAST_FAILURE:
            return {
                ...state,
                isFetchingForecast: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}

export default weatherReducer