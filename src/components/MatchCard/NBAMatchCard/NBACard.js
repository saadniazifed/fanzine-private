import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import styles from 'components/MatchCard/NBAMatchCard/NBACard.module.css'

const NBAMatchCard = () => {
    const [nbaCard, setNBACard] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/NBA/homePageMatches"
            )
            .then((res) => {
                setNBACard(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container className={`${styles.nbaContainer}`}>
            <Container className={`${styles.nbaDataContainer}`}>
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
                                                    <img src={nbaData.local_team.icon} alt="local-team-icon" className={`${styles.nbaIconSize}`} />
                                                </Col>
                                                <Col>
                                                    <p>{nbaData.local_team.name}</p>
                                                </Col>
                                            </Row>
                                            <Row className={`ps-1 d-flex text-center align-items-center justify-content-center ${styles.nbaTimeBorder}`}>
                                                {nbaData.datetime.slice(10)}
                                            </Row>
                                            <Row className='d-flex flex-column justify-content-center align-content-center text-center me-3'>
                                                <Col>
                                                    <img src={nbaData.visitor_team.icon} alt="local-team-icon" className={`${styles.nbaIconSize}`} />
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