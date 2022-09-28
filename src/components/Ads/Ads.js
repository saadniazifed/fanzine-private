import React from 'react'
import styles from 'components/Ads/Ads.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Ads = () => {
    return (
        <Container className={`d-flex justify-content-center mb-5 mt-5 align-items-center
        ${styles.adContainer}`}>
            <Row>
                <Col>
                    Ad is placed here
                </Col>
            </Row>
        </Container>
    )
}

export default Ads