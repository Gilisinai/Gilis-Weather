import React from 'react'
import { connect } from 'react-redux'
import WeatherIcon from './WeatherIcon'

function CurrentTemperature({temperature}) {
    return (
        <div className="temperature">
            <div className="temperature__details">
                <WeatherIcon iconCode={21} />
                <h1 className="temperature-h--1">{temperature}</h1> 
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    temperature: state.weather.currentWeather.Temperature.Metric.Value
})

export default connect(mapStateToProps)(CurrentTemperature)
