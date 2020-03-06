//--------- REACT ------------
import React, { Component } from 'react'
/// ----------- CSS ------------
import './beach-deatils.css'
//--------- SERVICIES -----------
import BeachesServices from '../../../services/beach.services'
// ---------- BOOTSTRAP -----------
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// ----------- PAGES COMPONENTS ---------
import EventForm from '../eventForm/EventForm'
import EventList from '../eventList/EventList'
import SimpleMap from '../googleMap/GoogleMapReact'

class BeachDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            beach: {},
            showmodal: false
         }
        this.beachesServices = new BeachesServices()
    }

    componentDidMount = () => this.getBeachDetails()

    getBeachDetails = () => {
        this.beachesServices.getBeachDetails(this.props.match.params.id)
            .then(theBeach => this.setState({ beach: theBeach }))
            .catch(err => console.log(err))
    }

    closeModal = () => this.setState({ showmodal: false })
    openModal = () => this.setState({ showmodal: true })

    render() {
        return (
            <Container className="beach-details" >
                <h1>{this.state.beach.Nombre}</h1>
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <p>{this.state.beach.Descripcion}</p>
                    </Col>
                    <Col md={{ span: 5, offset: 1 }}>
                        <img src={this.state.beach.urlImagen} alt={this.state.beach.Name}></img>
                    </Col>
                </Row>
                <Button className="mb-20" variant="dark" onClick={this.openModal}> 
                    Crea un evento
                </Button>
                
                <SimpleMap latitud={this.state.beach.Coordenada_Y} longitud={this.state.beach.Coordenada_X} name={this.state.beach.Nombre}></SimpleMap>

                <Modal show={this.state.showmodal} onHide={this.closeModal}>
                    <Modal.Body>
                        <h3>Crea un evento nuevo</h3>
                        <hr></hr>
                        <EventForm beachId={this.state.beach._id} closeModal={this.closeModal} refreshList={this.getBeachDetails} />
                    </Modal.Body>
                </Modal>
                
                {this.state.beach.event && <EventList arr={this.state.beach.event}/>}

            </Container>
        )
    }
}

// TO-DO
// {this.props.loggedInUser && <Button className="mb-20" variant="dark" onClick={this.openModal}></Button>}


export default BeachDetails