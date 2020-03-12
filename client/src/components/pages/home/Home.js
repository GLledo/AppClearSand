//--------- REACT ------------
import React, { Component } from 'react'
// --------- SERVICES --------
import EventServices from '../../../services/event.services'

import BeachList from '../beachList/BeachList'
import EventList from '../eventList/EventList'

import Container from 'react-bootstrap/Container'

import './home.css'

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
                <>
                <Container fluid className= 'p-0 height bg-home' >
                       
                         <img className='img-home tam' src='https://media.giphy.com/media/7GHRDluBmx9O8/giphy.gif' alt="Img ocean"></img>
                </Container>
                <Container className='text'>
                    
                    
                    <h1 className="padding">Próximos eventos</h1>

                    {this.state.events && <EventList arr={this.state.events}/>}

                    <h1 className="padding" >Playas recomendadas</h1>

                    <BeachList/>

                </Container>
                </>
               
        )
    }
}

export default Home