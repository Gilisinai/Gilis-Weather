import React, { useEffect } from 'react'
import FavouriteCard from './FavouriteCard'
import Layout from './ui/Layout'
import SideView from './ui/SideView'
import { connect } from 'react-redux'
import CurrentTemperature from './CurrentTemperature'

function Favourites({ favorites, cityKey }) {

    useEffect(() => {
        console.log(favorites)
    }, [])
    return (
        <Layout>
            <SideView>
                <h1 className="favorite-h--1">My Favorite Cities</h1>
                {favorites.length === 0 ? <div>no favourites yet</div> : 
                     favorites.map((day, index) => (
                         
                         <FavouriteCard key={day.Key} data={day} />
                     ))}
            </SideView>
            {cityKey && <CurrentTemperature />}
        </Layout>
    )
}

const mapStateToProps = state => ({
    favorites: state.favorites.favorites,
    cityKey: state.weather.cityKey
})



export default connect(mapStateToProps)(Favourites)
