import { WeatherActionTypes } from './weather.types'


export const setCurrentWeather = currentWeather => ({
    type: WeatherActionTypes.SET_CURRENT_WEATHER,
    payload: currentWeather
})

export const setFiveDayForecast = fiveDayForecast => ({
    type: WeatherActionTypes.SET_FIVE_DAY_FORECAST,
    payload: fiveDayForecast
})

export const checkIfInFavorite = (city) => ({
    type: WeatherActionTypes.CHECK_IF_FAVORITE,
    payload: city
})

export const fetchCurrentWeatherStart = () => ({
    type: WeatherActionTypes.FETCH_CURRENT_WEATHER_START
})

export const fetchCurrentWeatherSuccess = currentWeather => ({
    type: WeatherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS,
    payload: currentWeather
})

export const fetchCurrentWeatherFailure = errorMessage => ({
    type: WeatherActionTypes.FETCH_CURRENT_WEATHER_FAILURE,
    payload: errorMessage
})

export const fetchCurrentWeatherStartAsync = (city = 'tel aviv') => {
    return async dispatch => {
        try{

            dispatch(fetchCurrentWeatherStart())
            const key = process.env.REACT_APP_WEATHER_API_KEY
            const cityUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`
            const cityRes = await fetch(cityUrl)
            const cityData = await cityRes.json()
            const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${cityData[0].Key}?apikey=${key}`
            const weatherRes = await fetch(weatherUrl)
            const weatherData = await weatherRes.json()
    
            dispatch(fetchCurrentWeatherSuccess({...cityData[0], ...weatherData[0]}))     
        } catch(error) {
            dispatch(fetchCurrentWeatherFailure(error.message))
        }
    }
}


export const fetchForcastStart = () => ({
    type: WeatherActionTypes.FETCH_FORECAST_START
})

export const fetchForcastSuccess = forecast => ({
    type: WeatherActionTypes.FETCH_FORECAST_SUCCESS,
    payload: forecast
})

export const fetchForcastFailure = errorMessage => ({
    type: WeatherActionTypes.FETCH_FORECAST_FAILURE,
    payload: errorMessage
})

export const fetchForecastStartAsync = (locationKey) => {
    return async dispatch => {
        try{

            dispatch(fetchForcastStart())
            const key = process.env.REACT_APP_WEATHER_API_KEY
            const forecastUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${key}&metric=true`
            const forecastRes = await fetch(forecastUrl)
            const forecastData = await forecastRes.json()
            dispatch(fetchForcastSuccess([...forecastData.DailyForecasts]))     
        } catch(error) {
            dispatch(fetchForcastFailure(error.message))
        }
    }
}
