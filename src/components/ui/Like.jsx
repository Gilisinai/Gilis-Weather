import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/animations/like.json'

function Like() {

    const defaultOptions = {
        loop: false,
        autoplay: false,
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

export default Like
