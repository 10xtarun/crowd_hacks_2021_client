import React, { useState } from 'react'
import axios from 'axios'
import config from "../config.json"

const Chat = () => {
    // load email Ids
    const [self, setSelf] = useState(null)
    const [other, setOther] = useState(null)

    const getEmailIds = () => {
        axios.get(config.api.url + "/chat/generate", {
            headers: {
                "Authorization": localStorage.getItem("jtoken")
            }
        })
            .then(response => {
                console.log(response.data)
                if (response.status === 200) {
                    setSelf(response.data.pairs.self.name)
                    setOther(response.data.pairs.other.name)
                }
                else throw Error('something went wrong on server')
            })
            .catch(err => {
                alert(err.toString())
            })
    }

    // useEffect()

    return (
        <div>
            {
                !localStorage.getItem("jtoken") ? window.location.href = '/login' : null
            }
            <h3>Chat</h3>
            <button onClick={getEmailIds}>Start/Refresh</button>
            <div>
                <hr />
                <h5>You: {self}</h5>
                <h5>Your Partner: {other}</h5>
                <hr />
            </div>
        </div>
    )
}

export default Chat
