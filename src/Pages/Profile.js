import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from "../config.json";
import "./Profile.css";
import { Container, Col, Row } from 'react-bootstrap';

const Profile = () => {

    const [profilePlayList, setProfilePlayList] = useState([]);
    const [profileId, setProfileId] = useState("");
    /* const [profileImage, setProfileImage] =useState(""); */
    const [profileEmail, setProfileEmail] = useState("");
    const [profileName, setProfileName] = useState("");

    const profileData = async () => {
        try {
            /* const res = await axios.get("http://localhost:4000/user/profile"); */
            const res = await axios.get(config.api.url + "/user/profile", { headers: { Authorization: localStorage.getItem("jtoken") } })
            console.log(res);
            setProfilePlayList(res.data.profile.playlists)

            setProfileEmail(res.data.profile.user_email)
            setProfileName(res.data.profile.user_name)
            setProfileId(res.data.profile._id)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        profileData();
    }, [])

    return (
        <div className='profile-container'>
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
            <div className='profile-card' >
                <h1 className='profile-name'>{`UserName - ${profileName}`}</h1>
                <p className='profile-id'>{`UserId - ${profileId}`}</p>
                <p className='profile-email'>{`UserEmail - ${profileEmail}`}</p>
                <p>{profilePlayList.map((value) => (
                    <div className='profile-playlist'>
                        <p>{value.name}</p>
                    </div>
                ))}</p>

            </div>
        </div>
            
    )
}

export default Profile;


