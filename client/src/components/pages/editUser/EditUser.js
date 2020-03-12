// ---------- REACT --------
import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
// --------- SERVICES --------
import ProfileServices from '../../../services/profile.services'
import FileServices from '../../../services/files.services'
// --------- BOOTSTRAP --------
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
// ----------- PAGES COMPONENTS ---------
import './card-edit.css'
class EditUser extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            user: {
                username: this.props.loggedInUser.username,
                bio: this.props.loggedInUser.bio

            }
         }
        this.profileServices = new ProfileServices()
        this.fileServices = new FileServices()
    }


    postUserEdit = () => {
        this.profileServices.postUserEdit(this.state.user)
            .then(userUpdated => this.props.setTheUser(userUpdated))
            .catch(err => console.log(err))
            this.props.history.push('/profile')
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            user: { ...this.state.user, [name]: value }
        })
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imgurl", e.target.files[0])
        this.fileServices.handleUpload(uploadData)
            .then(response => {
                console.log('La URL de Cloudinray es: ', response.secure_url)
                this.setState({
                    user: { ...this.state.user, imgurl: response.secure_url }
                })
            })
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postUserEdit()
    }

    render() {
        return (
            <Container className='card-edit'>
             <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="username" value={this.state.user.username}  onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" name="bio" value={this.state.user.bio} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="imgurl" onChange={this.handleFileUpload} />
                </Form.Group>
                <Button className='button-color' variant="dark" type="submit">Actualizar Usuario</Button>
             </Form>
            </Container>
        )
    }
}

export default EditUser