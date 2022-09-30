import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';



export default function NBANews() {
    const [nbaNews, setNBANews] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/NBA/news?limit=6&page=1"
            )
            .then((res) => {
                setNBANews(res.data);
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
        <Container className='mb-5'>
            <h1>NBA</h1>
            <Container className='mt-5'>
                <Row xs={1} className="g-4">
                    <>
                        <Col md={8}>
                            {nbaNews.map((news, index) => (
                                index === 0 ?
                                    (
                                        <Card >
                                            <Card.Img variant="top" src={news.image} />
                                            <Card.ImgOverlay className="d-flex justify-content-end flex-column" style={overlayStyle}>
                                                <Card.Text>{news.title}</Card.Text>
                                                <br />
                                                <Row
                                                    style={{
                                                        textAlign: "left",
                                                        fontSize: "10px"
                                                    }}
                                                >
                                                    <Col className="d-flex" style={{
                                                        gap: "5px"
                                                    }}>
                                                        <img src={news.publisher.icon} alt="publisher icon" style={{
                                                            height: "15px",
                                                            width: "15px"
                                                        }} />
                                                        {news.publisher.name}
                                                    </Col>
                                                    <Col className="text-end">
                                                        {moment(`${news.datetime}`).fromNow()}
                                                    </Col>
                                                </Row>
                                            </Card.ImgOverlay>
                                        </Card>
                                    ) : ""
                            ))}

                        </Col>


                        <Col md={4}>
                            <Row>
                                {nbaNews.map((news, index) => (
                                    index === 1 ?
                                        (
                                            <>
                                                <Col md={7} style={{ width: "100%", color: "white" }} >
                                                    <Card>
                                                        <Card.Img variant="top" src={news.image} />
                                                        <Card.ImgOverlay className="d-flex justify-content-end flex-column" style={overlayStyle}>
                                                            <Card.Text>{news.title}</Card.Text>
                                                            <br />
                                                            <Row
                                                                style={{
                                                                    textAlign: "left",
                                                                    fontSize: "10px"
                                                                }}
                                                            >
                                                                <Col className="d-flex" style={{
                                                                    gap: "5px"
                                                                }}>
                                                                    <img src={news.publisher.icon} alt="publisher icon" style={{
                                                                        height: "15px",
                                                                        width: "15px"
                                                                    }} />
                                                                    {news.publisher.name}
                                                                </Col>
                                                                <Col className="text-end">
                                                                    {moment(`${news.datetime}`).fromNow()}
                                                                </Col>
                                                            </Row>
                                                        </Card.ImgOverlay>
                                                    </Card>
                                                </Col>
                                                <Col className='mt-2 pt-1 col-12'></Col>
                                            </>
                                        ) : index === 2 ? (
                                            <Col md={7}
                                                style={{ width: "100%" }}

                                            >
                                                <Card>
                                                    <Card.Img variant="top" src={news.image} />
                                                    <Card.ImgOverlay className="d-flex justify-content-end flex-column" style={overlayStyle}>
                                                        <Card.Text>{news.title}</Card.Text>
                                                        <br />
                                                        <Row
                                                            style={{
                                                                textAlign: "left",
                                                                fontSize: "10px"
                                                            }}
                                                        >
                                                            <Col className="d-flex" style={{
                                                                gap: "5px"
                                                            }}>
                                                                <img src={news.publisher.icon} alt="publisher icon" style={{
                                                                    height: "15px",
                                                                    width: "15px"
                                                                }} />
                                                                {news.publisher.name}
                                                            </Col>
                                                            <Col className="text-end">
                                                                {moment(`${news.datetime}`).fromNow()}
                                                            </Col>
                                                        </Row>
                                                    </Card.ImgOverlay>
                                                </Card>
                                            </Col>
                                        ) : ''
                                ))}
                            </Row>
                        </Col>

                        <Col className='mt-2 pt-1 col-12'></Col>

                        <Col>
                            <Row>

                                {nbaNews.map((news, index) => (
                                    index === 3 ?
                                        (
                                            <Col className='mt-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-white ' >
                                                <Card>
                                                    <Card.Img variant="top" src={news.image} style={{
                                                        height: "250px"
                                                    }} />/>
                                                    <Card.ImgOverlay className="d-flex justify-content-end flex-column" style={overlayStyle}>
                                                        <Card.Text>{news.title}</Card.Text>
                                                        <br />
                                                        <Row
                                                            style={{
                                                                textAlign: "left",
                                                                fontSize: "10px"
                                                            }}
                                                        >
                                                            <Col className="d-flex" style={{
                                                                gap: "5px"
                                                            }}>
                                                                <img src={news.publisher.icon} alt="publisher icon" style={{
                                                                    height: "15px",
                                                                    width: "15px"
                                                                }} />
                                                                {news.publisher.name}
                                                            </Col>
                                                            <Col className="text-end">
                                                                {moment(`${news.datetime}`).fromNow()}
                                                            </Col>
                                                        </Row>
                                                    </Card.ImgOverlay>
                                                </Card>
                                            </Col>
                                        ) : index === 4 ?
                                            (
                                                <Col className='mt-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-white' >
                                                    <Card>
                                                        <Card.Img variant="top" src={news.image} style={{
                                                            height: "250px"
                                                        }} />
                                                        <Card.ImgOverlay className="d-flex justify-content-end flex-column" style={overlayStyle}>
                                                            <Card.Text>{news.title}</Card.Text>
                                                            <br />
                                                            <Row
                                                                style={{
                                                                    textAlign: "left",
                                                                    fontSize: "10px"
                                                                }}
                                                            >
                                                                <Col className="d-flex" style={{
                                                                    gap: "5px"
                                                                }}>
                                                                    <img src={news.publisher.icon} alt="publisher icon" style={{
                                                                        height: "15px",
                                                                        width: "15px"
                                                                    }} />
                                                                    {news.publisher.name}
                                                                </Col>
                                                                <Col className="text-end">
                                                                    {moment(`${news.datetime}`).fromNow()}
                                                                </Col>
                                                            </Row>
                                                        </Card.ImgOverlay>
                                                    </Card>
                                                </Col>
                                            ) : index === 5 ?
                                                (
                                                    <Col className='mt-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-white' >
                                                        <Card>
                                                            <Card.Img variant="top" src={news.image} style={{
                                                                height: "250px"
                                                            }} />/>
                                                            <Card.ImgOverlay className="d-flex justify-content-end flex-column" style={overlayStyle}>
                                                                <Card.Text>{news.title}</Card.Text>
                                                                <br />
                                                                <Row
                                                                    style={{
                                                                        textAlign: "left",
                                                                        fontSize: "10px"
                                                                    }}
                                                                >
                                                                    <Col className="d-flex" style={{
                                                                        gap: "5px"
                                                                    }}>
                                                                        <img src={news.publisher.icon} alt="publisher icon" style={{
                                                                            height: "15px",
                                                                            width: "15px"
                                                                        }} />
                                                                        {news.publisher.name}
                                                                    </Col>
                                                                    <Col className="text-end">
                                                                        {moment(`${news.datetime}`).fromNow()}
                                                                    </Col>
                                                                </Row>
                                                            </Card.ImgOverlay>
                                                        </Card>
                                                    </Col>
                                                ) : ''
                                ))}
                            </Row>
                        </Col>
                    </>
                </Row>
            </Container>
        </Container>
    )
}