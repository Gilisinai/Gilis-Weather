import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Layout from './ui/Layout'
import SideView from './ui/SideView'
import forecast from '../responses/forcastResponse'
import FiveDays from '../components/FiveDays'
import CurrentWeather from '../components/CurrentWeather'
import CurrentTemperature from '../components/CurrentTemperature'

import { setCurrentWeather } from '../redux/weather/weather.actions'

const key = 'Axm4PexJcrUlxTvofnN4KcAtab4G8e9j'
const imageKey = 'B-mP5PL-pvY6MQkR01mSJMkvUnyJIl7_LcuYPOX42_s'


function Home() {
    const [image, setImage] = useState('')
    const getWeather = async (locationID, locationName) => {
        const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
        const query = `${locationID}?apikey=${key}`

        const response = await fetch(base + query)
        const data = await response.json()

        console.log(data, locationName)

    }

    const getCity = async (city) => {
        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
        const query = `?apikey=${key}&q=${city}`

        const response = await fetch(base + query)
        const data = await response.json()

        const fullResponse = {
            key :data[0].Key, 
            cityName: data[0].LocalizedName
        }

        return fullResponse

    }

    const getCityImage = async (cityName) => {
        const base = `https://api.unsplash.com/photos/?query=${cityName}&client_id=${imageKey}`
        
        const response = await fetch(base)
        const data = await response.json()
        console.log(data)
        setImage(data[0].urls.raw)
    }

    const getWeatherByCity = async (city) => {
        const cityToSearch = await getCity(city)
        await getWeather(cityToSearch.key, cityToSearch.name)
        
    }

    useEffect(() => {
        getCityImage('new york')
        // getCity("Tel Aviv")
        // getWeather('215854')

    }, [])


    return (
        <>


            {/* <Button variant="contained">get city</Button> */}
            <Layout >
                <SideView>
                    <CurrentWeather />
                    <FiveDays />
                </SideView>
                <CurrentTemperature />
            </Layout>
        </>
    )
}



export default Home
