import React, { useState, useEffect } from 'react'
import axios from 'axios';
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
                setFootballMatch(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (

        <Container fluid className={`${styles.overflowScrollX} ${styles.footballCardContainer}`}
        >
            {
                footballMatch.map(data => {
                    return (
                        <Card className={`${styles.matchCards}`} >
                            <Card.Img variant='top' src={data.venue.stadium_image} />
                            <Card.ImgOverlay className={`${styles.imageOverlay}`} >
                                <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>
                                    <Row>
                                        <Col>
                                            <Card.Text>
                                                {data.datetime.slice(10)}
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                    <Row className="d-flex align-items-center">
                                        <Col className='d-flex flex-column align-items-center'>
                                            <img src={data.home_team.club_logo} className={`${styles.clubLogoSize}`} />
                                            <Card.Text>
                                                {data.home_team.name}
                                            </Card.Text>
                                        </Col>

                                        <Col className={`${styles.matchBeginsBorder}`}>
                                            <Card.Text>
                                                {data.time_begin}
                                            </Card.Text>
                                        </Col>

                                        <Col className='d-flex flex-column align-items-center'>
                                            <img src={data.guest_team.club_logo} className={`${styles.clubLogoSize}`}
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