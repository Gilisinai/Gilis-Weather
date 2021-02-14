import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Layout from './ui/Layout'
import SideView from './ui/SideView'
import FiveDays from '../components/FiveDays'
import CurrentWeather from '../components/CurrentWeather'
import CurrentTemperature from '../components/CurrentTemperature'
import CitySearch from '../components/CitySearch'



function Home({cityKey}) {
    
    useEffect(() => {

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


export default connect(mapStateToProps)(Home)
