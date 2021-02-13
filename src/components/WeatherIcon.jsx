import React from 'react'

function WeatherIcon({iconCode}) {

    return (
        <img 
            src={`https://developer.accuweather.com/sites/default/files/${iconCode}-s.png`}
            alt="weather icon"
        />
    )
}

export default WeatherIcon
