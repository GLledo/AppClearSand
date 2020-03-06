// -------- REACT ---------
import React, { Component } from 'react'
// ------- SERVICIES ----------
import EventsServices from '../../../services/event.services'
import FilesServices from '../../../services/files.services' 
// ----- BOOTSTRAP ----------
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Calendar from 'react-calendar';

class EventForm extends Component {

    constructor(props) {
        super(props)
        this.eventsServices = new EventsServices()
        this.filesServices = new FilesServices()
        this.state = {
            event: {
                imgurl: '',
                description: '',
                title:'',
                dateevent:new Date(),
            },
        }
    }

    finishAction = () => {
        this.props.closeModal()
        this.props.refreshList()
    }

    postEvent = () => {
        this.eventsServices.postEvent(this.state.event,this.props.beachId)
            .then(() => this.finishAction())
            .catch(err => console.log(err))
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            event: { ...this.state.event, [name]: value }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postEvent()
    }

    onChange = date => this.setState({  
        event: {...this.state.event, dateevent: date }
    })

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imgurl", e.target.files[0])
        this.filesServices.handleUpload(uploadData)
            .then(response => {
                console.log('La URL de Cloudinray es: ', response.secure_url)
                this.setState({
                    event: { ...this.state.event, imgurl: response.secure_url }
                })
            })
            .catch(err => console.log(err))
    }

    
    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" name="title" value={this.state.event.title} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.event.description} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="imgurl" onChange={this.handleFileUpload} />
                </Form.Group>
                <div>
                    <h3>Elige el dia de tu evento</h3>
                    <Calendar onChange={this.onChange} value={this.state.event.dateevent}/>
                </div>

                <Button variant="dark" type="submit">Crear el evento</Button>
            </Form>
        )
    }
}

export default EventForm