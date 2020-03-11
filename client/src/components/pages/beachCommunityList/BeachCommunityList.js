// --------- REACT ----------
import React, { Component } from 'react'
// ---------- SERVICES -----------
import BeachServices from '../../../services/beach.services'
// ---------- PAGES COMPONENST --------
import BeachCard from '../beachList/BeachCard'
// ---------- BOOTSTRAP ---------
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class BeachCommunityList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beaches: [],
        }
        this.beachServices = new BeachServices()
    }

    componentDidMount = () => this.getAllComunidad()

    getAllComunidad = () => {
        this.beachServices.getAllComunidad(this.props.match.params.comunidad)
            .then(allBeaches => this.setState({ beaches: allBeaches }))
            .catch(err => console.log(err))
    }

    componentDidUpdate(prevProps) {
        return prevProps.match.params.comunidad !== this.props.match.params.comunidad ? this.getAllComunidad() : null
    }

    render() {

        return (
            <Container>

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

export default BeachCommunityList