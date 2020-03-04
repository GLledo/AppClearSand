import React, { Component } from 'react'

import EventServices from '../../../services/event.services'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class EventDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            event: {},
         }
        this.services = new EventServices()
    }

    componentDidMount = () => this.getEventDetails()

    getEventDetails = () => {
        this.services.getEventDetails(this.props.match.params.id)
            .then(theEvent => this.setState({ event: theEvent }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container >
                <h1>{this.state.event.title}</h1>
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <p>{this.state.event.description}</p>
                    </Col>
                    <Col md={{ span: 5, offset: 1 }}>
                        <img src={this.state.event.imgurl} alt={this.state.event.title}></img>
                    </Col>
                </Row>
                
                {/* {this.state.beach.event && <EventList arr={this.state.beach.event}/>} */}

            </Container>
        )
    }
}

// TO-DO
// {this.props.loggedInUser && <Button className="mb-20" variant="dark" onClick={this.openModal}>Crear Montaña rusa</Button>}


export default EventDetails