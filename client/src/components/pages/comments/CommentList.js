// ---------- REACT --------
import React, { Component } from 'react'
// -------- PAGES COMMPONENTS --------
import CommentCard from './CommentCard'
// --------- BOOTSTRAP ----------
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class CommentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comments: props
        }
    }

    componentDidUpdate = (prevProps) =>{ if (this.props !== prevProps)this.setState({comments: this.props})}

    render() { 

        return (
            <Container>

                <h1>Comentarios</h1>

                {this.state.comments.arr.length ? (
                    <Row>
                        {this.state.comments.arr.map(elm => <CommentCard key={elm._id} {...elm} />)}
                    </Row>
                )
                    :
                    <></>
                    
                }

            </Container>
        )
    }
}

export default CommentList