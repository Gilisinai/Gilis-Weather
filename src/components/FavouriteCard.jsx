import React from 'react'
import WeatherIcon from './WeatherIcon'
import dayjs from 'dayjs'


function FavouriteCard({data}) {
    const {Temperature, WeatherText, Date, LocalizedName} = data
    return (
        <div class="favorite__card">
            <div className="favorite__card-item">
                <WeatherIcon iconCode={21}  />
            </div>
            <div className="favorite__card-item">
                <h1> {dayjs(Date).format('ddd')} </h1>
            </div>
            <div className="favorite__card-item favorite__card-item--temp">
                <p>
                    {Temperature.Metric.Value}
                </p>
                <p>
                     {WeatherText}
                </p>
            </div>
        </div>
    )
}

export default FavouriteCard
