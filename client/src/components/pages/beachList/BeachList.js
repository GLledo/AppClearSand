// --------- REACT ----------
import React, { Component } from 'react'
// ---------- SERVICES -----------
import BeachServices from '../../../services/beach.services'
// ---------- PAGES COMPONENST --------
import BeachCard from './BeachCard'
// ---------- BOOTSTRAP ---------
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class BeachList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beaches: [],
        }
        this.beachServices = new BeachServices()
    }

    componentDidMount = () => this.getFiveBeaches()

    getFiveBeaches = () => {
        this.beachServices.getFiveBeaches()
            .then(allBeaches => this.setState({ beaches: allBeaches }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container className="padding">

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