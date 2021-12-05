import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from "../config.json";
import "./Profile.css";
import { Container, Col, Row } from 'react-bootstrap';

const Profile = () => {

    const [profilePlayList, setProfilePlayList] =useState([]);
    const [profileId, setProfileId] =useState("");
    /* const [profileImage, setProfileImage] =useState(""); */
    const [profileEmail, setProfileEmail] =useState("");
    const [profileName, setProfileName] = useState("");

    const profileData = async () => {
        try { 
            /* const res = await axios.get("http://localhost:4000/user/profile"); */
            const res = await axios.get(config.api.url + "/user/profile", {headers: {Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF9pZCI6IjEwMHJhYmhNYWxld2FkZUBnbWFpbC5jb20iLCJpYXQiOjE2Mzg2ODI5NjQsImV4cCI6MTYzODY4NjU2NH0.ln3n7JLOtA0Oy8O1Y52fxtcQfcQE3hPNIhcSBHpyzrQ'}})
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
        <div >
            <Container fluid="md" className='profile-card'>
  <Row className='profile-cardimage'>
    <Col ><img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'></img></Col>
  </Row>
  <Row className='profile-cardtext'>
    <Col> <h1>{profileName}</h1>
            <p>{profileId}</p>
            <p>{profileEmail}</p>
            <p>{profilePlayList.map((value) => (
                <p>{value.name}</p>
            ))}</p>
    </Col>
  </Row>
</Container>
           
        </div>
            
    )
}

export default Profile;


