import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Layout from '../ui/Layout'
import SideView from '../ui/SideView'
import FiveDays from './FiveDays'
import CurrentWeather from './CurrentWeather'
import CurrentTemperature from '../shared/CurrentTemperature'
import CitySearch from './CitySearch'

function Home({cityKey}) {
    
    return (
        <>


           
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

export default connect(mapStateToProps)(Home)
