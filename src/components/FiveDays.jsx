import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchForecastStartAsync } from '../redux/weather/weather.actions'
import DayCard from '../components/DayCard'
import Loader from './ui/Loader'


function FiveDays({ fiveDayForecast, cityKey , fetchForecastStartAsync, isLoading}) {

    useEffect(() => {
        fetchForecastStartAsync(cityKey)

    }, [cityKey])


    return (
        <div className="forecast">
            { isLoading ? <Loader /> : 
            fiveDayForecast && fiveDayForecast.map((day, index) => (
                <DayCard key={index} data={day} />
            ))}
            
        </div>
    )
}

const mapStateToProps = state => ({
    fiveDayForecast: state.weather.fiveDayForecast,
    cityKey: state.weather.cityKey,
    isLoading: state.weather.isFetchingForecast
})

const mapDispatchToProps = dispatch => ({
    fetchForecastStartAsync: (locationKey) => dispatch(fetchForecastStartAsync(locationKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(FiveDays)
