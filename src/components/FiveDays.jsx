import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setFiveDayForecast, fetchForecastStartAsync } from '../redux/weather/weather.actions'
import DayCard from '../components/DayCard'

function FiveDays({ fiveDayForecast, cityKey , fetchForecastStartAsync}) {

    useEffect(() => {
        fetchForecastStartAsync(cityKey)

    }, [cityKey])


    return (
        <div className="forecast">
            {fiveDayForecast && fiveDayForecast.map((day, index) => (
                <DayCard key={index} data={day} />
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    fiveDayForecast: state.weather.fiveDayForecast,
    cityKey: state.weather.cityKey
})

const mapDispatchToProps = dispatch => ({
    setFiveDayForecast: fiveDayForecast => dispatch(setFiveDayForecast(fiveDayForecast)),
    fetchForecastStartAsync: (locationKey) => dispatch(fetchForecastStartAsync(locationKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(FiveDays)
