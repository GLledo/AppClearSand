//--------- REACT ------------
import React, { Component } from 'react'
// --------- SERVICES --------
import EventServices from '../../../services/event.services'

import EventList from '../eventList/EventList'

import Container from 'react-bootstrap/Container'

import './historic.css'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: [],
        }
        this.eventServices = new EventServices()
    }

    componentDidMount = () => this.getOldEvents()

    getOldEvents = () => {
            this.eventServices.getOldEvents()
            .then(OldEvents => this.setState({ events: OldEvents }))
            .catch(err => console.log(err))
        
     }

    render() {

        return (
            
                <Container >
                    
                    <h1 className="padding">Antiguos eventos</h1>

                    {this.state.events && <EventList arr={this.state.events}/>}

                </Container>
        )
    }
}

export default Home