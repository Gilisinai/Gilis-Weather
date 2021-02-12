import React from 'react'
import dayjs from 'dayjs'
import WeatherIcon from './WeatherIcon'

function DayCard({data}) {
    const {Temperature, Day, Date, LocalizedName} = data
    return (
        <div class="forecast__card"> 
            <div>
                {dayjs(Date).format('ddd')}
            </div>
            <div>
                <WeatherIcon iconCode={21} iconText={Day.IconPhrase} />
            </div>
            <div>

            {Temperature.Maximum.Value}
            </div>
            <div>
            {Day.IconPhrase}

            </div>
        </div>
    )
}

export default DayCard
