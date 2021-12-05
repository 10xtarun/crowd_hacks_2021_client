import React from 'react'

const Home = () => {
    return (
        <div>
            {
                !localStorage.getItem("jtoken") ?
                    window.location.href = "/login" : null
            }
            <h1>Hello Home</h1>
        </div>
    )
}

export default Home
