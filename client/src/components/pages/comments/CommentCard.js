// ----- REACT --------
import React from 'react'
// -------- CSS --------
// ------- BOOTSTRAP ----------
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const CommentCard = (props) => {
    
    console.log(props)

    return (
        
        <Col md={12}>
            <Card className="card-beach">
                <Card.Body>
                    <Card.Title>{props.text}</Card.Title>
                    <hr></hr>
                    <Card.Text>{props.userid.username}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CommentCard