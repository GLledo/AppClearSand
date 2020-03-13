import React, { Component } from 'react'

import './Nav-bar.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import AuthServices from '../../services/auth.services'

import { Link } from 'react-router-dom'
import NavItem from 'react-bootstrap/NavItem'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comunidad: ['Galicia','Canarias','Balears','Andalucia','Cataluna','Asturias','Valenciana','Euskadi','Cantabria','Murcia']
        }
        this.authServices = new AuthServices()
    }

    logout = () => {
        this.authServices.logout()
            .then(response => this.props.setTheUser(false))
            .catch(err => console.log(err))
    }

    render() {

        return (

            this.props.loggedInUser ?
                (
                    <Navbar className='color-bg' expand="lg" variant="dark">
                        <Navbar.Brand ><Link to="/"><img src='../../../IconoAlfa.svg' alt={this.props.loggedInUser.username} className='img-profile'/></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <NavDropdown className='dropdown' title="Comunidades" id="collasible-nav-dropdown">
                            {this.state.comunidad.map(elm =><NavDropdown.Item ><Link to={`/comunidad/${elm}`} key={elm._id}>{elm}</Link></NavDropdown.Item>)}
                        </NavDropdown>
                        <Nav.Link><Link className='text-ocean' to={'/historico'}>Antiguos Eventos</Link></Nav.Link>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <NavItem><Link to="/profile"><img src={this.props.loggedInUser.imgurl} alt={this.props.loggedInUser.username} className='img-profile'/></Link></NavItem>
                                <Nav.Link ><Link to="/profile">{this.props.loggedInUser.username}</Link></Nav.Link>
                                <Nav.Link className='color-close' onClick={this.logout}>Cerrar sesión</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                )
                :
                (
                    <Navbar className='color-bg' expand="lg" variant="dark">
                        <Navbar.Brand ><Link to="/">AppClearSand</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as="div"> <Link to="/signup">Registro</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/login">Inicio sesión</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                )
        )
    }
}

export default Navigation