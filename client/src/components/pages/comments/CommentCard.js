// ----- REACT --------
import React from 'react'
// -------- CSS --------
// ------- BOOTSTRAP ----------
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const CommentCard = (props) => {
        
    return (
        
        <Col md={12}>
            <Card >
                <Card.Body  >
                    <Card.Text className="d-flex" >
                        <p>{props.text}</p>
                        <p className="ml-auto">~ {props.userid.username}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CommentCard