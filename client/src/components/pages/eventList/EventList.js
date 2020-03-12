// ---------- REACT --------
import React, { Component } from 'react'
// -------- PAGES COMMPONENTS --------
import EventCard from './EventCard'
// --------- BOOTSTRAP ----------
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class EventList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: props
        }
    }

    componentDidUpdate = (prevProps) =>{ if (this.props !== prevProps)this.setState({events: this.props})}

    render() { 

        return (
            <Container >

                {this.state.events.arr.length ? (
                    <Row className="justify-content-center">
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