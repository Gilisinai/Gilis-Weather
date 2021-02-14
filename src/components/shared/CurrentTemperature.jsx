import React from 'react'
import { connect } from 'react-redux'
import WeatherIcon from './WeatherIcon'
import Loader from '../ui/Loader'


function CurrentTemperature({temperature, isLoading, description, icon }) {
    
    return (
        <div className="temperature">
            {isLoading ? <Loader /> : 
            <>
                <div className="temperature__details">
                    <WeatherIcon className="temperature__details-icon" iconCode={icon} />
                </div>
                <div className="temperature__details">
                    <h1 className="temperature-h--3">{temperature}&#176;</h1> 
                    <h1 className="temperature-h--1">{description}</h1> 

                </div>
            </>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    temperature: state.weather.currentWeather.Temperature.Metric.Value,
    isLoading: state.weather.isFetchingCurrent,
    description: state.weather.currentWeather.WeatherText,
    icon: state.weather.currentWeather.WeatherIcon
})

export default connect(mapStateToProps)(CurrentTemperature)
