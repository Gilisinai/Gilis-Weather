import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setCurrentWeather , fetchCurrentWeatherStartAsync } from '../redux/weather/weather.actions'
import { addCityToFavorites } from '../redux/favorites/favorites.actions'



function CurrentWeather({ addCityToFavorites, currentWeather, fetchCurrentWeatherStartAsync }) {

    useEffect(() => {
        // setCurrentWeather(currentWeatherResponse[0])
        fetchCurrentWeatherStartAsync('tel aviv')
    }, [])

    return (


        <section className="current">
            <div className="current__weather">
                <div className="current__weather-details">
                    <div>
                        <h1 className="current-p--1">
                        {currentWeather && currentWeather.LocalizedName}
                        </h1>
                        <div className="current-p--2">
                        {currentWeather && currentWeather.Temperature.Metric.Value} C
                        </div>
                    </div>

                </div>

                <div className="current__weather-utils">
                    <div className="current__weather-utils--icon">
                        current location
                    </div>
                    <div onClick={()=> addCityToFavorites(currentWeather)} className="current__weather-utils--icon">
                        add to favorites
                    </div>

                </div>
            </div>   
        </section>



    )
}

const mapStateToProps = state => ({
    currentWeather: state.weather.currentWeather
})

const mapDispatchToProps = dispatch => ({
    setCurrentWeather: currentWeather => dispatch(setCurrentWeather(currentWeather)),
    addCityToFavorites: city => dispatch(addCityToFavorites(city)),
    fetchCurrentWeatherStartAsync: city => dispatch(fetchCurrentWeatherStartAsync(city))
})



export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather)
