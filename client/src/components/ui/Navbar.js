import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'

import BeachesServices from '../../services/beach.services'
import AuthServices from '../../services/auth.services'

import { Link } from 'react-router-dom'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beaches: []
        }
        this.services = new AuthServices()
        this.servicesBeaches = new BeachesServices()
    }

    logout = () => {
        this.services.logout()
            .then(response => this.props.setTheUser(false))
            .catch(err => console.log(err))
    }

    render() {

        const greeting = this.props.loggedInUser ? <>Hola, {this.props.loggedInUser.username}</> : <></>


        return (


            this.props.loggedInUser ?
                (
                    <Navbar bg="dark" expand="lg" variant="dark">
                        <Navbar.Brand ><Link to="/">AppClearSand</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <NavDropdown title="Comunidades autónomas" id="collasible-nav-dropdown">
                            <NavDropdown.Item ><Link to={`/comunidad/Galicia`}>Galicia</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={`/comunidad/Canarias`}>Canarias</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={`/comunidad/Balears`}>Islas Baleares</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={`/comunidad/Andalucia`}>Andalucía</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={`/comunidad/Cataluna`}>Cataluña</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={`/comunidad/Asturias`}>Principado de Asturias</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={`/comunidad/Valenciana`}>Comunidad Valenciana</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={`/comunidad/Euskadi`}>País Vasco</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={`/comunidad/Cantabria`}>Cantabria</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={`/comunidad/Murcia`}>Región de Murcia</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Form inline>
                                    <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                                    <Button variant="dark">Buscar</Button>
                                </Form>
                                <Nav.Link as="small"><Link to="/profile">{greeting}</Link></Nav.Link>
                                <Nav.Link onClick={this.logout}>Cerrar sesión</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                )
                :
                (
                    <Navbar bg="dark" expand="lg" variant="dark">
                        <Navbar.Brand ><Link to="/">AppClearSand</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as="div"> <Link to="/signup">Registro</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/login">Inicio sesión</Link></Nav.Link>
                                <Nav.Link as="div">{greeting}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                )
        )
    }
}

export default Navigation