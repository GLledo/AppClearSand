// -------- REACT ---------
import React, { Component } from 'react'
// ------- SERVICIES ----------
import CommentServices from '../../../services/comment.services'
// ----- BOOTSTRAP ----------
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './comment-form.css'

class CommentForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comment: {
                text: '',
                event: props.event
            }
        }
        this.commentServices = new CommentServices()
    }

    postComment = () => {
        this.commentServices.postComment(this.state.comment)
            .then(updatedEvent => this.props.refreshEvent(updatedEvent)) 
            .catch(err => console.log(err))
        this.setState({comment: {text: '', event: this.props.event}})
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            comment: { ...this.state.comment, [name]: value }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postComment()
    }
    
    render() {

        return (
            <Form onSubmit={this.handleSubmit} className='line-form'>
                <Form.Group className='form-size-comment padding-right'>
                    <Form.Control type="text" name="text" value={this.state.comment.text} onChange={this.handleChange} />
                </Form.Group>
                <Button variant="dark" type="submit" className='button-sice'>Comenta</Button>
            </Form>
        )
    }
}

export default CommentForm