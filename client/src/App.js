// --------- REACT ----------
import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom'
// ------- BOOTSTRAP --------
import 'bootstrap/dist/css/bootstrap.min.css';
//----- CSS -------
import './App.css';
// ----- UI COMPONENT ----
import NavBar from './components/ui/Navbar'
import Signup from './components/pages/auth/signup/Signup'
import Login from './components/pages/auth/login/Login'
import BeachDetails from './components/pages/beachDetails/BeachDeatils'
import EventDetails from './components/pages/eventDetails/EventDetails'
import UserList from './components/pages/userList/UserList'
import BeachCommunityList from './components/pages/beachCommunityList/BeachCommunityList'
import Profile from './components/pages/profile/Profile'
import EditUser from './components/pages/editUser/EditUser'
import Home from './components/pages/home/Home'
// ----- SERVICES --------
import AuthServices from './services/auth.services'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: false }
    this.authServices = new AuthServices()
  }

  //TO-DO borra esto
  componentDidUpdate = (prevProps, prevState) => console.log(this.state)
  componentDidMount = () => this.fetchUser()


  setTheUser = userObj => this.setState({ loggedInUser: userObj })

  fetchUser = () => {
    this.authServices.loggedin()
      .then(theUser => this.setState({ loggedInUser: theUser }))
      .catch(() => this.setState({ loggedInUser: false }))
  }

  render() {
    return (
      <>
        <NavBar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />

        <Switch>
          <Route exact path="/" render={props => <Home setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser}/>}/>
          <Route path="/signup" render={() => <Signup setTheUser={this.setTheUser} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />

          {this.state.loggedInUser ? (
            <>
              <Route path="/detalles-evento/:id" render={props => this.state.loggedInUser ? <EventDetails {...props} loggedInUser={this.state.loggedInUser}/>: <Redirect to="/" />} />
              <Route path="/detalles/:id" render={props => this.state.loggedInUser ? <BeachDetails {...props} loggedInUser={this.state.loggedInUser}/> : <Redirect to="/" />} />
              <Route path="/evento-usuarios/:id" render={props => this.state.loggedInUser ? <UserList {...props} loggedInUser={this.state.loggedInUser}/> : <Redirect to="/" />} />
              <Route path="/comunidad/:comunidad" render={props => this.state.loggedInUser ? <BeachCommunityList {...props} loggedInUser={this.state.loggedInUser}/> : <Redirect to="/" />} />
              <Route path="/profile" render={props => this.state.loggedInUser ? <Profile {...props} loggedInUser={this.state.loggedInUser}/>: <Redirect to="/" />} />
              <Route path="/edit-user/:id" render={props => this.state.loggedInUser ? <EditUser {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser}/>: <Redirect to="/" />} />

            </>
          ) : (
              <Redirect to="/" />
            )}
        </Switch>
      </>

    )
  }
}


export default App
