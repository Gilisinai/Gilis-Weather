import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setCurrentWeather } from '../redux/weather/weather.actions'
import { addCityToFavorites } from '../redux/favorites/favorites.actions'

import currentWeatherResponse from '../responses/currentWeatherResponse'
import currentCityResponse from '../responses/currentCityResponse'
import WeatherIcon from './WeatherIcon'

function CurrentWeather({ setCurrentWeather, addCityToFavorites, currentWeather }) {

    useEffect(() => {
        setCurrentWeather(currentWeatherResponse[0])
    }, [])

    return (


        <section className="current">
            <div className="current__weather">
                <div className="current__weather-details">
                    <div className="current__weather-icon">
                        <WeatherIcon iconCode={17} iconText="beautiful" />
                    </div>
                    <div>

                        <div className="current-p--1">
                            Tel Aviv
                        </div>
                        <div className="current-p--2">
                        {currentWeather && currentWeather.Temperature.Metric.Value} C
                        </div>
                    </div>

                </div>

                <div className="current__weather-utils">
                    <div className="current__weather-utils--icon">
                        current location
                    </div>
                    <div onClick={()=> addCityToFavorites(currentCityResponse[0])} className="current__weather-utils--icon">
                        add to favorites
                    </div>

                </div>
            </div>   
        </section>



    )
}

const mapStateToProps = state => ({
    currentWeather: state.weather.currentWeather
})

const mapDispatchToProps = dispatch => ({
    setCurrentWeather: currentWeather => dispatch(setCurrentWeather(currentWeather)),
    addCityToFavorites: city => dispatch(addCityToFavorites(city))
})



export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather)
