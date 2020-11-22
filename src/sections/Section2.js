import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Section2() {
    return (
        <div>
            <Container>
                <Row className="features">
                    <Col lg={4}>
                        <h5><i className="fas fa-bolt"></i> Competitions</h5>
                        <p className="text-muted">Here you will find details of upcoming competitions with a clickable link that redirects to the event page. This includes not only Robotics competitions but tech related competitions too.</p>
                    </Col>

                    <Col lg={4}>
                        <h5><i className="far fa-life-ring"></i> Support</h5>
                        <p className="text-muted">Concerned seniors are always ready to provide any kind of support for good performance in the competitions. Knock us on facebook or make a good use of ROBU General Body group for assistance.</p>
                    </Col>

                    <Col lg={4}>
                        <h5><i className="far fa-clock"></i> Updated</h5>
                        <p className="text-muted">This site is properly maintained on a daily basis. So don't worry, we won't let you miss any upcoming competitions taking place all over the country. Just keep your eyes on this site once in a while. </p>
                    </Col>
                </Row>

                <div className="started text-center py-5">
                    <h2 className="started-text"><i className="fas fa-flag-checkered"></i> Get Set <span className="text-warning nu2">Go!</span></h2>
                </div>
            </Container>
        </div>
    )
}

export default Section2