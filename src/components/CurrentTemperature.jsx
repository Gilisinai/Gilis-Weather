import React from 'react'
import { connect } from 'react-redux'
import WeatherIcon from './WeatherIcon'
import Loader from './ui/Loader'


function CurrentTemperature({temperature, isLoading}) {
    
    return (
        <div className="temperature">
            {isLoading ? <Loader /> : 
            
                <div className="temperature__details">
                    <WeatherIcon iconCode={21} />
                    <h1 className="temperature-h--1">{temperature}</h1> 
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    temperature: state.weather.currentWeather.Temperature.Metric.Value,
    isLoading: state.weather.isFetchingCurrent
})

export default connect(mapStateToProps)(CurrentTemperature)
