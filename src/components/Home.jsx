import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Layout from './ui/Layout'
import forecast from '../responses/forcastResponse'
import FiveDays from '../components/FiveDays'
import CurrentWeather from '../components/CurrentWeather'
import { setCurrentWeather } from '../redux/weather/weather.actions'

const key = 'Axm4PexJcrUlxTvofnN4KcAtab4G8e9j'


function Home() {
    const [fiveDays, setFiveDays] = useState(null)
    const getWeather = async (locationID) => {
        const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
        const query = `${locationID}?apikey=${key}`

        const response = await fetch(base + query)
        const data = await response.json()

        console.log(data)

    }

    const getCity = async (city) => {
        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
        const query = `?apikey=${key}&q=${city}`

        const response = await fetch(base + query)
        const data = await response.json()

        console.log(data)

    }

    useEffect(() => {


    }, [])


    return (
        <>


            {/* <Button variant="contained">get city</Button> */}
            <Layout >
                <CurrentWeather />
                <FiveDays />
            </Layout>
        </>
    )
}



export default Home
