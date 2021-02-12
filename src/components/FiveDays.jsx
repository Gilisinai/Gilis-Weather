import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setFiveDayForecast } from '../redux/weather/weather.actions'
import DayCard from '../components/DayCard'
import forecast from '../responses/forcastResponse'

function FiveDays({ setFiveDayForecast ,fiveDayForecast }) {

    useEffect(() => {
        setFiveDayForecast(forecast.DailyForecasts)

    }, [])


    return (
        <div>
            {fiveDayForecast && fiveDayForecast.map((day, index) => (
                <DayCard key={index} data={day} />
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    fiveDayForecast: state.weather.fiveDayForecast
})

const mapDispatchToProps = dispatch => ({
    setFiveDayForecast: fiveDayForecast => dispatch(setFiveDayForecast(fiveDayForecast))
})

export default connect(mapStateToProps, mapDispatchToProps)(FiveDays)
