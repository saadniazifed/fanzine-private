import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import FootballNews from 'components/NewsCard/FootballNews/FootballNewsCard';
import FootballMatchCard from 'components/MatchCard/FootballMatchCard/FootballMatchCard';
import moment from 'moment';
import useFootballData from './hooks/useFootballData';


const Football = () => {
    const footballMatch = useFootballData()

    const style = {
        container: {
            maxHeight: "400px",
            marginBottom: "1rem",
            textAlign: "left",
            fontSize: "12px",
            border: "0px"
        },
        topCard: {
            objectFit: "cover",
            height: "250px",
            marginBottom: "0.2rem"
        },
        leftAlignRow: {
            width: "100%",
            textAlign: "left",
        },
        fivePixelGap: {
            gap: "5px"
        },
        publisherIcon: {
            height: "15px",
            width: "15px"
        }
    }

    return (
        <>
            <FootballNews />
            <FootballMatchCard />

            <Container>
                <Row md={3}>
                    {
                        footballMatch.map(data => {
                            return (
                                <Col>
                                    <Card style={style.container}>
                                        <Card.Img variant="top" src={data.image} style={style.topCard} />
                                        <Card.Text className='text-left'>
                                            {data.title}
                                        </Card.Text>
                                        <br />
                                        <Row style={style.leftAlignRow} className='float-end'>
                                            <Col className="d-flex" style={style.fivePixelGap}>
                                                <img src={data.publisher.icon} alt="publisher icon" style={style.publisherIcon} />
                                                {data.publisher.name}
                                            </Col>
                                            <Col className="text-end">
                                                {moment(`${data.datetime}`).fromNow()}
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container >
        </>
    )
}

export default Football