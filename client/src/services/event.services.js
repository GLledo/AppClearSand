 
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
}