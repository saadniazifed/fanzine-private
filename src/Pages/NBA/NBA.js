import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NBANews from 'components/NewsCard/NBANews/NBANewsCard';
import NBAMatchCard from 'components/MatchCard/NBAMatchCard/NBACard';
import moment from 'moment';
import useNBAData from './hooks/useNBAData';

const NBA = () => {
    const nbaMatch = useNBAData()

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
            <NBANews />
            <NBAMatchCard />

            <Container className='mt-5'>
                <Row md={3}>
                    {
                        nbaMatch.map(data => {
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

export default NBA