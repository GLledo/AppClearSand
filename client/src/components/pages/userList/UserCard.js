import React from 'react'

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const UserCard = ({ username, imgUrl}) => {
    return (
        <Col md={12}>
            <Card >
                <Card.Body>
                    <Card.Title>{username}</Card.Title>
                    <hr></hr>
                    <Card.Img variant="left" src={imgUrl} />
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserCard