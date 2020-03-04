import React, { Component } from 'react'

import EventServices from '../../../services/event.services'

import EventCard from './EventCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class EventList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: props
        }
        this.services = new EventServices()
    }

    componentDidUpdate = (prevProps) =>{ 
        if (this.props !== prevProps){
            this.setState({events: this.props})
        }
    }

    render() { 

        return (
            <Container>

                <h1>Eventos</h1>

                {this.state.events.arr.length ? (
                    <Row>
                        {this.state.events.arr.map(elm => <EventCard key={elm._id} {...elm} />)}
                    </Row>
                )
                    :
                    <></>

                }

            </Container>
        )
    }
}

export default EventList