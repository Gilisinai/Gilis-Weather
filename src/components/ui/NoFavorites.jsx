import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/animations/nofavorites.json'

function NoFavorites() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
       <div className="error">
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
            />
            <h1 className="error-h--2">You have no favorites ... yet.. </h1>
        </div>
    )
}

export default NoFavorites
