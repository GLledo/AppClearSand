import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import {Switch, Route} from 'react-router-dom'

import NavBar from './components/ui/Navbar'
import Signup from './components/pages/auth/signup/Signup'
import Login from './components/pages/auth/login/Login'
import BeachList from './components/pages/beachList/BeachList'
import BeachDetails from './components/pages/beachDetails/BeachDeatils'
import EventDetails from './components/pages/eventDetails/EventDetails'

import AuthServices from './services/auth.services'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: false }
    this.services = new AuthServices()
  }

  //TO-DO borra esto
  componentDidUpdate = (prevProps, prevState) => console.log("El estado de App se ha actualizado:", this.state)
  componentDidMount = () => this.fetchUser()


  setTheUser = userObj => this.setState({ loggedInUser: userObj })
  fetchUser = () => {
    this.services.loggedin()
      .then(theUser => this.setState({ loggedInUser: theUser }))
      .catch(() => this.setState({ loggedInUser: false }))
  }


  render() {

    return (
      <>
        <NavBar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />

        <Switch>
          <Route exact path="/" render={() => <BeachList />}/>
          <Route path="/detalles/:id" render={props => <BeachDetails {...props} setTheUser={this.setTheUser}/>} />
          <Route path="/detalles-evento/:id" render={props => <EventDetails {...props} setTheUser={this.setTheUser}/>} />
          <Route path="/signup" render={() => <Signup setTheUser={this.setTheUser} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
        </Switch>
      </>

    )
  }
}


export default App
