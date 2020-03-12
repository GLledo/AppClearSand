// ----- REACT --------
import React from 'react'
import { Link } from 'react-router-dom'
// -------- CSS --------
import './event-card.css'
// ------- BOOTSTRAP ----------
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Moment from 'react-moment'

const EventCard = props => {
    return (
        <Col md={12} className='padding text-center'>
            <Card className="card-beach">
                <Link to={`/detalles-evento/${props._id}`}>
                    <Card.Img variant="top" src={props.imgurl} className='img-size'/>
                </Link>
                <Card.Body>
                    <Card.Title> {props.title}</Card.Title>
                    <Card.Text className="d-flex" >
                        <p>Dia del evento:</p>
                        <Moment format="YYYY-MM-DD">{props.dateevent}</Moment>
                        <p className="ml-auto">Evento creado por: {props.useridcreator.username}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default EventCard