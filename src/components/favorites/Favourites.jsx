import React, { useEffect } from 'react'
import FavouriteCard from './FavouriteCard'
import Layout from '../ui/Layout'
import SideView from '../ui/SideView'
import { connect } from 'react-redux'
import CurrentTemperature from '../shared/CurrentTemperature'
import NoFavorites from '../ui/NoFavorites'

function Favourites({ favorites, cityKey }) {

    useEffect(() => {
        console.log(favorites)
    })
    return (
        <Layout>
            <SideView>
                {favorites.length === 0 ? <NoFavorites /> :
                    <>
                        <h1 className="favorite-h--1">My Favorite Cities</h1>
                        {favorites.map((day) => (
                            <FavouriteCard key={day.Key} data={day} />
                        ))}
                    </>
                }
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
