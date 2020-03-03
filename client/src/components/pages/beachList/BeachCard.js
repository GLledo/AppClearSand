import React from 'react'

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './beach-card.css'

import { Link } from 'react-router-dom'

const BeachCard = ({ Nombre, urlImagen, _id , Provincia}) => {
    return (
        <Col md={4}>
            <Card className="card-beach">
                <Link to={`/detalles/${_id}`}>
                    <Card.Img variant="top" src={urlImagen} />
                </Link>
                <Card.Body>
                    <Card.Title>{Nombre}</Card.Title>
                    <hr></hr>
                    <p>{Provincia}</p>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeachCard