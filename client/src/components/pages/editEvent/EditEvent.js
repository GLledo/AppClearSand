// ---------- REACT --------
import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
// --------- SERVICES --------
import EventServices from '../../../services/event.services'
import FileServices from '../../../services/files.services'
// --------- BOOTSTRAP --------
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Calendar from 'react-calendar';
// ----------- PAGES COMPONENTS ---------
class EditEvent extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            event: {
                imgurl: '',
                description: '',
                title:'',
                dateevent: new Date(),
            }
         }
        this.eventServices = new EventServices()
        this.fileServices = new FileServices()
    }

    componentDidMount = () => this.getEventEdit()

    getEventEdit = () => {
        this.eventServices.getEventEdit(this.props.match.params.id)
            .then(theEvent => this.setState({ event: theEvent }))
            .catch(err => console.log(err))
    }

    postEventUpdated = () => {
        this.eventServices.postEventUpdated(this.state.event)
            .then(eventUpdated => console.log(eventUpdated))
            .catch(err => console.log(err))
            //this.props.history.push(`/detalles-evento/${this.state._id}`)
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            event: { ...this.state.event, [name]: value }
        })
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imgurl", e.target.files[0])
        this.fileServices.handleUpload(uploadData)
            .then(response => {
                console.log('La URL de Cloudinray es: ', response.secure_url)
                this.setState({
                    event: { ...this.state.event, imgurl: response.secure_url }
                })
            })
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postEventUpdated()
    }

    onChange = date => this.setState({  
        event: {...this.state.event, dateevent: date}
    })

    render() {
        return (
            <Container className='card-edit'>
             <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" name="title" value={this.state.event.title}  onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.event.description} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="imgurl" onChange={this.handleFileUpload} />
                </Form.Group>
                {/* <div>
                    <h3>Elige el dia de tu evento</h3>
                    <Calendar onChange={this.onChange} value={this.state.event.dateevent}/>
                </div> */}
                <Button className='button-color' variant="dark" type="submit">Actualizar Evento</Button>
             </Form>
            </Container>
        )
    }
}

export default EditEvent