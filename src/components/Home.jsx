import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Layout from './ui/Layout'
import SideView from './ui/SideView'
import FiveDays from '../components/FiveDays'
import CurrentWeather from '../components/CurrentWeather'
import CurrentTemperature from '../components/CurrentTemperature'
import CitySearch from '../components/CitySearch'
import { fetchCurrentWeatherStartAsync } from '../redux/weather/weather.actions'



function Home({cityKey}) {
    
    useEffect(() => {
        // getWeatherByCity('tel aviv')

    }, [])


    return (
        <>


            {/* <Button variant="contained">get city</Button> */}
            <Layout >
                <SideView>
                    <CitySearch />
                    <CurrentWeather />
                   {cityKey && <FiveDays />} 
                    
                </SideView>
                {cityKey && <CurrentTemperature />}
            </Layout>
        </>
    )
}

const mapStateToProps = state => ({
    cityKey: state.weather.cityKey
})

const mapDispatchToProps = dispatch => ({
    fetchCurrentWeatherStartAsync: city => dispatch(fetchCurrentWeatherStartAsync(city))
})

export default connect(mapStateToProps)(Home)
