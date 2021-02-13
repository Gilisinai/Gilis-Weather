import React, { useEffect } from 'react'
import FavouriteCard from './FavouriteCard'
import Layout from './ui/Layout'
import SideView from './ui/SideView'
import { connect } from 'react-redux'

function Favourites({ favorites }) {

    useEffect(() => {
        console.log(favorites)
    }, [])
    return (
        <Layout>
            <SideView>

                {favorites.length === 0 ? <div>no favourites yet</div> : 
                     favorites.map((day, index) => (
                         
                         <FavouriteCard key={day.Key} data={day} />
                     ))}
            </SideView>
        </Layout>
    )
}

const mapStateToProps = state => ({
    favorites: state.favorites.favorites
})



export default connect(mapStateToProps)(Favourites)
