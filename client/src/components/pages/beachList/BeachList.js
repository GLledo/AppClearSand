import React, { Component } from 'react'

import BeachServices from '../../../services/beach.services'

import BeachCard from './BeachCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class BeachList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beaches: [],
        }
        this.services = new BeachServices()
    }

    componentDidMount = () => this.getFiveBeaches()

    getFiveBeaches = () => {
        this.services.getFiveBeaches()
            .then(allBeaches => {
                this.setState({ beaches: allBeaches })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container>

                <h1>Playas Chulas</h1>

                {this.state.beaches.length ? (
                    <Row>
                        {this.state.beaches.map(elm => <BeachCard key={elm._id} {...elm} />)}
                    </Row>
                )
                    :
                    <p>CARGANDO...</p>

                }

            </Container>
        )
    }
}

export default BeachList