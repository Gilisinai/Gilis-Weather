import React, { useEffect } from 'react'
import DayCard from './DayCard'
import Layout from './ui/Layout'
import { connect } from 'react-redux'

function Favourites({ favorites }) {

    useEffect(() => {
        console.log(favorites)
    },[])
    return (
        <Layout>
            {favorites.map((day, index) => (
                <DayCard key={index} data={day} />
            ))}
        </Layout>
    )
}

const mapStateToProps = state => ({
    favorites: state.favorites.favorites
})



export default connect(mapStateToProps)(Favourites)
