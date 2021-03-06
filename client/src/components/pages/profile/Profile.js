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

import './profile.css'

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
            <Container className='text-center'>
                
                <Card className='card-size'>
                <Card.Img variant="top"  />
                     <Card.Body className='bg-color-card'>
                        <Card className="text-center">
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <img src={this.props.loggedInUser.imgurl} className='img-prof' alt={this.props.loggedInUser.username}></img>
                                <hr></hr>
                                <Card.Text>
                                    {this.props.loggedInUser.bio}  
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted"><Link to={`/edit-user/${this.props.loggedInUser._id}`} className='text'>{this.props.loggedInUser.username}</Link></Card.Footer>
                        </Card>
                    </Card.Body>
                </Card>
                
                <h1 className="space">Eventos en los que participas</h1>

                {this.state.user.comeup && <EventList arr={this.state.user.comeup}/>}
            </Container>
        )
    }
}

export default Profile