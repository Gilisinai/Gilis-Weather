import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setCurrentWeather , fetchCurrentWeatherStartAsync } from '../redux/weather/weather.actions'
import { addCityToFavorites } from '../redux/favorites/favorites.actions'

import  { ReactComponent as HeartIcon } from '../assets/icons/heart.svg'
import Loader from './ui/Loader'

import dayjs from 'dayjs'


function CurrentWeather({ addCityToFavorites,fetchCurrentWeatherStartAsync, currentWeather, isLoading }) {

    useEffect(() => {
        
        // fetchCurrentWeatherStartAsync()
    }, [])

    return (


        <section className="current">
            {isLoading ? <Loader /> : 
            
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
                    <div onClick={()=> addCityToFavorites(currentWeather)} className="current__weather-utils--icon">
                        <HeartIcon />
                    </div>

                </div>
            </div>   
            }
        </section>



    )
}

const mapStateToProps = state => ({
    currentWeather: state.weather.currentWeather,
    isLoading: state.weather.isFetchingCurrent
})

const mapDispatchToProps = dispatch => ({
    setCurrentWeather: currentWeather => dispatch(setCurrentWeather(currentWeather)),
    addCityToFavorites: city => dispatch(addCityToFavorites(city)),
    fetchCurrentWeatherStartAsync: city => dispatch(fetchCurrentWeatherStartAsync(city))
})



export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather)
