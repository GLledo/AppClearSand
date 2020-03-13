import React from 'react'

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const UserCard = ({ username, imgurl}) => {
    return (
        <Col md={12}>
            <Card >
                <Card.Body className="d-flex">
                    <Card.Img variant="left" src={imgurl} className='img-prof'/>
                    <Card.Title  className="ml-auto padding" >{username}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserCard