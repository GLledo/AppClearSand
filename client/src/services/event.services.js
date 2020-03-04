 
import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/event',
            withCredentials: true
        })
    }

    postEvent = (event,id) => this.service.post(`/new`, {event,id}).then(response => response.data)
    getEventDetails = id => this.service.get(`/getOneEvent/${id}`).then(response => response.data)
}