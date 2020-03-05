import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

 
const AnyReactComponent = ({ text }) => <div>{text}</div>
 
class SimpleMap extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div style={{ height: '40vh', width: '50%' }}>
      {this.props.latitud ? 
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GMA }}
          defaultCenter={[this.props.latitud,this.props.longitud]}
          defaultZoom={17}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={this.props.latitud}
            lng={this.props.longitud}
            text={this.props.name}
          />
        </GoogleMapReact> 
        :
         null
      }
      </div>
    )
  }
}
 
export default SimpleMap


