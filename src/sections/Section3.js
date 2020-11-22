import React from 'react'
import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import competitions from '../competitions'

function Section3() {
    return (
        <div>
            <Container>
                {
                    competitions.map(function (element) {
                        return (
                            <Row className=" my-5 p-3">
                                <Col lg={8}>
                                    <Image className="nu" src={element.image} rounded fluid />
                                </Col>
                                <Col lg={4}>
                                    <ListGroup variant="flush" className="nu pt-2">
                                        <ListGroup.Item className="lgItem"><h4>{element.title}</h4></ListGroup.Item>
                                        <ListGroup.Item className="lgItem">{element.date}</ListGroup.Item>
                                        <ListGroup.Item className="lgItem">{element.type}</ListGroup.Item>
                                        <ListGroup.Item className="lgItem">{element.host}</ListGroup.Item>
                                        <Button href={element.link} variant="warning" className="mt-4" target="_blank" rel="noopener noreferrer">Event Link</Button>
                                    </ListGroup>
                                </Col>
                            </Row>
                        )
                    })

                }

            </Container>
        </div>
    )
}

export default Section3