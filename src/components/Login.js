import React, { useState } from 'react'
import axios from 'axios'
import config from "../config.json"
import "./Login.css"

const Login = () => {
    const [loginUrl, setLoginUrl] = useState(null)

    const getLoginPage = () => {
        axios.get(config.api.url + "/auth/login")
            .then(res => {
                if (res.data.success) setLoginUrl(res.data.url)
                else console.log("login url not found")
            })
    }

    return (
            <div id="login-page">
                <div id="login-card">
                    <h2>Welcome to Health Luminous!</h2>

            <button className="login-button" onClick={() => getLoginPage()}>
                <i className="fab fa-spotify"> Login With Spotify</i>
                </button>
            {
                loginUrl ?
                    window.location.href = loginUrl :
                    null
            }

                </div>
            </div>
    )
}

export default Login
