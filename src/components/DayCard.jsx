import React from 'react'
import dayjs from 'dayjs'
import WeatherIcon from './WeatherIcon'

function DayCard({data}) {
    const {Temperature, Day, Date, LocalizedName} = data
    return (
        <div className="forecast__card"> 
            <div className="forecast__card-item">
                <WeatherIcon iconCode={21}  />
            </div>
            <div className="forecast__card-item">
                <h1> {dayjs(Date).format('ddd')} </h1>
            </div>
            <div className="forecast__card-item forecast__card-item--temp">
                <p>
                    {Temperature.Minimum.Value} - {Temperature.Maximum.Value}
                </p>
                <p>
                     {Day.IconPhrase}
                </p>
            </div>
        </div>
    )
}

export default DayCard
