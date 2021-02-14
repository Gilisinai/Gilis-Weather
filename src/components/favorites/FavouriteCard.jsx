import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeCityFromFavorites } from '../../redux/favorites/favorites.actions'
import { fetchCurrentWeatherStartAsync } from '../../redux/weather/weather.actions'
import  { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg'
import  { ReactComponent as TempIcon } from '../../assets/icons/temp.svg'



function FavouriteCard({ data, removeCityFromFavorites, fetchCurrentWeatherStartAsync }) {
    const { LocalizedName , Country, Temperature } = data
    const history = useHistory()

    const viewFavoriteWeather = (LocalizedName) => {
        fetchCurrentWeatherStartAsync(LocalizedName)
        history.push('/')
    }

    return (
        <div className="favorite__card" >
            
            <div className="favorite__card-item">
                <h1 className="favorite__card-ah--1" >  {LocalizedName}, {Country.LocalizedName} </h1>
                <h1 className="favorite__card-ah--1" >  {Temperature.Metric.Value}&#176; </h1>
            </div>
            <div className="favorite__btn-wrapper">
                <button className="favorite__btn" onClick={()=> viewFavoriteWeather(LocalizedName)}><TempIcon /></button>
                <button className="favorite__btn" onClick={() => removeCityFromFavorites(data)}><DeleteIcon /></button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeCityFromFavorites: city => dispatch(removeCityFromFavorites(city)),
    fetchCurrentWeatherStartAsync: city => dispatch(fetchCurrentWeatherStartAsync(city))
})

export default connect(null, mapDispatchToProps)(FavouriteCard)
