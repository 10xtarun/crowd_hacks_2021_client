import React, { } from 'react'

const Profile = () => {
    return (
        <div>
            {console.log(window.location)}

            {
                window.location.search &&
                new URLSearchParams(window.location.search) &&
                (new URLSearchParams(window.location.search).get("jtoken")) &&
                localStorage.setItem("jtoken", (new URLSearchParams(window.location.search).get("jtoken")))
            }
            {
                !localStorage.getItem("jtoken") ?
                    window.location.href = "/login" : null
            }
            <h1>USER</h1>
            <h2>TTTTTTTT {localStorage.getItem("jtoken")}</h2>
        </div>
    )
}

export default Profile
