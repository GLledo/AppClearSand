// ---------- REACT --------
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// --------- SERVICES --------
import ProfileServices from '../../../services/profile.services'
// --------- BOOTSTRAP --------
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

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
            .then(theUser => this.setState({ user: theUser }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container >
                
                <Card>
                <Card.Img variant="top"  />
                     <Card.Body>
                        <Card className="text-center">
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    {this.state.user.bio}  
                                </Card.Text>
                            
                                </Card.Body>
                                <Card.Footer className="text-muted"><Link to={`/edit-user/${this.state.user._id}`}>{this.state.user.username}</Link></Card.Footer>
                        </Card>
                    </Card.Body>
                </Card>

                {this.state.user.comeup && <EventList arr={this.state.user.comeup}/>}
            </Container>
        )
    }
}

export default Profile