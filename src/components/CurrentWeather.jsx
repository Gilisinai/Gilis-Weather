import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setCurrentWeather } from '../redux/weather/weather.actions'
import currentWeatherResponse from '../responses/currentWeatherResponse'
import WeatherIcon from './WeatherIcon'

function CurrentWeather({ setCurrentWeather, currentWeather }) {
    
    useEffect(() => {
        setCurrentWeather(currentWeatherResponse[0])
    }, [])

    return (


        <div>
            current Temperature is!
            {currentWeather && currentWeather.Temperature.Metric.Value}
            <WeatherIcon />
        </div>



    )
}

const mapStateToProps = state => ({
    currentWeather: state.weather.currentWeather
})

const mapDispatchToProps = dispatch => ({
    setCurrentWeather: currentWeather => dispatch(setCurrentWeather(currentWeather))
})



export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather)
