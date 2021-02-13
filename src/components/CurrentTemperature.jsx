import React from 'react'
import WeatherIcon from './WeatherIcon'

function CurrentTemperature() {
    return (
        <div className="temperature">
            <div className="temperature__details">
                <WeatherIcon iconCode={21} />
                <h1 className="temperature-h--1">60</h1> 
            </div>
        </div>
    )
}

export default CurrentTemperature
