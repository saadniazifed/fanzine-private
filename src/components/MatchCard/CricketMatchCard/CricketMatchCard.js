import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import styles from 'components/MatchCard/CricketMatchCard/CricketMatch.module.css'
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
        <Container fluid style={{
            maxHeight: "475px",
            backgroundColor: "black",
            display: "flex",
            gap: "10px",
            marginTop: "10px",

        }}
            className={styles.overflowScrollX}
        >

            {
                cricketMatch.map(data => {
                    return (
                        <Card style={{
                            minWidth: "475px",
                            height: "250px",
                            backgroundColor: "#454545",
                        }}>
                            {
                                data.matches.map((matchData, index) => {
                                    return (
                                        <Container className="text-white">
                                            {
                                                index === 0 ?
                                                    (
                                                        <Card.Text>
                                                            <Row className='pb-3 p-4'>
                                                                {matchData.start_date}
                                                            </Row>
                                                        </Card.Text>
                                                    ) : ''
                                            }
                                            <Container>
                                                <Container className='d-flex'>
                                                    <Container>
                                                        {
                                                            index === 0 ?
                                                                (
                                                                    <Row>
                                                                        <Card.Text className='d-flex'>
                                                                            <img src={matchData.local_team.icon} style={{ width: "25px", height: "25px", marginRight: "10px" }} />
                                                                            {matchData.local_team.name}
                                                                        </Card.Text>
                                                                        <Card.Text>
                                                                            <img src={matchData.visitor_team.icon} style={{ width: "25px", height: "25px", marginRight: "10px" }} />
                                                                            {matchData.visitor_team.name}
                                                                        </Card.Text>
                                                                    </Row>
                                                                ) : ''
                                                        }
                                                    </Container>
                                                    <Container>

                                                        {
                                                            index === 0 ?
                                                                (
                                                                    <Row>
                                                                        <Container style={{
                                                                            height: "76px",
                                                                            width: "130px",
                                                                            border: "2px solid white",
                                                                            display: "flex",
                                                                            justifyContent: "center",
                                                                            alignItems: "center",
                                                                        }}>
                                                                            <Card.Text>
                                                                                {matchData.time}
                                                                            </Card.Text>

                                                                        </Container>
                                                                    </Row>
                                                                ) : ''
                                                        }

                                                    </Container>
                                                </Container>
                                                <Container>
                                                    {
                                                        index === 0 ?
                                                            (
                                                                <Col className='col-12 float-end pt-3'>
                                                                    <Card.Text>
                                                                        {matchData.series.name}
                                                                    </Card.Text>
                                                                </Col>
                                                            ) : ''
                                                    }
                                                </Container>
                                            </Container>
                                        </Container>
                                    )
                                })
                            }
                        </Card>)
                })
            }


        </Container>

    )
}

export default CricketMatchCard