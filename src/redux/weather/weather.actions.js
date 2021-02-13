import { WeatherActionTypes } from './weather.types'


export const setCurrentWeather = currentWeather => ({
    type: WeatherActionTypes.SET_CURRENT_WEATHER,
    payload: currentWeather
})

export const setFiveDayForecast = fiveDayForecast => ({
    type: WeatherActionTypes.SET_FIVE_DAY_FORECAST,
    payload: fiveDayForecast
})

export const fetchCurrentWeatherStart = () => ({
    type: WeatherActionTypes.FETCH_CURRENT_WEATHER_START
})

export const setCurrentCityKey = key => ({
    type: WeatherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS,
    payload: key
})

export const fetchCurrentWeatherSuccess = currentWeather => ({
    type: WeatherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS,
    payload: currentWeather
})

export const fetchCurrentWeatherFailure = errorMessage => ({
    type: WeatherActionTypes.FETCH_CURRENT_WEATHER_FAILURE,
    payload: errorMessage
})

export const fetchCurrentWeatherStartAsync = () => {
    return async dispatch => {
        dispatch(fetchCurrentWeatherStart())
        const key = process.env.REACT_APP_WEATHER_API_KEY
        const cityUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=london`
        const cityRes = await fetch(cityUrl)
        const cityData = await cityRes.json()
        const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${cityData[0].Key}?apikey=${key}`
        const weatherRes = await fetch(weatherUrl)
        const weatherData = await weatherRes.json()

        dispatch(fetchCurrentWeatherSuccess({...cityData[0], ...weatherData}))
        

        
    }
}