// ---------- REACT --------
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// --------- SERVICES --------
import ProfileServices from '../../../services/profile.services'
// --------- BOOTSTRAP --------
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// ----------- PAGES COMPONENTS ---------
import EventList from '../eventList/EventList'

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            user: {}
         }
        this.profileServices = new ProfileServices()
    }

    componentDidMount = () => this.getUser()

    getUser = () => {
        this.profileServices.getUser()
            .then(theUser => {
                console.log(theUser)
                this.setState({ user: theUser })})
            .catch(err => console.log(err))
    }

    // postEventAddUser = () => {
    //     this.profileServices.postEventAddUser(this.state.event._id)
    //         .then(x => console.log(x))//TO-DO como mostrar al ususario que se ha apuntado 
    //         .catch(err => console.log(err))
    // }

    // getUserEdit = () => {
    //     this.profileServices.getUserEdit(this.props.match.params.id)
    //         .then(theUser => this.setState({ user: theUser }))
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
            <Container >
                
                <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                     <Card.Body>
                        <Card className="text-center">
                            <Card.Header><Link to={`/edit-user/${this.state.user._id}`}>{this.state.user.username}</Link></Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                   With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Card.Body>
                </Card>

                {this.state.user.comeup && <EventList arr={this.state.user.comeup}/>}
            </Container>
        )
    }
}

export default Profile