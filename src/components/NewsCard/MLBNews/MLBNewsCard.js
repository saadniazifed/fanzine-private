import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from "react";
import moment from 'moment';
import useMLBNews from './hooks/useMLBNews';




export default function MLBNews() {
    const mlbNews = useMLBNews()

    const style = {
        overlayStyle: {
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '5px 15px',
            color: 'white',
            borderRadius: 3,
        },
        footerCardText: {
            textAlign: "left",
            fontSize: "10px"
        },
        fivePixelGap: {
            gap: "5px"
        },
        publisherIcon: {
            height: "15px",
            width: "15px"
        },
        indexOneColumn: {
            width: "100%",
            color: "white"
        },
        indexOneImage: {
            height: "270px",
        },
        indexTwoColumn: {
            width: "100%"
        },
        indexTwoImage: {
            height: "270px",
        },
        indexThreeImage: {
            height: "250px"
        },
        indexFourImage: {
            height: "250px"
        },
        indexFiveImage: {
            height: "250px"
        }
    }


    return (
        <Container>
            <h1>MLB</h1>
            <Container className='mt-5'>
                <Row xs={1} className="g-4">
                    <>
                        <Col md={8}>
                            {mlbNews.map((news, index) => (
                                index === 0 ?
                                    (
                                        <Card>
                                            <Card.Img variant="top" src={news.image} />
                                            <Card.ImgOverlay className="d-flex justify-content-end flex-column" style={style.overlayStyle}>
                                                <Card.Text className="text-start" >{news.title}</Card.Text>
                                                <br />
                                                <Row style={style.footerCardText} >
                                                    <Col className="d-flex" style={style.fivePixelGap}>
                                                        <img src={news.publisher.icon} alt="publisher icon"
                                                            style={style.publisherIcon} />
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
                                {mlbNews.map((news, index) => (
                                    index === 1 ?
                                        (
                                            <>
                                                <Col md={7} style={style.indexOneColumn}>
                                                    <Card>
                                                        <Card.Img variant="top" src={news.image} style={style.indexOneImage} />
                                                        <Card.ImgOverlay className="d-flex justify-content-end flex-column" style={style.overlayStyle}>
                                                            <Card.Text className="text-start">{news.title}</Card.Text>
                                                            <br />
                                                            <Row className='d-flex justify-content-between'
                                                                style={style.footerCardText}>
                                                                <Col className="d-flex" style={style.fivePixelGap}>
                                                                    <img src={news.publisher.icon} alt="publisher icon" style={style.publisherIcon} />
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
                                            <Col md={7} style={style.indexTwoColumn}>
                                                <Card>
                                                    <Card.Img variant="top" src={news.image}
                                                        style={style.indexTwoImage}
                                                    />
                                                    <Card.ImgOverlay className="d-flex justify-content-end flex-column" style={style.overlayStyle}>
                                                        <Card.Text>{news.title}</Card.Text>
                                                        <br />
                                                        <Row className='d-flex justify-content-between' style={style.footerCardText}>
                                                            <Col className="d-flex" style={style.fivePixelGap}>
                                                                <img src={news.publisher.icon} alt="publisher icon" style={style.publisherIcon} />
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

                                {mlbNews.map((news, index) => (
                                    index === 3 ?
                                        (
                                            <Col className='mt-4 text-white '>
                                                <Card>
                                                    <Card.Img variant="top" src={news.image}
                                                        style={style.indexThreeImage}
                                                    />
                                                    <Card.ImgOverlay className="d-flex justify-content-end flex-column" style={style.overlayStyle}>
                                                        <Card.Text>{news.title}</Card.Text>
                                                        <br />
                                                        <Row className='d-flex justify-content-between' style={style.footerCardText}>
                                                            <Col className="d-flex" style={style.fivePixelGap}>
                                                                <img src={news.publisher.icon} alt="publisher icon" style={style.publisherIcon} />
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
                                                <Col className='mt-4 text-white '>
                                                    <Card>
                                                        <Card.Img variant="top" src={news.image}
                                                            style={style.indexFourImage}
                                                        />
                                                        <Card.ImgOverlay className="d-flex justify-content-end flex-column" style={style.overlayStyle}>
                                                            <Card.Text>{news.title}</Card.Text>
                                                            <br />
                                                            <Row className='d-flex justify-content-between' style={style.footerCardText}>
                                                                <Col className="d-flex" style={style.fivePixelGap}>
                                                                    <img src={news.publisher.icon} alt="publisher icon" style={style.publisherIcon} />
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
                                                    <Col className='mt-4 text-white '>
                                                        <Card>
                                                            <Card.Img variant="top" src={news.image}
                                                                style={style.indexFiveImage}
                                                            />
                                                            <Card.ImgOverlay className="d-flex justify-content-end flex-column" style={style.overlayStyle}>
                                                                <Card.Text>{news.title}</Card.Text>
                                                                <br />
                                                                <Row className='d-flex justify-content-between' style={style.footerCardText}>
                                                                    <Col className="d-flex" style={style.fivePixelGap}>
                                                                        <img src={news.publisher.icon} alt="publisher icon" style={style.publisherIcon} />
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