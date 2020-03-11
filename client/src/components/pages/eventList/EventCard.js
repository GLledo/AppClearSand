// ----- REACT --------
import React from 'react'
import { Link } from 'react-router-dom'
// -------- CSS --------
import './event-card.css'
// ------- BOOTSTRAP ----------
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Moment from 'react-moment';

const EventCard = props => {
    console.log(props)
    return (
        <Col md={12}>
            <Card className="card-beach">
                <Link to={`/detalles-evento/${props._id}`}>
                    <Card.Img variant="top" src={props.imgurl} />
                </Link>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Title> <Moment format="YYYY-MM-DD">{props.dateevent}</Moment></Card.Title>
                    <Card.Title>{props.useridcreator.username}</Card.Title>
                    <hr></hr>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default EventCard