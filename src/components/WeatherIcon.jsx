import React from 'react'

function WeatherIcon({iconCode}) {

    return (
        <img 
            src={`https://developer.accuweather.com/sites/default/files/${iconCode < 10 ? '0'+ iconCode : iconCode}-s.png`}
            alt="weather icon"
        />
    )
}

export default WeatherIcon
