import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CricketNews from 'components/NewsCard/CricketNews/CricketNewsCard';
import CricketMatchCard from 'components/MatchCard/CricketMatchCard/CricketMatchCard';
import moment from 'moment';

const Cricket = () => {
    const [cricketMatch, setCricketMatch] = useState([])

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/Cricket/news?limit=48&page=1"
            )
            .then((res) => {
                setCricketMatch(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <CricketNews />
            <CricketMatchCard />

            <Container>
                <Row md={3}>
                    {
                        cricketMatch.map(data => {
                            return (
                                <Col>
                                    <Card style={{
                                        maxHeight: "400px",
                                        marginBottom: "1rem",
                                        textAlign: "left",
                                        fontSize: "12px",
                                        border: "0px"
                                    }}>

                                        <Card.Img variant="top" src={data.image}
                                            style={{
                                                objectFit: "cover",
                                                height: "250px",
                                                marginBottom: "0.2rem"
                                            }}
                                        />

                                        <Card.Text className='text-left'>
                                            {data.title}
                                        </Card.Text>
                                        <br />
                                        <Row style={{
                                            width: "100%",
                                            textAlign: "left",
                                        }}
                                            className='float-end'
                                        >
                                            <Col className="d-flex" style={{
                                                gap: "5px"
                                            }}>
                                                <img src={data.publisher.icon} alt="publisher icon" style={{
                                                    height: "15px",
                                                    width: "15px"
                                                }} />
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

export default Cricket