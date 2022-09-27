import React, { useState, useEffect } from 'react'
import axios from 'axios';
import 'components/MatchCard/FootballMatchCard/FootballMatchCard.module.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from 'components/MatchCard/FootballMatchCard/FootballMatchCard.module.css'

const FootballMatchCard = () => {
    const [footballMatch, setFootballMatch] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/Football/homePageMatches"
            )
            .then((res) => {
                console.log(res.data.data);
                setFootballMatch(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const overlayStyle = {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '5px 15px',
        color: 'white',
        borderRadius: 3,
    }

    return (

        <Container fluid style={{
            maxHeight: "475px",
            backgroundColor: "black",
            display: "flex",
            gap: "10px",
            marginTop: "10px",
            marginBottom: "5rem"
        }}
            className={styles.overflowScrollX}
        >
            {
                footballMatch.map(data => {
                    return (
                        <Card style={{
                            minWidth: "475px",
                            height: "250px",
                        }}>
                            <Card.Img variant='top' src={data.venue.stadium_image} />
                            <Card.ImgOverlay style={overlayStyle}>
                                <Container style={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                >
                                    <Row>
                                        <Col>
                                            <Card.Text>
                                                {data.datetime.slice(10)}
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                    <Row style={{
                                        display: "flex",
                                        alignItems: "center"
                                    }}>
                                        <Col className='d-flex flex-column align-items-center'>
                                            <img src={data.home_team.club_logo}
                                                style={{
                                                    width: "25px",
                                                    height: "25px"
                                                }}
                                            />

                                            <Card.Text>
                                                {data.home_team.name}
                                            </Card.Text>
                                        </Col>

                                        <Col style={{
                                            width: "150px",
                                            height: "66px",
                                            border: "1px solid white",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Card.Text>
                                                {data.time_begin}
                                            </Card.Text>
                                        </Col>

                                        <Col className='d-flex flex-column align-items-center'>
                                            <img src={data.guest_team.club_logo}
                                                style={{
                                                    width: "25px",
                                                    height: "25px"
                                                }}
                                            />
                                            <Card.Text>
                                                {data.guest_team.name}
                                            </Card.Text>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Card.Text>
                                                {data.league_name}
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.ImgOverlay>

                        </Card>
                    )
                })
            }

        </Container>
    )
}

export default FootballMatchCard