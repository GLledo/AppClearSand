// ---------- REACT ----------
import React from 'react'
import { Link } from 'react-router-dom'
// ----------- CSS ----------
import './beach-card.css'
//------------ BOOTSTRAP --------
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const BeachCard = ({ Nombre, urlImagen, _id , Provincia}) => {
    return (
        <Col md={4} className='paddin'>
            <Card className="card-beach">
                <Link to={`/detalles/${_id}`}>
                    <Card.Img variant="top" src={urlImagen} />
                </Link>
                <Card.Body>
                    <Card.Text>{Nombre}</Card.Text>
                    <hr></hr>
                    <p>{Provincia}</p>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeachCard