 
import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/event`,
            withCredentials: true
        })
    }

    postEvent = (event,id) => this.service.post(`/new`, {event,id}).then(response => response.data)
    getEventDetails = id => this.service.get(`/getOneEvent/${id}`).then(response => response.data)
    postEventAddUser = id => this.service.post(`/addUser/${id}`).then(response => response.data)
    getFiveEvents = () => this.service.get('/getFiveEvents').then(response => response.data)
    getOldEvents = () => this.service.get('/getOldEvents').then(response => response.data)
    getEventEdit = (id) => this.service.get(`/edit-event/${id}`).then(response => response.data)
    postEventUpdated = event => this.service.post(`/edit-event`, event).then(response => response.data)
}