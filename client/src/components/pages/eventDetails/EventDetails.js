// ---------- REACT --------
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// --------- SERVICES --------
import EventServices from '../../../services/event.services'
// --------- BOOTSTRAP --------
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Moment from 'react-moment';

import CommentForm from '../comments/CommentForm'
import CommentList from '../comments/CommentList'

class EventDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            event: null
         }
        this.eventServices = new EventServices()
    }

    componentDidMount = () => this.getEventDetails()

    postEventAddUser = () => {
        this.eventServices.postEventAddUser(this.state.event._id)
            .then(x => console.log(x))//TO-DO como mostrar al ususario que se ha apuntado 
            .catch(err => console.log(err))
    }

    getEventDetails = () => {
        this.eventServices.getEventDetails(this.props.match.params.id)
            .then(theEvent => this.setState({ event: theEvent }))
            .catch(err => console.log(err))
    }

    refreshEvent = (event) => {
        this.setState({event: event})
    }

    render() {
        console.log(this.state)
        if(this.state.event){

            return (
    
                <Container >
                    <h1>{this.state.event.title}</h1>
                    <Moment format="YYYY-MM-DD">{this.state.event.dateevent}</Moment>
                    <Row>
                        <Col md={{ span: 4, offset: 1 }}>
                            <p>{this.state.event.description}</p>
                        </Col>
                        <Col md={{ span: 5, offset: 1 }}>
                            <img src={this.state.event.imgurl} alt={this.state.event.title}></img>
                        </Col>
                    </Row>
                    <Link to={`/evento-usuarios/${this.state.event._id}`}>Link para ver los ususarios apuntados</Link>
                    <button onClick={this.postEventAddUser}>Apuntarse evento</button>
    
                    {this.state.event.comment && <CommentList arr={this.state.event.comment}/>}
    
                    <CommentForm event={this.state.event._id} refreshEvent={this.refreshEvent}></CommentForm>
    
                </Container>
            )
        } else return null
    }
}

export default EventDetails