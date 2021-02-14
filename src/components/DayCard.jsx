import React from 'react'
import dayjs from 'dayjs'
import WeatherIcon from './WeatherIcon'

function DayCard({data}) {
    const {Temperature, Day, Date} = data
    return (
        <div className="forecast__card"> 
            <div className="forecast__card-item">
                <WeatherIcon iconCode={21}  />
            </div>
            <div className="forecast__card-item">
                <h1> {dayjs(Date).format('ddd')} </h1>
            </div>
            <div className="forecast__card-item forecast__card-item--temp">
                <p className="forecast-p--2">
                    {Temperature.Minimum.Value}&#176; - {Temperature.Maximum.Value}&#176;
                </p>
                <p className="forecast-p--2">
                     {Day.IconPhrase}
                </p>
            </div>
        </div>
    )
}

export default DayCard
