import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

const NBAMatchCard = () => {
    const [nbaCard, setNBACard] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/NBA/homePageMatches"
            )
            .then((res) => {
                console.log(res.data.data);
                setNBACard(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container style={{
            width: "475px",
            height: "250px",
            backgroundColor: "#28282B",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white"
        }}>
            <Container style={{
                backgroundColor: "#28282B",
                width: "475px",
                height: "250px",
                color: "white"
            }}>
                {
                    nbaCard.map((data) => (
                        data.matches.map(nbaData => {
                            return (
                                <>
                                    <Container className='d-flex flex-column mt-2' >
                                        <Container>

                                            <Row className='pt-2 mt-4'>
                                                <Col className='d-flex justify-content-center align-items-center text-white'>
                                                    {console.log(nbaData)}
                                                    {nbaData.date}
                                                </Col>
                                            </Row>

                                        </Container>

                                        <Container className='d-flex justify-content-center align-items-center align-content-center ms-4'>
                                            <Row className='d-flex flex-column justify-content-center align-content-center text-center'
                                            >
                                                <Col>
                                                    <img src={nbaData.local_team.icon} alt="local-team-icon" style={{ width: "50px", height: "50px" }} />
                                                </Col>
                                                <Col>
                                                    <p>{nbaData.local_team.name}</p>
                                                </Col>
                                            </Row>
                                            <Row style={{ width: "150px", height: "90px", border: "2px solid white" }}
                                                className="ps-1 d-flex text-center align-items-center justify-content-center"
                                            >
                                                {nbaData.datetime.slice(10)}
                                            </Row>
                                            <Row className='d-flex flex-column justify-content-center align-content-center text-center me-3'>
                                                <Col>
                                                    <img src={nbaData.visitor_team.icon} alt="local-team-icon" style={{ width: "50px", height: "50px" }} />
                                                </Col>
                                                <Col>
                                                    <p>{nbaData.visitor_team.name}</p>
                                                </Col>
                                            </Row>
                                        </Container>

                                        <Container>
                                            <Row>
                                                <Col className='text-center'>
                                                    NBA
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Container>
                                </>
                            )
                        })

                    ))
                }


            </Container>
        </Container>
    )
}

export default NBAMatchCard