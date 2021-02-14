import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/animations/like.json'
import { connect } from 'react-redux'

function Like({cityKey, favorites}) {

    const defaultOptions = {
        loop: false,
        autoplay: favorites.find(favorite => favorite.Key === cityKey),
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Lottie
            options={defaultOptions}
            height={75}
            width={75}
        />
    )
}

const MapStateToProps = state => ({
    cityKey: state.weather.cityKey,
    favorites: state.favorites.favorites
})

export default connect(MapStateToProps)(Like)
