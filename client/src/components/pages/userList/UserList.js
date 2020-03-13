// --------- REACT ----------
import React, { Component } from 'react'
// --------- SERVICES ---------
import EventServices from '../../../services/event.services'
// ---------- PAGES COMMPONENTS --------
import UserCard from './UserCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
        this.eventServices = new EventServices()
    }

    componentDidMount = () => this.getEventDetails()

    getEventDetails = () => {
        this.eventServices.getEventDetails(this.props.match.params.id)
            .then(theEvent => {
                this.setState({ events: theEvent.userid })
            })
            .catch(err => console.log(err))
    }

    render() { 

        return (
            <Container>

                <h1 className='padding'>Lista de Usuarios</h1>

                {this.state.events.length ? (
                    <Row>
                        {this.state.events.map(elm => <UserCard key={elm._id} {...elm} />)}
                    </Row>
                )
                    :
                    <></>

                }

            </Container>
        )
    }
}

export default UserList