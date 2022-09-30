import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import styles from 'components/MatchCard/CricketMatchCard/CricketMatchCard.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CricketMatchCard = () => {
    const [cricketMatch, setCricketMatch] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/Cricket/homePageMatches"
            )
            .then((res) => {
                setCricketMatch(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container fluid className={`${styles.cricketCardContainer} ${styles.overflowScrollX}`}>
            {
                cricketMatch.map(data => {
                    return (
                        <>
                            {data.matches.map((matchData) => {
                                return (
                                    <Card className={`${styles.cricketCards}`}>
                                        <Container className="text-white" >

                                            <Card.Text>
                                                <Row className='pb-3 p-4'>
                                                    {matchData.start_date}
                                                </Row>
                                            </Card.Text>
                                            <Container>
                                                <Container className='d-flex' >
                                                    <Container>
                                                        <Row>
                                                            <Card.Text className='d-flex'>
                                                                <img src={matchData.local_team.icon}
                                                                    className={`${styles.cricketTeamLogo}`}
                                                                />
                                                                {matchData.local_team.name}
                                                            </Card.Text>
                                                            <Card.Text>
                                                                <img src={matchData.visitor_team.icon}
                                                                    className={`${styles.cricketTeamLogo}`}
                                                                />
                                                                {matchData.visitor_team.name}
                                                            </Card.Text>
                                                        </Row>
                                                    </Container>
                                                    <Container >
                                                        <Row>
                                                            <Container className={`${styles.cricketTimeBorder}`}>
                                                                <Card.Text>
                                                                    {matchData.time}
                                                                </Card.Text>
                                                            </Container>
                                                        </Row>
                                                    </Container>
                                                </Container>
                                                <Container>
                                                    <Col className='col-12 float-end pt-3'>
                                                        <Card.Text>
                                                            {matchData.series.name}
                                                        </Card.Text>
                                                    </Col>
                                                </Container>
                                            </Container>
                                        </Container>
                                    </Card>
                                )
                            })}
                        </>
                    )
                })
            }
        </Container>
    )
}

export default CricketMatchCard