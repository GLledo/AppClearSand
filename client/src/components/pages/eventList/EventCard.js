import React from 'react'

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './event-card.css'

import { Link } from 'react-router-dom'

const EventCard = ({ description, imgurl, _id }) => {
    return (
        <Col md={12}>
            <Card className="card-beach">
                <Link to={`/detalles/${_id}`}>
                    <Card.Img variant="top" src={imgurl} />
                </Link>
                <Card.Body>
                    <Card.Title>{description}</Card.Title>
                    <hr></hr>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default EventCard