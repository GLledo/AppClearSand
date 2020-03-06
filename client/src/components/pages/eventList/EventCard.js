// ----- REACT --------
import React from 'react'
import { Link } from 'react-router-dom'
// -------- CSS --------
import './event-card.css'
// ------- BOOTSTRAP ----------
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const EventCard = ({ title, imgurl, _id,dateevent }) => {
    return (
        <Col md={12}>
            <Card className="card-beach">
                <Link to={`/detalles-evento/${_id}`}>
                    <Card.Img variant="top" src={imgurl} />
                </Link>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>{dateevent}</Card.Title>
                    <hr></hr>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default EventCard