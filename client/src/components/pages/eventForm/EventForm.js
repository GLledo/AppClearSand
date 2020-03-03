import React, { Component } from 'react'

import EventsServices from '../../../services/event.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import FilesServices from '../../../services/files.services'

class EventForm extends Component {

    constructor(props) {
        super(props)
        this.eventsServices = new EventsServices()
        this.filesServices = new FilesServices()
        this.state = {
            event: {
                imgurl: '',
                description: '',
            }
        }
    }

    finishAction = () => {
        this.props.closeModal()
        this.props.refreshList()
    }

    postCoaster = () => {
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
        this.postCoaster()
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imgurl", e.target.files[0])
        this.filesServices.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.secure_url)
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
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.event.description} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="imgurl" onChange={this.handleFileUpload} />
                </Form.Group>

                <Button variant="dark" type="submit">Crear el evento</Button>
            </Form>
        )
    }
}

export default EventForm