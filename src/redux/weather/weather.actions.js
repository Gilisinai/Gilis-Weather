import { WeatherActionTypes } from './weather.types'


export const setCurrentWeather = currentWeather => ({
    type: WeatherActionTypes.SET_CURRENT_WEATHER,
    payload: currentWeather
})

export const setFiveDayForecast = fiveDayForecast => ({
    type: WeatherActionTypes.SET_FIVE_DAY_FORECAST,
    payload: fiveDayForecast
})