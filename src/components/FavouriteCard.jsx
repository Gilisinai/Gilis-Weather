import React from 'react'
import WeatherIcon from './WeatherIcon'
import dayjs from 'dayjs'
import { connect } from 'react-redux'
import { removeCityFromFavorites } from '../redux/favorites/favorites.actions'


function FavouriteCard({ data, removeCityFromFavorites }) {
    const { Temperature, WeatherText, Date, LocalizedName } = data
    return (
        <div className="favorite__card">
            <div className="favorite__card-item">
                <WeatherIcon iconCode={21} />
            </div>
            <div className="favorite__card-item">
                <h1> {dayjs(Date).format('ddd')} {data.Key} </h1>
            </div>
            <div className="favorite__card-item favorite__card-item--temp">
                <p>
                    {Temperature.Metric.Value}
                </p>
                <p>
                    {WeatherText}
                </p>
            </div>
            <button onClick={()=> removeCityFromFavorites(data)}>Remove from favorites</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeCityFromFavorites: city => dispatch(removeCityFromFavorites(city))
})

export default connect(null, mapDispatchToProps)(FavouriteCard)
