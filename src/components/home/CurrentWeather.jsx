import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setCurrentWeather, fetchCurrentWeatherStartAsync } from '../../redux/weather/weather.actions'
import { addCityToFavorites } from '../../redux/favorites/favorites.actions'
import { checkIfInFavorite } from '../../redux/weather/weather.actions'

import Loader from '../ui/Loader'
import RequestError from '../ui/RequestError'
import Like from '../ui/Like'

import dayjs from 'dayjs'


function CurrentWeather({ addCityToFavorites, currentWeather, isLoading, error, cityKey }) {

    // useEffect(() => {
    //     const existInFavorites = favorites.find(
    //         favorite => favorite.Key === currentWeather.Key
    //     )

    //     if(existInFavorites) {
    //         console.log('exist in favorites')
    //     }

    //     console.log('not exist in favorites')

    // })
    return (


        <section className="current">
            {isLoading ? <Loader /> :

                error ? <RequestError /> :

                    <div className="current__weather">
                        <div className="current__weather-details">
                            <div>
                                <h1 className="current-h--1">
                                    {currentWeather && currentWeather.LocalizedName}
                                </h1>
                                <div className="current-h--2">
                                    {currentWeather && dayjs(currentWeather.LocalObservationDateTime).format('MMMM D, YYYY h:mm A')}
                                </div>
                            </div>

                        </div>

                        <div className="current__weather-utils">
                            <div onClick={() => addCityToFavorites(currentWeather)} className="current__weather-utils--icon">
                                <Like />
                            </div>

                        </div>
                    </div>
            }
        </section>



    )
}

const mapStateToProps = state => ({
    currentWeather: state.weather.currentWeather,
    cityKey: state.weather.cityKey,
    isLoading: state.weather.isFetchingCurrent,
    error: state.weather.errorMessage,
    favorites: state.favorites.favorites
})

const mapDispatchToProps = dispatch => ({
    setCurrentWeather: currentWeather => dispatch(setCurrentWeather(currentWeather)),
    addCityToFavorites: city => dispatch(addCityToFavorites(city)),
    fetchCurrentWeatherStartAsync: city => dispatch(fetchCurrentWeatherStartAsync(city)),
    checkIfInFavorite: city => dispatch(checkIfInFavorite(city))
})



export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather)
