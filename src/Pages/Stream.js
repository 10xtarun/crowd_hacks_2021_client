import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config.json";
import "./Stream.css";
import { Col, Row, Container, Card, Button } from "react-bootstrap";

const Stream = () => {
    const [streamUrl] = useState(null);

    const getPlaylist = () => {
        // try {
        //     const data = await axios.get(config.api.url + "/streams/playlists")
        //     console.log(data)
        // } catch (error) {
        //     console.log(error)
        // }

        axios
            .get(config.api.url + "/streams/playlists", {
                headers: {
                    Authorization:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF9pZCI6ImhyaXRoaWtnYXZhbmthcjg1ODJAZ21haWwuY29tIiwiaWF0IjoxNjM4Njc4MDUyLCJleHAiOjE2Mzg2ODE2NTJ9.VRKYDpncFxpvXRDMeAlMql1XHBMAZPJNCBppknEtan8",
                },
            })
            .then((res) => {
                console.log(res.data);
            });
    };

    // const getRecents = () => {
    //     axios
    //         .get(config.api.url + "/streams/recent", {
    //             headers: {
    //                 Authorization:
    //                     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF9pZCI6ImhyaXRoaWtnYXZhbmthcjg1ODJAZ21haWwuY29tIiwiaWF0IjoxNjM4Njc4MDUyLCJleHAiOjE2Mzg2ODE2NTJ9.VRKYDpncFxpvXRDMeAlMql1XHBMAZPJNCBppknEtan8",
    //             },
    //         })
    //         .then((res) => {
    //             console.log(res.data);
    //         });
    // };

    useEffect(() => {
        if (streamUrl) window.location.href = streamUrl;
    }, [streamUrl]);

    return (
        <div id="stream-page">

            <Container>
                <Row>
                    <Col>
                    <div className="card">
                        <div className="box">
                        <div className="content">
                            <h3>Playlist</h3>
                            <a href="/" onClick={() => getPlaylist}>Refresh your Playlist...</a>
                        </div>
                    </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Stream;

// Previous Code
// <div className="stream-page col">
//          <div id="stream-card row">
//             <h1>Streams Loading!</h1>
//                     <button className="get-playlist" onClick={() => getPlaylist} >
//                     Get Playlist...
//                     </button>
//         </div>
//             <div id="stream-card row">
//                 <h1>Recents Loading!</h1>
//                     <button className="get-recent" onClick={() => getRecents} >
//                     Get Recents...
//                     </button>
//             </div>
