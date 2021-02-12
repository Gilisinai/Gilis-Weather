import React from 'react'

function WeatherIcon({iconCode, iconText}) {

    return (
        <img 
            src={`https://developer.accuweather.com/sites/default/files/${iconCode}-s.png`}
            alt={iconText}
        />
    )
}

export default WeatherIcon
