import react from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <div>
            <footer >
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h4 className="mb-3">up<span className="text-warning">Next</span> <small>by ROBU</small></h4>
                            <a className="mx-2" href="https://robu-lab.org/"><i className="fas fa-globe fa-2x"></i></a>
                            <a className="mx-2" href="https://www.facebook.com/BRACU.Robotics.Club"><i className="fab fa-facebook-square fa-2x"></i></a>
                            <a className="mx-2" href="https://www.instagram.com/bracu_robu/"><i className="fab fa-instagram-square fa-2x"></i></a>
                        </Col>
                        <Col lg={6} className="text-right">
                            <h6><i className="fas fa-map-marker-alt"></i> Address </h6>
                            <p className="text-muted">
                                UB50601, Robotics Research Lab,<br />
                                BRAC University, 66 Mohakhali 1212 Dhaka,<br />
                                Dhaka Division, Bangladesh
                            </p>
                        </Col>
                    </Row>
                    <div className="py-4">
                        <small>Copyright 2020 [ROBU]. All Rights Reserved</small><br />
                        <small>Developed with <i className="fas fa-heart"></i> by ifty mahmud</small>
                    </div>
                </Container>
            </footer>
        </div >
    )
}

export default Footer