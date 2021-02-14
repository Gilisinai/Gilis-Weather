import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/animations/error.json'

function RequestError() {

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
            <h1 className="error-h--2">Sorry , too many requests for today... </h1>
        </div>
    )
}

export default RequestError
