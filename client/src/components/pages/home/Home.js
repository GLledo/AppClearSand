//--------- REACT ------------
import React, { Component } from 'react'
// --------- SERVICES --------
import EventServices from '../../../services/event.services'

import BeachList from '../beachList/BeachList'
import EventList from '../eventList/EventList'

import Container from 'react-bootstrap/Container'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: [],
        }
        this.eventServices = new EventServices()
    }

    componentDidMount = () => this.getFiveEvents()

        getFiveEvents = () => {
            
                this.eventServices.getFiveEvents()
                .then(fiveEvents => this.setState({ events: fiveEvents }))
                .catch(err => console.log(err))
        
     }

    render() {

        return (
        
                <Container>
                    <BeachList/>
                    {this.state.events && <EventList arr={this.state.events}/>}
                </Container>
               
        )
    }
}

export default Home